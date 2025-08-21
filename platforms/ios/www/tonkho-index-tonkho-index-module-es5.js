(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tonkho-index-tonkho-index-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tonkho-index/tonkho-index.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tonkho-index/tonkho-index.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTonkhoIndexTonkhoIndexPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Tồn kho\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon style=\"font-size: 26px;\" name=\"menu-outline\"></ion-icon> -->\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"product-header\">\r\n    <div class=\"product-search\">\r\n      <input (keyup)=\"onSearch($event)\" [(ngModel)]=\"pageInfo.keyword\" type=\"text\"\r\n        placeholder=\"Tìm kiếm tên hàng hóa ...\" style=\"text-align: left; background: white;\">\r\n      <!-- <ion-icon class=\"search-icon\" *ngIf=\"pageInfo.keyword == ''\" name=\"search-outline\"></ion-icon> -->\r\n      <ion-icon (click)=\"deleteSearch()\" *ngIf=\"pageInfo.keyword != ''\" class=\"search-icon2\"\r\n        name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"product-add\">\r\n      <div class=\"synthetic-item2\">\r\n        <div class=\"synthetic-item-left\">\r\n          {{countVattu | number}} hàng hóa\r\n        </div>\r\n        <div (click)=\"openModal()\" class=\"synthetic-item2-right\">\r\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"product\">\r\n    <div (click)=\"getItem(item)\" *ngFor=\"let item of listData; index as i\" class=\"product-item border-b\"\r\n      [class]=\"item.checkHover == true ? 'bg-hover' : ''\">\r\n      <div *ngIf=\"displayImg\" class=\"product-img\">\r\n        <img *ngIf=\"!item.Img\" src=\"../../../assets/images/no-img.jpg\" alt=\"\">\r\n        <img *ngIf=\"item.Img\" [src]=\"item.Img\" alt=\"\">\r\n\r\n      </div>\r\n      <div class=\"product-content\">\r\n        <div class=\"product-content-item\">\r\n          <div class=\"product-content-left product-content-title\">\r\n            {{item.TenVT}} ({{item.MaVT}})\r\n          </div>\r\n          <!-- <div class=\"product-content-right\">\r\n            <button ><ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon></button>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"product-content-item mt-6\">\r\n          <div class=\"product-content-left\">\r\n            <!-- <span>DVT:</span> -->\r\n            Số lô: {{item.Lohang}}\r\n\r\n          </div>\r\n\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <!-- <span>Lượng tồn:</span> -->\r\n              Giá nhập:\r\n              <span class=\"font-bold\">\r\n                {{item.GiaMua | number}}\r\n              </span>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"product-content-item mt-6\">\r\n          <div class=\"product-content-left\">\r\n            <!-- <span>DVT:</span> -->\r\n            Tồn:\r\n            <span class=\"font-bold\">\r\n              {{item.LuongTon}}\r\n            </span>\r\n\r\n          </div>\r\n\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <!-- <span>Lượng tồn:</span> -->\r\n              Giá bán buôn:\r\n              <span class=\"font-bold\">\r\n                {{item.GiaBanSy | number}}\r\n              </span>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"product-content-item mt-6\">\r\n          <div class=\"product-content-left\">\r\n\r\n          </div>\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <!-- <span>Lượng tồn:</span> -->\r\n              Giá bán lẻ:\r\n              <span class=\"font-bold\">\r\n                {{item.GiaBanLe | number}}\r\n              </span>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-infinite-scroll *ngIf=\"!pageInfo.keyword\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Đang tải dữ liệu...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tonkho-index/tonkho-index-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/tonkho-index/tonkho-index-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: TonkhoIndexPageRoutingModule */

    /***/
    function srcAppTonkhoIndexTonkhoIndexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TonkhoIndexPageRoutingModule", function () {
        return TonkhoIndexPageRoutingModule;
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


      var _tonkho_index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tonkho-index.page */
      "./src/app/tonkho-index/tonkho-index.page.ts");

      var routes = [{
        path: '',
        component: _tonkho_index_page__WEBPACK_IMPORTED_MODULE_3__["TonkhoIndexPage"]
      }];

      var TonkhoIndexPageRoutingModule = function TonkhoIndexPageRoutingModule() {
        _classCallCheck(this, TonkhoIndexPageRoutingModule);
      };

      TonkhoIndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TonkhoIndexPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tonkho-index/tonkho-index.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/tonkho-index/tonkho-index.module.ts ***!
      \*****************************************************/

    /*! exports provided: TonkhoIndexPageModule */

    /***/
    function srcAppTonkhoIndexTonkhoIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TonkhoIndexPageModule", function () {
        return TonkhoIndexPageModule;
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


      var _tonkho_index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tonkho-index-routing.module */
      "./src/app/tonkho-index/tonkho-index-routing.module.ts");
      /* harmony import */


      var _tonkho_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tonkho-index.page */
      "./src/app/tonkho-index/tonkho-index.page.ts");

      var TonkhoIndexPageModule = function TonkhoIndexPageModule() {
        _classCallCheck(this, TonkhoIndexPageModule);
      };

      TonkhoIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tonkho_index_routing_module__WEBPACK_IMPORTED_MODULE_5__["TonkhoIndexPageRoutingModule"]],
        declarations: [_tonkho_index_page__WEBPACK_IMPORTED_MODULE_6__["TonkhoIndexPage"]]
      })], TonkhoIndexPageModule);
      /***/
    },

    /***/
    "./src/app/tonkho-index/tonkho-index.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/tonkho-index/tonkho-index.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTonkhoIndexTonkhoIndexPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".product-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.product-search {\n  padding: 0 10px 10px 10px;\n  position: relative;\n  background: var(--background-color);\n  position: relative;\n}\n.product-search input {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.product-search ion-icon {\n  position: absolute;\n  right: 20px;\n  top: 8px;\n  font-size: 22px;\n}\n.product-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.product-img {\n  width: 70px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n.product-img img {\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.product-item {\n  display: flex;\n  padding: 10px;\n}\n.product-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.product-red {\n  border: 1px solid var(--red-dark) !important;\n  color: var(--red-dark) !important;\n}\n.product-content {\n  width: 100%;\n}\n.product-content-item {\n  display: flex;\n  color: var(--text-blue);\n}\n.product-content-left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.product-content-left ion-icon {\n  border: 1px solid gray;\n  border-radius: 3px;\n}\n.product-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n  text-transform: capitalize;\n}\n.product-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.product-content-right {\n  margin-left: auto;\n}\n.product-content-right ion-icon {\n  font-size: 15px;\n}\n.product-content-right button {\n  border: 1px solid var(--primary-color);\n  color: var(--primary-color);\n  padding: 2px 6px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.product-content-sl {\n  display: flex;\n  gap: 10px;\n}\n.product-content-sl ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.product-footer {\n  padding: 10px;\n}\n.product-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  margin-left: auto;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.product-footer-left {\n  display: flex;\n  align-items: center;\n}\n.product-footer-left ion-icon {\n  font-size: 18px;\n}\n.product-footer-form {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.product-footer-number {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: #0663a9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\n.border-b {\n  border-bottom: 1px solid #e7e7e7;\n}\ntable {\n  width: 100%;\n  margin-bottom: 10px;\n}\ntd {\n  padding: 8px 0px;\n}\ntd span {\n  color: var(--background-color);\n  font-weight: 600;\n}\ninput[type=text],\ninput[type=number], input[type=date] {\n  width: 72px;\n  border: 1px solid #a7e9f7;\n  text-align: center;\n  background: #a7e9f7;\n  border-radius: 5px;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9ua2hvLWluZGV4L3Rvbmtoby1pbmRleC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUk7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtBQUxSO0FBU0k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsbUNBQUE7RUFDQSxrQkFBQTtBQVJSO0FBVVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFSWjtBQVdRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFUWjtBQWFJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQVhSO0FBY0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaUjtBQWNRO0VBRUksYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQWJaO0FBaUJJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFmUjtBQWtCSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQWhCUjtBQW1CSTtFQUNJLDRDQUFBO0VBQ0EsaUNBQUE7QUFqQlI7QUFvQkk7RUFDSSxXQUFBO0FBbEJSO0FBb0JRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBbEJaO0FBc0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXBCWjtBQTRCWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUExQmhCO0FBK0JRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQTdCWjtBQWdDUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBOUJaO0FBaUNRO0VBQ0ksaUJBQUE7QUEvQlo7QUFxQ1k7RUFDSSxlQUFBO0FBbkNoQjtBQXNDWTtFQUNJLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXBDaEI7QUF3Q1E7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQXRDWjtBQXdDWTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQXRDaEI7QUE2Q0k7RUFDSSxhQUFBO0FBM0NSO0FBNkNRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBM0NaO0FBOENRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBNUNaO0FBK0NZO0VBQ0ksZUFBQTtBQTdDaEI7QUFrRFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWhEWjtBQW9EUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQWxEWjtBQXdEQTtFQUNJLGdDQUFBO0FBckRKO0FBd0RBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBckRKO0FBd0RBO0VBQ0ksZ0JBQUE7QUFyREo7QUF3REE7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FBckRKO0FBd0RBOztFQUVJLFdBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF0REoiLCJmaWxlIjoic3JjL2FwcC90b25raG8taW5kZXgvdG9ua2hvLWluZGV4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuXHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG4gICAgJi1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJi1zZWFyY2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4IDEwcHggMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS1kYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICAmLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXJlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmVkLWRhcmspICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXNsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgJi1mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYxNjE2MTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgJi1udW1iZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY2M2E5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uYm9yZGVyLWIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxufVxyXG5cclxudGQgc3BhbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgaW5wdXRbdHlwZT1cImRhdGVcIl17XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhN2U5Zjc7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTdlOWY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbn1cclxuXHJcbi8vIGlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgd2lkdGg6IGF1dG87XHJcbi8vIH1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tonkho-index/tonkho-index.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/tonkho-index/tonkho-index.page.ts ***!
      \***************************************************/

    /*! exports provided: TonkhoIndexPage */

    /***/
    function srcAppTonkhoIndexTonkhoIndexPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TonkhoIndexPage", function () {
        return TonkhoIndexPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/AlertService */
      "./src/app/service/AlertService.ts");
      /* harmony import */


      var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/loading.service */
      "./src/app/service/loading.service.ts");
      /* harmony import */


      var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/toastService */
      "./src/app/service/toastService.ts");
      /* harmony import */


      var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/vattu.service */
      "./src/app/service/vattu.service.ts");
      /* harmony import */


      var _vattu_vattu_create_vattu_create_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../vattu/vattu-create/vattu-create.page */
      "./src/app/vattu/vattu-create/vattu-create.page.ts");

      var TonkhoIndexPage = /*#__PURE__*/function () {
        function TonkhoIndexPage(navController, actionSheetController, LoadingService, AlertService, modalController, ToastService, VattuService) {
          _classCallCheck(this, TonkhoIndexPage);

          this.navController = navController;
          this.actionSheetController = actionSheetController;
          this.LoadingService = LoadingService;
          this.AlertService = AlertService;
          this.modalController = modalController;
          this.ToastService = ToastService;
          this.VattuService = VattuService;
          this.listData = [];
          this.listDataSearch = [];
          this.listVattu = [];
          this.page = '';
          this.listExist = [];
          this.timeout = '';
          this.sumThanhTien = 0;
          this.displayImg = false;
          this.keyword = '';
          this.pageInfo = {
            'page': 1,
            'pageSize': 20,
            'keyword': ""
          };
          this.sendItem = {
            "officeid": 1,
            "thoidiem": "2024-04-24"
          };
          this.makho = '';
          this.countIndex = -1;
          this.officeId = 0;
          this.countVattu = 0;
          this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');
        }

        _createClass(TonkhoIndexPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.sendItem.officeid = Number(localStorage.getItem('officeId'));
            var currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 1);
            var nextDate = this.setNumber(currentDate.getDate());
            var nextWeekMonth = this.setNumber(currentDate.getMonth() + 1);
            var nextWeekYear = currentDate.getFullYear();
            this.sendItem.thoidiem = "".concat(nextWeekYear, "-").concat(nextWeekMonth, "-").concat(nextDate);
            this.getVattu();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setNumber",
          value: function setNumber(n) {
            return n < 10 ? '0' + n : n;
          }
        }, {
          key: "getVattu",
          value: function getVattu() {
            var _this = this;

            this.LoadingService.setValue(true);
            this.VattuService.getVatTuTonKho(this.sendItem).subscribe(function (response) {
              // this.VattuService.getVatTuSapHetHan(this.sendItem).subscribe((response: any) => {
              _this.countVattu = response.length;
              console.log("78", response);
              _this.listVattu = response;
              _this.listDataSearch = response;

              _this.getSandVT();

              _this.LoadingService.setValue(false);
            }, function (error) {
              _this.LoadingService.setValue(false);

              console.log('error', error);
            });
          }
        }, {
          key: "getSandVT",
          value: function getSandVT() {
            var listItem = this.listVattu.slice(0, this.pageInfo.page * this.pageInfo.pageSize);
            console.log("91", listItem);
            this.listData = listItem;

            for (var i = 0; i <= this.listData.length - 1; i++) {
              var item = this.listData[i];

              if (item.Img != undefined) {
                if (item.Img.includes("http")) {// console.log("Tìm thấy rồi")
                } else {
                  item.Img = "https://" + localStorage.getItem("unit").toString() + ".tvsgpp.net" + item.Img; // console.log("101", item.Img);
                }
              }
            }
          }
        }, {
          key: "onSearch",
          value: function onSearch(e) {
            var arrPlan = [];
            this.pageInfo.keyword = e.target.value;
            this.pageInfo.page = 1;

            if (!this.pageInfo.keyword) {
              this.deleteSearch();
            } else {
              clearTimeout(this.timeout);
              var $this = this;
              this.timeout = setTimeout(function () {
                $this.listDataSearch.find(function (o, i) {
                  if (o.TenVT && o.TenVT.toLowerCase().includes($this.pageInfo.keyword.toLowerCase()) == true) {
                    arrPlan.push($this.listDataSearch[i]);
                  }
                });
                $this.countVattu = arrPlan.length;
                $this.listData = arrPlan;
              }, 1000);
            }
          }
        }, {
          key: "getItem",
          value: function getItem(item) {
            var _this2 = this;

            this.listData.find(function (o, i) {
              if (o.MaVT == item.MaVT) {
                _this2.listData[i]['checkHover'] = true;
              } else {
                _this2.listData[i]['checkHover'] = false;
              }
            });
          }
        }, {
          key: "deleteSearch",
          value: function deleteSearch() {
            this.pageInfo.keyword = '';
            this.pageInfo.page = 1;
            this.getSandVT();
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(event) {
            var _this3 = this;

            this.pageInfo.page++;
            setTimeout(function () {
              event.target.complete();

              _this3.getSandVT();
            }, 500);
          }
        }, {
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _vattu_vattu_create_vattu_create_page__WEBPACK_IMPORTED_MODULE_7__["VattuCreatePage"],
                        // cssClass: 'halfModal',
                        componentProps: {
                          "isCreate": 'true'
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this4.getVattu(); // this.getUnit('closeModal');

                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.navController.navigateBack(['tabs/tab3']);
          }
        }]);

        return TonkhoIndexPage;
      }();

      TonkhoIndexPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
        }, {
          type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_6__["VattuService"]
        }];
      };

      TonkhoIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tonkho-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tonkho-index.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tonkho-index/tonkho-index.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tonkho-index.page.scss */
        "./src/app/tonkho-index/tonkho-index.page.scss"))["default"]]
      })], TonkhoIndexPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tonkho-index-tonkho-index-module-es5.js.map