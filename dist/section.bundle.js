"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["section"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/allBlue.jpg */ "./src/img/allBlue.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* max-height: 100vh;
    max-width: 100vw; */
}
.mainCon{
    max-height: 100vh;
    min-width: 100vw;
    height: 100vh;
    width: 100vw;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center center;
    background-size: cover;
    display: grid;
    grid-template-rows: 1fr .2fr 5fr .2fr;
}
.main-header{
    

}
































/* .mainCon{
    height: 100vh;
    width: 100vw;
    background: url('../src/img/allBlue.jpg') center center;
    background-size: cover;
    display: grid;
    grid-template-rows: .7fr .2fr 7fr .1fr;
    gap: 1rem;
    color: #fff;
    justify-items: center;
    padding: 1rem;
} 
main > header{
    height: 100%;
    width: 100%;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    grid-row: 1/2;
    background-color: rgba(144, 144, 236, 0.5); 
    display: flex;
    border: none;
    justify-content: center;
    padding: 0.2rem 1rem;
}
main > header > h1{
    height: 100%;
    margin-top: 5px;
    padding-left: .5rem;
}
svg{
    height: 100%;
    width: 50px;
}
nav{
    width: 70%;
    grid-row: 2/3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}
main > nav > button{
    padding: .5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
}
main > nav > button:hover{
    background-color: #fff;
    color: black;
    transition: ease-in-out 1s;
}
button, section, footer, .homeImgDiv, .homeParaDiv, .menuPara{
    border: 2px solid white;
    border-radius: 5px;
    background-color: transparent;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    color: black;
}
main > section{
    height: 100%;
    width: 100%;
    padding: .2rem;
    grid-row: 3/4;
}
footer{
    background-color: rgba(144, 144, 236, 0.5); 
    width: 100%;
    padding: .5rem;
    border: none;
    text-align: center;
}
.getClick{
    background-color: red;
    color: white;
    transition: ease-in-out 1s;
}
.forAllDiv{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;   
}
.homeDiv{
    width: 100%;
    height: 100%;
    padding: .2rem;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 1rem;
}
.homeImgDiv{
    width: 50%;
    height: 60%;
    background: url('../src/img/allBlueMap.jpg') center center;
    background-size: cover;
}
.homeParaDiv{
    width: 90%;
    height: 40%;
    padding: .5rem;
    text-align: center;
}
.homePara{
    text-align: justify;
    color: black;
    font-weight: bold;
}
.menuDiv{
    padding: .5rem;
    display: none;
    flex: 1;
    gap: 1rem;
}
.menuDiv, .imgSize, .seah2{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.seaDiv, .soDiv, .specialDiv{
    border: 2px solid white;
    width: 33.3%;
    height: 100%;
    border-radius: 5px;
    display: grid;
    grid-template: 1fr 7fr/ 1fr;   
    place-content: center;
    cursor: pointer; 
}
.seaImgDiv, .sobaImgDiv, .specialImgDiv{
    display: flex;
    grid-area: 2/1/3/2;
    padding: 0 1rem 1rem;
}
.seah2{
    grid-area: 1/1/2/2;
    text-align: center;
    color: #000;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;    
}
.specialP{
    display: none;
    grid-area: 2/2/3/3;
    text-align: justify;
    padding: 1rem;
    flex: 1;
}
*/











