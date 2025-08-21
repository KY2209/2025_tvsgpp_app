(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xuatkho-xuathang-update-xuathang-update-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-update/xuathang-update.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-update/xuathang-update.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppXuatkhoXuathangUpdateXuathangUpdatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>xuathang-update</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-update/xuathang-update-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-update/xuathang-update-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: XuathangUpdatePageRoutingModule */

    /***/
    function srcAppXuatkhoXuathangUpdateXuathangUpdateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XuathangUpdatePageRoutingModule", function () {
        return XuathangUpdatePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _xuathang_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./xuathang-update.page */
      "./src/app/xuatkho/xuathang-update/xuathang-update.page.ts");

      var routes = [{
        path: '',
        component: _xuathang_update_page__WEBPACK_IMPORTED_MODULE_3__["XuathangUpdatePage"]
      }];

      var XuathangUpdatePageRoutingModule = function XuathangUpdatePageRoutingModule() {
        _classCallCheck(this, XuathangUpdatePageRoutingModule);
      };

      XuathangUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], XuathangUpdatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-update/xuathang-update.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-update/xuathang-update.module.ts ***!
      \*******************************************************************/

    /*! exports provided: XuathangUpdatePageModule */

    /***/
    function srcAppXuatkhoXuathangUpdateXuathangUpdateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XuathangUpdatePageModule", function () {
        return XuathangUpdatePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _xuathang_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./xuathang-update-routing.module */
      "./src/app/xuatkho/xuathang-update/xuathang-update-routing.module.ts");
      /* harmony import */


      var _xuathang_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./xuathang-update.page */
      "./src/app/xuatkho/xuathang-update/xuathang-update.page.ts");

      var XuathangUpdatePageModule = function XuathangUpdatePageModule() {
        _classCallCheck(this, XuathangUpdatePageModule);
      };

      XuathangUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _xuathang_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["XuathangUpdatePageRoutingModule"]],
        declarations: [_xuathang_update_page__WEBPACK_IMPORTED_MODULE_6__["XuathangUpdatePage"]]
      })], XuathangUpdatePageModule);
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-update/xuathang-update.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-update/xuathang-update.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppXuatkhoXuathangUpdateXuathangUpdatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3h1YXRraG8veHVhdGhhbmctdXBkYXRlL3h1YXRoYW5nLXVwZGF0ZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-update/xuathang-update.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-update/xuathang-update.page.ts ***!
      \*****************************************************************/

    /*! exports provided: XuathangUpdatePage */

    /***/
    function srcAppXuatkhoXuathangUpdateXuathangUpdatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XuathangUpdatePage", function () {
        return XuathangUpdatePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var XuathangUpdatePage = /*#__PURE__*/function () {
        function XuathangUpdatePage() {
          _classCallCheck(this, XuathangUpdatePage);
        }

        _createClass(XuathangUpdatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return XuathangUpdatePage;
      }();

      XuathangUpdatePage.ctorParameters = function () {
        return [];
      };

      XuathangUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuathang-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./xuathang-update.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-update/xuathang-update.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./xuathang-update.page.scss */
        "./src/app/xuatkho/xuathang-update/xuathang-update.page.scss"))["default"]]
      })], XuathangUpdatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=xuatkho-xuathang-update-xuathang-update-module-es5.js.map