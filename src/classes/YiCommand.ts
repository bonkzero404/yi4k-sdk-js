import YiClientSocket from './YiClientSocket';
import { wait } from '../utils/helper';

export default class YiCommand extends YiClientSocket {
  private async convertToJson(): Promise<{
    t: string;
    msg: object;
  }> {
    const resp = await this.cameraResponse();
    const clone = JSON.parse(JSON.stringify(resp));
    clone.msg = JSON.parse(clone.msg);

    return clone;
  }

  public async delay(ms: number): Promise<typeof setTimeout> {
    return await wait(ms);
  }

  public async getConfig(): Promise<object> {
    this.conf.getConfig.token = this.token;
    this.send(this.conf.getConfig);

    return await this.convertToJson();
  }

  public async startLiveStream(): Promise<object> {
    this.conf.startLiveStream.token = this.token;
    this.send(this.conf.startLiveStream);

    return await this.convertToJson();
  }

  public async stopLiveStream(): Promise<object> {
    this.conf.stopLiveStream.token = this.token;
    this.send(this.conf.stopLiveStream);

    return await this.convertToJson();
  }

  public async getBattery(): Promise<object> {
    this.conf.getBattery.token = this.token;
    this.send(this.conf.getBattery);

    return await this.convertToJson();
  }

  public async switchPhoto(): Promise<object> {
    this.conf.switch.photo.capture.mode.token = this.token;
    this.send(this.conf.switch.photo.capture.mode);

    return await this.convertToJson();
  }

  public async takePicture(): Promise<object> {
    this.conf.switch.photo.capture.takePicture.token = this.token;
    this.send(this.conf.switch.photo.capture.takePicture);

    return await this.convertToJson();
  }

  public async switchVideo(): Promise<object> {
    this.conf.switch.video.record.mode.token = this.token;
    this.send(this.conf.switch.video.record.mode);

    return await this.convertToJson();
  }

  public async timerRecordVideo(): Promise<object> {
    this.conf.switch.video.record.videoRecordStart.token = this.token;
    this.send(this.conf.switch.video.record.videoRecordStart);

    return await this.convertToJson();
  }

  public async startRecordVideo(): Promise<object> {
    this.conf.switch.video.record.videoRecordStart.token = this.token;
    this.send(this.conf.switch.video.record.videoRecordStart);

    return await this.convertToJson();
  }

  public async stopRecordVideo(): Promise<object> {
    this.conf.switch.video.record.videoRecordStop.token = this.token;
    this.send(this.conf.switch.video.record.videoRecordStop);

    return await this.convertToJson();
  }

  public async downloadFile(file: string, dest: string): Promise<string> {
    const replaceFilePath = file.replace('/tmp/fuse_d', '');
    const url = `http://${this.conf.host}${replaceFilePath}`;
    const res = await this.download(url, dest);

    return res;
  }

  public async getFileList(): Promise<object> {
    this.conf.getFileList.token = this.token;
    this.send(this.conf.getFileList);

    return await this.convertToJson();
  }

  public async getFileInfo(fName: string): Promise<object> {
    let fileName = this.conf.getFileInfo.param;
    fileName += fName;

    this.conf.getFileInfo.param = fileName;
    this.conf.getFileInfo.token = this.token;
    this.send(this.conf.getFileInfo);

    return await this.convertToJson();
  }
}