`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;AACA;IACI,gDAAgD;IAChD;uBACmB;AACvB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,iEAAuD;IACvD,sBAAsB;IACtB,aAAa;IACb,qCAAqC;AACzC;AACA;;;AAGA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CAqJC","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody{\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    /* max-height: 100vh;\r\n    max-width: 100vw; */\r\n}\r\n.mainCon{\r\n    max-height: 100vh;\r\n    min-width: 100vw;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('../src/img/allBlue.jpg') center center;\r\n    background-size: cover;\r\n    display: grid;\r\n    grid-template-rows: 1fr .2fr 5fr .2fr;\r\n}\r\n.main-header{\r\n    \r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* .mainCon{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: url('../src/img/allBlue.jpg') center center;\r\n    background-size: cover;\r\n    display: grid;\r\n    grid-template-rows: .7fr .2fr 7fr .1fr;\r\n    gap: 1rem;\r\n    color: #fff;\r\n    justify-items: center;\r\n    padding: 1rem;\r\n} \r\nmain > header{\r\n    height: 100%;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\r\n    grid-row: 1/2;\r\n    background-color: rgba(144, 144, 236, 0.5); \r\n    display: flex;\r\n    border: none;\r\n    justify-content: center;\r\n    padding: 0.2rem 1rem;\r\n}\r\nmain > header > h1{\r\n    height: 100%;\r\n    margin-top: 5px;\r\n    padding-left: .5rem;\r\n}\r\nsvg{\r\n    height: 100%;\r\n    width: 50px;\r\n}\r\nnav{\r\n    width: 70%;\r\n    grid-row: 2/3;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 1rem;\r\n}\r\nmain > nav > button{\r\n    padding: .5rem 1rem;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\nmain > nav > button:hover{\r\n    background-color: #fff;\r\n    color: black;\r\n    transition: ease-in-out 1s;\r\n}\r\nbutton, section, footer, .homeImgDiv, .homeParaDiv, .menuPara{\r\n    border: 2px solid white;\r\n    border-radius: 5px;\r\n    background-color: transparent;\r\n    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);\r\n    color: black;\r\n}\r\nmain > section{\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: .2rem;\r\n    grid-row: 3/4;\r\n}\r\nfooter{\r\n    background-color: rgba(144, 144, 236, 0.5); \r\n    width: 100%;\r\n    padding: .5rem;\r\n    border: none;\r\n    text-align: center;\r\n}\r\n.getClick{\r\n    background-color: red;\r\n    color: white;\r\n    transition: ease-in-out 1s;\r\n}\r\n.forAllDiv{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;   \r\n}\r\n.homeDiv{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: .2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    place-items: center;\r\n    gap: 1rem;\r\n}\r\n.homeImgDiv{\r\n    width: 50%;\r\n    height: 60%;\r\n    background: url('../src/img/allBlueMap.jpg') center center;\r\n    background-size: cover;\r\n}\r\n.homeParaDiv{\r\n    width: 90%;\r\n    height: 40%;\r\n    padding: .5rem;\r\n    text-align: center;\r\n}\r\n.homePara{\r\n    text-align: justify;\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.menuDiv{\r\n    padding: .5rem;\r\n    display: none;\r\n    flex: 1;\r\n    gap: 1rem;\r\n}\r\n.menuDiv, .imgSize, .seah2{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n}\r\n.seaDiv, .soDiv, .specialDiv{\r\n    border: 2px solid white;\r\n    width: 33.3%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    display: grid;\r\n    grid-template: 1fr 7fr/ 1fr;   \r\n    place-content: center;\r\n    cursor: pointer; \r\n}\r\n.seaImgDiv, .sobaImgDiv, .specialImgDiv{\r\n    display: flex;\r\n    grid-area: 2/1/3/2;\r\n    padding: 0 1rem 1rem;\r\n}\r\n.seah2{\r\n    grid-area: 1/1/2/2;\r\n    text-align: center;\r\n    color: #000;\r\n    font-size: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;    \r\n}\r\n.specialP{\r\n    display: none;\r\n    grid-area: 2/2/3/3;\r\n    text-align: justify;\r\n    padding: 1rem;\r\n    flex: 1;\r\n}\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/section.js":
/*!************************!*\
  !*** ./src/section.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _src_img_baratie_seafood_rice_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/baratie-seafood-rice.png */ "./src/img/baratie-seafood-rice.png");
/* harmony import */ var _src_img_sanji_soba_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/sanji-soba.png */ "./src/img/sanji-soba.png");
/* harmony import */ var _src_img_strawHat_special_Meal_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/strawHat-special-Meal.png */ "./src/img/strawHat-special-Meal.png");

































// export function allPages(){
//     function HomePage(){
//         const homeDiv = document.createElement('div');
//         homeDiv.classList.add('homeDiv');
//         homeDiv.innerHTML = `
//             <div class="homeImgDiv"></div>
//             <div class="homeParaDiv">
//                 <p class="homePara">The All Blue is a legendary ocean that is yet to appear in the series. There are fish present here from each of the four seas, and to have such a huge resource at one's disposal is the ultimate dream of every chef. There have been several hints in the series that All Blue truly exists.</p>
//             </div>
//         `;
//         return homeDiv;
//     } 

//     function menuPage(){
//         const menuDiv = document.createElement('div');
//         menuDiv.classList.add('menuDiv');
        
