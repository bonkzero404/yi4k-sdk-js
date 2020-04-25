import { wait } from './helper';
import { EventEmitter } from 'events';

export default async function (
  emitter: EventEmitter,
  dt: string
): Promise<void> {
  /**
   * Get token response
   */
  if (dt.indexOf('"rval":0,"msg_id":257') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'get-token',
      msg: dt,
    });
  }

  /**
   * Get live stream response (RTSP)
   */
  if (dt.indexOf('"rval":0,"msg_id":259') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'start-live-stream',
      msg: dt,
    });
  }

  /**
   * Get stop live stream response
   */
  if (dt.indexOf('"rval":0,"msg_id":260') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'stop-live-stream',
      msg: dt,
    });
  }

  /**
   * Get switch photo response
   */
  if (dt.indexOf('"rval":0,"msg_id":16777228') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'switch-photo',
      msg: dt,
    });
  }

  /**
   * Get battery info response
   */
  if (dt.indexOf('"rval":0,"msg_id":13,"type":"battery"') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'get-battery',
      msg: dt,
    });
  }

  /**
   * Get switch video mode response
   */
  if (
    dt.indexOf(
      '"rval":0,"msg_id":2,"param":"record","type":"rec_mode","related":1'
    ) !== -1
  ) {
    await wait(500);
    emitter.emit('cb', {
      type: 'switch-video',
      msg: dt,
    });
  }

  /**
   * Get take picture response
   */
  if (dt.indexOf('"msg_id":7,"type":"photo_taken"') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'take-picture',
      msg: dt,
    });
  }

  /**
   * Get start video record response
   */
  if (dt.indexOf('"msg_id":7,"type":"start_video_record"') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'start-record',
      msg: dt,
    });
  }

  /**
   * Get video end record
   */
  if (dt.indexOf('"msg_id":7,"type":"video_record_complete"') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'stop-record',
      msg: dt,
    });
  }

  /**
   * Get timer record
   */
  if (dt.indexOf('"rval":0,"msg_id":515') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'timer-record',
      msg: dt,
    });
  }

  /**
   * Get file lists
   */
  if (dt.indexOf('"rval":0,"msg_id":1282') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'get-file-list',
      msg: dt,
    });
  }

  /**
   * Get file info
   */
  if (dt.indexOf('"rval":0,"msg_id":1026') !== -1) {
    await wait(500);
    emitter.emit('cb', {
      type: 'get-file-info',
      msg: dt,
    });
  }
}
