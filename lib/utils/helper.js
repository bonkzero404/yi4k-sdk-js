"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = wait;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/**
 *
 * @param ms number
 *
 * Make setTimeout to Promise
 */
function wait(_x) {
  return _wait.apply(this, arguments);
}

function _wait() {
  _wait = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ms) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              setTimeout(resolve, ms);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _wait.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9oZWxwZXIudHMiXSwibmFtZXMiOlsid2FpdCIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztTQU1zQkEsSTs7Ozs7d0ZBQWYsaUJBQW9CQyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ0UsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QkMsY0FBQUEsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBVjtBQUNELGFBRk0sQ0FERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQHBhcmFtIG1zIG51bWJlclxuICpcbiAqIE1ha2Ugc2V0VGltZW91dCB0byBQcm9taXNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0KG1zOiBudW1iZXIpOiBQcm9taXNlPHR5cGVvZiBzZXRUaW1lb3V0PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICB9KTtcbn1cbiJdfQ==