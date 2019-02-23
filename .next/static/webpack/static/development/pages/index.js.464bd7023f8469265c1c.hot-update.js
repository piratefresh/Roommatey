webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_TextBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TextBox */ "./components/TextBox.js");
/* harmony import */ var _components_DateText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DateText */ "./components/DateText.js");
/* harmony import */ var _components_people1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/people1.jpg */ "./components/people1.jpg");
/* harmony import */ var _components_people1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_people1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_people2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/people2.jpg */ "./components/people2.jpg");
/* harmony import */ var _components_people2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_people2_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_people3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/people3.jpg */ "./components/people3.jpg");
/* harmony import */ var _components_people3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_people3_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_people4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/people4.jpg */ "./components/people4.jpg");
/* harmony import */ var _components_people4_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_people4_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CalenderIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CalenderIcon */ "./components/CalenderIcon.js");
/* harmony import */ var _components_TaskIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TaskIcon */ "./components/TaskIcon.js");
/* harmony import */ var _components_ShoppingIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ShoppingIcon */ "./components/ShoppingIcon.js");
/* harmony import */ var _components_styles_listStyles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/styles/listStyles.css */ "./components/styles/listStyles.css");
/* harmony import */ var _components_styles_listStyles_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_styles_listStyles_css__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\Magnus\\Documents\\webstuff\\Roommatey\\Roommatey\\pages\\index.js";













var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-4uwwe5-0"
})(["min-height:100vh;width:100vw;h1{display:flex;justify-content:center;color:#fff;padding:0;margin:0;}p{padding:0;margin:0;}img{height:40px;width:40px;object-fit:cover;}"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Content",
  componentId: "sc-4uwwe5-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin:5%;"]);
var TasksArr = [{
  profileimg: _components_people1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  user: "Josh",
  description: ' Completed "Doing Dishes" to task',
  type: "Task",
  completed: true,
  posted: "14:55"
}, {
  profileimg: _components_people2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
  user: "Eve",
  description: ' Added "Take out Trash" to task',
  type: "Task",
  completed: false,
  posted: "14:55"
}, {
  profileimg: _components_people3_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
  user: "Peter",
  description: ' Added "Party at 8pm" to calender',
  type: "Calender",
  completed: false,
  posted: "14:55"
}, {
  profileimg: _components_people4_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
  user: "Tom",
  description: ' Added "Studie Session" to calender',
  type: "Calender",
  completed: false,
  posted: "14:55"
}];

function renderSwitch(param, fill) {
  switch (param) {
    case "Calender":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CalenderIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "listIcon",
        fill: fill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      });

    case "Task":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TaskIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "listIcon",
        fill: fill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      });

    case "Shopping":
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ShoppingIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "listIcon",
        fill: fill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      });

    default:
      return "foo";
  }
}

var Home = function Home() {
  var incomplete = "#FF6A7C";
  var complete = "#5CBA47";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    headertitle: "The Arrogants",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, TasksArr.map(function (task, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TextBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: task.profileimg,
      alt: task.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        marginRight: "5px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        fontSize: "1.4rem",
        fontWeight: "700",
        color: "#000"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, task.user), task.description), renderSwitch(task.type, task.completed === true ? complete : incomplete), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DateText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, task.posted));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.464bd7023f8469265c1c.hot-update.js.map