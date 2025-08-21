(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhapkho-nhaphang-update-nhaphang-update-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-update/nhaphang-update.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-update/nhaphang-update.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      {{title}} phiếu\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item (click)=\"submit()\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"create-outline\"></ion-icon> -->\r\n        <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <div class=\"import-card\">\r\n    <table>\r\n      <tr>\r\n        <td>Loại phiếu</td>\r\n        <td>\r\n          <ion-input [(ngModel)]=\"DienGiai\" [disabled]=\"true\"></ion-input>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>Đơn vị</td>\r\n        <td>\r\n          <ion-input (click)=\"openDonvi()\" [(ngModel)]=\"displayItem.DVNhap\"></ion-input>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>Kho hàng <span>*</span></td>\r\n        <td>\r\n          <ion-input (click)=\"openKho()\" [(ngModel)]=\"displayItem.KhoNhap\"></ion-input>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"submitForm != 0 && !displayItem.KhoNhap\">\r\n        <td>\r\n        </td>\r\n        <td>\r\n          <div class=\"text-err\">Trường bắt buộc nhập</div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>HTTT</td>\r\n        <td>\r\n          <ion-input (click)=\"openHttt()\" [(ngModel)]=\"display_httt\"></ion-input>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngFor=\"let item of listFormItem; index as i\">\r\n    <div [id]=\"'item'+i\">\r\n      <app-xuathang-item \r\n        [makho]=\"makho\" \r\n        [banggia]=\"banggia\" \r\n        [isCreate]=\"isCreate\" \r\n        [listVattu]=\"listVattu\" \r\n        [index]=\"i\" \r\n        [submitForm]=\"submitForm\"\r\n        [data]=\"item\" \r\n        [httt]=\"send_httt\" \r\n        [indexOpen]=\"index\" \r\n        (sendData)=\"getData($event)\" \r\n        (sendIndex)=\"getIndex($event)\"\r\n        (sendDelete)=\"getDelete($event)\">\r\n      </app-xuathang-item>\r\n    </div>\r\n  </div>\r\n  <div (click)=\"addForm()\" class=\"import-add\">\r\n    <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    Thêm hàng hóa\r\n  </div>\r\n\r\n  <!-- <div id=\"myDiv\" class=\"printBill\"> \r\n    <app-print-bill [data]=\"sendItem\"></app-print-bill>\r\n  </div> -->\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div style=\"display: flex; padding: 0 6px;\">\r\n      <div><span style=\"color: var(--primary-color);\">{{this.listFormItem.length}}</span> mặt hàng</div>\r\n      <div style=\"margin-left: auto;\">Tổng: <span style=\"color: var(--primary-color);\">{{sumMoney | number}}</span></div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/nhapkho/nhaphang-update/nhaphang-update-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/nhapkho/nhaphang-update/nhaphang-update-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: NhaphangUpdatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhaphangUpdatePageRoutingModule", function() { return NhaphangUpdatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nhaphang_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nhaphang-update.page */ "./src/app/nhapkho/nhaphang-update/nhaphang-update.page.ts");




const routes = [
    {
        path: '',
        component: _nhaphang_update_page__WEBPACK_IMPORTED_MODULE_3__["NhaphangUpdatePage"]
    }
];
let NhaphangUpdatePageRoutingModule = class NhaphangUpdatePageRoutingModule {
};
NhaphangUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NhaphangUpdatePageRoutingModule);



/***/ }),

/***/ "./src/app/nhapkho/nhaphang-update/nhaphang-update.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/nhapkho/nhaphang-update/nhaphang-update.module.ts ***!
  \*******************************************************************/
/*! exports provided: NhaphangUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhaphangUpdatePageModule", function() { return NhaphangUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nhaphang_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nhaphang-update-routing.module */ "./src/app/nhapkho/nhaphang-update/nhaphang-update-routing.module.ts");
/* harmony import */ var _nhaphang_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nhaphang-update.page */ "./src/app/nhapkho/nhaphang-update/nhaphang-update.page.ts");
/* harmony import */ var _xuatkho_xuathang_item_xuathang_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../xuatkho/xuathang-item/xuathang-item.component */ "./src/app/xuatkho/xuathang-item/xuathang-item.component.ts");








