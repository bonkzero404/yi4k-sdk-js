"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _helper = require("./helper");

function _default(_x, _x2) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(emitter, dt) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(dt.indexOf('"rval":0,"msg_id":257') !== -1)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return (0, _helper.wait)(500);

          case 3:
            emitter.emit('cb', {
              type: 'get-token',
              msg: dt
            });

          case 4:
            if (!(dt.indexOf('"rval":0,"msg_id":259') !== -1)) {
              _context.next = 8;
              break;
            }

            _context.next = 7;
            return (0, _helper.wait)(500);

          case 7:
            emitter.emit('cb', {
              type: 'start-live-stream',
              msg: dt
            });

          case 8:
            if (!(dt.indexOf('"rval":0,"msg_id":260') !== -1)) {
              _context.next = 12;
              break;
            }

            _context.next = 11;
            return (0, _helper.wait)(500);

          case 11:
            emitter.emit('cb', {
              type: 'stop-live-stream',
              msg: dt
            });

          case 12:
            if (!(dt.indexOf('"rval":0,"msg_id":16777228') !== -1)) {
              _context.next = 16;
              break;
            }

            _context.next = 15;
            return (0, _helper.wait)(500);

          case 15:
            emitter.emit('cb', {
              type: 'switch-photo',
              msg: dt
            });

          case 16:
            if (!(dt.indexOf('"rval":0,"msg_id":13,"type":"battery"') !== -1)) {
              _context.next = 20;
              break;
            }

            _context.next = 19;
            return (0, _helper.wait)(500);

          case 19:
            emitter.emit('cb', {
              type: 'get-battery',
              msg: dt
            });

          case 20:
            if (!(dt.indexOf('"rval":0,"msg_id":2,"param":"record","type":"rec_mode","related":1') !== -1)) {
              _context.next = 24;
              break;
            }

            _context.next = 23;
            return (0, _helper.wait)(500);

          case 23:
            emitter.emit('cb', {
              type: 'switch-video',
              msg: dt
            });

          case 24:
            if (!(dt.indexOf('"msg_id":7,"type":"photo_taken"') !== -1)) {
              _context.next = 28;
              break;
            }

            _context.next = 27;
            return (0, _helper.wait)(500);

          case 27:
            emitter.emit('cb', {
              type: 'take-picture',
              msg: dt
            });

          case 28:
            if (!(dt.indexOf('"msg_id":7,"type":"start_video_record"') !== -1)) {
              _context.next = 32;
              break;
            }

            _context.next = 31;
            return (0, _helper.wait)(500);

          case 31:
            emitter.emit('cb', {
              type: 'start-record',
              msg: dt
            });

          case 32:
            if (!(dt.indexOf('"msg_id":7,"type":"video_record_complete"') !== -1)) {
              _context.next = 36;
              break;
            }

            _context.next = 35;
            return (0, _helper.wait)(500);

          case 35:
            emitter.emit('cb', {
              type: 'stop-record',
              msg: dt
            });

          case 36:
            if (!(dt.indexOf('"rval":0,"msg_id":515') !== -1)) {
              _context.next = 40;
              break;
            }

            _context.next = 39;
            return (0, _helper.wait)(500);

          case 39:
            emitter.emit('cb', {
              type: 'timer-record',
              msg: dt
            });

          case 40:
            if (!(dt.indexOf('"rval":0,"msg_id":1282') !== -1)) {
              _context.next = 44;
              break;
            }

            _context.next = 43;
            return (0, _helper.wait)(500);

          case 43:
            emitter.emit('cb', {
              type: 'get-file-list',
              msg: dt
            });

          case 44:
            if (!(dt.indexOf('"rval":0,"msg_id":1026') !== -1)) {
              _context.next = 48;
              break;
            }

            _context.next = 47;
            return (0, _helper.wait)(500);

          case 47:
            emitter.emit('cb', {
              type: 'get-file-info',
              msg: dt
            });

          case 48:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9saXN0ZW5lci50cyJdLCJuYW1lcyI6WyJlbWl0dGVyIiwiZHQiLCJpbmRleE9mIiwiZW1pdCIsInR5cGUiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozt1RkFHZSxpQkFDYkEsT0FEYSxFQUViQyxFQUZhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFPVEEsRUFBRSxDQUFDQyxPQUFILENBQVcsdUJBQVgsTUFBd0MsQ0FBQyxDQVBoQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQVFMLGtCQUFLLEdBQUwsQ0FSSzs7QUFBQTtBQVNYRixZQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYSxJQUFiLEVBQW1CO0FBQ2pCQyxjQUFBQSxJQUFJLEVBQUUsV0FEVztBQUVqQkMsY0FBQUEsR0FBRyxFQUFFSjtBQUZZLGFBQW5COztBQVRXO0FBQUEsa0JBa0JUQSxFQUFFLENBQUNDLE9BQUgsQ0FBVyx1QkFBWCxNQUF3QyxDQUFDLENBbEJoQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQW1CTCxrQkFBSyxHQUFMLENBbkJLOztBQUFBO0FBb0JYRixZQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYSxJQUFiLEVBQW1CO0FBQ2pCQyxjQUFBQSxJQUFJLEVBQUUsbUJBRFc7QUFFakJDLGNBQUFBLEdBQUcsRUFBRUo7QUFGWSxhQUFuQjs7QUFwQlc7QUFBQSxrQkE2QlRBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXLHVCQUFYLE1BQXdDLENBQUMsQ0E3QmhDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBOEJMLGtCQUFLLEdBQUwsQ0E5Qks7O0FBQUE7QUErQlhGLFlBQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhLElBQWIsRUFBbUI7QUFDakJDLGNBQUFBLElBQUksRUFBRSxrQkFEVztBQUVqQkMsY0FBQUEsR0FBRyxFQUFFSjtBQUZZLGFBQW5COztBQS9CVztBQUFBLGtCQXdDVEEsRUFBRSxDQUFD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OztBQTNIVztBQUFBLGtCQW9JVEEsRUFBRSxDQUFDQyxPQUFILENBQVcsd0JBQVgsTUFBeUMsQ0FBQyxDQXBJakM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFxSUwsa0JBQUssR0FBTCxDQXJJSzs7QUFBQTtBQXNJWEYsWUFBQUEsT0FBTyxDQUFDRyxJQUFSLENBQWEsSUFBYixFQUFtQjtBQUNqQkMsY0FBQUEsSUFBSSxFQUFFLGVBRFc7QUFFakJDLGNBQUFBLEdBQUcsRUFBRUo7QUFGWSxhQUFuQjs7QUF0SVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdhaXQgfSBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAoXG4gIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcixcbiAgZHQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8qKlxuICAgKiBHZXQgdG9rZW4gcmVzcG9uc2VcbiAgICovXG4gIGlmIChkdC5pbmRleE9mKCdcInJ2YWxcIjowLFwibXNnX2lkXCI6MjU3JykgIT09IC0xKSB7XG4gICAgYXdhaXQgd2FpdCg1MDApO1xuICAgIGVtaXR0ZXIuZW1pdCgnY2InLCB7XG4gICAgICB0eXBlOiAnZ2V0LXRva2VuJyxcbiAgICAgIG1zZzogZHQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxpdmUgc3RyZWFtIHJlc3BvbnNlIChSVFNQKVxuICAgKi9cbiAgaWYgKGR0LmluZGV4T2YoJ1wicnZhbFwiOjAsXCJtc2dfaWRcIjoyNTknKSAhPT0gLTEpIHtcbiAgICBhd2FpdCB3YWl0KDUwMCk7XG4gICAgZW1pdHRlci5lbWl0KCdjYicsIHtcbiAgICAgIHR5cGU6ICdzdGFydC1saXZlLXN0cmVhbScsXG4gICAgICBtc2c6IGR0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdG9wIGxpdmUgc3RyZWFtIHJlc3BvbnNlXG4gICAqL1xuICBpZiAoZHQuaW5kZXhPZignXCJydmFsXCI6MCxcIm1zZ19pZFwiOjI2MCcpICE9PSAtMSkge1xuICAgIGF3YWl0IHdhaXQoNTAwKTtcbiAgICBlbWl0dGVyLmVtaXQoJ2NiJywge1xuICAgICAgdHlwZTogJ3N0b3AtbGl2ZS1zdHJlYW0nLFxuICAgICAgbXNnOiBkdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3dpdGNoIHBob3RvIHJlc3BvbnNlXG4gICAqL1xuICBpZiAoZHQuaW5kZXhPZignXCJydmFsXCI6MCxcIm1zZ19pZFwiOjE2Nzc3MjI4JykgIT09IC0xKSB7XG4gICAgYXdhaXQgd2FpdCg1MDApO1xuICAgIGVtaXR0ZXIuZW1pdCgnY2InLCB7XG4gICAgICB0eXBlOiAnc3dpdGNoLXBob3RvJyxcbiAgICAgIG1zZzogZHQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJhdHRlcnkgaW5mbyByZXNwb25zZVxuICAgKi9cbiAgaWYgKGR0LmluZGV4T2YoJ1wicnZhbFwiOjAsXCJtc2dfaWRcIjoxMyxcInR5cGVcIjpcImJhdHRlcnlcIicpICE9PSAtMSkge1xuICAgIGF3YWl0IHdhaXQoNTAwKTtcbiAgICBlbWl0dGVyLmVtaXQoJ2NiJywge1xuICAgICAgdHlwZTogJ2dldC1iYXR0ZXJ5JyxcbiAgICAgIG1zZzogZHQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN3aXRjaCB2aWRlbyBtb2RlIHJlc3BvbnNlXG4gICAqL1xuICBpZiAoXG4gICAgZHQuaW5kZXhPZihcbiAgICAgICdcInJ2YWxcIjowLFwibXNnX2lkXCI6MixcInBhcmFtXCI6XCJyZWNvcmRcIixcInR5cGVcIjpcInJlY19tb2RlXCIsXCJyZWxhdGVkXCI6MSdcbiAgICApICE9PSAtMVxuICApIHtcbiAgICBhd2FpdCB3YWl0KDUwMCk7XG4gICAgZW1pdHRlci5lbWl0KCdjYicsIHtcbiAgICAgIHR5cGU6ICdzd2l0Y2gtdmlkZW8nLFxuICAgICAgbXNnOiBkdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGFrZSBwaWN0dXJlIHJlc3BvbnNlXG4gICAqL1xuICBpZiAoZHQuaW5kZXhPZignXCJtc2dfaWRcIjo3LFwidHlwZVwiOlwicGhvdG9fdGFrZW5cIicpICE9PSAtMSkge1xuICAgIGF3YWl0IHdhaXQoNTAwKTtcbiAgICBlbWl0dGVyLmVtaXQoJ2NiJywge1xuICAgICAgdHlwZTogJ3Rha2UtcGljdHVyZScsXG4gICAgICBtc2c6IGR0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzdGFydCB2aWRlbyByZWNvcmQgcmVzcG9uc2VcbiAgICovXG4gIGlmIChkdC5pbmRleE9mKCdcIm1zZ19pZFwiOjcsXCJ0eXBlXCI6XCJzdGFydF92aWRlb19yZWNvcmRcIicpICE9PSAtMSkge1xuICAgIGF3YWl0IHdhaXQoNTAwKTtcbiAgICBlbWl0dGVyLmVtaXQoJ2NiJywge1xuICAgICAgdHlwZTogJ3N0YXJ0LXJlY29yZCcsXG4gICAgICBtc2c6IGR0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB2aWRlbyBlbmQgcmVjb3JkXG4gICAqL1xuICBpZiAoZHQuaW5kZXhPZignXCJtc2dfaWRcIjo3LFwidHlwZVwiOlwidmlkZW9fcmVjb3JkX2NvbXBsZXRlXCInKSAhPT0gLTEpIHtcbiAgICBhd2FpdCB3YWl0KDUwMCk7XG4gICAgZW1pdHRlci5lbWl0KCdjYicsIHtcbiAgICAgIHR5cGU6ICdzdG9wLXJlY29yZCcsXG4gICAgICBtc2c6IGR0LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aW1lciByZWNvcmRcbiAgICovXG4gIGlmIChkdC5pbmRleE9mKCdcInJ2YWxcIjowLFwibXNnX2lkXCI6NTE1JykgIT09IC0xKSB7XG4gICAgYXdhaXQgd2FpdCg1MDApO1xuICAgIGVtaXR0ZXIuZW1pdCgnY2InLCB7XG4gICAgICB0eXBlOiAndGltZXItcmVjb3JkJyxcbiAgICAgIG1zZzogZHQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZpbGUgbGlzdHNcbiAgICovXG4gIGlmIChkdC5pbmRleE9mKCdcInJ2YWxcIjowLFwibXNnX2lkXCI6MTI4MicpICE9PSAtMSkge1xuICAgIGF3YWl0IHdhaXQoNTAwKTtcbiAgICBlbWl0dGVyLmVtaXQoJ2NiJywge1xuICAgICAgdHlwZTogJ2dldC1maWxlLWxpc3QnLFxuICAgICAgbXNnOiBkdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZmlsZSBpbmZvXG4gICAqL1xuICBpZiAoZHQuaW5kZXhPZignXCJydmFsXCI6MCxcIm1zZ19pZFwiOjEwMjYnKSAhPT0gLTEpIHtcbiAgICBhd2FpdCB3YWl0KDUwMCk7XG4gICAgZW1pdHRlci5lbWl0KCdjYicsIHtcbiAgICAgIHR5cGU6ICdnZXQtZmlsZS1pbmZvJyxcbiAgICAgIG1zZzogZHQsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==