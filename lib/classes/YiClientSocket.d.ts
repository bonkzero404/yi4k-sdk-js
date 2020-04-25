/// <reference types="node" />
import net from 'net';
import events from 'events';
export default class YiClientSocket {
    protected socketClient: net.Socket;
    protected ev: events.EventEmitter;
    protected conf: {
        host: string;
        port: number;
        requestToken: {
            msg_id: number;
            param: number;
            heartbeat: number;
            token: number;
        };
        startLiveStream: {
            msg_id: number;
            param: string;
            token: number;
        };
        stopLiveStream: {
            msg_id: number;
            token: number;
        };
        getBattery: {
            msg_id: number;
            token: number;
        };
        getConfig: {
            msg_id: number;
            token: number;
        };
        connectPersist: {
            msg_id: number;
            token: number;
        };
        getFileList: {
            msg_id: number;
            param: string;
            token: number;
        };
        getFileInfo: {
            msg_id: number;
            param: string;
            token: number;
        };
        disconnect: {
            msg_id: number;
            token: number;
        };
        switch: {
            photo: {
                capture: {
                    mode: {
                        msg_id: number;
                        param: string;
                        token: number;
                    };
                    takePicture: {
                        msg_id: number;
                        param: string;
                        token: number;
                    };
                };
            };
            video: {
                record: {
                    mode: {
                        msg_id: number;
                        param: string; /**
                         * Make persistent connection
                         * send request every 5 seconds
                         */
                        type: string;
                        token: number;
                    };
                    videoRecordTimer: {
                        msg_id: number;
                        token: number;
                    };
                    videoRecordStart: {
                        msg_id: number;
                        token: number;
                    };
                    videoRecordStop: {
                        msg_id: number;
                        token: number;
                    };
                };
            };
        };
    };
    protected token: number;
    protected isConnected: boolean;
    connect(): Promise<void>;
    register(): Promise<object>;
    disconnect(): Promise<void>;
    download(url: string, dest: string): Promise<string>;
    private getAccessToken;
    protected cameraResponse(): Promise<{
        t: string;
        msg: string;
    }>;
    protected send(message: object): void;
}
