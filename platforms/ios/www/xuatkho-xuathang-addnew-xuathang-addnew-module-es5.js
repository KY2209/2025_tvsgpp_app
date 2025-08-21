(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xuatkho-xuathang-addnew-xuathang-addnew-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppXuatkhoXuathangAddnewXuathangAddnewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      {{title}} phiếu\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item (click)=\"submit()\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"create-outline\"></ion-icon> -->\r\n        <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <div class=\"import-card\">\r\n    <table>\r\n      <tr>\r\n        <td>Loại phiếu</td>\r\n        <td>\r\n          <ion-input [(ngModel)]=\"DienGiai\" [disabled]=\"true\"></ion-input>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>Đơn vị</td>\r\n        <td>\r\n          <ion-input (click)=\"openDonvi()\" [(ngModel)]=\"displayItem.DVXuat\"></ion-input>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>Kho hàng <span>*</span></td>\r\n        <td>\r\n          <ion-input (click)=\"openKho()\" [(ngModel)]=\"displayItem.KhoXuat\"></ion-input>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"submitForm != 0 && !displayItem.KhoXuat\">\r\n        <td>\r\n        </td>\r\n        <td>\r\n          <div class=\"text-err\">Trường bắt buộc nhập</div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>HTTT</td>\r\n        <td>\r\n          <ion-input (click)=\"openHttt()\" [(ngModel)]=\"display_httt\"></ion-input>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngFor=\"let item of listFormItem; index as i\">\r\n    <div [id]=\"'item'+i\">\r\n      <app-xuathang-item \r\n        [makho]=\"makho\" \r\n        [banggia]=\"banggia\" \r\n        [isCreate]=\"isCreate\" \r\n        [listVattu]=\"listVattu\" \r\n        [index]=\"i\" \r\n        [submitForm]=\"submitForm\"\r\n        [data]=\"item\" \r\n        [httt]=\"send_httt\" \r\n        [indexOpen]=\"index\" \r\n        (sendData)=\"getData($event)\" \r\n        (sendIndex)=\"getIndex($event)\"\r\n        (sendDelete)=\"getDelete($event)\">\r\n      </app-xuathang-item>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"addForm()\" class=\"import-add\">\r\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    Thêm hàng hóa\r\n  </div>\r\n\r\n  <div id=\"myDiv\" class=\"printBill\"> \r\n    <app-print-bill [data]=\"itemDetail2\"></app-print-bill>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div style=\"display: flex; padding: 0 6px;\">\r\n      <div><span style=\"color: var(--primary-color);\">{{this.listFormItem.length}}</span> mặt hàng</div>\r\n      <div style=\"margin-left: auto;\">Tổng: <span style=\"color: var(--primary-color);\">{{sumMoney | number}}</span></div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-addnew/xuathang-addnew-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-addnew/xuathang-addnew-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: XuathangAddnewPageRoutingModule */

    /***/
    function srcAppXuatkhoXuathangAddnewXuathangAddnewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XuathangAddnewPageRoutingModule", function () {
        return XuathangAddnewPageRoutingModule;
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


      var _xuathang_addnew_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./xuathang-addnew.page */
      "./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.ts");

      var routes = [{
        path: '',
        component: _xuathang_addnew_page__WEBPACK_IMPORTED_MODULE_3__["XuathangAddnewPage"]
      }];

      var XuathangAddnewPageRoutingModule = function XuathangAddnewPageRoutingModule() {
        _classCallCheck(this, XuathangAddnewPageRoutingModule);
      };

      XuathangAddnewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], XuathangAddnewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-addnew/xuathang-addnew.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-addnew/xuathang-addnew.module.ts ***!
      \*******************************************************************/

    /*! exports provided: XuathangAddnewPageModule */

    /***/
    function srcAppXuatkhoXuathangAddnewXuathangAddnewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XuathangAddnewPageModule", function () {
        return XuathangAddnewPageModule;
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


      var _xuathang_addnew_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./xuathang-addnew-routing.module */
      "./src/app/xuatkho/xuathang-addnew/xuathang-addnew-routing.module.ts");
      /* harmony import */


      var _xuathang_addnew_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./xuathang-addnew.page */
      "./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.ts");
      /* harmony import */


      var _xuathang_item_xuathang_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../xuathang-item/xuathang-item.component */
      "./src/app/xuatkho/xuathang-item/xuathang-item.component.ts");
      /* harmony import */


      var src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/share/print-bill/print-bill.component */
      "./src/app/share/print-bill/print-bill.component.ts");

      var XuathangAddnewPageModule = function XuathangAddnewPageModule() {
        _classCallCheck(this, XuathangAddnewPageModule);
      };

      XuathangAddnewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _xuathang_addnew_routing_module__WEBPACK_IMPORTED_MODULE_5__["XuathangAddnewPageRoutingModule"]],
        declarations: [_xuathang_addnew_page__WEBPACK_IMPORTED_MODULE_6__["XuathangAddnewPage"], _xuathang_item_xuathang_item_component__WEBPACK_IMPORTED_MODULE_7__["XuathangItemComponent"], src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_8__["PrintBillComponent"]]
      })], XuathangAddnewPageModule);
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppXuatkhoXuathangAddnewXuathangAddnewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #f9f9f9 ;\n}\n\n.import-card {\n  background: white;\n  margin-top: 15px;\n  padding: 0 10px 15px;\n}\n\n.import-title {\n  display: flex;\n  line-height: 28px;\n}\n\n.import-right {\n  margin-left: auto;\n}\n\n.import-right ion-icon {\n  color: var(--primary-color);\n}\n\n.import-product {\n  margin-top: 12px;\n}\n\n.import-item {\n  padding: 10px 15px;\n}\n\n.import-primary {\n  color: var(--primary-color);\n}\n\n.import-add {\n  display: flex;\n  /* align-items: center; */\n  gap: 5px;\n  color: #196fb4;\n  padding: 10px;\n}\n\n.import-add ion-icon {\n  margin-left: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntd {\n  padding-top: 15px;\n  min-width: 100px;\n}\n\ntd span {\n  color: red;\n}\n\nion-input {\n  width: 100%;\n  padding: 8px 10px 8px;\n  background: #F0F5FF;\n  border-radius: 5px;\n  border: 1px solid #F0F5FF;\n}\n\nion-footer {\n  border-top: 1px solid #d9d9d9;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveHVhdGtoby94dWF0aGFuZy1hZGRuZXcveHVhdGhhbmctYWRkbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRkE7RUFDSSxzQkFBQTtBQTlGSjs7QUFxR0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFsR1I7O0FBcUdJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBbkdSOztBQXNHSTtFQUNJLGlCQUFBO0FBcEdSOztBQXNHUTtFQUNJLDJCQUFBO0FBcEdaOztBQXdHSTtFQUNJLGdCQUFBO0FBdEdSOztBQXlHSTtFQUNJLGtCQUFBO0FBdkdSOztBQTBHSTtFQUNJLDJCQUFBO0FBeEdSOztBQTJHSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQXpHUjs7QUEyR1E7RUFDSSxpQkFBQTtBQXpHWjs7QUE4R0E7RUFDSSxXQUFBO0FBM0dKOztBQThHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUEzR0o7O0FBNkdJO0VBQ0ksVUFBQTtBQTNHUjs7QUErR0E7RUFDSSxXQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUE3R0o7O0FBZ0hBO0VBQ0ksNkJBQUE7QUE3R0o7O0FBK0dBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBNUdKIiwiZmlsZSI6InNyYy9hcHAveHVhdGtoby94dWF0aGFuZy1hZGRuZXcveHVhdGhhbmctYWRkbmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5pbXBvcnR7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4vLyAgICAgJi10aXRsZXtcclxuLy8gICAgICAgICBjb2xvcjogIzA3NjRhZTtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICBtYXJnaW46IDE1cHggMDsgICAgXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1pY29ue1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAmLWxhYmVse1xyXG4vLyAgICAgICAgIHNwYW57XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtaXRlbXtcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyYXk7XHJcbi8vICAgICAgICAgcGFkZGluZzogMHB4IDAgMTBweDtcclxuXHJcbi8vICAgICAgICAgJi10aXRsZXtcclxuLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICAgICAgICAgICAgIHNwYW57XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG5cclxuXHJcbi8vICAgICAmLWxhYmVsMntcclxuXHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4vLyAgICAgICAgIHNwYW57XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBsYWJlbHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1hZGR7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4vLyAgICAgICAgIGdhcDogNXB4O1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMTk2ZmI0O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4vLyAgICAgICAgIGlvbi1pY29ue1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1mb290ZXJ7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTJweDtcclxuLy8gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1yaWdodHtcclxuLy8gICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7ICBcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgJi1sZWZ0e1xyXG4vLyAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7ICBcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgIHRke1xyXG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB0YWJsZXtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcblxyXG4vLyBpbnB1dHtcclxuLy8gd2lkdGg6IDEwMCU7XHJcbi8vIHBhZGRpbmc6IDhweCAxMHB4IDhweDtcclxuLy8gYmFja2dyb3VuZDogI0YwRjVGRjtcclxuLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyBib3JkZXI6IDFweCBzb2xpZCAjRjBGNUZGO1xyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5ZjlcclxufVxyXG5cclxuLmltcG9ydCB7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG5cclxuICAgICYtY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtcmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1wcm9kdWN0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtcHJpbWFyeSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgICYtYWRkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMxOTZmYjQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcblxyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMEY1RkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGNUZGO1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbn1cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.ts ***!
      \*****************************************************************/

    /*! exports provided: XuathangAddnewPage */

    /***/
    function srcAppXuatkhoXuathangAddnewXuathangAddnewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XuathangAddnewPage", function () {
        return XuathangAddnewPage;
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


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/donvi/donvi-index/donvi-index.page */
      "./src/app/donvi/donvi-index/donvi-index.page.ts");
      /* harmony import */


      var src_app_function_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/function.service */
      "./src/app/function.service.ts");
      /* harmony import */


      var src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/kho/kho-index/kho-index.page */
      "./src/app/kho/kho-index/kho-index.page.ts");
      /* harmony import */


      var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/AlertService */
      "./src/app/service/AlertService.ts");
      /* harmony import */


      var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/service/global.service */
      "./src/app/service/global.service.ts");
      /* harmony import */


      var src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/service/kho.service */
      "./src/app/service/kho.service.ts");
      /* harmony import */


      var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/service/loading.service */
      "./src/app/service/loading.service.ts");
      /* harmony import */


      var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/service/toastService */
      "./src/app/service/toastService.ts");
      /* harmony import */


      var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/service/unit.service */
      "./src/app/service/unit.service.ts");
      /* harmony import */


      var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/service/vattu.service */
      "./src/app/service/vattu.service.ts");
      /* harmony import */


      var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/service/xuatkho.service */
      "./src/app/service/xuatkho.service.ts");

      var XuathangAddnewPage = /*#__PURE__*/function () {
        function XuathangAddnewPage(modalController, // private navParams: NavParams,
        GlobalService, XuatkhoService, VattuService, LoadingService, route, ToastService, router, navController, actionSheetController, KhoService, UnitService, cdr, FunctionService, AlertService, printer) {
          _classCallCheck(this, XuathangAddnewPage);

          this.modalController = modalController;
          this.GlobalService = GlobalService;
          this.XuatkhoService = XuatkhoService;
          this.VattuService = VattuService;
          this.LoadingService = LoadingService;
          this.route = route;
          this.ToastService = ToastService;
          this.router = router;
          this.navController = navController;
          this.actionSheetController = actionSheetController;
          this.KhoService = KhoService;
          this.UnitService = UnitService;
          this.cdr = cdr;
          this.FunctionService = FunctionService;
          this.AlertService = AlertService;
          this.printer = printer;
          this.listFormItem = [{
            'item': 1
          }];
          this.displayItem = {
            "nam_du_lieu": "",
            "LoaiCTID": 2,
            "ChungTuID": 0,
            "BanTheoDon": false,
            "SoCT": "",
            "ThoiDiem": "",
            "DienGiai": "",
            "DVXuat": "",
            "KhoXuat": "",
            "ChiTietHang": []
          };
          this.sendItem = {
            "nam_du_lieu": "",
            "LoaiCTID": 2,
            "ChungTuID": 0,
            "BanTheoDon": false,
            "SoCT": "",
            "ThoiDiem": "",
            "DienGiai": "",
            "DVXuat": "",
            "KhoXuat": "",
            "ChiTietHang": []
          };
          this.sendVattu = {
            "loainx": "''",
            "khohang": "",
            "banggia": ""
          };
          this.send_httt = 'TM';
          this.display_httt = 'Tiền mặt';
          this.isCreate = 'false';
          this.chungchi = {
            ChungTuID: '',
            nam_du_lieu: ''
          };
          this.countNumber = 0;
          this.title = "Thêm";
          this.itemDetail = '';
          this.itemDetail2 = '';
          this.makho = '';
          this.backPage = '';
          this.submitForm = 0;
          this.index = 0;
          this.DienGiai = '';
          this.LoaiCTID = 0;
          this.sumMoney = 0;
          this.listKho = [];
          this.listLoaiCT = [];
          this.listVattu = [];
          this.listUnit = [];
          this.banggia = '';
        }

        _createClass(XuathangAddnewPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            console.log('------ionViewDidEnter');
            this.route.queryParams.subscribe(function (params) {
              _this.isCreate = params.isCreate;
              _this.sendItem.LoaiCTID = Number(params.LoaiCTID);
              _this.displayItem.LoaiCTID = Number(params.LoaiCTID);
              _this.DienGiai = params.DienGiai;

              if (params.isCreate == 'true') {
                var now = new Date();
                var year = now.getFullYear();
                var hours = now.getHours();
                var minute = now.getMinutes();
                _this.sendItem.nam_du_lieu = year.toString();
                _this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + "".concat(_this.convNumber(hours), ":").concat(_this.convNumber(minute), ":00");
                _this.sendItem.ChungTuID = new Date().getTime();
                _this.sendItem.SoCT = "XBL".concat(_this.sendItem.ChungTuID);
                _this.chungchi.ChungTuID = _this.sendItem.ChungTuID;
                _this.chungchi.nam_du_lieu = _this.sendItem.nam_du_lieu;
              } else {
                _this.title = "Sửa";
                _this.chungchi.ChungTuID = params.ChungTuID;
                _this.chungchi.nam_du_lieu = params.nam_du_lieu;
                _this.backPage = params.page;

                if (params.index) {
                  _this.index = params.index;

                  _this.scrollIntoView("item".concat(_this.index));
                }
              }
            });

            if (this.isCreate == 'false') {
              this.getChungTuDetail();
            } else {// this.resetItem();
            }

            this.getLoaiCT();
            this.getUnit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getKho",
          value: function getKho() {
            var _this2 = this;

            this.KhoService.getKho().subscribe(function (response) {
              _this2.listKho = response;

              if (_this2.isCreate == 'true') {
                _this2.makho = response[0].MaKho;
                _this2.displayItem.KhoXuat = response[0].TenKho;
                _this2.sendItem.KhoXuat = response[0].MaKho;
              }

              _this2.getVattu();
            }, function (error) {
              setTimeout(function () {
                console.log('error', error);
              }, 1000);
            });
          }
        }, {
          key: "getUnit",
          value: function getUnit() {
            var _this3 = this;

            this.UnitService.getUnit().subscribe(function (response) {
              _this3.listUnit = response;
            }, function (error) {
              setTimeout(function () {
                console.log('error', error);
              }, 1000);
            });
          }
        }, {
          key: "getVattu",
          value: function getVattu() {
            var _this4 = this;

            this.sendVattu.banggia = this.banggia;
            this.sendVattu.khohang = this.sendItem.KhoXuat;
            this.VattuService.GetListVT(this.sendVattu).subscribe(function (response) {
              _this4.listVattu = response;
            }, function (error) {
              console.log('error', error);
            });
          }
        }, {
          key: "getLoaiCT",
          value: function getLoaiCT() {
            var _this5 = this;

            this.FunctionService.getLoaiCT().subscribe(function (response) {
              for (var i = 0; i < response.length; i++) {
                if (response[i].LoaiCTID == _this5.sendItem.LoaiCTID) {
                  _this5.banggia = response[i].BangGia;
                  break;
                }
              }

              _this5.getKho();
            }, function (error) {
              console.log('error', error);
            });
          }
        }, {
          key: "resetItem",
          value: function resetItem() {
            var _this6 = this;

            this.displayItem = {
              "nam_du_lieu": "",
              "LoaiCTID": this.sendItem.LoaiCTID,
              "ChungTuID": 0,
              "BanTheoDon": false,
              "SoCT": "",
              "ThoiDiem": "",
              "DienGiai": "",
              "DVXuat": this.displayItem.DVXuat,
              "KhoXuat": this.displayItem.KhoXuat,
              "ChiTietHang": []
            };
            this.sendItem = {
              "nam_du_lieu": "",
              "LoaiCTID": this.sendItem.LoaiCTID,
              "ChungTuID": 0,
              "BanTheoDon": false,
              "SoCT": "",
              "ThoiDiem": "",
              "DienGiai": "",
              "DVXuat": this.sendItem.DVXuat,
              "KhoXuat": this.sendItem.KhoXuat,
              "ChiTietHang": []
            };
            this.listFormItem = [{
              'item': 1
            }];
            var now = new Date();
            var year = now.getFullYear();
            var hours = now.getHours();
            var minute = now.getMinutes();
            this.sendItem.nam_du_lieu = year.toString();
            this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + "".concat(this.convNumber(hours), ":").concat(this.convNumber(minute), ":00");
            this.sumMoney = 0;
            this.sendItem.ChungTuID = new Date().getTime();
            this.sendItem.SoCT = "XBL".concat(this.sendItem.ChungTuID);
            setTimeout(function () {
              _this6.chungchi.ChungTuID = _this6.sendItem.ChungTuID;
              _this6.chungchi.nam_du_lieu = _this6.sendItem.nam_du_lieu;
            }, 4000);
          }
        }, {
          key: "scrollIntoView",
          value: function scrollIntoView(position) {
            setTimeout(function () {
              var element = document.getElementById(position);
              element === null || element === void 0 ? void 0 : element.scrollIntoView({
                behavior: 'auto'
              });
            }, 1000);
          }
        }, {
          key: "getChungTuDetail",
          value: function getChungTuDetail() {
            var _this7 = this;

            this.LoadingService.setValue(true);
            this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe(function (response) {
              _this7.itemDetail = response[0];
              _this7.makho = response[0].KhoXuat;
              _this7.displayItem.KhoXuat = response[0]._TenKhoXuat;
              _this7.displayItem.DVXuat = response[0]._TenDVXuat;
              _this7.listFormItem = response[0].ChiTietHang;
              _this7.sendItem.BanTheoDon = response[0].BanTheoDon;
              _this7.sendItem.ChungTuID = response[0].ChungTuID;
              _this7.sendItem.DVXuat = response[0].DVXuat;
              _this7.sendItem.KhoXuat = response[0].KhoXuat;
              _this7.sendItem.LoaiCTID = response[0].LoaiCTID;
              _this7.sendItem.SoCT = response[0].SoCT;
              _this7.sendItem.ThoiDiem = response[0].ThoiDiem;
              _this7.sendItem.nam_du_lieu = _this7.chungchi.nam_du_lieu;
              console.log('response1111', response); // this.LoadingService.setValue(false);

              _this7.LoadingService.setValue(false);
            }, function (error) {
              console.log('error', error);

              _this7.LoadingService.setValue(false);
            });
          }
        }, {
          key: "getChungTuDetail2",
          value: function getChungTuDetail2() {
            var _this8 = this;

            // this.LoadingService.setValue(true);
            console.log('this.chungchi', this.chungchi);
            this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe(function (response) {
              _this8.itemDetail2 = response[0];

              _this8.cdr.detectChanges();

              setTimeout(function () {
                _this8.LoadingService.setValue(false);

                _this8.openPrint();
              }, 3000);
            }, function (error) {
              console.log('error', error);

              _this8.LoadingService.setValue(false);
            });
          }
        }, {
          key: "convNumber",
          value: function convNumber(number) {
            return number < 10 ? '0' + number : number;
          }
        }, {
          key: "addForm",
          value: function addForm() {
            this.listFormItem.push({
              item: 1
            });
            this.index = this.listFormItem.length - 1;
          }
        }, {
          key: "openDonvi",
          value: function openDonvi() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_5__["DonviIndexPage"],
                        cssClass: 'modalOpen',
                        componentProps: {
                          "listUnit": this.listUnit
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        console.log(dataReturned);

                        if (dataReturned.data) {
                          _this9.sendItem.DVXuat = dataReturned.data.MaDV;
                          _this9.displayItem.DVXuat = dataReturned.data.TenDV;
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
          key: "openKho",
          value: function openKho() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this10 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_7__["KhoIndexPage"],
                        cssClass: 'modalOpen',
                        componentProps: {
                          "listKho": this.listKho
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this10.makho = dataReturned.data.MaKho;
                          _this10.sendItem.KhoXuat = dataReturned.data.MaKho;
                          _this10.displayItem.KhoXuat = dataReturned.data.TenKho;

                          _this10.getVattu();
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
          key: "getData",
          value: function getData(item) {
            var _this11 = this;

            this.sendItem.ChiTietHang[item.index] = item.item;
            setTimeout(function () {
              _this11.sumAllMoney();
            }, 100);
          }
        }, {
          key: "sumAllMoney",
          value: function sumAllMoney() {
            this.sumMoney = 0;

            for (var i = 0; i < this.sendItem.ChiTietHang.length; i++) {
              this.sumMoney = this.sumMoney + this.sendItem.ChiTietHang[i].TongTien;
            }

            this.cdr.detectChanges();
          }
        }, {
          key: "getIndex",
          value: function getIndex(item) {
            this.index = item.index;
          }
        }, {
          key: "getDelete",
          value: function getDelete(item) {
            this.listFormItem.splice(item.index, 1);
            this.sendItem.ChiTietHang.splice(item.index, 1);
            this.sumAllMoney();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this12 = this;

            this.submitForm++;

            if (this.isCreate == 'true') {
              var checkExit = false;

              if (this.sendItem.ChiTietHang.length != 0) {
                for (var i = 0; i < this.sendItem.ChiTietHang.length; i++) {
                  if (!this.sendItem.ChiTietHang[i].SoLuong) {
                    checkExit = true;
                  }
                }
              } else {
                checkExit = true;
              }

              if (!checkExit) {
                this.confirmCreate();
                console.log('create', this.sendItem);
              }
            } else {
              console.log('edit', this.sendItem);
              this.AlertService.presentAlert2("B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n s\u1EEDa phi\u1EBFu?", this.DienGiai == 'Xuất bán lẻ' ? 'print' : '').then(function (res) {
                if (res == 'true') {
                  _this12.updateImport();
                } else if (res == 'trueAndPrint') {
                  _this12.updateImport('print');
                }
              });
            }
          }
        }, {
          key: "confirmCreate",
          value: function confirmCreate() {
            var _this13 = this;

            console.log('create', this.sendItem); // this.openPrint();

            this.AlertService.presentAlert2("B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n th\xEAm m\u1EDBi?", this.DienGiai == 'Xuất bán lẻ' ? 'print' : '').then(function (res) {
              if (res == 'true') {
                _this13.createImport();
              } else if (res == 'trueAndPrint') {
                _this13.createImport('print');
              }
            });
          }
        }, {
          key: "createImport",
          value: function createImport(check) {
            var _this14 = this;

            this.LoadingService.setValue(true);
            this.XuatkhoService.createXuatHang(this.sendItem).subscribe(function (response) {
              if (response.code == 0) {
                _this14.ToastService.successToast(response.message);

                _this14.submitForm = 0;

                _this14.resetItem();

                if (check == 'print') {
                  _this14.getChungTuDetail2();
                } else {
                  _this14.LoadingService.setValue(false);
                }
              } else {
                _this14.ToastService.errorToast(response.message);

                _this14.LoadingService.setValue(false);
              }
            }, function (error) {
              _this14.LoadingService.setValue(false);

              console.log('error', error);
            });
          }
        }, {
          key: "updateImport",
          value: function updateImport(check) {
            var _this15 = this;

            this.LoadingService.setValue(true);
            this.XuatkhoService.updateXuatHang(this.sendItem).subscribe(function (response) {
              console.log('response', response);

              if (response.code == 0) {
                _this15.ToastService.successToast(response.message);

                _this15.submitForm = 0;

                if (check == 'print') {
                  _this15.getChungTuDetail2();
                } else {
                  _this15.LoadingService.setValue(false);
                }
              } else {
                _this15.ToastService.errorToast(response.message);

                _this15.LoadingService.setValue(false);
              } // this.LoadingService.setValue(false);

            }, function (error) {
              _this15.LoadingService.setValue(false);

              console.log('error', error);
            });
          }
        }, {
          key: "openPrint",
          value: function openPrint() {
            var _this16 = this;

            var myDiv = document.getElementById("myDiv");
            var divContent = myDiv.outerHTML;
            this.printer.isAvailable().then(function (onsuccess) {
              _this16.printer.print(divContent).then(function (value) {
                console.log('value:', value);
              }, function (error) {
                console.log('error:', error);
              });
            }, function (err) {
              console.log('Error', err);
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            if (this.backPage == 'detail') {
              this.navController.navigateBack(['xuathang-detail'], {
                queryParams: {
                  ChungTuID: this.chungchi.ChungTuID,
                  nam_du_lieu: this.chungchi.nam_du_lieu,
                  LoaiCTID: this.sendItem.LoaiCTID,
                  DienGiai: this.DienGiai
                }
              });
            } else {
              this.navController.navigateBack(['xuathang'], {
                queryParams: {
                  "LoaiCTID": this.sendItem.LoaiCTID,
                  "DienGiai": this.DienGiai
                }
              });
            }
          }
        }, {
          key: "openHttt",
          value: function openHttt() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this17 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: [{
                          text: 'Tiền mặt',
                          icon: 'cash-outline',
                          handler: function handler() {
                            _this17.send_httt = "TM";
                            _this17.display_httt = "Tiền mặt";
                          }
                        }, {
                          text: 'Chuyển khoản',
                          icon: 'qr-code-outline',
                          handler: function handler() {
                            _this17.send_httt = "CK";
                            _this17.display_httt = "Chuyển khoản";
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context3.sent;
                      _context3.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context3.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context3.sent;
                      role = _yield$actionSheet$on.role;

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return XuathangAddnewPage;
      }();

      XuathangAddnewPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"]
        }, {
          type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_15__["XuatkhoService"]
        }, {
          type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_14__["VattuService"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_12__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
        }, {
          type: src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_10__["KhoService"]
        }, {
          type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_13__["UnitService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: src_app_function_service__WEBPACK_IMPORTED_MODULE_6__["FunctionService"]
        }, {
          type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_3__["Printer"]
        }];
      };

      XuathangAddnewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuathang-addnew',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./xuathang-addnew.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./xuathang-addnew.page.scss */
        "./src/app/xuatkho/xuathang-addnew/xuathang-addnew.page.scss"))["default"]]
      })], XuathangAddnewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=xuatkho-xuathang-addnew-xuathang-addnew-module-es5.js.map