//         //For Seafood Images Container
//         const seafoodDiv = document.createElement('div');
//         seafoodDiv.classList.add('seaDiv');
//         seafoodDiv.innerHTML = `
//             <h2 class="seah2">Seafood Rice</h2>
//             <div class="seaImgDiv">
//                 <img src="${seaFood}" alt="Seafood" class="imgSize seaImg">
//             </div>
//         `;

//         const sobaDiv = document.createElement('div');
//         sobaDiv.classList.add('soDiv');
//         sobaDiv.innerHTML = `
//             <h2 class="seah2">Sanji Soba</h2>
//             <div class="sobaImgDiv">
//                 <img src="${soba}" alt="SanjiSoba" class="imgSize sobaImg">
//             </div>
//         `;

//         const specialDiv = document.createElement('div');
//         specialDiv.classList.add('specialDiv');
//         specialDiv.innerHTML = `
//             <h2 class="seah2">Strawhat Meal</h2>
//             <div class="specialImgDiv">
//                 <img src="${special}" alt="Strawhat-Meal" class="imgSize special">
//                 <p class="specialP">The All Blue is a legendary ocean that is yet to appear in the series. There are fish present here from each of the four seas, and to have such a huge resource at one's disposal is the ultimate dream of every chef. There have been several hints in the series that All Blue truly exists. </p>
//             </div>  
//         `;       
//         menuDiv.append(seafoodDiv, sobaDiv, specialDiv);
//         return menuDiv;
//     }
//     return {HomePage, menuPage}

// }

// // Specific Menu is Click
// export const menuClick = (event, menu) => {
//     const allDiv = Array.from(menu.querySelectorAll('div'));
//     const allDivArr = [allDiv[0], allDiv[2], allDiv[4]];
//     if(event.target.alt === 'Seafood'){
//         verify(allDivArr, allDivArr[0]);
//     }
//     else if(event.target.alt === 'SanjiSoba'){
//         verify(allDivArr, allDivArr[1]);
//     }
//     else if(event.target.alt === 'Strawhat-Meal'){
//         verify(allDivArr, allDivArr[2]);
//     }
// }

// function verify(DivArr, spec){
//     const p = document.querySelector('.specialP');
//     DivArr.forEach((key) => {
//         key.style.display = key.style.display === 'none' ? 'grid' : 'none';
//         key.style.width = key.style.width === '33.3%' ? '100%' : '33.3%';
//         key.style.gridTemplate = key.style.gridTemplate === '1fr 7fr / 1fr' ? '1fr 7fr / 1fr 1fr' : '1fr 7fr / 1fr';
//    });
//     spec.style.display = spec.style.display === 'none' ? 'grid' : 'none';
//     spec.style.width = spec.style.width === '33.3%' ? '100%' : '33.3%';
//     p.style.display = p.style.display === 'none' ? 'inline-flex' : 'none';
// }
// export const navgetClicked = (navbtn, home, menu, contact) => {
//     const btnArr = [home, menu, contact];
//     const btnitems = ['forHome', 'forMenu', 'forContact'];
//     navbtn.addEventListener('click', function(event) {
//         if(event.target.id === 'HOME'){
//             btnArr.forEach(key => key.classList.remove('getClick'));
//             home.classList.add('getClick');
//             setDisplay(btnitems[0]);
//        }
//         else if(event.target.id === 'MENU'){
//             btnArr.forEach(key => key.classList.remove('getClick'));
//             menu.classList.add('getClick');
//             setDisplay(btnitems[1]);
//         }
//         else if(event.target.id === 'CONTACT'){
//             btnArr.forEach(key => key.classList.remove('getClick'));
//             contact.classList.add('getClick');
//             setDisplay(btnitems[2]);
//         }
//     });
// }

// const setDisplay = (x) =>{
//     const newHome = document.querySelector('.homeDiv');
//     const newMenu = document.querySelector('.menuDiv');

//     if(x === 'forHome'){
//         newHome.style.display = newHome.style.display = 'none'? 'flex': 'none';
//         newMenu.style.display = newMenu.style.display = 'flex'? 'none': 'flex';
//     }
//     else if(x === 'forMenu'){
//         newHome.style.display = newHome.style.display = 'flex'? 'none': 'flex';
//         newMenu.style.display = newMenu.style.display = 'none'? 'flex': 'none';
//     }
// }







/***/ }),

/***/ "./src/img/allBlue.jpg":
/*!*****************************!*\
  !*** ./src/img/allBlue.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d285651982b4a7853dee.jpg";

/***/ }),