let NhaphangUpdatePageModule = class NhaphangUpdatePageModule {
};
NhaphangUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nhaphang_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["NhaphangUpdatePageRoutingModule"]
        ],
        declarations: [_nhaphang_update_page__WEBPACK_IMPORTED_MODULE_6__["NhaphangUpdatePage"], _xuatkho_xuathang_item_xuathang_item_component__WEBPACK_IMPORTED_MODULE_7__["XuathangItemComponent"]]
    })
], NhaphangUpdatePageModule);



/***/ }),

/***/ "./src/app/nhapkho/nhaphang-update/nhaphang-update.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/nhapkho/nhaphang-update/nhaphang-update.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f9f9f9 ;\n}\n\n.import-card {\n  background: white;\n  margin-top: 15px;\n  padding: 0 10px 15px;\n}\n\n.import-title {\n  display: flex;\n  line-height: 28px;\n}\n\n.import-right {\n  margin-left: auto;\n}\n\n.import-right ion-icon {\n  color: var(--primary-color);\n}\n\n.import-product {\n  margin-top: 12px;\n}\n\n.import-item {\n  padding: 10px 15px;\n}\n\n.import-primary {\n  color: var(--primary-color);\n}\n\n.import-add {\n  display: flex;\n  /* align-items: center; */\n  gap: 5px;\n  color: #196fb4;\n  padding: 10px;\n}\n\n.import-add ion-icon {\n  margin-left: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntd {\n  padding-top: 15px;\n  min-width: 100px;\n}\n\ntd span {\n  color: red;\n}\n\nion-input {\n  width: 100%;\n  padding: 8px 10px 8px;\n  background: #F0F5FF;\n  border-radius: 5px;\n  border: 1px solid #F0F5FF;\n}\n\nion-footer {\n  border-top: 1px solid #d9d9d9;\n}\n\n.sc-ion-input-ios-h {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmhhcGtoby9uaGFwaGFuZy11cGRhdGUvbmhhcGhhbmctdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRkE7RUFDSSxzQkFBQTtBQTlGSjs7QUFxR0k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFsR1I7O0FBcUdJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBbkdSOztBQXNHSTtFQUNJLGlCQUFBO0FBcEdSOztBQXNHUTtFQUNJLDJCQUFBO0FBcEdaOztBQXdHSTtFQUNJLGdCQUFBO0FBdEdSOztBQXlHSTtFQUNJLGtCQUFBO0FBdkdSOztBQTBHSTtFQUNJLDJCQUFBO0FBeEdSOztBQTJHSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQXpHUjs7QUEyR1E7RUFDSSxpQkFBQTtBQXpHWjs7QUE4R0E7RUFDSSxXQUFBO0FBM0dKOztBQThHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUEzR0o7O0FBNkdJO0VBQ0ksVUFBQTtBQTNHUjs7QUErR0E7RUFDSSxXQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUE3R0o7O0FBZ0hBO0VBQ0ksNkJBQUE7QUE3R0o7O0FBK0dBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBNUdKIiwiZmlsZSI6InNyYy9hcHAvbmhhcGtoby9uaGFwaGFuZy11cGRhdGUvbmhhcGhhbmctdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5pbXBvcnR7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4vLyAgICAgJi10aXRsZXtcclxuLy8gICAgICAgICBjb2xvcjogIzA3NjRhZTtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICBtYXJnaW46IDE1cHggMDsgICAgXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1pY29ue1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAmLWxhYmVse1xyXG4vLyAgICAgICAgIHNwYW57XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtaXRlbXtcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyYXk7XHJcbi8vICAgICAgICAgcGFkZGluZzogMHB4IDAgMTBweDtcclxuXHJcbi8vICAgICAgICAgJi10aXRsZXtcclxuLy8gICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICAgICAgICAgICAgIHNwYW57XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG5cclxuXHJcbi8vICAgICAmLWxhYmVsMntcclxuXHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4vLyAgICAgICAgIHNwYW57XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBsYWJlbHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1hZGR7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4vLyAgICAgICAgIGdhcDogNXB4O1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMTk2ZmI0O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4vLyAgICAgICAgIGlvbi1pY29ue1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1mb290ZXJ7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTJweDtcclxuLy8gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1yaWdodHtcclxuLy8gICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7ICBcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgICAgJi1sZWZ0e1xyXG4vLyAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7ICBcclxuLy8gICAgICAgfVxyXG5cclxuLy8gICAgIHRke1xyXG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB0YWJsZXtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcblxyXG4vLyBpbnB1dHtcclxuLy8gd2lkdGg6IDEwMCU7XHJcbi8vIHBhZGRpbmc6IDhweCAxMHB4IDhweDtcclxuLy8gYmFja2dyb3VuZDogI0YwRjVGRjtcclxuLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyBib3JkZXI6IDFweCBzb2xpZCAjRjBGNUZGO1xyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5ZjlcclxufVxyXG5cclxuLmltcG9ydCB7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG5cclxuICAgICYtY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtcmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1wcm9kdWN0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtcHJpbWFyeSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgICYtYWRkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMxOTZmYjQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcblxyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMEY1RkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGNUZGO1xyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbn1cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/nhapkho/nhaphang-update/nhaphang-update.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/nhapkho/nhaphang-update/nhaphang-update.page.ts ***!
  \*****************************************************************/
