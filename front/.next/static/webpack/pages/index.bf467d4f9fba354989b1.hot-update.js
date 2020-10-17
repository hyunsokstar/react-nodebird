webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\prepare\\front\\components\\FollowButton.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // 글을 쓴 사람이 팔로우한 사람인지를 따져서 팔로우 언팔로우로 분기 처리

var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "\uD314\uB85C\uC6B0 \uBC84\uD2BC");
};

_s(FollowButton, "rDSioB/eo9IZnG2RJHR3gh0eja8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = FollowButton;
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEscUJBRWtCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUY3QjtBQUFBLE1BRXJCQyxFQUZxQixnQkFFckJBLEVBRnFCO0FBQUEsTUFFakJDLGFBRmlCLGdCQUVqQkEsYUFGaUI7QUFBQSxNQUVGQyxlQUZFLGdCQUVGQSxlQUZFOztBQUc3QixNQUFNQyxXQUFXLEdBQUdILEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFSSxVQUFKLENBQWVDLElBQWYsQ0FBb0IsVUFBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTWCxJQUFJLENBQUNZLElBQUwsQ0FBVUQsRUFBMUI7QUFBQSxHQUFwQixDQUFwQjtBQUVBLFNBQ0ksTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURKO0FBSUgsQ0FURDs7R0FBTVosWTtVQUU2Q0UsdUQ7OztLQUY3Q0YsWTtBQVdTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZjQ2N2Q0ZjlmYmEzNTQ5ODliMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG4vLyDquIDsnYQg7JO0IOyCrOuejOydtCDtjJTroZzsmrDtlZwg7IKs656M7J247KeA66W8IOuUsOyguOyEnCDtjJTroZzsmrAg7Ja47YyU66Gc7Jqw66GcIOu2hOq4sCDsspjrpqxcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7cG9zdH0pID0+IHtcclxuXHJcbiAgICBjb25zdCB7IG1lLCBmb2xsb3dMb2FkaW5nLCB1bmZvbGxvd0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBpc0ZvbGxvd2luZyA9IG1lPy5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCdXR0b24+7YyU66Gc7JqwIOuyhO2KvDwvQnV0dG9uPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uOyJdLCJzb3VyY2VSb290IjoiIn0=