/***/ "./src/img/baratie-seafood-rice.png":
/*!******************************************!*\
  !*** ./src/img/baratie-seafood-rice.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89e1e9bb68fbeace9cf1.png";

/***/ }),

/***/ "./src/img/sanji-soba.png":
/*!********************************!*\
  !*** ./src/img/sanji-soba.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "033a36ddaea141e3a2a6.png";

/***/ }),

/***/ "./src/img/strawHat-special-Meal.png":
/*!*******************************************!*\
  !*** ./src/img/strawHat-special-Meal.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b61223f5cea7e65063f9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/section.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWcvYWxsQmx1ZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5ib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgLyogbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3OyAqL1xyXG59XHJcbi5tYWluQ29ue1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAuMmZyIDVmciAuMmZyO1xyXG59XHJcbi5tYWluLWhlYWRlcntcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC5tYWluQ29ue1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3JjL2ltZy9hbGxCbHVlLmpwZycpIGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjdmciAuMmZyIDdmciAuMWZyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59IFxyXG5tYWluID4gaGVhZGVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAxNDQsIDIzNiwgMC41KTsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcclxufVxyXG5tYWluID4gaGVhZGVyID4gaDF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG59XHJcbnN2Z3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbm5hdntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxubWFpbiA+IG5hdiA+IGJ1dHRvbntcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5tYWluID4gbmF2ID4gYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDFzO1xyXG59XHJcbmJ1dHRvbiwgc2VjdGlvbiwgZm9vdGVyLCAuaG9tZUltZ0RpdiwgLmhvbWVQYXJhRGl2LCAubWVudVBhcmF7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5tYWluID4gc2VjdGlvbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjJyZW07XHJcbiAgICBncmlkLXJvdzogMy80O1xyXG59XHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ0LCAxNDQsIDIzNiwgMC41KTsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5nZXRDbGlja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDFzO1xyXG59XHJcbi5mb3JBbGxEaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7ICAgXHJcbn1cclxuLmhvbWVEaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4ycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcbi5ob21lSW1nRGl2e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1nL2FsbEJsdWVNYXAuanBnJykgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmhvbWVQYXJhRGl2e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhvbWVQYXJhe1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tZW51RGl2e1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxleDogMTtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG4ubWVudURpdiwgLmltZ1NpemUsIC5zZWFoMntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uc2VhRGl2LCAuc29EaXYsIC5zcGVjaWFsRGl2e1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICB3aWR0aDogMzMuMyU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDdmci8gMWZyOyAgIFxyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcclxufVxyXG4uc2VhSW1nRGl2LCAuc29iYUltZ0RpdiwgLnNwZWNpYWxJbWdEaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xyXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XHJcbn1cclxuLnNlYWgye1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcclxufVxyXG4uc3BlY2lhbFB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbiovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdEQUFnRDtJQUNoRDt1QkFDbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixpRUFBdUQ7SUFDdkQsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxSkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC8qIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3OyAqL1xcclxcbn1cXHJcXG4ubWFpbkNvbntcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1nL2FsbEJsdWUuanBnJykgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgLjJmciA1ZnIgLjJmcjtcXHJcXG59XFxyXFxuLm1haW4taGVhZGVye1xcclxcbiAgICBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogLm1haW5Db257XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9zcmMvaW1nL2FsbEJsdWUuanBnJykgY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuN2ZyIC4yZnIgN2ZyIC4xZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59IFxcclxcbm1haW4gPiBoZWFkZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDQsIDE0NCwgMjM2LCAwLjUpOyBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxyXFxufVxcclxcbm1haW4gPiBoZWFkZXIgPiBoMXtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxufVxcclxcbnN2Z3tcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG59XFxyXFxubmF2e1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBncmlkLXJvdzogMi8zO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcbm1haW4gPiBuYXYgPiBidXR0b257XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbm1haW4gPiBuYXYgPiBidXR0b246aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMXM7XFxyXFxufVxcclxcbmJ1dHRvbiwgc2VjdGlvbiwgZm9vdGVyLCAuaG9tZUltZ0RpdiwgLmhvbWVQYXJhRGl2LCAubWVudVBhcmF7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbm1haW4gPiBzZWN0aW9ue1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAuMnJlbTtcXHJcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXHJcXG59XFxyXFxuZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMTQ0LCAyMzYsIDAuNSk7IFxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZ2V0Q2xpY2t7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAxcztcXHJcXG59XFxyXFxuLmZvckFsbERpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwOyAgIFxcclxcbn1cXHJcXG4uaG9tZURpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogLjJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLmhvbWVJbWdEaXZ7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3NyYy9pbWcvYWxsQmx1ZU1hcC5qcGcnKSBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4uaG9tZVBhcmFEaXZ7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaG9tZVBhcmF7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5tZW51RGl2e1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4ubWVudURpdiwgLmltZ1NpemUsIC5zZWFoMntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnNlYURpdiwgLnNvRGl2LCAuc3BlY2lhbERpdntcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAzMy4zJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciA3ZnIvIDFmcjsgICBcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcclxcbn1cXHJcXG4uc2VhSW1nRGl2LCAuc29iYUltZ0RpdiwgLnNwZWNpYWxJbWdEaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtIDFyZW07XFxyXFxufVxcclxcbi5zZWFoMntcXHJcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuLnNwZWNpYWxQe1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHNlYUZvb2QgZnJvbSAnLi4vc3JjL2ltZy9iYXJhdGllLXNlYWZvb2QtcmljZS5wbmcnO1xyXG5pbXBvcnQgc29iYSBmcm9tICcuLi9zcmMvaW1nL3NhbmppLXNvYmEucG5nJztcclxuaW1wb3J0IHNwZWNpYWwgZnJvbSAnLi4vc3JjL2ltZy9zdHJhd0hhdC1zcGVjaWFsLU1lYWwucG5nJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gYWxsUGFnZXMoKXtcclxuLy8gICAgIGZ1bmN0aW9uIEhvbWVQYWdlKCl7XHJcbi8vICAgICAgICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZCgnaG9tZURpdicpO1xyXG4vLyAgICAgICAgIGhvbWVEaXYuaW5uZXJIVE1MID0gYFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZUltZ0RpdlwiPjwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZVBhcmFEaXZcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaG9tZVBhcmFcIj5UaGUgQWxsIEJsdWUgaXMgYSBsZWdlbmRhcnkgb2NlYW4gdGhhdCBpcyB5ZXQgdG8gYXBwZWFyIGluIHRoZSBzZXJpZXMuIFRoZXJlIGFyZSBmaXNoIHByZXNlbnQgaGVyZSBmcm9tIGVhY2ggb2YgdGhlIGZvdXIgc2VhcywgYW5kIHRvIGhhdmUgc3VjaCBhIGh1Z2UgcmVzb3VyY2UgYXQgb25lJ3MgZGlzcG9zYWwgaXMgdGhlIHVsdGltYXRlIGRyZWFtIG9mIGV2ZXJ5IGNoZWYuIFRoZXJlIGhhdmUgYmVlbiBzZXZlcmFsIGhpbnRzIGluIHRoZSBzZXJpZXMgdGhhdCBBbGwgQmx1ZSB0cnVseSBleGlzdHMuPC9wPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICBgO1xyXG4vLyAgICAgICAgIHJldHVybiBob21lRGl2O1xyXG4vLyAgICAgfSBcclxuXHJcbi8vICAgICBmdW5jdGlvbiBtZW51UGFnZSgpe1xyXG4vLyAgICAgICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVEaXYnKTtcclxuICAgICAgICBcclxuLy8gICAgICAgICAvL0ZvciBTZWFmb29kIEltYWdlcyBDb250YWluZXJcclxuLy8gICAgICAgICBjb25zdCBzZWFmb29kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgc2VhZm9vZERpdi5jbGFzc0xpc3QuYWRkKCdzZWFEaXYnKTtcclxuLy8gICAgICAgICBzZWFmb29kRGl2LmlubmVySFRNTCA9IGBcclxuLy8gICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VhaDJcIj5TZWFmb29kIFJpY2U8L2gyPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhSW1nRGl2XCI+XHJcbi8vICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7c2VhRm9vZH1cIiBhbHQ9XCJTZWFmb29kXCIgY2xhc3M9XCJpbWdTaXplIHNlYUltZ1wiPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICBgO1xyXG5cclxuLy8gICAgICAgICBjb25zdCBzb2JhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgc29iYURpdi5jbGFzc0xpc3QuYWRkKCdzb0RpdicpO1xyXG4vLyAgICAgICAgIHNvYmFEaXYuaW5uZXJIVE1MID0gYFxyXG4vLyAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWFoMlwiPlNhbmppIFNvYmE8L2gyPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29iYUltZ0RpdlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3NvYmF9XCIgYWx0PVwiU2FuamlTb2JhXCIgY2xhc3M9XCJpbWdTaXplIHNvYmFJbWdcIj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgYDtcclxuXHJcbi8vICAgICAgICAgY29uc3Qgc3BlY2lhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgIHNwZWNpYWxEaXYuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbERpdicpO1xyXG4vLyAgICAgICAgIHNwZWNpYWxEaXYuaW5uZXJIVE1MID0gYFxyXG4vLyAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWFoMlwiPlN0cmF3aGF0IE1lYWw8L2gyPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY2lhbEltZ0RpdlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3NwZWNpYWx9XCIgYWx0PVwiU3RyYXdoYXQtTWVhbFwiIGNsYXNzPVwiaW1nU2l6ZSBzcGVjaWFsXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNwZWNpYWxQXCI+VGhlIEFsbCBCbHVlIGlzIGEgbGVnZW5kYXJ5IG9jZWFuIHRoYXQgaXMgeWV0IHRvIGFwcGVhciBpbiB0aGUgc2VyaWVzLiBUaGVyZSBhcmUgZmlzaCBwcmVzZW50IGhlcmUgZnJvbSBlYWNoIG9mIHRoZSBmb3VyIHNlYXMsIGFuZCB0byBoYXZlIHN1Y2ggYSBodWdlIHJlc291cmNlIGF0IG9uZSdzIGRpc3Bvc2FsIGlzIHRoZSB1bHRpbWF0ZSBkcmVhbSBvZiBldmVyeSBjaGVmLiBUaGVyZSBoYXZlIGJlZW4gc2V2ZXJhbCBoaW50cyBpbiB0aGUgc2VyaWVzIHRoYXQgQWxsIEJsdWUgdHJ1bHkgZXhpc3RzLiA8L3A+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PiAgXHJcbi8vICAgICAgICAgYDsgICAgICAgXHJcbi8vICAgICAgICAgbWVudURpdi5hcHBlbmQoc2VhZm9vZERpdiwgc29iYURpdiwgc3BlY2lhbERpdik7XHJcbi8vICAgICAgICAgcmV0dXJuIG1lbnVEaXY7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4ge0hvbWVQYWdlLCBtZW51UGFnZX1cclxuXHJcbi8vIH1cclxuXHJcbi8vIC8vIFNwZWNpZmljIE1lbnUgaXMgQ2xpY2tcclxuLy8gZXhwb3J0IGNvbnN0IG1lbnVDbGljayA9IChldmVudCwgbWVudSkgPT4ge1xyXG4vLyAgICAgY29uc3QgYWxsRGl2ID0gQXJyYXkuZnJvbShtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpKTtcclxuLy8gICAgIGNvbnN0IGFsbERpdkFyciA9IFthbGxEaXZbMF0sIGFsbERpdlsyXSwgYWxsRGl2WzRdXTtcclxuLy8gICAgIGlmKGV2ZW50LnRhcmdldC5hbHQgPT09ICdTZWFmb29kJyl7XHJcbi8vICAgICAgICAgdmVyaWZ5KGFsbERpdkFyciwgYWxsRGl2QXJyWzBdKTtcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmFsdCA9PT0gJ1NhbmppU29iYScpe1xyXG4vLyAgICAgICAgIHZlcmlmeShhbGxEaXZBcnIsIGFsbERpdkFyclsxXSk7XHJcbi8vICAgICB9XHJcbi8vICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5hbHQgPT09ICdTdHJhd2hhdC1NZWFsJyl7XHJcbi8vICAgICAgICAgdmVyaWZ5KGFsbERpdkFyciwgYWxsRGl2QXJyWzJdKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gdmVyaWZ5KERpdkFyciwgc3BlYyl7XHJcbi8vICAgICBjb25zdCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWNpYWxQJyk7XHJcbi8vICAgICBEaXZBcnIuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbi8vICAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSBrZXkuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2dyaWQnIDogJ25vbmUnO1xyXG4vLyAgICAgICAgIGtleS5zdHlsZS53aWR0aCA9IGtleS5zdHlsZS53aWR0aCA9PT0gJzMzLjMlJyA/ICcxMDAlJyA6ICczMy4zJSc7XHJcbi8vICAgICAgICAga2V5LnN0eWxlLmdyaWRUZW1wbGF0ZSA9IGtleS5zdHlsZS5ncmlkVGVtcGxhdGUgPT09ICcxZnIgN2ZyIC8gMWZyJyA/ICcxZnIgN2ZyIC8gMWZyIDFmcicgOiAnMWZyIDdmciAvIDFmcic7XHJcbi8vICAgIH0pO1xyXG4vLyAgICAgc3BlYy5zdHlsZS5kaXNwbGF5ID0gc3BlYy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnZ3JpZCcgOiAnbm9uZSc7XHJcbi8vICAgICBzcGVjLnN0eWxlLndpZHRoID0gc3BlYy5zdHlsZS53aWR0aCA9PT0gJzMzLjMlJyA/ICcxMDAlJyA6ICczMy4zJSc7XHJcbi8vICAgICBwLnN0eWxlLmRpc3BsYXkgPSBwLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICdpbmxpbmUtZmxleCcgOiAnbm9uZSc7XHJcbi8vIH1cclxuLy8gZXhwb3J0IGNvbnN0IG5hdmdldENsaWNrZWQgPSAobmF2YnRuLCBob21lLCBtZW51LCBjb250YWN0KSA9PiB7XHJcbi8vICAgICBjb25zdCBidG5BcnIgPSBbaG9tZSwgbWVudSwgY29udGFjdF07XHJcbi8vICAgICBjb25zdCBidG5pdGVtcyA9IFsnZm9ySG9tZScsICdmb3JNZW51JywgJ2ZvckNvbnRhY3QnXTtcclxuLy8gICAgIG5hdmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmlkID09PSAnSE9NRScpe1xyXG4vLyAgICAgICAgICAgICBidG5BcnIuZm9yRWFjaChrZXkgPT4ga2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2dldENsaWNrJykpO1xyXG4vLyAgICAgICAgICAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2dldENsaWNrJyk7XHJcbi8vICAgICAgICAgICAgIHNldERpc3BsYXkoYnRuaXRlbXNbMF0pO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmlkID09PSAnTUVOVScpe1xyXG4vLyAgICAgICAgICAgICBidG5BcnIuZm9yRWFjaChrZXkgPT4ga2V5LmNsYXNzTGlzdC5yZW1vdmUoJ2dldENsaWNrJykpO1xyXG4vLyAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2dldENsaWNrJyk7XHJcbi8vICAgICAgICAgICAgIHNldERpc3BsYXkoYnRuaXRlbXNbMV0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gJ0NPTlRBQ1QnKXtcclxuLy8gICAgICAgICAgICAgYnRuQXJyLmZvckVhY2goa2V5ID0+IGtleS5jbGFzc0xpc3QucmVtb3ZlKCdnZXRDbGljaycpKTtcclxuLy8gICAgICAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdnZXRDbGljaycpO1xyXG4vLyAgICAgICAgICAgICBzZXREaXNwbGF5KGJ0bml0ZW1zWzJdKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3Qgc2V0RGlzcGxheSA9ICh4KSA9PntcclxuLy8gICAgIGNvbnN0IG5ld0hvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZURpdicpO1xyXG4vLyAgICAgY29uc3QgbmV3TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51RGl2Jyk7XHJcblxyXG4vLyAgICAgaWYoeCA9PT0gJ2ZvckhvbWUnKXtcclxuLy8gICAgICAgICBuZXdIb21lLnN0eWxlLmRpc3BsYXkgPSBuZXdIb21lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc/ICdmbGV4JzogJ25vbmUnO1xyXG4vLyAgICAgICAgIG5ld01lbnUuc3R5bGUuZGlzcGxheSA9IG5ld01lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jz8gJ25vbmUnOiAnZmxleCc7XHJcbi8vICAgICB9XHJcbi8vICAgICBlbHNlIGlmKHggPT09ICdmb3JNZW51Jyl7XHJcbi8vICAgICAgICAgbmV3SG9tZS5zdHlsZS5kaXNwbGF5ID0gbmV3SG9tZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnPyAnbm9uZSc6ICdmbGV4JztcclxuLy8gICAgICAgICBuZXdNZW51LnN0eWxlLmRpc3BsYXkgPSBuZXdNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc/ICdmbGV4JzogJ25vbmUnO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9