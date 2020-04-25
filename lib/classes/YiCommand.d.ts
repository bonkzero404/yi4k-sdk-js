import YiClientSocket from './YiClientSocket';
export default class YiCommand extends YiClientSocket {
    private convertToJson;
    delay(ms: number): Promise<typeof setTimeout>;
    getConfig(): Promise<object>;
    startLiveStream(): Promise<object>;
    stopLiveStream(): Promise<object>;
    getBattery(): Promise<object>;
    switchPhoto(): Promise<object>;
    takePicture(): Promise<object>;
    switchVideo(): Promise<object>;
    timerRecordVideo(): Promise<object>;
    startRecordVideo(): Promise<object>;
    stopRecordVideo(): Promise<object>;
    downloadFile(file: string, dest: string): Promise<string>;
    getFileList(): Promise<object>;
    getFileInfo(fName: string): Promise<object>;
}
