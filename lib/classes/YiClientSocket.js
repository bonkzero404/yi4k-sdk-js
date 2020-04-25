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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _net = _interopRequireDefault(require("net"));

var _events = _interopRequireDefault(require("events"));

var _axios = _interopRequireDefault(require("axios"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("../utils/config"));

var _listener = _interopRequireDefault(require("../utils/listener"));

var _helper = require("../utils/helper");

var YiClientSocket = /*#__PURE__*/function () {
  function YiClientSocket() {
    (0, _classCallCheck2["default"])(this, YiClientSocket);
    (0, _defineProperty2["default"])(this, "socketClient", new _net["default"].Socket());
    (0, _defineProperty2["default"])(this, "ev", new _events["default"].EventEmitter());
    (0, _defineProperty2["default"])(this, "conf", _config["default"]);
    (0, _defineProperty2["default"])(this, "token", 0);
    (0, _defineProperty2["default"])(this, "isConnected", false);
  }

  (0, _createClass2["default"])(YiClientSocket, [{
    key: "connect",
    value: function () {
      var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this = this;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this.socketClient.connect(_config["default"].port, _config["default"].host, function () {
                    _this.isConnected = true;
                    resolve(_this.isConnected);
                  });

                  _this.socketClient.on('close', function (err) {
                    _this.isConnected = false;

                    _this.socketClient.destroy();

                    if (err) reject(err);
                  });

                  _this.socketClient.once('error', function (err) {
                    reject(err);
                  });

                  _this.socketClient.on('timeout', function () {
                    _this.socketClient.end();
                  });

                  _this.socketClient.on('data', /*#__PURE__*/function () {
                    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
                      var dt;
                      return _regenerator["default"].wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              dt = data.toString('utf8');
                              /**
                               * Make persistent connection
                               * send request every 5 seconds
                               */

                              if (!(dt.indexOf('{"rval":0,"msg_id":16777244}') !== -1 && dt.indexOf('{"rval":0,"msg_id":258}') === -1)) {
                                _context.next = 6;
                                break;
                              }

                              _config["default"].connectPersist.token = _this.token;
                              _context.next = 5;
                              return (0, _helper.wait)(5000);

                            case 5:
                              _this.send(_config["default"].connectPersist);

                            case 6:
                              (0, _listener["default"])(_this.ev, dt);

                            case 7:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "register",
    value: function () {
      var _register = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve) {
                  _this2.socketClient.on('connect', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                    var res;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!_this2.isConnected) {
                              _context3.next = 5;
                              break;
                            }

                            _context3.next = 3;
                            return _this2.getAccessToken();

                          case 3:
                            res = _context3.sent;
                            resolve(res);

                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  })));
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _config["default"].disconnect.token = this.token;
                this.send(_config["default"].disconnect);
                _context5.next = 4;
                return (0, _helper.wait)(3000);

              case 4:
                return _context5.abrupt("return", new Promise(function (resolve) {
                  _this3.socketClient.end();

                  _this3.socketClient.on('end', function () {
                    _this3.ev.removeAllListeners();

                    resolve();
                  });
                }));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function disconnect() {
        return _disconnect.apply(this, arguments);
      }

      return disconnect;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(url, dest) {
        var writer, response;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                writer = _fs["default"].createWriteStream(dest);
                _context6.next = 3;
                return (0, _axios["default"])({
                  url: url,
                  method: 'GET',
                  responseType: 'stream'
                });

              case 3:
                response = _context6.sent;
                response.data.pipe(writer);
                return _context6.abrupt("return", new Promise(function (resolve, reject) {
                  writer.on('finish', function () {
                    resolve(dest);
                  });
                  writer.on('error', function (err) {
                    reject(err);
                  });
                }));

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function download(_x2, _x3) {
        return _download.apply(this, arguments);
      }

      return download;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var response, data, dataToJson;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.send(_config["default"].requestToken);
                _context7.next = 3;
                return this.cameraResponse();

              case 3:
                response = _context7.sent;
                data = response;
                dataToJson = JSON.parse(data.msg);
                this.token = dataToJson.param;
                _config["default"].connectPersist.token = this.token;
                this.send(_config["default"].connectPersist);
                return _context7.abrupt("return", dataToJson);

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: "cameraResponse",
    value: function () {
      var _cameraResponse = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", new Promise(function (resolve) {
                  _this4.ev.once('cb', function (data) {
                    resolve(data);
                  });
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function cameraResponse() {
        return _cameraResponse.apply(this, arguments);
      }

      return cameraResponse;
    }()
  }, {
    key: "send",
    value: function send(message) {
      this.socketClient.write(JSON.stringify(message));
    }
  }]);
  return YiClientSocket;
}();

exports["default"] = YiClientSocket;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc2VzL1lpQ2xpZW50U29ja2V0LnRzIl0sIm5hbWVzIjpbIllpQ2xpZW50U29ja2V0IiwibmV0IiwiU29ja2V0IiwiZXZlbnRzIiwiRXZlbnRFbWl0dGVyIiwiY29uZiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic29ja2V0Q2xpZW50IiwiY29ubmVjdCIsInBvcnQiLCJob3N0IiwiaXNDb25uZWN0ZWQiLCJvbiIsImVyciIsImRlc3Ryb3kiLCJvbmNlIiwiZW5kIiwiZGF0YSIsImR0IiwidG9TdHJpbmciLCJpbmRleE9mIiwiY29ubmVjdFBlcnNpc3QiLCJ0b2tlbiIsInNlbmQiLCJldiIsImdldEFjY2Vzc1Rva2VuIiwicmVzIiwiZGlzY29ubmVjdCIsInJlbW92ZUFsbExpc3RlbmVycyIsInVybCIsImRlc3QiLCJ3cml0ZXIiLCJmcyIsImNyZWF0ZVdyaXRlU3RyZWFtIiwibWV0aG9kIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2UiLCJwaXBlIiwicmVxdWVzdFRva2VuIiwiY2FtZXJhUmVzcG9uc2UiLCJkYXRhVG9Kc29uIiwiSlNPTiIsInBhcnNlIiwibXNnIiwicGFyYW0iLCJtZXNzYWdlIiwid3JpdGUiLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFcUJBLGM7OzsyREFDTSxJQUFJQyxnQkFBSUMsTUFBUixFO2lEQUNWLElBQUlDLG1CQUFPQyxZQUFYLEU7bURBQ0VDLGtCO29EQUNDLEM7MERBQ00sSzs7Ozs7Ozs7Ozs7OztrREFHZixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFvQkMsTUFBcEIsRUFBeUM7QUFDMUQsa0JBQUEsS0FBSSxDQUFDQyxZQUFMLENBQWtCQyxPQUFsQixDQUEwQkwsbUJBQUtNLElBQS9CLEVBQXFDTixtQkFBS08sSUFBMUMsRUFBZ0QsWUFBTTtBQUNwRCxvQkFBQSxLQUFJLENBQUNDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQU4sb0JBQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUNNLFdBQU4sQ0FBUDtBQUNELG1CQUhEOztBQUtBLGtCQUFBLEtBQUksQ0FBQ0osWUFBTCxDQUFrQkssRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3JDLG9CQUFBLEtBQUksQ0FBQ0YsV0FBTCxHQUFtQixLQUFuQjs7QUFDQSxvQkFBQSxLQUFJLENBQUNKLFlBQUwsQ0FBa0JPLE9BQWxCOztBQUNBLHdCQUFJRCxHQUFKLEVBQVNQLE1BQU0sQ0FBQ08sR0FBRCxDQUFOO0FBQ1YsbUJBSkQ7O0FBTUEsa0JBQUEsS0FBSSxDQUFDTixZQUFMLENBQWtCUSxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxVQUFDRixHQUFELEVBQVM7QUFDdkNQLG9CQUFBQSxNQUFNLENBQUNPLEdBQUQsQ0FBTjtBQUNELG1CQUZEOztBQUlBLGtCQUFBLEtBQUksQ0FBQ04sWUFBTCxDQUFrQkssRUFBbEIsQ0FBcUIsU0FBckIsRUFBZ0MsWUFBTTtBQUNwQyxvQkFBQSxLQUFJLENBQUNMLFlBQUwsQ0FBa0JTLEdBQWxCO0FBQ0QsbUJBRkQ7O0FBSUEsa0JBQUEsS0FBSSxDQUFDVCxZQUFMLENBQWtCSyxFQUFsQixDQUFxQixNQUFyQjtBQUFBLDZHQUE2QixpQkFBT0ssSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJDLDhCQUFBQSxFQURxQixHQUNoQkQsSUFBSSxDQUFDRSxRQUFMLENBQWMsTUFBZCxDQURnQjtBQUczQjs7Ozs7QUFIMkIsb0NBUXpCRCxFQUFFLENBQUNFLE9BQUgsQ0FBVyw4QkFBWCxNQUErQyxDQUFDLENBQWhELElBQ0FGLEVBQUUsQ0FBQ0UsT0FBSCxDQUFXLHlCQUFYLE1BQTBDLENBQUMsQ0FUbEI7QUFBQTtBQUFBO0FBQUE7O0FBV3pCakIsaURBQUtrQixjQUFMLENBQW9CQyxLQUFwQixHQUE0QixLQUFJLENBQUNBLEtBQWpDO0FBWHlCO0FBQUEscUNBWW5CLGtCQUFLLElBQUwsQ0FabUI7O0FBQUE7QUFhekIsOEJBQUEsS0FBSSxDQUFDQyxJQUFMLENBQVVwQixtQkFBS2tCLGNBQWY7O0FBYnlCO0FBZ0IzQix3REFBUyxLQUFJLENBQUNHLEVBQWQsRUFBa0JOLEVBQWxCOztBQWhCMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JELGlCQXRDTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREEwQ0EsSUFBSWQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBdUI7QUFDeEMsa0JBQUEsTUFBSSxDQUFDRSxZQUFMLENBQWtCSyxFQUFsQixDQUFxQixTQUFyQiw2RkFBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQzFCLE1BQUksQ0FBQ0QsV0FEcUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQ0FFVixNQUFJLENBQUNjLGNBQUwsRUFGVTs7QUFBQTtBQUV0QkMsNEJBQUFBLEdBRnNCO0FBRzVCckIsNEJBQUFBLE9BQU8sQ0FBQ3FCLEdBQUQsQ0FBUDs7QUFINEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWhDO0FBTUQsaUJBUE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXUHZCLG1DQUFLd0IsVUFBTCxDQUFnQkwsS0FBaEIsR0FBd0IsS0FBS0EsS0FBN0I7QUFDQSxxQkFBS0MsSUFBTCxDQUFVcEIsbUJBQUt3QixVQUFmOzt1QkFDTSxrQkFBSyxJQUFMLEM7OztrREFFQyxJQUFJdkIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBdUI7QUFDeEMsa0JBQUEsTUFBSSxDQUFDRSxZQUFMLENBQWtCUyxHQUFsQjs7QUFFQSxrQkFBQSxNQUFJLENBQUNULFlBQUwsQ0FBa0JLLEVBQWxCLENBQXFCLEtBQXJCLEVBQTRCLFlBQU07QUFDaEMsb0JBQUEsTUFBSSxDQUFDWSxFQUFMLENBQVFJLGtCQUFSOztBQUNBdkIsb0JBQUFBLE9BQU87QUFDUixtQkFIRDtBQUlELGlCQVBNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0hBVWF3QixHLEVBQWFDLEk7Ozs7OztBQUMzQkMsZ0JBQUFBLE0sR0FBU0MsZUFBR0MsaUJBQUgsQ0FBcUJILElBQXJCLEM7O3VCQUVRLHVCQUFNO0FBQzNCRCxrQkFBQUEsR0FBRyxFQUFIQSxHQUQyQjtBQUUzQkssa0JBQUFBLE1BQU0sRUFBRSxLQUZtQjtBQUczQkMsa0JBQUFBLFlBQVksRUFBRTtBQUhhLGlCQUFOLEM7OztBQUFqQkMsZ0JBQUFBLFE7QUFNTkEsZ0JBQUFBLFFBQVEsQ0FBQ25CLElBQVQsQ0FBY29CLElBQWQsQ0FBbUJOLE1BQW5CO2tEQUVPLElBQUkzQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFvQkMsTUFBcEIsRUFBeUM7QUFDMUR5QixrQkFBQUEsTUFBTSxDQUFDbkIsRUFBUCxDQUFVLFFBQVYsRUFBb0IsWUFBTTtBQUN4QlAsb0JBQUFBLE9BQU8sQ0FBQ3lCLElBQUQsQ0FBUDtBQUNELG1CQUZEO0FBR0FDLGtCQUFBQSxNQUFNLENBQUNuQixFQUFQLENBQVUsT0FBVixFQUFtQixVQUFDQyxHQUFELEVBQVM7QUFDMUJQLG9CQUFBQSxNQUFNLENBQUNPLEdBQUQsQ0FBTjtBQUNELG1CQUZEO0FBR0QsaUJBUE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdQLHFCQUFLVSxJQUFMLENBQVVwQixtQkFBS21DLFlBQWY7O3VCQUV1QixLQUFLQyxjQUFMLEU7OztBQUFqQkgsZ0JBQUFBLFE7QUFDQW5CLGdCQUFBQSxJLEdBQU9tQixRO0FBQ1BJLGdCQUFBQSxVLEdBQWFDLElBQUksQ0FBQ0MsS0FBTCxDQUFXekIsSUFBSSxDQUFDMEIsR0FBaEIsQztBQUVuQixxQkFBS3JCLEtBQUwsR0FBYWtCLFVBQVUsQ0FBQ0ksS0FBeEI7QUFDQXpDLG1DQUFLa0IsY0FBTCxDQUFvQkMsS0FBcEIsR0FBNEIsS0FBS0EsS0FBakM7QUFDQSxxQkFBS0MsSUFBTCxDQUFVcEIsbUJBQUtrQixjQUFmO2tEQUVPbUIsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBT0EsSUFBSXBDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQXVCO0FBQ3hDLGtCQUFBLE1BQUksQ0FBQ21CLEVBQUwsQ0FBUVQsSUFBUixDQUFhLElBQWIsRUFBbUIsVUFBQ0UsSUFBRCxFQUFrQjtBQUNuQ1osb0JBQUFBLE9BQU8sQ0FBQ1ksSUFBRCxDQUFQO0FBQ0QsbUJBRkQ7QUFHRCxpQkFKTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBT000QixPLEVBQXVCO0FBQ3BDLFdBQUt0QyxZQUFMLENBQWtCdUMsS0FBbEIsQ0FBd0JMLElBQUksQ0FBQ00sU0FBTCxDQUFlRixPQUFmLENBQXhCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV0IGZyb20gJ25ldCc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBjb25mIGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgbGlzdGVuZXIgZnJvbSAnLi4vdXRpbHMvbGlzdGVuZXInO1xuaW1wb3J0IHsgd2FpdCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlpQ2xpZW50U29ja2V0IHtcbiAgcHJvdGVjdGVkIHNvY2tldENsaWVudCA9IG5ldyBuZXQuU29ja2V0KCk7XG4gIHByb3RlY3RlZCBldiA9IG5ldyBldmVudHMuRXZlbnRFbWl0dGVyKCk7XG4gIHByb3RlY3RlZCBjb25mID0gY29uZjtcbiAgcHJvdGVjdGVkIHRva2VuID0gMDtcbiAgcHJvdGVjdGVkIGlzQ29ubmVjdGVkID0gZmFsc2U7XG5cbiAgcHVibGljIGFzeW5jIGNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbikgPT4ge1xuICAgICAgdGhpcy5zb2NrZXRDbGllbnQuY29ubmVjdChjb25mLnBvcnQsIGNvbmYuaG9zdCwgKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmlzQ29ubmVjdGVkKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNvY2tldENsaWVudC5vbignY2xvc2UnLCAoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zb2NrZXRDbGllbnQuZGVzdHJveSgpO1xuICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNvY2tldENsaWVudC5vbmNlKCdlcnJvcicsIChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zb2NrZXRDbGllbnQub24oJ3RpbWVvdXQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc29ja2V0Q2xpZW50LmVuZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc29ja2V0Q2xpZW50Lm9uKCdkYXRhJywgYXN5bmMgKGRhdGE6IEJ1ZmZlcikgPT4ge1xuICAgICAgICBjb25zdCBkdCA9IGRhdGEudG9TdHJpbmcoJ3V0ZjgnKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSBwZXJzaXN0ZW50IGNvbm5lY3Rpb25cbiAgICAgICAgICogc2VuZCByZXF1ZXN0IGV2ZXJ5IDUgc2Vjb25kc1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGR0LmluZGV4T2YoJ3tcInJ2YWxcIjowLFwibXNnX2lkXCI6MTY3NzcyNDR9JykgIT09IC0xICYmXG4gICAgICAgICAgZHQuaW5kZXhPZigne1wicnZhbFwiOjAsXCJtc2dfaWRcIjoyNTh9JykgPT09IC0xXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbmYuY29ubmVjdFBlcnNpc3QudG9rZW4gPSB0aGlzLnRva2VuO1xuICAgICAgICAgIGF3YWl0IHdhaXQoNTAwMCk7XG4gICAgICAgICAgdGhpcy5zZW5kKGNvbmYuY29ubmVjdFBlcnNpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXIodGhpcy5ldiwgZHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVnaXN0ZXIoKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICB0aGlzLnNvY2tldENsaWVudC5vbignY29ubmVjdCcsIGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdldEFjY2Vzc1Rva2VuKCk7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkaXNjb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbmYuZGlzY29ubmVjdC50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgdGhpcy5zZW5kKGNvbmYuZGlzY29ubmVjdCk7XG4gICAgYXdhaXQgd2FpdCgzMDAwKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuc29ja2V0Q2xpZW50LmVuZCgpO1xuXG4gICAgICB0aGlzLnNvY2tldENsaWVudC5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmV2LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkb3dubG9hZCh1cmw6IHN0cmluZywgZGVzdDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB3cml0ZXIgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShkZXN0KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Moe1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3N0cmVhbScsXG4gICAgfSk7XG5cbiAgICByZXNwb25zZS5kYXRhLnBpcGUod3JpdGVyKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgIHdyaXRlci5vbignZmluaXNoJywgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKGRlc3QpO1xuICAgICAgfSk7XG4gICAgICB3cml0ZXIub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRBY2Nlc3NUb2tlbigpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHRoaXMuc2VuZChjb25mLnJlcXVlc3RUb2tlbik7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2FtZXJhUmVzcG9uc2UoKTtcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2U7XG4gICAgY29uc3QgZGF0YVRvSnNvbiA9IEpTT04ucGFyc2UoZGF0YS5tc2cpO1xuXG4gICAgdGhpcy50b2tlbiA9IGRhdGFUb0pzb24ucGFyYW07XG4gICAgY29uZi5jb25uZWN0UGVyc2lzdC50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgdGhpcy5zZW5kKGNvbmYuY29ubmVjdFBlcnNpc3QpO1xuXG4gICAgcmV0dXJuIGRhdGFUb0pzb247XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgY2FtZXJhUmVzcG9uc2UoKTogUHJvbWlzZTx7XG4gICAgdDogc3RyaW5nO1xuICAgIG1zZzogc3RyaW5nO1xuICB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbikgPT4ge1xuICAgICAgdGhpcy5ldi5vbmNlKCdjYicsIChkYXRhOiBvYmplY3QpID0+IHtcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlbmQobWVzc2FnZTogb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5zb2NrZXRDbGllbnQud3JpdGUoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICB9XG59XG4iXX0=