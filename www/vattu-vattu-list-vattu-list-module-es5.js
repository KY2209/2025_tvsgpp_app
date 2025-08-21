(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vattu-vattu-list-vattu-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-list/vattu-list.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-list/vattu-list.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVattuVattuListVattuListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Vật tư\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"add-outline\" style=\"font-size: 26px;\"></ion-icon> -->\r\n      </ion-item>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"product-header\">\r\n    <div class=\"product-search\">\r\n      <input (keyup)=\"onSearch($event)\" [(ngModel)]=\"pageInfo.keyword\" type=\"text\" placeholder=\"Tìm kiếm tên vật tư ...\"\r\n        style=\"text-align: left; background: white;\">\r\n      <!-- <ion-icon class=\"search-icon\" *ngIf=\"pageInfo.keyword == ''\" name=\"search-outline\"></ion-icon> -->\r\n      <ion-icon (click)=\"deleteSearch()\" *ngIf=\"pageInfo.keyword != ''\" class=\"search-icon2\"\r\n        name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n    <div class=\"product-add\">\r\n      <div class=\"synthetic-item2\">\r\n        <div class=\"synthetic-item-left\">\r\n          {{countVattu | number}} vật tư trong danh sách\r\n        </div>\r\n        <div (click)=\"addItem('true')\" class=\"synthetic-item2-right\">\r\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n  <div class=\"product\">\r\n    <div (click)=\"getItem(item)\" *ngFor=\"let item of listData; index as i\" class=\"product-item border-b\"\r\n      [class]=\"item.checkHover == true ? 'bg-hover' : ''\">\r\n      <div *ngIf=\"displayImg\" class=\"product-img\">\r\n        <!-- <img *ngIf=\"item.Img\" [src]=\"'data:image/jpeg;base64,'+item.Img\"  alt=\"\"> -->\r\n        <img *ngIf=\"!item.Img\" src=\"../../../assets/images/no-img.jpg\" alt=\"\">\r\n        <img *ngIf=\"item.Img\" [src]=\"item.Img\" alt=\"\">\r\n      </div>\r\n      <div class=\"product-content\">\r\n        <div class=\"product-content-item\">\r\n          <div class=\"product-content-left product-content-title\">\r\n            {{item.TenVT}} - {{item.MaVT}}\r\n          </div>\r\n          <div (click)=\"handleItem(item)\" class=\"product-content-right\">\r\n            <!-- <button > -->\r\n            <!-- <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon> -->\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n            <!-- </button> -->\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"product-content-item mt-6\">\r\n          <div class=\"product-content-left\">\r\n            <span>ĐVT:</span>\r\n            <span>\r\n              {{item.DVT}}\r\n            </span>\r\n\r\n          </div>\r\n\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <span>Giá nhập:</span>\r\n              {{item.GiaMua | number}}\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"product-content-item mt-6\">\r\n          <div class=\"product-content-left\">\r\n            <span>Giá bán lẻ:</span>\r\n            {{item.GiaBanLe | number}}\r\n\r\n          </div>\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <span>Giá bán buôn:</span>\r\n              {{item.GiaBanSy | number}}\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <ion-infinite-scroll *ngIf=\"!pageInfo.keyword\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Đang tải dữ liệu...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/vattu/vattu-list/vattu-list-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/vattu/vattu-list/vattu-list-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: VattuListPageRoutingModule */

    /***/
    function srcAppVattuVattuListVattuListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VattuListPageRoutingModule", function () {
        return VattuListPageRoutingModule;
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


      var _vattu_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vattu-list.page */
      "./src/app/vattu/vattu-list/vattu-list.page.ts");

      var routes = [{
        path: '',
        component: _vattu_list_page__WEBPACK_IMPORTED_MODULE_3__["VattuListPage"]
      }];

      var VattuListPageRoutingModule = function VattuListPageRoutingModule() {
        _classCallCheck(this, VattuListPageRoutingModule);
      };

      VattuListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VattuListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/vattu/vattu-list/vattu-list.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/vattu/vattu-list/vattu-list.module.ts ***!
      \*******************************************************/

    /*! exports provided: VattuListPageModule */

    /***/
    function srcAppVattuVattuListVattuListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VattuListPageModule", function () {
        return VattuListPageModule;
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


      var _vattu_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vattu-list-routing.module */
      "./src/app/vattu/vattu-list/vattu-list-routing.module.ts");
      /* harmony import */


      var _vattu_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vattu-list.page */
      "./src/app/vattu/vattu-list/vattu-list.page.ts");

      var VattuListPageModule = function VattuListPageModule() {
        _classCallCheck(this, VattuListPageModule);
      };

      VattuListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vattu_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["VattuListPageRoutingModule"]],
        declarations: [_vattu_list_page__WEBPACK_IMPORTED_MODULE_6__["VattuListPage"]]
      })], VattuListPageModule);
      /***/
    },

    /***/
    "./src/app/vattu/vattu-list/vattu-list.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/vattu/vattu-list/vattu-list.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVattuVattuListVattuListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".product-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.product-search {\n  padding: 0 10px 10px 10px;\n  position: relative;\n  background: var(--background-color);\n}\n.product-search input {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.product-search ion-icon {\n  position: absolute;\n  right: 18px;\n  top: 9px;\n  font-size: 22px;\n}\n.product-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.product-item {\n  display: flex;\n  padding: 15px 10px;\n}\n.product-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.product-red {\n  border: 1px solid var(--red-dark) !important;\n  color: var(--red-dark) !important;\n}\n.product-img {\n  width: 70px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n.product-img img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.product-content {\n  width: 100%;\n}\n.product-content-item {\n  display: flex;\n}\n.product-content-left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--text-blue);\n}\n.product-content-left span {\n  color: var(--text-blue);\n}\n.product-content-left ion-icon {\n  border: 1px solid gray;\n  border-radius: 3px;\n}\n.product-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n  text-transform: capitalize;\n}\n.product-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.product-content-right {\n  margin-left: auto;\n  color: var(--text-blue);\n}\n.product-content-right span {\n  color: var(--text-blue);\n}\n.product-content-right ion-icon {\n  font-size: 24px;\n}\n.product-content-right button {\n  color: var(--primary-color);\n}\n.product-content-sl {\n  display: flex;\n  gap: 10px;\n}\n.product-content-sl ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.product-footer {\n  padding: 10px;\n}\n.product-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  margin-left: auto;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.product-footer-left {\n  display: flex;\n  align-items: center;\n}\n.product-footer-left ion-icon {\n  font-size: 18px;\n}\n.product-footer-form {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.product-footer-number {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: #0663a9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\ntable {\n  width: 100%;\n  margin-bottom: 10px;\n}\ntd {\n  padding: 8px 0px;\n}\ntd span {\n  color: var(--background-color);\n  font-weight: 600;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date] {\n  width: 72px;\n  border: 1px solid #a7e9f7;\n  text-align: center;\n  background: #a7e9f7;\n  border-radius: 5px;\n  padding: 4px 0;\n}\ninput[type=text]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF0dHUvdmF0dHUtbGlzdC92YXR0dS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBTFI7QUFTSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQVBSO0FBU1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFQWjtBQVVRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFSWjtBQVlJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQVZSO0FBYUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBWlI7QUFlSTtFQUNJLDRDQUFBO0VBQ0EsaUNBQUE7QUFiUjtBQWdCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWRSO0FBZVE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBYlo7QUFpQkk7RUFDSSxXQUFBO0FBZlI7QUFpQlE7RUFDSSxhQUFBO0FBZlo7QUFtQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7QUFqQlo7QUFvQlk7RUFFSSx1QkFBQTtBQW5CaEI7QUFzQlk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBcEJoQjtBQXlCUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUF2Qlo7QUEwQlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQXhCWjtBQTJCUTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7QUF6Qlo7QUEyQlk7RUFDSSx1QkFBQTtBQXpCaEI7QUE0Qlk7RUFDSSxlQUFBO0FBMUJoQjtBQTZCWTtFQUVJLDJCQUFBO0FBNUJoQjtBQXFDUTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBbkNaO0FBcUNZO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBbkNoQjtBQTBDSTtFQUNJLGFBQUE7QUF4Q1I7QUEwQ1E7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF4Q1o7QUEyQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUF6Q1o7QUE0Q1k7RUFDSSxlQUFBO0FBMUNoQjtBQStDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBN0NaO0FBaURRO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBL0NaO0FBcURBO0VBQ0ksZ0NBQUE7QUFsREo7QUFxREE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFsREo7QUFxREE7RUFDSSxnQkFBQTtBQWxESjtBQXFEQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUFsREo7QUFxREE7OztFQUdJLFdBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFuREo7QUFtRUE7RUFDSSxhQUFBO0FBaEVKIiwiZmlsZSI6InNyYy9hcHAvdmF0dHUvdmF0dHUtbGlzdC92YXR0dS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuXHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG4gICAgJi1oZWFkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJi1zZWFyY2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMThweDtcclxuICAgICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtcmVkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQtZGFyaykgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkLWRhcmspICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyBnYXA6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTYxNjE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAmLW51bWJlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC03cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNjYzYTk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5ib3JkZXItYiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG59XHJcblxyXG50ZCBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICB3aWR0aDogNzJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhN2U5Zjc7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTdlOWY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbn1cclxuXHJcbi8vIGlucHV0W3R5cGU9J2RhdGUnXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgd2lkdGg6IGF1dG87XHJcbi8vIH1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/vattu/vattu-list/vattu-list.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/vattu/vattu-list/vattu-list.page.ts ***!
      \*****************************************************/

    /*! exports provided: VattuListPage */

    /***/
    function srcAppVattuVattuListVattuListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VattuListPage", function () {
        return VattuListPage;
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


      var _vattu_create_vattu_create_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../vattu-create/vattu-create.page */
      "./src/app/vattu/vattu-create/vattu-create.page.ts");

      var VattuListPage = /*#__PURE__*/function () {
        function VattuListPage(navController, actionSheetController, LoadingService, AlertService, modalController, ToastService, VattuService) {
          _classCallCheck(this, VattuListPage);

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
          this.countVattu = 0;
          this.keyword = '';
          this.sendVattu = {
            "loainx": "''",
            "khohang": "",
            "banggia": ""
          };
          this.pageInfo = {
            'page': 1,
            'pageSize': 20,
            'keyword': ""
          };
          this.makho = '';
          this.countIndex = -1;
          this.displayImg = false;
          this.getVattu();
          this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');
        }

        _createClass(VattuListPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getVattu",
          value: function getVattu() {
            var _this = this;

            this.LoadingService.setValue(true);
            this.VattuService.getVatTu().subscribe(function (response) {
              _this.listVattu = response;
              _this.countVattu = response.length;
              _this.listDataSearch = response;

              _this.getSandVT();

              _this.LoadingService.setValue(false);

              _this.getNhomVattu();
            }, function (error) {
              _this.LoadingService.setValue(false);

              console.log('error', error);
            });
          }
        }, {
          key: "getSandVT",
          value: function getSandVT() {
            var listItem = this.listVattu.slice(0, this.pageInfo.page * this.pageInfo.pageSize); // console.log('this.listExist333333', this.listExist);
            // console.log('this.listItem54444444', listItem);
            // this.listExist.forEach(function (a) {
            //   a.HanDung = a.HanDung == '1900-01-01' ? "" : a.HanDung;
            //   var index = listItem.findIndex(function (b) {
            //     return b.MaVT == a.MaVT && b.LoHang == a.LoHang;
            //   });
            //   if (index !== -1) {
            //     listItem[index].check = true;
            //     listItem[index].LoHang = a.LoHang ? a.LoHang : "";
            //     listItem[index].HanDung = a.HanDung;
            //     listItem[index].SoLuong = new Intl.NumberFormat().format(a.SoLuong).replace(/\./g, ',');
            //   }
            // });

            this.listData = listItem; // console.log('this.listData', this.listData);

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
          key: "getNhomVattu",
          value: function getNhomVattu() {
            var NhomVT = [];
            var DVT = [];
            var HangSanXuat = [];
            var NuocSanXuat = [];

            for (var i = 0; i < this.listData.length; i++) {
              if (this.listData[i].NhomVT) {
                NhomVT.push(this.listData[i].NhomVT);
              }

              if (this.listData[i].DVT) {
                DVT.push(this.listData[i].DVT);
              }

              if (this.listData[i].HangSanXuat) {
                HangSanXuat.push(this.listData[i].HangSanXuat);
              }

              if (this.listData[i].NuocSanXuat) {
                NuocSanXuat.push(this.listData[i].NuocSanXuat);
              }
            }

            NhomVT = _toConsumableArray(new Set(NhomVT));
            DVT = _toConsumableArray(new Set(DVT));
            HangSanXuat = _toConsumableArray(new Set(HangSanXuat));
            NuocSanXuat = _toConsumableArray(new Set(NuocSanXuat));
            localStorage.setItem('NhomVT', JSON.stringify(NhomVT));
            localStorage.setItem('DVT', JSON.stringify(DVT));
            localStorage.setItem('HangSanXuat', JSON.stringify(HangSanXuat));
            localStorage.setItem('NuocSanXuat', JSON.stringify(NuocSanXuat));
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
                  if (o.TenVT.toLowerCase().includes($this.pageInfo.keyword.toLowerCase()) == true) {
                    arrPlan.push($this.listDataSearch[i]);
                  }
                }); // $this.listExist.forEach(function (a) {
                //   var index = arrPlan.findIndex(function (b) {
                //     return b.MaVT == a.MaVT;
                //   });
                //   if (index !== -1) {
                //     arrPlan[index].check = true;
                //     arrPlan[index].LoHang = a.LoHang ? a.LoHang : "";
                //     arrPlan[index].HanDung = a.HanDung == '1900-01-01' ? "" : a.HanDung;
                //     arrPlan[index].SoLuong = new Intl.NumberFormat().format(a.SoLuong).replace(/\./g, ',');
                //   }
                // });

                $this.countVattu = arrPlan.length;
                $this.listData = arrPlan; // console.log(' $this.listDataSearch ',$this.listDataSearch );
                // console.log(' $this.listData ',  $this.listData );
              }, 1000);
            }
          }
        }, {
          key: "getItem",
          value: function getItem(item) {
            var _this2 = this;

            this.listData.find(function (o, i) {
              if (o.VatTuID == item.VatTuID) {
                _this2.listData[i]['checkHover'] = true;
              } else {
                _this2.listData[i]['checkHover'] = false;
              }
            });
          }
        }, {
          key: "handleItem",
          value: function handleItem(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: [{
                          text: 'Sửa vật tư',
                          icon: 'create-outline',
                          handler: function handler() {
                            _this3.addItem('false', item);
                          }
                        }, {
                          text: 'Xóa vật tư',
                          cssClass: 'buttonSheetDelete',
                          icon: 'trash',
                          handler: function handler() {
                            _this3.deleteUnit(item.VatTuID);
                          }
                        }, {
                          text: 'Đóng',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context.sent;
                      role = _yield$actionSheet$on.role;

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addItem",
          value: function addItem(isCreate, item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _vattu_create_vattu_create_page__WEBPACK_IMPORTED_MODULE_7__["VattuCreatePage"],
                        // cssClass: 'halfModal',
                        componentProps: {
                          "isCreate": isCreate,
                          "vatTuId": item ? item.MaVT : '' // "page": this.page

                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this4.getVattu(); // this.getUnit('closeModal');

                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteUnit",
          value: function deleteUnit(id) {
            var _this5 = this;

            this.AlertService.presentAlert("X\xE1c nh\u1EADn x\xF3a v\u1EADt t\u01B0?").then(function (res) {
              if (res == 'true') {
                _this5.LoadingService.setValue(true);

                _this5.VattuService.deleteVattu(id).subscribe(function (response) {
                  var res = JSON.parse(response._body);
                  console.log('response', response);

                  if (res.code == 0) {
                    _this5.ToastService.successToast('Xóa vật tư thành công!');

                    _this5.getVattu();
                  } else {
                    _this5.ToastService.errorToast(res.message);
                  }

                  _this5.LoadingService.setValue(false);
                }, function (error) {
                  setTimeout(function () {
                    _this5.LoadingService.setValue(false);

                    console.log('error', error);
                  }, 1000);
                });
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
            var _this6 = this;

            this.pageInfo.page++;
            setTimeout(function () {
              event.target.complete();

              _this6.getSandVT();
            }, 500);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.navController.navigateBack(['tabs/tab3']);
          }
        }]);

        return VattuListPage;
      }();

      VattuListPage.ctorParameters = function () {
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

      VattuListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vattu-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vattu-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-list/vattu-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vattu-list.page.scss */
        "./src/app/vattu/vattu-list/vattu-list.page.scss"))["default"]]
      })], VattuListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vattu-vattu-list-vattu-list-module-es5.js.map