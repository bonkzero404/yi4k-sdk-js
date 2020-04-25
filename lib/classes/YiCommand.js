"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _YiClientSocket2 = _interopRequireDefault(require("./YiClientSocket"));

var _helper = require("../utils/helper");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var YiCommand = /*#__PURE__*/function (_YiClientSocket) {
  (0, _inherits2["default"])(YiCommand, _YiClientSocket);

  var _super = _createSuper(YiCommand);

  function YiCommand() {
    (0, _classCallCheck2["default"])(this, YiCommand);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(YiCommand, [{
    key: "convertToJson",
    value: function () {
      var _convertToJson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var resp, clone;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.cameraResponse();

              case 2:
                resp = _context.sent;
                clone = JSON.parse(JSON.stringify(resp));
                clone.msg = JSON.parse(clone.msg);
                return _context.abrupt("return", clone);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function convertToJson() {
        return _convertToJson.apply(this, arguments);
      }

      return convertToJson;
    }()
  }, {
    key: "delay",
    value: function () {
      var _delay = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ms) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _helper.wait)(ms);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function delay(_x) {
        return _delay.apply(this, arguments);
      }

      return delay;
    }()
  }, {
    key: "getConfig",
    value: function () {
      var _getConfig = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.conf.getConfig.token = this.token;
                this.send(this.conf.getConfig);
                _context3.next = 4;
                return this.convertToJson();

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getConfig() {
        return _getConfig.apply(this, arguments);
      }

      return getConfig;
    }()
  }, {
    key: "startLiveStream",
    value: function () {
      var _startLiveStream = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.conf.startLiveStream.token = this.token;
                this.send(this.conf.startLiveStream);
                _context4.next = 4;
                return this.convertToJson();

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function startLiveStream() {
        return _startLiveStream.apply(this, arguments);
      }

      return startLiveStream;
    }()
  }, {
    key: "stopLiveStream",
    value: function () {
      var _stopLiveStream = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.conf.stopLiveStream.token = this.token;
                this.send(this.conf.stopLiveStream);
                _context5.next = 4;
                return this.convertToJson();

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function stopLiveStream() {
        return _stopLiveStream.apply(this, arguments);
      }

      return stopLiveStream;
    }()
  }, {
    key: "getBattery",
    value: function () {
      var _getBattery = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.conf.getBattery.token = this.token;
                this.send(this.conf.getBattery);
                _context6.next = 4;
                return this.convertToJson();

              case 4:
                return _context6.abrupt("return", _context6.sent);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getBattery() {
        return _getBattery.apply(this, arguments);
      }

      return getBattery;
    }()
  }, {
    key: "switchPhoto",
    value: function () {
      var _switchPhoto = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.conf["switch"].photo.capture.mode.token = this.token;
                this.send(this.conf["switch"].photo.capture.mode);
                _context7.next = 4;
                return this.convertToJson();

              case 4:
                return _context7.abrupt("return", _context7.sent);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function switchPhoto() {
        return _switchPhoto.apply(this, arguments);
      }

      return switchPhoto;
    }()
  }, {
    key: "takePicture",
    value: function () {
      var _takePicture = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.conf["switch"].photo.capture.takePicture.token = this.token;
                this.send(this.conf["switch"].photo.capture.takePicture);
                _context8.next = 4;
                return this.convertToJson();

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function takePicture() {
        return _takePicture.apply(this, arguments);
      }

      return takePicture;
    }()
  }, {
    key: "switchVideo",
    value: function () {
      var _switchVideo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.conf["switch"].video.record.mode.token = this.token;
                this.send(this.conf["switch"].video.record.mode);
                _context9.next = 4;
                return this.convertToJson();

              case 4:
                return _context9.abrupt("return", _context9.sent);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function switchVideo() {
        return _switchVideo.apply(this, arguments);
      }

      return switchVideo;
    }()
  }, {
    key: "timerRecordVideo",
    value: function () {
      var _timerRecordVideo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.conf["switch"].video.record.videoRecordStart.token = this.token;
                this.send(this.conf["switch"].video.record.videoRecordStart);
                _context10.next = 4;
                return this.convertToJson();

              case 4:
                return _context10.abrupt("return", _context10.sent);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function timerRecordVideo() {
        return _timerRecordVideo.apply(this, arguments);
      }

      return timerRecordVideo;
    }()
  }, {
    key: "startRecordVideo",
    value: function () {
      var _startRecordVideo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.conf["switch"].video.record.videoRecordStart.token = this.token;
                this.send(this.conf["switch"].video.record.videoRecordStart);
                _context11.next = 4;
                return this.convertToJson();

              case 4:
                return _context11.abrupt("return", _context11.sent);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function startRecordVideo() {
        return _startRecordVideo.apply(this, arguments);
      }

      return startRecordVideo;
    }()
  }, {
    key: "stopRecordVideo",
    value: function () {
      var _stopRecordVideo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.conf["switch"].video.record.videoRecordStop.token = this.token;
                this.send(this.conf["switch"].video.record.videoRecordStop);
                _context12.next = 4;
                return this.convertToJson();

              case 4:
                return _context12.abrupt("return", _context12.sent);

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function stopRecordVideo() {
        return _stopRecordVideo.apply(this, arguments);
      }

      return stopRecordVideo;
    }()
  }, {
    key: "downloadFile",
    value: function () {
      var _downloadFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(file, dest) {
        var replaceFilePath, url, res;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                replaceFilePath = file.replace('/tmp/fuse_d', '');
                url = "http://".concat(this.conf.host).concat(replaceFilePath);
                _context13.next = 4;
                return this.download(url, dest);

              case 4:
                res = _context13.sent;
                return _context13.abrupt("return", res);

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function downloadFile(_x2, _x3) {
        return _downloadFile.apply(this, arguments);
      }

      return downloadFile;
    }()
  }, {
    key: "getFileList",
    value: function () {
      var _getFileList = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14() {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this.conf.getFileList.token = this.token;
                this.send(this.conf.getFileList);
                _context14.next = 4;
                return this.convertToJson();

              case 4:
                return _context14.abrupt("return", _context14.sent);

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getFileList() {
        return _getFileList.apply(this, arguments);
      }

      return getFileList;
    }()
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(fName) {
        var fileName;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                fileName = this.conf.getFileInfo.param;
                fileName += fName;
                this.conf.getFileInfo.param = fileName;
                this.conf.getFileInfo.token = this.token;
                this.send(this.conf.getFileInfo);
                _context15.next = 7;
                return this.convertToJson();

              case 7:
                return _context15.abrupt("return", _context15.sent);

              case 8:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getFileInfo(_x4) {
        return _getFileInfo.apply(this, arguments);
      }

      return getFileInfo;
    }()
  }]);
  return YiCommand;
}(_YiClientSocket2["default"]);

exports["default"] = YiCommand;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc2VzL1lpQ29tbWFuZC50cyJdLCJuYW1lcyI6WyJZaUNvbW1hbmQiLCJjYW1lcmFSZXNwb25zZSIsInJlc3AiLCJjbG9uZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm1zZyIsIm1zIiwiY29uZiIsImdldENvbmZpZyIsInRva2VuIiwic2VuZCIsImNvbnZlcnRUb0pzb24iLCJzdGFydExpdmVTdHJlYW0iLCJzdG9wTGl2ZVN0cmVhbSIsImdldEJhdHRlcnkiLCJwaG90byIsImNhcHR1cmUiLCJtb2RlIiwidGFrZVBpY3R1cmUiLCJ2aWRlbyIsInJlY29yZCIsInZpZGVvUmVjb3JkU3RhcnQiLCJ2aWRlb1JlY29yZFN0b3AiLCJmaWxlIiwiZGVzdCIsInJlcGxhY2VGaWxlUGF0aCIsInJlcGxhY2UiLCJ1cmwiLCJob3N0IiwiZG93bmxvYWQiLCJyZXMiLCJnZXRGaWxlTGlzdCIsImZOYW1lIiwiZmlsZU5hbWUiLCJnZXRGaWxlSW5mbyIsInBhcmFtIiwiWWlDbGllbnRTb2NrZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBS0UsS0FBS0MsY0FBTCxFOzs7QUFBYkMsZ0JBQUFBLEk7QUFDQUMsZ0JBQUFBLEssR0FBUUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlSixJQUFmLENBQVgsQztBQUNkQyxnQkFBQUEsS0FBSyxDQUFDSSxHQUFOLEdBQVlILElBQUksQ0FBQ0MsS0FBTCxDQUFXRixLQUFLLENBQUNJLEdBQWpCLENBQVo7aURBRU9KLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUhBR1VLLEU7Ozs7Ozt1QkFDSixrQkFBS0EsRUFBTCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixxQkFBS0MsSUFBTCxDQUFVQyxTQUFWLENBQW9CQyxLQUFwQixHQUE0QixLQUFLQSxLQUFqQztBQUNBLHFCQUFLQyxJQUFMLENBQVUsS0FBS0gsSUFBTCxDQUFVQyxTQUFwQjs7dUJBRWEsS0FBS0csYUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixxQkFBS0osSUFBTCxDQUFVSyxlQUFWLENBQTBCSCxLQUExQixHQUFrQyxLQUFLQSxLQUF2QztBQUNBLHFCQUFLQyxJQUFMLENBQVUsS0FBS0gsSUFBTCxDQUFVSyxlQUFwQjs7dUJBRWEsS0FBS0QsYUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixxQkFBS0osSUFBTCxDQUFVTSxjQUFWLENBQXlCSixLQUF6QixHQUFpQyxLQUFLQSxLQUF0QztBQUNBLHFCQUFLQyxJQUFMLENBQVUsS0FBS0gsSUFBTCxDQUFVTSxjQUFwQjs7dUJBRWEsS0FBS0YsYUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixxQkFBS0osSUFBTCxDQUFVTyxVQUFWLENBQXFCTCxLQUFyQixHQUE2QixLQUFLQSxLQUFsQztBQUNBLHFCQUFLQyxJQUFMLENBQVUsS0FBS0gsSUFBTCxDQUFVTyxVQUFwQjs7dUJBRWEsS0FBS0gsYUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixxQkFBS0osSUFBTCxXQUFpQlEsS0FBakIsQ0FBdUJDLE9BQXZCLENBQStCQyxJQUEvQixDQUFvQ1IsS0FBcEMsR0FBNEMsS0FBS0EsS0FBakQ7QUFDQSxxQkFBS0MsSUFBTCxDQUFVLEtBQUtILElBQUwsV0FBaUJRLEtBQWpCLENBQXVCQyxPQUF2QixDQUErQkMsSUFBekM7O3VCQUVhLEtBQUtOLGFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWIscUJBQUtKLElBQUwsV0FBaUJRLEtBQWpCLENBQXVCQyxPQUF2QixDQUErQkUsV0FBL0IsQ0FBMkNULEtBQTNDLEdBQW1ELEtBQUtBLEtBQXhEO0FBQ0EscUJBQUtDLElBQUwsQ0FBVSxLQUFLSCxJQUFMLFdBQWlCUSxLQUFqQixDQUF1QkMsT0FBdkIsQ0FBK0JFLFdBQXpDOzt1QkFFYSxLQUFLUCxhQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUliLHFCQUFLSixJQUFMLFdBQWlCWSxLQUFqQixDQUF1QkMsTUFBdkIsQ0FBOEJILElBQTlCLENBQW1DUixLQUFuQyxHQUEyQyxLQUFLQSxLQUFoRDtBQUNBLHFCQUFLQyxJQUFMLENBQVUsS0FBS0gsSUFBTCxXQUFpQlksS0FBakIsQ0FBdUJDLE1BQXZCLENBQThCSCxJQUF4Qzs7dUJBRWEsS0FBS04sYUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixxQkFBS0osSUFBTCxXQUFpQlksS0FBakIsQ0FBdUJDLE1BQXZCLENBQThCQyxnQkFBOUIsQ0FBK0NaLEtBQS9DLEdBQXVELEtBQUtBLEtBQTVEO0FBQ0EscUJBQUtDLElBQUwsQ0FBVSxLQUFLSCxJQUFMLFdBQWlCWSxLQUFqQixDQUF1QkMsTUFBdkIsQ0FBOEJDLGdCQUF4Qzs7dUJBRWEsS0FBS1YsYUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixxQkFBS0osSUFBTCxXQUFpQlksS0FBakIsQ0FBdUJDLE1BQXZCLENBQThCQyxnQkFBOUIsQ0FBK0NaLEtBQS9DLEdBQXVELEtBQUtBLEtBQTVEO0FBQ0EscUJBQUtDLElBQUwsQ0FBVSxLQUFLSCxJQUFMLFdBQWlCWSxLQUFqQixDQUF1QkMsTUFBdkIsQ0FBOEJDLGdCQUF4Qzs7dUJBRWEsS0FBS1YsYUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYixxQkFBS0osSUFBTCxXQUFpQlksS0FBakIsQ0FBdUJDLE1BQXZCLENBQThCRSxlQUE5QixDQUE4Q2IsS0FBOUMsR0FBc0QsS0FBS0EsS0FBM0Q7QUFDQSxxQkFBS0MsSUFBTCxDQUFVLEtBQUtILElBQUwsV0FBaUJZLEtBQWpCLENBQXVCQyxNQUF2QixDQUE4QkUsZUFBeEM7O3VCQUVhLEtBQUtYLGFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsySEFHV1ksSSxFQUFjQyxJOzs7Ozs7QUFDaENDLGdCQUFBQSxlLEdBQWtCRixJQUFJLENBQUNHLE9BQUwsQ0FBYSxhQUFiLEVBQTRCLEVBQTVCLEM7QUFDbEJDLGdCQUFBQSxHLG9CQUFnQixLQUFLcEIsSUFBTCxDQUFVcUIsSSxTQUFPSCxlOzt1QkFDckIsS0FBS0ksUUFBTCxDQUFjRixHQUFkLEVBQW1CSCxJQUFuQixDOzs7QUFBWk0sZ0JBQUFBLEc7bURBRUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlQLHFCQUFLdkIsSUFBTCxDQUFVd0IsV0FBVixDQUFzQnRCLEtBQXRCLEdBQThCLEtBQUtBLEtBQW5DO0FBQ0EscUJBQUtDLElBQUwsQ0FBVSxLQUFLSCxJQUFMLENBQVV3QixXQUFwQjs7dUJBRWEsS0FBS3BCLGFBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswSEFHVXFCLEs7Ozs7OztBQUNuQkMsZ0JBQUFBLFEsR0FBVyxLQUFLMUIsSUFBTCxDQUFVMkIsV0FBVixDQUFzQkMsSztBQUNyQ0YsZ0JBQUFBLFFBQVEsSUFBSUQsS0FBWjtBQUVBLHFCQUFLekIsSUFBTCxDQUFVMkIsV0FBVixDQUFzQkMsS0FBdEIsR0FBOEJGLFFBQTlCO0FBQ0EscUJBQUsxQixJQUFMLENBQVUyQixXQUFWLENBQXNCekIsS0FBdEIsR0FBOEIsS0FBS0EsS0FBbkM7QUFDQSxxQkFBS0MsSUFBTCxDQUFVLEtBQUtILElBQUwsQ0FBVTJCLFdBQXBCOzt1QkFFYSxLQUFLdkIsYUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE3R3NCeUIsMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWWlDbGllbnRTb2NrZXQgZnJvbSAnLi9ZaUNsaWVudFNvY2tldCc7XG5pbXBvcnQgeyB3YWl0IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWlDb21tYW5kIGV4dGVuZHMgWWlDbGllbnRTb2NrZXQge1xuICBwcml2YXRlIGFzeW5jIGNvbnZlcnRUb0pzb24oKTogUHJvbWlzZTx7XG4gICAgdDogc3RyaW5nO1xuICAgIG1zZzogb2JqZWN0O1xuICB9PiB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuY2FtZXJhUmVzcG9uc2UoKTtcbiAgICBjb25zdCBjbG9uZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzcCkpO1xuICAgIGNsb25lLm1zZyA9IEpTT04ucGFyc2UoY2xvbmUubXNnKTtcblxuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx0eXBlb2Ygc2V0VGltZW91dD4ge1xuICAgIHJldHVybiBhd2FpdCB3YWl0KG1zKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRDb25maWcoKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICB0aGlzLmNvbmYuZ2V0Q29uZmlnLnRva2VuID0gdGhpcy50b2tlbjtcbiAgICB0aGlzLnNlbmQodGhpcy5jb25mLmdldENvbmZpZyk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb252ZXJ0VG9Kc29uKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc3RhcnRMaXZlU3RyZWFtKCk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgdGhpcy5jb25mLnN0YXJ0TGl2ZVN0cmVhbS50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgdGhpcy5zZW5kKHRoaXMuY29uZi5zdGFydExpdmVTdHJlYW0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udmVydFRvSnNvbigpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHN0b3BMaXZlU3RyZWFtKCk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgdGhpcy5jb25mLnN0b3BMaXZlU3RyZWFtLnRva2VuID0gdGhpcy50b2tlbjtcbiAgICB0aGlzLnNlbmQodGhpcy5jb25mLnN0b3BMaXZlU3RyZWFtKTtcblxuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnZlcnRUb0pzb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRCYXR0ZXJ5KCk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgdGhpcy5jb25mLmdldEJhdHRlcnkudG9rZW4gPSB0aGlzLnRva2VuO1xuICAgIHRoaXMuc2VuZCh0aGlzLmNvbmYuZ2V0QmF0dGVyeSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb252ZXJ0VG9Kc29uKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc3dpdGNoUGhvdG8oKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICB0aGlzLmNvbmYuc3dpdGNoLnBob3RvLmNhcHR1cmUubW9kZS50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgdGhpcy5zZW5kKHRoaXMuY29uZi5zd2l0Y2gucGhvdG8uY2FwdHVyZS5tb2RlKTtcblxuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnZlcnRUb0pzb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB0YWtlUGljdHVyZSgpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHRoaXMuY29uZi5zd2l0Y2gucGhvdG8uY2FwdHVyZS50YWtlUGljdHVyZS50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgdGhpcy5zZW5kKHRoaXMuY29uZi5zd2l0Y2gucGhvdG8uY2FwdHVyZS50YWtlUGljdHVyZSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb252ZXJ0VG9Kc29uKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc3dpdGNoVmlkZW8oKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICB0aGlzLmNvbmYuc3dpdGNoLnZpZGVvLnJlY29yZC5tb2RlLnRva2VuID0gdGhpcy50b2tlbjtcbiAgICB0aGlzLnNlbmQodGhpcy5jb25mLnN3aXRjaC52aWRlby5yZWNvcmQubW9kZSk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb252ZXJ0VG9Kc29uKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdGltZXJSZWNvcmRWaWRlbygpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHRoaXMuY29uZi5zd2l0Y2gudmlkZW8ucmVjb3JkLnZpZGVvUmVjb3JkU3RhcnQudG9rZW4gPSB0aGlzLnRva2VuO1xuICAgIHRoaXMuc2VuZCh0aGlzLmNvbmYuc3dpdGNoLnZpZGVvLnJlY29yZC52aWRlb1JlY29yZFN0YXJ0KTtcblxuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnZlcnRUb0pzb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzdGFydFJlY29yZFZpZGVvKCk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgdGhpcy5jb25mLnN3aXRjaC52aWRlby5yZWNvcmQudmlkZW9SZWNvcmRTdGFydC50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgdGhpcy5zZW5kKHRoaXMuY29uZi5zd2l0Y2gudmlkZW8ucmVjb3JkLnZpZGVvUmVjb3JkU3RhcnQpO1xuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udmVydFRvSnNvbigpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHN0b3BSZWNvcmRWaWRlbygpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHRoaXMuY29uZi5zd2l0Y2gudmlkZW8ucmVjb3JkLnZpZGVvUmVjb3JkU3RvcC50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgdGhpcy5zZW5kKHRoaXMuY29uZi5zd2l0Y2gudmlkZW8ucmVjb3JkLnZpZGVvUmVjb3JkU3RvcCk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb252ZXJ0VG9Kc29uKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZG93bmxvYWRGaWxlKGZpbGU6IHN0cmluZywgZGVzdDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCByZXBsYWNlRmlsZVBhdGggPSBmaWxlLnJlcGxhY2UoJy90bXAvZnVzZV9kJywgJycpO1xuICAgIGNvbnN0IHVybCA9IGBodHRwOi8vJHt0aGlzLmNvbmYuaG9zdH0ke3JlcGxhY2VGaWxlUGF0aH1gO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZG93bmxvYWQodXJsLCBkZXN0KTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0RmlsZUxpc3QoKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICB0aGlzLmNvbmYuZ2V0RmlsZUxpc3QudG9rZW4gPSB0aGlzLnRva2VuO1xuICAgIHRoaXMuc2VuZCh0aGlzLmNvbmYuZ2V0RmlsZUxpc3QpO1xuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udmVydFRvSnNvbigpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEZpbGVJbmZvKGZOYW1lOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGxldCBmaWxlTmFtZSA9IHRoaXMuY29uZi5nZXRGaWxlSW5mby5wYXJhbTtcbiAgICBmaWxlTmFtZSArPSBmTmFtZTtcblxuICAgIHRoaXMuY29uZi5nZXRGaWxlSW5mby5wYXJhbSA9IGZpbGVOYW1lO1xuICAgIHRoaXMuY29uZi5nZXRGaWxlSW5mby50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgdGhpcy5zZW5kKHRoaXMuY29uZi5nZXRGaWxlSW5mbyk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jb252ZXJ0VG9Kc29uKCk7XG4gIH1cbn1cbiJdfQ==