webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function logInAPI(data) {
  return axios.post('/api/login', data);
}

function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('saga logIn'); // const result = yield call(logInAPI);

          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: _objectSpread({}, action.data)
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function logOutAPI(data) {
  return axios.post('/api/login', data);
}

function logOut(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log('saga logout'); // const result = yield call(logInAPI);

          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000);

        case 4:
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            error: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("saga watch 실행 check");
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("saga watch 실행 check");
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchUnfollow)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsIndhdGNoTG9nT3V0Iiwid2F0Y2hMb2dJbiIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsInVzZXJTYWdhIiwibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiZXJyb3IiLCJMT0dfSU5fRkFJTFVSRSIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19JTl9SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJmb2xsb3ciLCJVTkZPTExPV19SRVFVRVNUIiwidW5mb2xsb3ciLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FxQlVBLEs7bUdBd0JBQyxNO21HQWtCQUMsVzttR0FLQUMsVTttR0FLQUMsVzttR0FJQUMsYTttR0FJZUMsUTs7Ozs7O0FBakZ6QjtBQUNBOztBQWdCQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUNwQixTQUFPQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQXlCRixJQUF6QixDQUFQO0FBQ0g7O0FBRUQsU0FBVVIsS0FBVixDQUFnQlcsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVFDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBRlIsQ0FHUTs7QUFIUjtBQUlRLGlCQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFKUjtBQUFBO0FBTVEsaUJBQU1DLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRUMsNkRBREE7QUFFTlQsZ0JBQUksb0JBQU9HLE1BQU0sQ0FBQ0gsSUFBZDtBQUZFLFdBQUQsQ0FBVDs7QUFOUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV1FJLGlCQUFPLENBQUNNLEtBQVI7QUFYUjtBQVlRLGlCQUFNSCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVHLDZEQURBO0FBRU5ELGlCQUFLLEVBQUUsWUFBSUUsUUFBSixDQUFhWjtBQUZkLFdBQUQsQ0FBVDs7QUFaUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQkEsU0FBU2EsU0FBVCxDQUFtQmIsSUFBbkIsRUFBeUI7QUFDckIsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkYsSUFBekIsQ0FBUDtBQUNIOztBQUVELFNBQVVQLE1BQVYsQ0FBaUJVLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVRQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUZSLENBR1E7O0FBSFI7QUFJUSxpQkFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBSlI7QUFBQTtBQU1RLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVNLDhEQUFlQTtBQURmLFdBQUQsQ0FBVDs7QUFOUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVVFWLGlCQUFPLENBQUNNLEtBQVI7QUFWUjtBQVdRLGlCQUFNSCw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVPLDhEQURBO0FBRU5MLGlCQUFLLEVBQUUsYUFBSUUsUUFBSixDQUFhWjtBQUZkLFdBQUQsQ0FBVDs7QUFYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQkEsU0FBVU4sV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lVLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQURKO0FBRUksaUJBQU1XLHFFQUFVLENBQUNDLDhEQUFELEVBQWtCeEIsTUFBbEIsQ0FBaEI7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0EsU0FBVUUsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lTLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQURKO0FBRUksaUJBQU1XLHFFQUFVLENBQUNFLDZEQUFELEVBQWlCMUIsS0FBakIsQ0FBaEI7O0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0EsU0FBVUksV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTW9CLHFFQUFVLENBQUNHLDZEQUFELEVBQWlCQyxNQUFqQixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVdkIsYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTW1CLHFFQUFVLENBQUNLLCtEQUFELEVBQW1CQyxRQUFuQixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVeEIsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTXlCLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQzdCLFVBQUQsQ0FERSxFQUVONkIsK0RBQUksQ0FBQzlCLFdBQUQsQ0FGRSxFQUdOOEIsK0RBQUksQ0FBQzVCLFdBQUQsQ0FIRSxFQUlONEIsK0RBQUksQ0FBQzNCLGFBQUQsQ0FKRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wODVjOWY0YWRlMDVlZWEyNjVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIEZPTExPV19GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvZ0luJyk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiB7IC4uLmFjdGlvbi5kYXRhIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dvdXQnKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgyMDAwKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2Egd2F0Y2gg7Iuk7ZaJIGNoZWNrXCIpO1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIHdhdGNoIOyLpO2WiSBjaGVja1wiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcblxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9