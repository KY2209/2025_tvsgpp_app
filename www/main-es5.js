(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <div *ngIf=\"loading\" class=\"loading-container\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/share/loading/loading.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/loading/loading.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppShareLoadingLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"loading\">\r\n    <span class=\"loading-icon\"></span>\r\n</div>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'sys-home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sys-home-sys-home-module */
          "sys-home-sys-home-module").then(__webpack_require__.bind(null,
          /*! ./sys-home/sys-home.module */
          "./src/app/sys-home/sys-home.module.ts")).then(function (m) {
            return m.SysHomePageModule;
          });
        }
      }, {
        path: 'ht-dangky',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ht-dangky-ht-dangky-module */
          "ht-dangky-ht-dangky-module").then(__webpack_require__.bind(null,
          /*! ./ht-dangky/ht-dangky.module */
          "./src/app/ht-dangky/ht-dangky.module.ts")).then(function (m) {
            return m.HtDangkyPageModule;
          });
        }
      }, {
        path: 'ht-madonvi',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | ht-madonvi-ht-madonvi-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("ht-madonvi-ht-madonvi-module")]).then(__webpack_require__.bind(null,
          /*! ./ht-madonvi/ht-madonvi.module */
          "./src/app/ht-madonvi/ht-madonvi.module.ts")).then(function (m) {
            return m.HtMadonviPageModule;
          });
        }
      }, {
        path: 'nhaphang',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | nhapkho-nhaphang-nhaphang-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~nhapkho-nhaphang-addnew-nhaphang-addnew-module~nhapkho-nhaphang-nhaphang-module~notification~d60d0523"), __webpack_require__.e("default~nhapkho-nhaphang-addnew-nhaphang-addnew-module~nhapkho-nhaphang-nhaphang-module"), __webpack_require__.e("nhapkho-nhaphang-nhaphang-module")]).then(__webpack_require__.bind(null,
          /*! ./nhapkho/nhaphang/nhaphang.module */
          "./src/app/nhapkho/nhaphang/nhaphang.module.ts")).then(function (m) {
            return m.NhaphangPageModule;
          });
        }
      }, {
        path: 'xuathang',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | xuatkho-xuathang-xuathang-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~bill-bill-list-bill-list-module~xuatkho-xuathang-addnew-xuathang-addnew-module~xuatkho-xuath~971bda02"), __webpack_require__.e("common"), __webpack_require__.e("xuatkho-xuathang-xuathang-module")]).then(__webpack_require__.bind(null,
          /*! ./xuatkho/xuathang/xuathang.module */
          "./src/app/xuatkho/xuathang/xuathang.module.ts")).then(function (m) {
            return m.XuathangPageModule;
          });
        }
      }, {
        path: 'tonkho',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tonkho-tonkho-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~nhapkho-nhaphang-addnew-nhaphang-addnew-module~nhapkho-nhaphang-nhaphang-module~notification~d60d0523"), __webpack_require__.e("tonkho-tonkho-module")]).then(__webpack_require__.bind(null,
          /*! ./tonkho/tonkho.module */
          "./src/app/tonkho/tonkho.module.ts")).then(function (m) {
            return m.TonkhoPageModule;
          });
        }
      }, {
        path: 'nhaphang-addnew',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | nhapkho-nhaphang-addnew-nhaphang-addnew-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~nhapkho-nhaphang-addnew-nhaphang-addnew-module~nhapkho-nhaphang-nhaphang-module~notification~d60d0523"), __webpack_require__.e("default~nhapkho-nhaphang-addnew-nhaphang-addnew-module~nhapkho-nhaphang-nhaphang-module"), __webpack_require__.e("nhapkho-nhaphang-addnew-nhaphang-addnew-module")]).then(__webpack_require__.bind(null,
          /*! ./nhapkho/nhaphang-addnew/nhaphang-addnew.module */
          "./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.module.ts")).then(function (m) {
            return m.NhaphangAddnewPageModule;
          });
        }
      }, {
        path: 'nhaphang-update',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | nhapkho-nhaphang-update-nhaphang-update-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~4e72f4b3"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-index-donvi-index-module~nhapkho-nhaphang-de~a481b6f0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-index-kho-index-module~nhapkho-nhaphang-detail-n~f03d13ee"), __webpack_require__.e("default~nhapkho-nhaphang-update-nhaphang-update-module~xuatkho-xuathang-addnew-xuathang-addnew-module"), __webpack_require__.e("nhapkho-nhaphang-update-nhaphang-update-module")]).then(__webpack_require__.bind(null,
          /*! ./nhapkho/nhaphang-update/nhaphang-update.module */
          "./src/app/nhapkho/nhaphang-update/nhaphang-update.module.ts")).then(function (m) {
            return m.NhaphangUpdatePageModule;
          });
        }
      }, {
        path: 'xuathang-addnew',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | xuatkho-xuathang-addnew-xuathang-addnew-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~4e72f4b3"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-index-donvi-index-module~nhapkho-nhaphang-de~a481b6f0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-index-kho-index-module~nhapkho-nhaphang-detail-n~f03d13ee"), __webpack_require__.e("default~bill-bill-list-bill-list-module~xuatkho-xuathang-addnew-xuathang-addnew-module~xuatkho-xuath~971bda02"), __webpack_require__.e("default~nhapkho-nhaphang-update-nhaphang-update-module~xuatkho-xuathang-addnew-xuathang-addnew-module"), __webpack_require__.e("xuatkho-xuathang-addnew-xuathang-addnew-module")]).then(__webpack_require__.bind(null,
          /*! ./xuatkho/xuathang-addnew/xuathang-addnew.module */
          "./src/app/xuatkho/xuathang-addnew/xuathang-addnew.module.ts")).then(function (m) {
            return m.XuathangAddnewPageModule;
          });
        }
      }, {
        path: 'xuathang-update',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | xuatkho-xuathang-update-xuathang-update-module */
          "xuatkho-xuathang-update-xuathang-update-module").then(__webpack_require__.bind(null,
          /*! ./xuatkho/xuathang-update/xuathang-update.module */
          "./src/app/xuatkho/xuathang-update/xuathang-update.module.ts")).then(function (m) {
            return m.XuathangUpdatePageModule;
          });
        }
      }, {
        path: 'vattu-index',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vattu-vattu-index-vattu-index-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~4e72f4b3"), __webpack_require__.e("vattu-vattu-index-vattu-index-module")]).then(__webpack_require__.bind(null,
          /*! ./vattu/vattu-index/vattu-index.module */
          "./src/app/vattu/vattu-index/vattu-index.module.ts")).then(function (m) {
            return m.VattuIndexPageModule;
          });
        }
      }, {
        path: 'kho-index',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | kho-kho-index-kho-index-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-index-kho-index-module~nhapkho-nhaphang-detail-n~f03d13ee"), __webpack_require__.e("kho-kho-index-kho-index-module")]).then(__webpack_require__.bind(null,
          /*! ./kho/kho-index/kho-index.module */
          "./src/app/kho/kho-index/kho-index.module.ts")).then(function (m) {
            return m.KhoIndexPageModule;
          });
        }
      }, {
        path: 'donvi-index',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | donvi-donvi-index-donvi-index-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-index-donvi-index-module~nhapkho-nhaphang-de~a481b6f0"), __webpack_require__.e("donvi-donvi-index-donvi-index-module")]).then(__webpack_require__.bind(null,
          /*! ./donvi/donvi-index/donvi-index.module */
          "./src/app/donvi/donvi-index/donvi-index.module.ts")).then(function (m) {
            return m.DonviIndexPageModule;
          });
        }
      }, {
        path: 'xuathang-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | xuatkho-xuathang-detail-xuathang-detail-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~4e72f4b3"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-index-donvi-index-module~nhapkho-nhaphang-de~a481b6f0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-index-kho-index-module~nhapkho-nhaphang-detail-n~f03d13ee"), __webpack_require__.e("default~bill-bill-list-bill-list-module~xuatkho-xuathang-addnew-xuathang-addnew-module~xuatkho-xuath~971bda02"), __webpack_require__.e("default~bill-bill-wait-bill-wait-module~nhapkho-nhaphang-detail-nhaphang-detail-module~xuatkho-xuath~c3aecbbf"), __webpack_require__.e("xuatkho-xuathang-detail-xuathang-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./xuatkho/xuathang-detail/xuathang-detail.module */
          "./src/app/xuatkho/xuathang-detail/xuathang-detail.module.ts")).then(function (m) {
            return m.XuathangDetailPageModule;
          });
        }
      }, {
        path: 'bill-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | bill-bill-detail-bill-detail-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~4e72f4b3"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-index-donvi-index-module~nhapkho-nhaphang-de~a481b6f0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-index-kho-index-module~nhapkho-nhaphang-detail-n~f03d13ee"), __webpack_require__.e("bill-bill-detail-bill-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./bill/bill-detail/bill-detail.module */
          "./src/app/bill/bill-detail/bill-detail.module.ts")).then(function (m) {
            return m.BillDetailPageModule;
          });
        }
      }, {
        path: 'bill-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | bill-bill-list-bill-list-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~bill-bill-list-bill-list-module~xuatkho-xuathang-addnew-xuathang-addnew-module~xuatkho-xuath~971bda02"), __webpack_require__.e("common"), __webpack_require__.e("bill-bill-list-bill-list-module")]).then(__webpack_require__.bind(null,
          /*! ./bill/bill-list/bill-list.module */
          "./src/app/bill/bill-list/bill-list.module.ts")).then(function (m) {
            return m.BillListPageModule;
          });
        }
      }, {
        path: 'bill-wait',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | bill-bill-wait-bill-wait-module */
          [__webpack_require__.e("default~bill-bill-wait-bill-wait-module~nhapkho-nhaphang-detail-nhaphang-detail-module~xuatkho-xuath~c3aecbbf"), __webpack_require__.e("common"), __webpack_require__.e("bill-bill-wait-bill-wait-module")]).then(__webpack_require__.bind(null,
          /*! ./bill/bill-wait/bill-wait.module */
          "./src/app/bill/bill-wait/bill-wait.module.ts")).then(function (m) {
            return m.BillWaitPageModule;
          });
        }
      }, {
        path: 'nhaphang-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | nhapkho-nhaphang-detail-nhaphang-detail-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~4e72f4b3"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-index-donvi-index-module~nhapkho-nhaphang-de~a481b6f0"), __webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-index-kho-index-module~nhapkho-nhaphang-detail-n~f03d13ee"), __webpack_require__.e("default~bill-bill-wait-bill-wait-module~nhapkho-nhaphang-detail-nhaphang-detail-module~xuatkho-xuath~c3aecbbf"), __webpack_require__.e("nhapkho-nhaphang-detail-nhaphang-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./nhapkho/nhaphang-detail/nhaphang-detail.module */
          "./src/app/nhapkho/nhaphang-detail/nhaphang-detail.module.ts")).then(function (m) {
            return m.NhaphangDetailPageModule;
          });
        }
      }, {
        path: 'donvi-create',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | donvi-donvi-create-donvi-create-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa"), __webpack_require__.e("donvi-donvi-create-donvi-create-module")]).then(__webpack_require__.bind(null,
          /*! ./donvi/donvi-create/donvi-create.module */
          "./src/app/donvi/donvi-create/donvi-create.module.ts")).then(function (m) {
            return m.DonviCreatePageModule;
          });
        }
      }, {
        path: 'kho-create',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | kho-kho-create-kho-create-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a"), __webpack_require__.e("kho-kho-create-kho-create-module")]).then(__webpack_require__.bind(null,
          /*! ./kho/kho-create/kho-create.module */
          "./src/app/kho/kho-create/kho-create.module.ts")).then(function (m) {
            return m.KhoCreatePageModule;
          });
        }
      }, {
        path: 'test',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | test-test-module */
          "test-test-module").then(__webpack_require__.bind(null,
          /*! ./test/test.module */
          "./src/app/test/test.module.ts")).then(function (m) {
            return m.TestPageModule;
          });
        }
      }, {
        path: 'vattu-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vattu-vattu-list-vattu-list-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~bb627ba1"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-group-product-group-product-module~tonkho-index~82b7df12"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-nuoc-san-xuat-nuoc-san-xuat-module~tonkho-index~bd9ac36b"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-hang-san-xuat-hang-san-xuat-module~tonkho-index~2a96d621"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~fe2a4a93"), __webpack_require__.e("vattu-vattu-list-vattu-list-module")]).then(__webpack_require__.bind(null,
          /*! ./vattu/vattu-list/vattu-list.module */
          "./src/app/vattu/vattu-list/vattu-list.module.ts")).then(function (m) {
            return m.VattuListPageModule;
          });
        }
      }, {
        path: 'vattu-create',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vattu-vattu-create-vattu-create-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~bb627ba1"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-group-product-group-product-module~tonkho-index~82b7df12"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-nuoc-san-xuat-nuoc-san-xuat-module~tonkho-index~bd9ac36b"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-hang-san-xuat-hang-san-xuat-module~tonkho-index~2a96d621"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~fe2a4a93"), __webpack_require__.e("vattu-vattu-create-vattu-create-module")]).then(__webpack_require__.bind(null,
          /*! ./vattu/vattu-create/vattu-create.module */
          "./src/app/vattu/vattu-create/vattu-create.module.ts")).then(function (m) {
            return m.VattuCreatePageModule;
          });
        }
      }, {
        path: 'group-product',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | share-group-product-group-product-module */
          [__webpack_require__.e("default~saphethan-index-saphethan-index-module~share-group-product-group-product-module~tonkho-index~82b7df12"), __webpack_require__.e("share-group-product-group-product-module")]).then(__webpack_require__.bind(null,
          /*! ./share/group-product/group-product.module */
          "./src/app/share/group-product/group-product.module.ts")).then(function (m) {
            return m.GroupProductPageModule;
          });
        }
      }, {
        path: 'hang-san-xuat',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | share-hang-san-xuat-hang-san-xuat-module */
          [__webpack_require__.e("default~saphethan-index-saphethan-index-module~share-hang-san-xuat-hang-san-xuat-module~tonkho-index~2a96d621"), __webpack_require__.e("share-hang-san-xuat-hang-san-xuat-module")]).then(__webpack_require__.bind(null,
          /*! ./share/hang-san-xuat/hang-san-xuat.module */
          "./src/app/share/hang-san-xuat/hang-san-xuat.module.ts")).then(function (m) {
            return m.HangSanXuatPageModule;
          });
        }
      }, {
        path: 'nuoc-san-xuat',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | share-nuoc-san-xuat-nuoc-san-xuat-module */
          [__webpack_require__.e("default~saphethan-index-saphethan-index-module~share-nuoc-san-xuat-nuoc-san-xuat-module~tonkho-index~bd9ac36b"), __webpack_require__.e("share-nuoc-san-xuat-nuoc-san-xuat-module")]).then(__webpack_require__.bind(null,
          /*! ./share/nuoc-san-xuat/nuoc-san-xuat.module */
          "./src/app/share/nuoc-san-xuat/nuoc-san-xuat.module.ts")).then(function (m) {
            return m.NuocSanXuatPageModule;
          });
        }
      }, {
        path: 'dvt-create',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | donvitinh-dvt-create-dvt-create-module */
          "donvitinh-dvt-create-dvt-create-module").then(__webpack_require__.bind(null,
          /*! ./donvitinh/dvt-create/dvt-create.module */
          "./src/app/donvitinh/dvt-create/dvt-create.module.ts")).then(function (m) {
            return m.DvtCreatePageModule;
          });
        }
      }, {
        path: 'notifications-list',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | notifications-list-notifications-list-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("default~nhapkho-nhaphang-addnew-nhaphang-addnew-module~nhapkho-nhaphang-nhaphang-module~notification~d60d0523"), __webpack_require__.e("notifications-list-notifications-list-module")]).then(__webpack_require__.bind(null,
          /*! ./notifications-list/notifications-list.module */
          "./src/app/notifications-list/notifications-list.module.ts")).then(function (m) {
            return m.NotificationsListPageModule;
          });
        }
      }, {
        path: 'notifications-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | notifications-detail-notifications-detail-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("notifications-detail-notifications-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./notifications-detail/notifications-detail.module */
          "./src/app/notifications-detail/notifications-detail.module.ts")).then(function (m) {
            return m.NotificationsDetailPageModule;
          });
        }
      }, {
        path: 'tonkho-index',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tonkho-index-tonkho-index-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~bb627ba1"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-group-product-group-product-module~tonkho-index~82b7df12"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-nuoc-san-xuat-nuoc-san-xuat-module~tonkho-index~bd9ac36b"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-hang-san-xuat-hang-san-xuat-module~tonkho-index~2a96d621"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~fe2a4a93"), __webpack_require__.e("tonkho-index-tonkho-index-module")]).then(__webpack_require__.bind(null,
          /*! ./tonkho-index/tonkho-index.module */
          "./src/app/tonkho-index/tonkho-index.module.ts")).then(function (m) {
            return m.TonkhoIndexPageModule;
          });
        }
      }, {
        path: 'saphethan-index',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | saphethan-index-saphethan-index-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~bb627ba1"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-group-product-group-product-module~tonkho-index~82b7df12"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-nuoc-san-xuat-nuoc-san-xuat-module~tonkho-index~bd9ac36b"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~share-hang-san-xuat-hang-san-xuat-module~tonkho-index~2a96d621"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~fe2a4a93"), __webpack_require__.e("saphethan-index-saphethan-index-module")]).then(__webpack_require__.bind(null,
          /*! ./saphethan-index/saphethan-index.module */
          "./src/app/saphethan-index/saphethan-index.module.ts")).then(function (m) {
            return m.SaphethanIndexPageModule;
          });
        }
      }, {
        path: 'vattu-quocgia',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vattu-vattu-quocgia-vattu-quocgia-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"), __webpack_require__.e("default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~bb627ba1"), __webpack_require__.e("vattu-vattu-quocgia-vattu-quocgia-module")]).then(__webpack_require__.bind(null,
          /*! ./vattu/vattu-quocgia/vattu-quocgia.module */
          "./src/app/vattu/vattu-quocgia/vattu-quocgia.module.ts")).then(function (m) {
            return m.VattuQuocgiaPageModule;
          });
        }
      }, {
        path: 'lienthong',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lienthong-lienthong-module */
          [__webpack_require__.e("default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"), __webpack_require__.e("lienthong-lienthong-module")]).then(__webpack_require__.bind(null,
          /*! ./lienthong/lienthong.module */
          "./src/app/lienthong/lienthong.module.ts")).then(function (m) {
            return m.LienthongPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _service_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service/loading.service */
      "./src/app/service/loading.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(loadingService) {
          _classCallCheck(this, AppComponent);

          this.loadingService = loadingService;
          this.loading = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loadingService.getValue().subscribe(function (value) {
              _this.loading = value;
            }); // this.initializeApp();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _service_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _share_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./share/loading/loading.component */
      "./src/app/share/loading/loading.component.ts");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js"); // import { PrintBillComponent } from './share/print-bill/print-bill.component';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _share_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          mode: 'ios'
        }), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_13__["OneSignal"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__["Printer"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/service/loading.service.ts":
    /*!********************************************!*\
      !*** ./src/app/service/loading.service.ts ***!
      \********************************************/

    /*! exports provided: LoadingService */

    /***/
    function srcAppServiceLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService() {
          _classCallCheck(this, LoadingService);

          this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }

        _createClass(LoadingService, [{
          key: "getValue",
          value: function getValue() {
            return this.loading.asObservable();
          }
        }, {
          key: "setValue",
          value: function setValue(newValue) {
            var _this2 = this;

            setTimeout(function () {
              _this2.loading.next(newValue);
            });
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ctorParameters = function () {
        return [];
      };

      LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoadingService);
      /***/
    },

    /***/
    "./src/app/share/loading/loading.component.scss":
    /*!******************************************************!*\
      !*** ./src/app/share/loading/loading.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppShareLoadingLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loading {\n  background-color: rgba(0, 0, 0, 0.1);\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  z-index: 999999;\n}\n\n.loading-icon {\n  position: absolute;\n  z-index: 99999;\n  top: 45%;\n  left: 45%;\n  width: 50px;\n  height: 50px;\n  border: 3px solid #0060a6;\n  border-bottom-color: #eaeaea;\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  -webkit-animation: rotation 1s linear infinite;\n          animation: rotation 1s linear infinite;\n}\n\n@-webkit-keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media only screen and (max-width: 1400px) {\n  .loading-icon {\n    width: 40px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FBREY7O0FBTUE7RUFDRTtJQUNFLHVCQUFBO0VBSEY7RUFNQTtJQUNFLHlCQUFBO0VBSkY7QUFDRjs7QUFIQTtFQUNFO0lBQ0UsdUJBQUE7RUFIRjtFQU1BO0lBQ0UseUJBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZS9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbn1cclxuXHJcblxyXG5cclxuLmxvYWRpbmctaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIHRvcDogNDUlO1xyXG4gIGxlZnQ6IDQ1JTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwNjBhNjtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWFlYWVhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBhbmltYXRpb246IHJvdGF0aW9uIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuXHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgLmxvYWRpbmctaWNvbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/share/loading/loading.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/share/loading/loading.component.ts ***!
      \****************************************************/

    /*! exports provided: LoadingComponent */

    /***/
    function srcAppShareLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoadingComponent = function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      };

      LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./loading.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/share/loading/loading.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./loading.component.scss */
        "./src/app/share/loading/loading.component.scss"))["default"]]
      })], LoadingComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        urlGpp: "https://".concat(localStorage.getItem('unit'), ".tvsgpp.net/api/")
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Volumes/DATA/APPS/TVSGPP/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map