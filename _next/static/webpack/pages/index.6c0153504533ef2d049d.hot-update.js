self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* harmony import */ var F_proyectos_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _ref;

var projects = [{
  title: 'ClimApp',
  description: "Desarrollada con HTML5, CSS3 (mobile-first), JavaScript Vainilla,ClimApp es una aplicación en donde podes ver en tiempo real el clima de tu ciudad. Además incorpora Geolocalización y la posibilidad de elegir entre Dark y Light mode.",
  image: '/images/app/app2.jpg',
  tags: ['JavaScript', 'Geolocation', 'OpenWeatherAPI'],
  source: 'https://lg-climapp.netlify.app/',
  visit: 'https://github.com/leogonzalezok/climapp.git',
  id: 0
}, {
  title: 'Agile - CRM',
  description: "Desarrollado con HTML5, CSS3, JavaScript e IndexDB. Agile - CRM es un CRUD, que permitegestionar información, de los clientes de una empresa.",
  image: '/images/web/web6.jpg',
  tags: ['Vanilla JavaScript', 'IndexDB'],
  source: 'https://github.com/leogonzalezok/crm-agile.git',
  visit: 'https://lg-crm-agile.netlify.app/',
  id: 1
}, (_ref = {
  title: 'Tienda Online',
  description: "Desarrollada con HTML5, CSS3 y JavaScript(ES6).Incluye carrito de compras con Local Storage para que el usuariopueda tener una mejor experiencia.",
  image: '/images/web/web1.jpg',
  tags: ['Vanilla JavaScript'],
  source: 'https://github.com/leogonzalezok/tienda-online.git'
}, (0,F_proyectos_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "source", 'https://lg-tienda-online.netlify.app/'), (0,F_proyectos_portfolio_website_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, "id", 2), _ref), {
  title: 'Unichat',
  description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
  image: '/images/4.jpg',
  tags: ['React', 'ChatEngine', 'Firebase'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3
}];
var TimeLineData = [{
  year: 2017,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFNBRFQ7QUFFRUMsYUFBVyxFQUFFLDBPQUZmO0FBR0lDLE9BQUssRUFBRSxzQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxZQUFELEVBQWUsYUFBZixFQUE4QixnQkFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsaUNBTFY7QUFNRUMsT0FBSyxFQUFFLDhDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRHNCLEVBVXRCO0FBQ0VOLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBQywrSUFGZDtBQUdFQyxPQUFLLEVBQUUsc0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsb0JBQUQsRUFBdUIsU0FBdkIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsZ0RBTFY7QUFNRUMsT0FBSyxFQUFFLG1DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCO0FBb0JwQk4sT0FBSyxFQUFFLGVBcEJhO0FBcUJwQkMsYUFBVyxFQUFFLG1KQXJCTztBQXNCbEJDLE9BQUssRUFBRSxzQkF0Qlc7QUF1QmxCQyxNQUFJLEVBQUUsQ0FBQyxvQkFBRCxDQXZCWTtBQXdCcEJDLFFBQU0sRUFBRTtBQXhCWSxnSkF5QlosdUNBekJZLDRJQTBCaEIsQ0ExQmdCLFVBNEJ0QjtBQUNFSixPQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFXLEVBQUUsZ0lBRmY7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsVUFBeEIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsb0JBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixDQUFqQjtBQXVDQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YzAxNTM1MDQ1MzNlZjJkMDQ5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2xpbUFwcCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNhcnJvbGxhZGEgY29uIEhUTUw1LCBDU1MzIChtb2JpbGUtZmlyc3QpLCBKYXZhU2NyaXB0IFZhaW5pbGxhLENsaW1BcHAgZXMgdW5hIGFwbGljYWNpw7NuIGVuIGRvbmRlIHBvZGVzIHZlciBlbiB0aWVtcG8gcmVhbCBlbCBjbGltYSBkZSB0dSBjaXVkYWQuIEFkZW3DoXMgaW5jb3Jwb3JhIEdlb2xvY2FsaXphY2nDs24geSBsYSBwb3NpYmlsaWRhZCBkZSBlbGVnaXIgZW50cmUgRGFyayB5IExpZ2h0IG1vZGUuXCIsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9hcHAvYXBwMi5qcGcnLFxyXG4gICAgICB0YWdzOiBbJ0phdmFTY3JpcHQnLCAnR2VvbG9jYXRpb24nLCAnT3BlbldlYXRoZXJBUEknXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vbGctY2xpbWFwcC5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vbGVvZ29uemFsZXpvay9jbGltYXBwLmdpdCcsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQWdpbGUgLSBDUk0nLFxyXG4gICAgZGVzY3JpcHRpb246XCJEZXNhcnJvbGxhZG8gY29uIEhUTUw1LCBDU1MzLCBKYXZhU2NyaXB0IGUgSW5kZXhEQi4gQWdpbGUgLSBDUk0gZXMgdW4gQ1JVRCwgcXVlIHBlcm1pdGVnZXN0aW9uYXIgaW5mb3JtYWNpw7NuLCBkZSBsb3MgY2xpZW50ZXMgZGUgdW5hIGVtcHJlc2EuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvd2ViL3dlYjYuanBnJyxcclxuICAgIHRhZ3M6IFsnVmFuaWxsYSBKYXZhU2NyaXB0JywgJ0luZGV4REInXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sZW9nb256YWxlem9rL2NybS1hZ2lsZS5naXQnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2xnLWNybS1hZ2lsZS5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1RpZW5kYSBPbmxpbmUnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRGVzYXJyb2xsYWRhIGNvbiBIVE1MNSwgQ1NTMyB5IEphdmFTY3JpcHQoRVM2KS5JbmNsdXllIGNhcnJpdG8gZGUgY29tcHJhcyBjb24gTG9jYWwgU3RvcmFnZSBwYXJhIHF1ZSBlbCB1c3VhcmlvcHVlZGEgdGVuZXIgdW5hIG1lam9yIGV4cGVyaWVuY2lhLlwiLFxyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvd2ViL3dlYjEuanBnJyxcclxuICAgICAgdGFnczogWydWYW5pbGxhIEphdmFTY3JpcHQnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sZW9nb256YWxlem9rL3RpZW5kYS1vbmxpbmUuZ2l0JyxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vbGctdGllbmRhLW9ubGluZS5uZXRsaWZ5LmFwcC8nLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1VuaWNoYXQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdmlkZW8gdHV0b3JpYWwuIEluIHRoaXMgdmlkZW8sIHdlIHdpbGwgY3JlYXRlIGEgZnVsbCBSZWFsdGltZSBDaGF0IEFwcGxpY2F0aW9uXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvNC5qcGcnLFxyXG4gICAgdGFnczogWydSZWFjdCcsICdDaGF0RW5naW5lJywgJ0ZpcmViYXNlJ10sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dvb2dsZS5jb20nLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXHJcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcclxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJywgfSxcclxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcclxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScsIH0sXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==