import net from 'net';
import events from 'events';
import axios from 'axios';
import fs from 'fs';
import conf from '../utils/config';
import listener from '../utils/listener';
import { wait } from '../utils/helper';

export default class YiClientSocket {
  protected socketClient = new net.Socket();
  protected ev = new events.EventEmitter();
  protected conf = conf;
  protected token = 0;
  protected isConnected = false;

  public async connect(): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
      this.socketClient.connect(conf.port, conf.host, () => {
        this.isConnected = true;
        resolve(this.isConnected);
      });

      this.socketClient.on('close', (err) => {
        this.isConnected = false;
        this.socketClient.destroy();
        if (err) reject(err);
      });

      this.socketClient.once('error', (err) => {
        reject(err);
      });

      this.socketClient.on('timeout', () => {
        this.socketClient.end();
      });

      this.socketClient.on('data', async (data: Buffer) => {
        const dt = data.toString('utf8');

        /**
         * Make persistent connection
         * send request every 5 seconds
         */
        if (
          dt.indexOf('{"rval":0,"msg_id":16777244}') !== -1 &&
          dt.indexOf('{"rval":0,"msg_id":258}') === -1
        ) {
          conf.connectPersist.token = this.token;
          await wait(5000);
          this.send(conf.connectPersist);
        }

        listener(this.ev, dt);
      });
    });
  }

  public async register(): Promise<object> {
    return new Promise((resolve: Function) => {
      this.socketClient.on('connect', async () => {
        if (this.isConnected) {
          const res = await this.getAccessToken();
          resolve(res);
        }
      });
    });
  }

  public async disconnect(): Promise<void> {
    conf.disconnect.token = this.token;
    this.send(conf.disconnect);
    await wait(3000);

    return new Promise((resolve: Function) => {
      this.socketClient.end();

      this.socketClient.on('end', () => {
        this.ev.removeAllListeners();
        resolve();
      });
    });
  }

  public async download(url: string, dest: string): Promise<string> {
    const writer = fs.createWriteStream(dest);

    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve: Function, reject: Function) => {
      writer.on('finish', () => {
        resolve(dest);
      });
      writer.on('error', (err) => {
        reject(err);
      });
    });
  }

  private async getAccessToken(): Promise<object> {
    this.send(conf.requestToken);

    const response = await this.cameraResponse();
    const data = response;
    const dataToJson = JSON.parse(data.msg);

    this.token = dataToJson.param;
    conf.connectPersist.token = this.token;
    this.send(conf.connectPersist);

    return dataToJson;
  }

  protected async cameraResponse(): Promise<{
    t: string;
    msg: string;
  }> {
    return new Promise((resolve: Function) => {
      this.ev.once('cb', (data: object) => {
        resolve(data);
      });
    });
  }

  protected send(message: object): void {
    this.socketClient.write(JSON.stringify(message));
  }
}
