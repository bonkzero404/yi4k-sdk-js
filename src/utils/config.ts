/* eslint-disable @typescript-eslint/camelcase */
export default {
  host: '192.168.42.1',
  port: 7878,
  requestToken: {
    msg_id: 257,
    param: 0,
    heartbeat: 1,
    token: 0,
  },
  startLiveStream: {
    msg_id: 259,
    param: 'none_force',
    token: 0,
  },
  stopLiveStream: {
    msg_id: 260,
    token: 0,
  },
  getBattery: {
    msg_id: 13,
    token: 0,
  },
  getConfig: {
    msg_id: 3,
    token: 0,
  },
  connectPersist: {
    msg_id: 16777244,
    token: 0,
  },
  getFileList: {
    msg_id: 1282,
    param: '/tmp/fuse_d/DCIM/100MEDIA/',
    token: 0,
  },
  getFileInfo: {
    msg_id: 1026,
    param: '/tmp/fuse_d/DCIM/100MEDIA/',
    token: 0,
  },
  disconnect: {
    msg_id: 258,
    token: 0,
  },
  switch: {
    photo: {
      capture: {
        mode: {
          msg_id: 16777228,
          param: 'precise quality;off',
          token: 0,
        },
        takePicture: {
          msg_id: 16777220,
          param: 'precise quality;off',
          token: 0,
        },
      },
    },
    video: {
      record: {
        mode: {
          msg_id: 2,
          param: 'record',
          type: 'rec_mode',
          token: 0,
        },
        videoRecordTimer: {
          msg_id: 515,
          token: 0,
        },
        videoRecordStart: {
          msg_id: 513,
          token: 0,
        },
        videoRecordStop: {
          msg_id: 514,
          token: 0,
        },
      },
    },
  },
};
