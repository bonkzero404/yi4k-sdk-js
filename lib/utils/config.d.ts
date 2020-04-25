declare const _default: {
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
                    param: string;
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
export default _default;