/*! exports provided: NhaphangUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhaphangUpdatePage", function() { return NhaphangUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/donvi/donvi-index/donvi-index.page */ "./src/app/donvi/donvi-index/donvi-index.page.ts");
/* harmony import */ var src_app_function_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/function.service */ "./src/app/function.service.ts");
/* harmony import */ var src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/kho/kho-index/kho-index.page */ "./src/app/kho/kho-index/kho-index.page.ts");
/* harmony import */ var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/AlertService */ "./src/app/service/AlertService.ts");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/kho.service */ "./src/app/service/kho.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");
/* harmony import */ var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/unit.service */ "./src/app/service/unit.service.ts");
/* harmony import */ var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/service/vattu.service */ "./src/app/service/vattu.service.ts");
/* harmony import */ var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/service/xuatkho.service */ "./src/app/service/xuatkho.service.ts");
















let NhaphangUpdatePage = class NhaphangUpdatePage {
    constructor(modalController, 
    // private navParams: NavParams,
    GlobalService, XuatkhoService, VattuService, LoadingService, route, ToastService, router, navController, actionSheetController, KhoService, UnitService, cdr, FunctionService, AlertService, printer) {
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
            "DVNhap": "",
            "KhoNhap": "",
            "ChiTietHang": []
        };
        this.sendItem = {
            "nam_du_lieu": "",
            "LoaiCTID": 0,
            "ChungTuID": 0,
            "BanTheoDon": false,
            "SoCT": "",
            "ThoiDiem": "",
            "DienGiai": "",
            "DVNhap": "",
            "KhoNhap": "",
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
        this.title = "Thêm";
        this.itemDetail = '';
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
    ionViewDidEnter() {
        console.log('------ionViewDidEnter');
        this.route.queryParams.subscribe(params => {
            this.isCreate = params.isCreate;
            this.sendItem.LoaiCTID = Number(params.LoaiCTID);
            this.displayItem.LoaiCTID = Number(params.LoaiCTID);
            this.DienGiai = params.DienGiai;
            if (params.isCreate == 'true') {
                var now = new Date();
                var year = now.getFullYear();
                var hours = now.getHours();
                var minute = now.getMinutes();
                this.sendItem.nam_du_lieu = year.toString();
                this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
                this.sendItem.ChungTuID = new Date().getTime();
                this.sendItem.SoCT = `NM${this.sendItem.ChungTuID}`;
            }
            else {
                this.title = "Sửa";
                this.chungchi.ChungTuID = params.ChungTuID;
                this.chungchi.nam_du_lieu = params.nam_du_lieu;
                this.backPage = params.page;
                if (params.index) {
                    this.index = params.index;
                    this.scrollIntoView(`item${this.index}`);
                }
            }
        });
        if (this.isCreate == 'false') {
            this.getChungTuDetail();
        }
        else {
            // this.resetItem();
        }
        this.getLoaiCT();
        this.getUnit();
    }
    ngOnInit() {
    }
    getKho() {
        this.KhoService.getKho().subscribe((response) => {
            this.listKho = response;
            if (this.isCreate == 'true') {
                this.makho = response[0].MaKho;
                this.displayItem.KhoNhap = response[0].TenKho;
                this.sendItem.KhoNhap = response[0].MaKho;
            }
            this.getVattu();
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    getUnit() {
        this.UnitService.getUnit().subscribe((response) => {
            this.listUnit = response;
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    getVattu() {
        this.sendVattu.banggia = this.banggia;
        this.sendVattu.khohang = this.sendItem.KhoNhap;
        this.VattuService.GetListVT(this.sendVattu).subscribe((response) => {
            this.listVattu = response;
        }, (error) => {
            console.log('error', error);
        });
    }
    getLoaiCT() {
        this.FunctionService.getLoaiCT().subscribe((response) => {
            for (let i = 0; i < response.length; i++) {
                if (response[i].LoaiCTID == this.sendItem.LoaiCTID) {
                    this.banggia = response[i].BangGia;
                    break;
                }
            }
            this.getKho();
        }, (error) => {
            console.log('error', error);
        });
    }
    resetItem() {
        this.displayItem = {
            "nam_du_lieu": "",
            "LoaiCTID": this.sendItem.LoaiCTID,
            "ChungTuID": 0,
            "BanTheoDon": false,
            "SoCT": "",
            "ThoiDiem": "",
            "DienGiai": "",
            "DVNhap": this.displayItem.DVNhap,
            "KhoNhap": this.displayItem.KhoNhap,
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
            "DVNhap": this.sendItem.DVNhap,
            "KhoNhap": this.sendItem.KhoNhap,
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
        this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
        this.sumMoney = 0;
        this.sendItem.ChungTuID = new Date().getTime();
        this.sendItem.SoCT = `NM${this.sendItem.ChungTuID}`;
        setTimeout(() => {
            this.chungchi.ChungTuID = this.sendItem.ChungTuID;
            this.chungchi.nam_du_lieu = this.sendItem.nam_du_lieu;
        }, 4000);
    }
    scrollIntoView(position) {
        setTimeout(() => {
            const element = document.getElementById(position);
            element === null || element === void 0 ? void 0 : element.scrollIntoView({ behavior: 'auto' });
        }, 1000);
    }
    getChungTuDetail() {
        this.LoadingService.setValue(true);
        this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe((response) => {
            this.itemDetail = response[0];
            this.makho = response[0].KhoNhap;
            this.displayItem.KhoNhap = response[0]._TenKhoNhap;
            this.displayItem.DVNhap = response[0]._TenDVNhap;
            this.listFormItem = response[0].ChiTietHang;
            this.sendItem.BanTheoDon = response[0].BanTheoDon;
            this.sendItem.ChungTuID = response[0].ChungTuID;
            this.sendItem.DVNhap = response[0].DVNhap;
            this.sendItem.KhoNhap = response[0].KhoNhap;
            this.sendItem.LoaiCTID = response[0].LoaiCTID;
            this.sendItem.SoCT = response[0].SoCT;
            this.sendItem.ThoiDiem = response[0].ThoiDiem;
            this.sendItem.nam_du_lieu = this.chungchi.nam_du_lieu;
            console.log('response1111', response);
            // this.LoadingService.setValue(false);
            this.LoadingService.setValue(false);
        }, (error) => {
            console.log('error', error);
            this.LoadingService.setValue(false);
        });
    }
    convNumber(number) {
        return number < 10 ? '0' + number : number;
    }
    addForm() {
        this.listFormItem.push({ item: 1 });
        this.index = this.listFormItem.length - 1;
    }
    openDonvi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_5__["DonviIndexPage"],
                cssClass: 'modalOpen',
                componentProps: {
                    "listUnit": this.listUnit,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                if (dataReturned.data) {
                    this.sendItem.DVNhap = dataReturned.data.MaDV;
                    this.displayItem.DVNhap = dataReturned.data.TenDV;
                }
            });
            return yield modal.present();
        });
    }
    openKho() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_7__["KhoIndexPage"],
                cssClass: 'modalOpen',
                componentProps: {
                    "listKho": this.listKho,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned.data) {
                    this.makho = dataReturned.data.MaKho;
                    this.sendItem.KhoNhap = dataReturned.data.MaKho;
                    this.displayItem.KhoNhap = dataReturned.data.TenKho;
                    this.getVattu();
                }
            });
            return yield modal.present();
        });
    }
    getData(item) {
        this.sendItem.ChiTietHang[item.index] = item.item;
        this.sumAllMoney();
    }
    sumAllMoney() {
        this.sumMoney = 0;
        for (let i = 0; i < this.sendItem.ChiTietHang.length; i++) {
            this.sumMoney = this.sumMoney + this.sendItem.ChiTietHang[i].TongTien;
        }
        this.cdr.detectChanges();
    }
    getIndex(item) {
        this.index = item.index;
    }
    getDelete(item) {
        this.listFormItem.splice(item.index, 1);
        this.sendItem.ChiTietHang.splice(item.index, 1);
        this.sumAllMoney();
    }
    submit() {
        this.submitForm++;
        if (this.isCreate == 'true') {
            var checkExit = false;
            if (this.sendItem.ChiTietHang.length != 0) {
                for (let i = 0; i < this.sendItem.ChiTietHang.length; i++) {
                    if (!this.sendItem.ChiTietHang[i].SoLuong) {
                        checkExit = true;
                    }
                }
            }
            else {
                checkExit = true;
            }
            if (!checkExit) {
                this.confirmCreate();
                console.log('create', this.sendItem);
            }
        }
        else {
            console.log('edit', this.sendItem);
            this.AlertService.presentAlert(`Bạn có chắc muốn sửa phiếu?`).then(res => {
                if (res == 'true') {
                    this.updateImport();
                }
            });
        }
    }
    confirmCreate() {
        console.log('create', this.sendItem);
        // this.openPrint();
        this.AlertService.presentAlert(`Bạn có chắc muốn thêm mới?`).then(res => {
            if (res == 'true') {
                this.createImport();
            }
        });
    }
    createImport() {
        this.LoadingService.setValue(true);
        this.XuatkhoService.createXuatHang(this.sendItem).subscribe((response) => {
            if (response.code == 0) {
                this.ToastService.successToast(response.message);
                this.submitForm = 0;
                this.resetItem();
            }
            else {
                this.ToastService.errorToast(response.message);
            }
            console.log('response', response);
            // this.LoadingService.setValue(false);
            this.LoadingService.setValue(false);
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
    updateImport() {
        this.LoadingService.setValue(true);
        this.XuatkhoService.updateXuatHang(this.sendItem).subscribe((response) => {
            console.log('response', response);
            if (response.code == 0) {
                this.ToastService.successToast(response.message);
                this.submitForm = 0;
            }
            else {
                this.ToastService.errorToast(response.message);
            }
            // this.LoadingService.setValue(false);
            this.LoadingService.setValue(false);
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
    openPrint() {
        var myDiv = document.getElementById("myDiv");
        var divContent = myDiv.outerHTML;
        this.printer.isAvailable().then((onsuccess) => {
            this.printer.print(divContent).then((value) => {
                console.log('value:', value);
            }, (error) => {
                console.log('error:', error);
            });
        }, (err) => {
            console.log('Error', err);
        });
    }
    closeModal() {
        if (this.backPage == 'detail') {
            this.navController.navigateBack(['xuathang-detail'], {
                queryParams: {
                    ChungTuID: this.chungchi.ChungTuID,
                    nam_du_lieu: this.chungchi.nam_du_lieu,
                    LoaiCTID: this.sendItem.LoaiCTID,
                    DienGiai: this.DienGiai
                }
            });
        }
        else {
            this.navController.navigateBack(['xuathang'], {
                queryParams: {
                    "LoaiCTID": this.sendItem.LoaiCTID,
                    "DienGiai": this.DienGiai
                }
            });
        }
    }
    openHttt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'left-align-buttons',
                buttons: [
                    {
                        text: 'Tiền mặt',
                        icon: 'cash-outline',
                        handler: () => {
                            this.send_httt = "TM";
                            this.display_httt = "Tiền mặt";
                        },
                    },
                    {
                        text: 'Chuyển khoản',
                        icon: 'qr-code-outline',
                        handler: () => {
                            this.send_httt = "CK";
                            this.display_httt = "Chuyển khoản";
                        },
                    },
                ],
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
        });
    }
};
NhaphangUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_9__["GlobalService"] },
    { type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_15__["XuatkhoService"] },
    { type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_14__["VattuService"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_12__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_10__["KhoService"] },
    { type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_13__["UnitService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_function_service__WEBPACK_IMPORTED_MODULE_6__["FunctionService"] },
    { type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_3__["Printer"] }
];
NhaphangUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhaphang-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nhaphang-update.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-update/nhaphang-update.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nhaphang-update.page.scss */ "./src/app/nhapkho/nhaphang-update/nhaphang-update.page.scss")).default]
    })
], NhaphangUpdatePage);



/***/ })

}]);
//# sourceMappingURL=nhapkho-nhaphang-update-nhaphang-update-module-es2015.js.map