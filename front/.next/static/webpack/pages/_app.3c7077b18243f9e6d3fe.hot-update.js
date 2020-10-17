webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  me: null,
  signUpData: {},
  loginData: {},
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '제로초',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: '부기초'
    }, {
      nickname: 'Chanho Lee'
    }, {
      nickname: 'neue zeal'
    }],
    Followers: [{
      nickname: '부기초'
    }, {
      nickname: 'Chanho Lee'
    }, {
      nickname: 'neue zeal'
    }]
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case "LOG_IN_REQUEST":
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case "LOG_IN_SUCCESS":
        draft.logInDone = true;
        draft.logInLoading = false;
        draft.me = dummyUser(action.data); // console.log("me check 11: ", me);

        break;

      case "LOG_IN_FAILURE":
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case "LOG_OUT_REQUEST":
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = false;
        break;

      case "LOG_OUT_SUCCESS":
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case "LOG_OUT_FAILURE":
        draft.logOutLoading = false, draft.logOutDone = false;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      default:
        break;
    } // switch 문 종료 

  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLElBQUUsRUFBRSxJQURvQjtBQUV4QkMsWUFBVSxFQUFFLEVBRlk7QUFHeEJDLFdBQVMsRUFBRSxFQUhhO0FBS3hCQyxjQUFZLEVBQUUsS0FMVTtBQUtIO0FBQ3JCQyxXQUFTLEVBQUUsS0FOYTtBQU94QkMsWUFBVSxFQUFFLElBUFk7QUFTeEJDLGVBQWEsRUFBRSxLQVRTO0FBU0Y7QUFDdEJDLFlBQVUsRUFBRSxLQVZZO0FBV3hCQyxhQUFXLEVBQUU7QUFYVyxDQUFyQjtBQWVBLElBQU1DLGNB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Q1I7QUFBYixTQUF2QjtBQUNBOztBQUNKLFdBQUtSLGlCQUFMO0FBQ0lrQixhQUFLLENBQUNsQyxFQUFOLENBQVMyQixLQUFULEdBQWlCTyxLQUFLLENBQUNsQyxFQUFOLENBQVMyQixLQUFULENBQWVXLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNiLEVBQUYsS0FBU00sTUFBTSxDQUFDUixJQUF2QjtBQUFBLFNBQXRCLENBQWpCO0FBQ0E7O0FBSUo7QUFDSTtBQS9DUixLQUQ2QixDQWlEMUI7O0FBQ04sR0FsRGEsQ0FBZDtBQW1ESCxDQXBERDs7QUFzRGVNLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2M3MDc3YjE4MjQzZjllNmQzZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJzsgICBcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxuXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbiAgICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIJyB9LCB7IG5pY2tuYW1lOiAnQ2hhbmhvIExlZScgfSwgeyBuaWNrbmFtZTogJ25ldWUgemVhbCcgfV0sXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkxPR19JTl9SRVFVRVNUXCI6XHJcbiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiTE9HX0lOX1NVQ0NFU1NcIjpcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWUgY2hlY2sgMTE6IFwiLCBtZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkxPR19JTl9GQUlMVVJFXCI6XHJcbiBcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMT0dfT1VUX1JFUVVFU1RcIjpcclxuIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMT0dfT1VUX1NVQ0NFU1NcIjpcclxuXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZT10cnVlXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMT0dfT1VUX0ZBSUxVUkVcIjpcclxuIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz1mYWxzZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmU9ZmFsc2VcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgLy8gc3dpdGNoIOusuCDsooXro4wgXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==