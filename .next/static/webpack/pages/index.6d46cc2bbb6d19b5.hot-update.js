"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/modal/GeneralDialog.js":
/*!*************************************************!*\
  !*** ./pages/components/modal/GeneralDialog.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GeneralDialog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/Dialog/index.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogActions */ \"./node_modules/@mui/material/DialogActions/index.js\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogContent */ \"./node_modules/@mui/material/DialogContent/index.js\");\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogContentText */ \"./node_modules/@mui/material/DialogContentText/index.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"./node_modules/@mui/material/DialogTitle/index.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Transition = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = function Transition(props, ref) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        direction: \"up\",\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, this);\n});\n_c1 = Transition;\nfunction GeneralDialog(param) {\n    let { title , message , confirm , cancel , button  } = param;\n    _s();\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    const handleClickOpen = ()=>{\n        setOpen(true);\n    };\n    const handleClose = ()=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"outlined\",\n                onClick: handleClickOpen,\n                children: button\n            }, void 0, false, {\n                fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: open,\n                TransitionComponent: Transition,\n                keepMounted: true,\n                onClose: handleClose,\n                \"aria-describedby\": \"alert-dialog-slide-description\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"alert-dialog-slide-description\",\n                            children: message\n                        }, void 0, false, {\n                            fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: handleClose,\n                                children: cancel\n                            }, void 0, false, {\n                                fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: handleClose,\n                                children: confirm\n                            }, void 0, false, {\n                                fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sashakharoubi/Desktop/TodoList_ICM/pages/components/modal/GeneralDialog.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(GeneralDialog, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c2 = GeneralDialog;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Transition$React.forwardRef\");\n$RefreshReg$(_c1, \"Transition\");\n$RefreshReg$(_c2, \"GeneralDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL21vZGFsL0dlbmVyYWxEaWFsb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztBQUNBO0FBQ2M7QUFDQTtBQUNRO0FBQ1o7QUFDWjtBQUV4QyxNQUFNUSwyQkFBYVIsNkNBQWdCLE1BQUMsU0FBU1EsV0FBV0UsS0FBSyxFQUFFQyxHQUFHLEVBQUU7SUFDbEUscUJBQU8sOERBQUNKLDJEQUFLQTtRQUFDSyxXQUFVO1FBQUtELEtBQUtBO1FBQU0sR0FBR0QsS0FBSzs7Ozs7O0FBQ2xEOztBQUVlLFNBQVNHLGNBQWMsS0FBMkMsRUFBRTtRQUE3QyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUEzQzs7SUFDcEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdwQiwyQ0FBYyxDQUFDLEtBQUs7SUFFNUMsTUFBTXNCLGtCQUFrQixJQUFNO1FBQzVCRixRQUFRLElBQUk7SUFDZDtJQUVBLE1BQU1HLGNBQWMsSUFBTTtRQUN4QkgsUUFBUSxLQUFLO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDdkIsNERBQU1BO2dCQUFDd0IsU0FBUTtnQkFBV0MsU0FBU0o7MEJBQ2pDSjs7Ozs7OzBCQUVILDhEQUFDaEIsNERBQU1BO2dCQUNMaUIsTUFBTUE7Z0JBQ05RLHFCQUFxQm5CO2dCQUNyQm9CLFdBQVc7Z0JBQ1hDLFNBQVNOO2dCQUNUTyxvQkFBaUI7O2tDQUVqQiw4REFBQ3hCLGlFQUFXQTtrQ0FBRVE7Ozs7OztrQ0FDZCw4REFBQ1YsbUVBQWFBO2tDQUNaLDRFQUFDQyx1RUFBaUJBOzRCQUFDMEIsSUFBRztzQ0FBa0NoQjs7Ozs7Ozs7Ozs7a0NBRTFELDhEQUFDWixtRUFBYUE7OzBDQUNaLDhEQUFDRiw0REFBTUE7Z0NBQUN5QixTQUFTSDswQ0FBY047Ozs7OzswQ0FDL0IsOERBQUNoQiw0REFBTUE7Z0NBQUN5QixTQUFTSDswQ0FBY1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QyxDQUFDO0dBbEN1Qkg7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tb2RhbC9HZW5lcmFsRGlhbG9nLmpzPzBlOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbXVpL21hdGVyaWFsL0RpYWxvZ0FjdGlvbnNcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0RpYWxvZ0NvbnRlbnRcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tIFwiQG11aS9tYXRlcmlhbC9EaWFsb2dDb250ZW50VGV4dFwiO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbXVpL21hdGVyaWFsL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgU2xpZGUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU2xpZGVcIjtcblxuY29uc3QgVHJhbnNpdGlvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgcmVmKSB7XG4gIHJldHVybiA8U2xpZGUgZGlyZWN0aW9uPVwidXBcIiByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5lcmFsRGlhbG9nKHsgdGl0bGUsIG1lc3NhZ2UsIGNvbmZpcm0sIGNhbmNlbCwgYnV0dG9uIH0pIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufT5cbiAgICAgICAge2J1dHRvbn1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtUcmFuc2l0aW9ufVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1zbGlkZS1kZXNjcmlwdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxEaWFsb2dUaXRsZT57dGl0bGV9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLXNsaWRlLWRlc2NyaXB0aW9uXCI+e21lc3NhZ2V9PC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT57Y2FuY2VsfTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9Pntjb25maXJtfTwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkRpYWxvZyIsIkRpYWxvZ0FjdGlvbnMiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQ29udGVudFRleHQiLCJEaWFsb2dUaXRsZSIsIlNsaWRlIiwiVHJhbnNpdGlvbiIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImRpcmVjdGlvbiIsIkdlbmVyYWxEaWFsb2ciLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjb25maXJtIiwiY2FuY2VsIiwiYnV0dG9uIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrT3BlbiIsImhhbmRsZUNsb3NlIiwiZGl2IiwidmFyaWFudCIsIm9uQ2xpY2siLCJUcmFuc2l0aW9uQ29tcG9uZW50Iiwia2VlcE1vdW50ZWQiLCJvbkNsb3NlIiwiYXJpYS1kZXNjcmliZWRieSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/modal/GeneralDialog.js\n"));

/***/ })

});