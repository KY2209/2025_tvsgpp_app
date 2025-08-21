(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bill-bill-list-bill-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-list/bill-list.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-list/bill-list.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"--border-width:0px!important;\">\r\n\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon class=\"icon-header\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      Hóa đơn\r\n      <!-- <span style=\"text-transform: lowercase;\">{{title}}</span> -->\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n\r\n      <ion-item lines=\"none\" (click)=\"checkSearch =! checkSearch\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"search-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" (click)=\"openTypeCT()\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon style=\"font-size: 26px;\" name=\"menu-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"synthetic\">\r\n    <div *ngIf=\"checkSearch\" class=\"search-item\" style=\"border-top: 1px solid white;\">\r\n      <div class=\"synthetic-item synthetic-date\">\r\n        <!-- Năm dữ liệu: -->\r\n        <table style=\"width: 100%;\">\r\n          <tr>\r\n\r\n            <td>\r\n              <ion-datetime displayFormat=\"DD/MM\" (ngModelChange)=\"changeDay($event, 'fromDay')\"\r\n                [(ngModel)]=\"searchData.fromDay\"></ion-datetime>\r\n\r\n            </td>\r\n            <td>\r\n              <ion-datetime displayFormat=\"DD/MM\" (ngModelChange)=\"changeDay($event, 'toDay')\"\r\n                [(ngModel)]=\"searchData.toDay\"></ion-datetime>\r\n\r\n            </td>\r\n            <td style=\"width: 60px; padding: 0px 10px;\">\r\n\r\n              <ion-datetime displayFormat=\"YYYY\" style=\" border: none;\" (ngModelChange)=\"changeYear($event)\"\r\n                [(ngModel)]=\"sendChungtu.nam_du_lieu\">\r\n              </ion-datetime>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n      <div class=\"search-form\" style=\"width: 100%;\">\r\n        <input type=\"text\" (keyup)=\"onSearch($event)\" [value]=\"searchData.keyword\"\r\n          placeholder=\"Tìm kiếm số chứng từ, nhà cung cấp\">\r\n        <ion-icon (click)=\"deleteSearch()\" *ngIf=\"searchData.keyword != ''\" class=\"search-icon2\"\r\n          name=\"close-circle-outline\"></ion-icon>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"synthetic-item\" style=\"font-weight: 600; font-size: 16px; padding: 10px; border-top: 1px solid white;\">\r\n      <div class=\"synthetic-item-left\"> Tổng:</div>\r\n      <div class=\"synthetic-item-right\">\r\n        <span>{{sumTT | number}} đ</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"synthetic-item2\">\r\n      <div class=\"synthetic-item-left\">\r\n        {{countItem}} hóa đơn\r\n      </div>\r\n      <div (click)=\"openModal('create')\" class=\"synthetic-item2-right\">\r\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div id=\"myDiv\" class=\"printBill\">\r\n    <app-print-bill [ChungTuInfo]=\"ChungTuInfo\"></app-print-bill>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"export-title\">{{title}}</div> -->\r\n\r\n  <div *ngIf=\"countItem == 0\">\r\n    <app-no-data></app-no-data>\r\n  </div>\r\n  <div class=\"export\" *ngIf=\"countItem != 0\">\r\n\r\n    <div *ngFor=\"let item of listItem; index as i\" (click)=\"presentActionSheet(item.ChungTuID, item.ThoiDiem)\"\r\n      class=\"export-item\" [class]=\"countItem != i+1 ? 'border-b' : ''\" [class.bg-hover]=\"item.check == true\">\r\n      <div class=\"export-content\">\r\n        <div class=\"export-content-item\">\r\n          <div class=\"export-content-left export-content-title\">\r\n            {{item.SoCT}}\r\n          </div>\r\n          <div class=\"export-content-right\">\r\n            <span>{{item.TongTien | number}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"export-content-item\">\r\n          <div class=\"export-content-left\" style=\"display: flex; gap: 10px;\">\r\n            <div><ion-icon style=\"font-size: 20px;\" name=\"time-outline\"></ion-icon> </div>{{item.ThoiDiem | date:'HH:mm\r\n            dd/MM/yyyy' }}\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"item.TenDV\" class=\"export-content-item\">\r\n          <div class=\"export-content-left\" style=\"display: flex; gap: 10px; font-size: 16px;\">\r\n            <div><ion-icon style=\"font-size: 20px;\" name=\"person-circle-outline\"></ion-icon> </div>{{item.TenDV}}\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"export-content-item\">\r\n          <div class=\"export-content-left\" [class]=\"item.UpdateGPP == 0 ? 'red-dark' : 'green-dark'\">\r\n            <span>Trạng thái: </span> {{item.UpdateGPP == 0 ? 'Chưa đồng bộ' : 'Đồng bộ'}}\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/bill/bill-list/bill-list-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/bill/bill-list/bill-list-routing.module.ts ***!
  \************************************************************/
/*! exports provided: BillListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillListPageRoutingModule", function() { return BillListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bill_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-list.page */ "./src/app/bill/bill-list/bill-list.page.ts");




const routes = [
    {
        path: '',
        component: _bill_list_page__WEBPACK_IMPORTED_MODULE_3__["BillListPage"]
    }
];
let BillListPageRoutingModule = class BillListPageRoutingModule {
};
BillListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BillListPageRoutingModule);



/***/ }),

/***/ "./src/app/bill/bill-list/bill-list.module.ts":
/*!****************************************************!*\
  !*** ./src/app/bill/bill-list/bill-list.module.ts ***!
  \****************************************************/
/*! exports provided: BillListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillListPageModule", function() { return BillListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bill_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill-list-routing.module */ "./src/app/bill/bill-list/bill-list-routing.module.ts");
/* harmony import */ var _bill_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill-list.page */ "./src/app/bill/bill-list/bill-list.page.ts");
/* harmony import */ var src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/share/print-bill/print-bill.component */ "./src/app/share/print-bill/print-bill.component.ts");
/* harmony import */ var src_app_share_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/share/no-data/no-data.component */ "./src/app/share/no-data/no-data.component.ts");









let BillListPageModule = class BillListPageModule {
};
BillListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bill_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BillListPageRoutingModule"]
        ],
        declarations: [_bill_list_page__WEBPACK_IMPORTED_MODULE_6__["BillListPage"], src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_7__["PrintBillComponent"], src_app_share_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_8__["NoDataComponent"]]
    })
], BillListPageModule);



/***/ }),

/***/ "./src/app/bill/bill-list/bill-list.page.scss":
/*!****************************************************!*\
  !*** ./src/app/bill/bill-list/bill-list.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".export {\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.export-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.export-item {\n  display: flex;\n  padding: 10px;\n}\n.export-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.export-content {\n  width: 100%;\n}\n.export-content-item {\n  display: flex;\n  margin-bottom: 5px;\n  color: var(--text-blue);\n}\n.export-content-left span {\n  color: gray;\n}\n.export-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n}\n.export-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.export-content-right {\n  margin-left: auto;\n  font-weight: 600;\n}\n.export-content-right span {\n  color: var(--background-color);\n}\n.btn-db {\n  color: white;\n  padding: 8px 10px;\n  border-radius: 5px;\n}\n.bg-blue1 {\n  background: #3880ff;\n}\n.bg-gray1 {\n  background: #939393;\n}\nion-datetime {\n  border: 1px solid;\n  --padding-start: 10px;\n  border-radius: 5px;\n  text-align: center;\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\ntd {\n  padding: 0px 10px 0px 0px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC9iaWxsLWxpc3QvYmlsbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBRUEsMkNBQUE7QUFESjtBQUVJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUdJO0VBQ0ksV0FBQTtBQURSO0FBRVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUFaO0FBR1k7RUFFSSxXQUFBO0FBRmhCO0FBTVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUpaO0FBTVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUpaO0FBTVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBSlo7QUFLWTtFQUNJLDhCQUFBO0FBSGhCO0FBVUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBKO0FBU0E7RUFDSSxtQkFBQTtBQU5KO0FBUUE7RUFDSSxtQkFBQTtBQUxKO0FBVUE7RUFFSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFSSjtBQVdBO0VBQ0kseUJBQUE7QUFSSjtBQXNCQTtFQUNJLGdDQUFBO0FBbkJKIiwiZmlsZSI6InNyYy9hcHAvYmlsbC9iaWxsLWxpc3QvYmlsbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBvcnQge1xyXG4gICAgLy8gcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuICAgICYtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICB9XHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICYtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc20ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpOyAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJ0bi1kYntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5iZy1ibHVlMXtcclxuICAgIGJhY2tncm91bmQ6ICMzODgwZmY7XHJcbn1cclxuLmJnLWdyYXkxe1xyXG4gICAgYmFja2dyb3VuZDogIzkzOTM5MztcclxufVxyXG4vLyBpb24tY29udGVudCB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICNmOWY5ZjlcclxuLy8gfVxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tcGFkZGluZy10b3A6IDZweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDZweDtcclxufVxyXG5cclxudGR7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG5cclxufVxyXG5cclxuXHJcbiAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIFxyXG5cclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuICBcclxuLmJvcmRlci1iIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/bill/bill-list/bill-list.page.ts":
/*!**************************************************!*\
  !*** ./src/app/bill/bill-list/bill-list.page.ts ***!
  \**************************************************/
/*! exports provided: BillListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillListPage", function() { return BillListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/function.service */ "./src/app/function.service.ts");
/* harmony import */ var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/xuatkho.service */ "./src/app/service/xuatkho.service.ts");
/* harmony import */ var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/AlertService */ "./src/app/service/AlertService.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");











let BillListPage = class BillListPage {
    constructor(Function, router, route, toastController, modalController, XuatkhoService, actionSheetController, AlertService, LoadingService, navController, printer, ToastService) {
        this.Function = Function;
        this.router = router;
        this.route = route;
        this.toastController = toastController;
        this.modalController = modalController;
        this.XuatkhoService = XuatkhoService;
        this.actionSheetController = actionSheetController;
        this.AlertService = AlertService;
        this.LoadingService = LoadingService;
        this.navController = navController;
        this.printer = printer;
        this.ToastService = ToastService;
        this.listItem = [];
        this.listItemSearch = [];
        this.sendChungtu = {
            "nam_du_lieu": "2023",
            "loaictid": 2
        };
        this.searchData = {
            keyword: '',
            fromDay: '2024-01-01',
            toDay: '2024-12-31'
        };
        this.timeout = '';
        this.title = '';
        this.ChungTuInfo = {};
        this.countItem = 0;
        this.sumTT = 0;
        this.checkCalender = false;
        this.checkSearch = false;
        this.listLoaiCT = [];
        this.CTCurrent = {};
        this.route.queryParams.subscribe(params => {
            this.sendChungtu.loaictid = params.LoaiCTID;
            this.title = params.DienGiai;
            this.listLoaiCT = JSON.parse(localStorage.getItem('LoaiCT') || '[]');
            for (let i = 0; i < this.listLoaiCT.length; i++) {
                if (this.listLoaiCT[i].LoaiCTID == params.LoaiCTID) {
                    this.CTCurrent = this.listLoaiCT[i];
                    break;
                }
            }
        });
        this.sendChungtu.nam_du_lieu = new Date().getFullYear().toString();
    }
    ngOnInit() {
        this.getData('start');
        var time = new Date().toISOString();
        this.searchData.fromDay = time;
        this.searchData.toDay = time;
    }
    print() {
        var myDiv = document.getElementById("myDiv");
        var divContent = myDiv.outerHTML;
        this.printer.isAvailable().then((onsuccess) => {
            let options = {};
            this.printer.print(divContent, options).then((value) => {
                console.log('value:', value);
            }, (error) => {
                console.log('error:', error);
            });
        }, (err) => {
            console.log('Error', err);
        });
    }
    convDate(number) {
        return number < 10 ? `0${number}` : number;
    }
    getData(start) {
        this.LoadingService.setValue(true);
        this.XuatkhoService.getChungtu(this.sendChungtu).subscribe((response) => {
            this.listItem = response;
            this.listItemSearch = response;
            this.countItem = response.length;
            if (start) {
                var searchBill = JSON.parse(sessionStorage.getItem('searchBill') || null);
                if (searchBill) {
                    console.log('rrrrrrrrrr');
                    this.searchData = searchBill;
                }
            }
            this.search();
            this.sumMoney();
            // console.log('response123', response);
            this.LoadingService.setValue(false);
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
                this.LoadingService.setValue(false);
            }, 1000);
        });
    }
    sumMoney() {
        this.sumTT = 0;
        for (let i = 0; i < this.listItem.length; i++) {
            this.sumTT = this.sumTT + this.listItem[i].TongTien;
        }
    }
    openModal(isCreate, ChungTuID, ThoiDiem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var item = {
                "Type": isCreate,
                "ChungTuID": ChungTuID,
                "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4),
                "DienGiai": this.title,
                "LoaiCTID": this.sendChungtu.loaictid,
                "pageParent": 'list',
            };
            if (this.CTCurrent.LoaiNX == "4_1") {
                this.navController.navigateBack(['xuathang-detail'], {
                    queryParams: item
                });
            }
            else if (this.CTCurrent.LoaiNX == "2_1") {
                this.navController.navigateBack(['nhaphang-detail'], {
                    queryParams: item
                });
            }
        });
    }
    presentActionSheet(ChungTuID, ThoiDiem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hoverItem(ChungTuID);
            var listBtn = [
                {
                    text: 'Chi tiết',
                    icon: 'document-attach-outline',
                    handler: () => {
                        this.openDetail(ChungTuID, String(ThoiDiem));
                    },
                },
                {
                    text: 'Sửa phiếu',
                    icon: 'create-outline',
                    handler: () => {
                        this.openModal('edit', ChungTuID, String(ThoiDiem));
                    },
                },
                {
                    text: 'Xóa phiếu',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => {
                        this.confirmDelete();
                    },
                },
                {
                    text: 'Đóng',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    },
                },
            ];
            if (this.CTCurrent.LoaiNX == "4_1") {
                var print = {
                    text: 'In phiếu',
                    icon: 'print-outline',
                    handler: () => {
                        this.print();
                    },
                };
                listBtn.splice(0, 0, print);
            }
            this.ChungTuInfo = {
                "ChungTuID": ChungTuID,
                "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4),
            };
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'left-align-buttons',
                buttons: listBtn
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
        });
    }
    hoverItem(ChungTuID) {
        for (let i = 0; i < this.listItem.length; i++) {
            if (this.listItem[i].ChungTuID == ChungTuID) {
                this.listItem[i].check = true;
            }
            else {
                this.listItem[i].check = false;
            }
        }
    }
    confirmDelete() {
        this.ChungTuInfo.ChungTuID = String(this.ChungTuInfo.ChungTuID);
        this.AlertService.presentAlert(`Xác nhận xóa phiếu?`).then(res => {
            if (res == 'true') {
                this.LoadingService.setValue(true);
                this.XuatkhoService.deleteXuatHang(this.ChungTuInfo).subscribe((response) => {
                    var res = JSON.parse(response._body);
                    if (res.code == 200) {
                        this.ToastService.successToast(res.message);
                        this.getData();
                    }
                    else {
                        this.ToastService.errorToast(res.message);
                    }
                    this.LoadingService.setValue(false);
                }, (error) => {
                    setTimeout(() => {
                        console.log('error', error);
                    }, 1000);
                });
            }
        });
    }
    onSearch(e) {
        this.searchData.keyword = e.target.value;
        sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));
        this.search();
    }
    search() {
        var arrPlan = [];
        var arr = [];
        if (this.searchData.keyword) {
            this.listItemSearch.find((o, i) => {
                if (o.SoCT.toLowerCase().includes(this.searchData.keyword.toLowerCase()) == true || o.TenDV.toLowerCase().includes(this.searchData.keyword.toLowerCase()) == true) {
                    arrPlan.push(this.listItemSearch[i]);
                }
            });
        }
        else {
            arrPlan = this.listItemSearch;
        }
        var start = new Date(this.searchData.fromDay.slice(0, 10)).getTime();
        var end = new Date(this.searchData.toDay.slice(0, 10)).getTime();
        for (let i = 0; i < arrPlan.length; i++) {
            var dateItem = new Date(arrPlan[i].ThoiDiem.slice(0, 10)).getTime();
            if (dateItem >= start && dateItem <= end) {
                arr.push(arrPlan[i]);
            }
        }
        this.listItem = arr;
        this.countItem = arr.length;
    }
    deleteSearch() {
        this.searchData.keyword = '';
        this.search();
    }
    changeYear(year) {
        this.sendChungtu.nam_du_lieu = year.slice(0, 4);
        this.getData();
        this.searchData.fromDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.fromDay.slice(4, 10);
        this.searchData.toDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.toDay.slice(4, 10);
        this.search();
    }
    changeDay(time, type) {
        this.searchData[type] = this.sendChungtu.nam_du_lieu.slice(0, 4) + time.slice(4, 10);
        sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));
        this.search();
        this.sumMoney();
    }
    openDetail(ChungTuID, ThoiDiem) {
        var item = {
            "ChungTuID": ChungTuID,
            "nam_du_lieu": ThoiDiem === null || ThoiDiem === void 0 ? void 0 : ThoiDiem.slice(0, 4),
            "DienGiai": this.title,
            "LoaiCTID": this.sendChungtu.loaictid,
            "Type": "detail"
        };
        if (this.CTCurrent.LoaiNX == "4_1") {
            this.navController.navigateBack(['xuathang-detail'], {
                queryParams: item
            });
        }
        else if (this.CTCurrent.LoaiNX == "2_1") {
            this.navController.navigateBack(['nhaphang-detail'], {
                queryParams: item
            });
        }
    }
    openTypeCT() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var listBtn = [];
            for (let i = 0; i < this.listLoaiCT.length; i++) {
                listBtn.push({
                    text: this.listLoaiCT[i].DienGiai,
                    icon: 'medical-outline',
                    cssClass: this.CTCurrent.LoaiCTID == this.listLoaiCT[i].LoaiCTID ? 'buttonSheetOn' : 'buttonSheetOff',
                    handler: () => {
                        this.CTCurrent = this.listLoaiCT[i];
                        this.sendChungtu.loaictid = this.listLoaiCT[i].LoaiCTID;
                        this.title = this.listLoaiCT[i].DienGiai;
                        this.getData();
                    },
                });
            }
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'left-align-buttons',
                buttons: listBtn
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    openBack() {
        sessionStorage.removeItem('searchBill');
        this.navController.navigateBack(['tabs/tab3']);
        // this.router.navigateByUrl("tabs/tab3");
    }
};
BillListPage.ctorParameters = () => [
    { type: src_app_function_service__WEBPACK_IMPORTED_MODULE_4__["FunctionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_5__["XuatkhoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"] },
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_9__["ToastService"] }
];
BillListPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"],] }]
};
BillListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bill-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bill-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-list/bill-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bill-list.page.scss */ "./src/app/bill/bill-list/bill-list.page.scss")).default]
    })
], BillListPage);



/***/ }),

/***/ "./src/app/service/AlertService.ts":
/*!*****************************************!*\
  !*** ./src/app/service/AlertService.ts ***!
  \*****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



// import { StringResources } from '@app/models/sharedmodels';
let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentAlert(question) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: question,
                cssClass: 'cssAlert',
                mode: 'ios',
                buttons: [
                    {
                        text: "Hủy",
                        role: 'false',
                    },
                    {
                        text: "Đồng ý",
                        role: 'true',
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            return `${role}`;
        });
    }
    presentAlert2(question, print) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var arr = [
                {
                    text: "Đồng ý",
                    role: 'true',
                },
                {
                    text: "Hủy",
                    role: 'false',
                },
            ];
            if (print) {
                arr.splice(1, 0, {
                    text: "Đồng ý và in",
                    role: 'trueAndPrint',
                });
            }
            const alert = yield this.alertController.create({
                header: question,
                cssClass: 'alertThree',
                buttons: arr
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            return `${role}`;
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/service/toastService.ts":
/*!*****************************************!*\
  !*** ./src/app/service/toastService.ts ***!
  \*****************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    successToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1500,
                position: 'top',
                color: 'success',
                cssClass: 'toast-ios'
            });
            yield toast.present();
        });
    }
    errorToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1500,
                position: 'top',
                color: 'danger',
                cssClass: 'toast-ios'
            });
            yield toast.present();
        });
    }
    warningToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1500,
                position: 'top',
                color: 'warning',
                cssClass: 'toast-ios'
            });
            yield toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "./src/app/service/xuatkho.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/xuatkho.service.ts ***!
  \********************************************/
/*! exports provided: XuatkhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatkhoService", function() { return XuatkhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/esm/index.js");
/* harmony import */ var _share_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/helper */ "./src/app/share/helper.ts");










let XuatkhoService = class XuatkhoService {
    constructor(http, router, toastController, http1, storage, modalController, convertHelper) {
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.http1 = http1;
        this.storage = storage;
        this.modalController = modalController;
        this.convertHelper = convertHelper;
        this.apiUrl = '';
    }
    getTongHopXuatKho(item) {
        let _url = this.convertHelper.env() + "Report/TongHopXuatKho";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, item, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    getChungtu(item) {
        let _url = this.convertHelper.env() + `ChungTu?nam_du_lieu=${item.nam_du_lieu}&loaictid=${item.loaictid}`;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    xuatHangDetail(item) {
        let _url = this.convertHelper.env() + `ChungTu/${item.ChungTuID}?nam_du_lieu=${item.nam_du_lieu}`;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    createXuatHang(item) {
        console.log("Xuat hang", item);
        let _url = this.convertHelper.env() + "ChungTu";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, item, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    updateXuatHang(item) {
        let _url = this.convertHelper.env() + "ChungTu";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, item, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    deleteXuatHang(item) {
        let _url = this.convertHelper.env() + "ChungTu";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.delete(_url, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: headers,
            body: item
        }));
    }
    // deleteXuatHang(item): Observable<any> {
    //     const _url = this.convertHelper.env() + "ChungTu";
    //     const headers = new Headers({
    //       'Authorization': 'Bearer ' + localStorage.getItem("Token"),
    //       'Content-Type': 'application/json',  // Set content type to JSON
    //     });
    //     // Note: You may need to adjust the payload structure based on your server's expectations
    //     const options = {
    //       headers: headers,
    //       body: item
    //     };
    //     return this.http.delete(_url, new RequestOptions(options));
    //   }
    heThong() {
        let _url = this.convertHelper.env() + "HeThong";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    DonViTinh(MaVT) {
        console.log("102 - ", MaVT);
        let _url = this.convertHelper.env() + "DonViTinh/" + MaVT;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
};
XuatkhoService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _share_helper__WEBPACK_IMPORTED_MODULE_8__["convertHelper"] }
];
XuatkhoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XuatkhoService);



/***/ }),

/***/ "./src/app/share/helper.ts":
/*!*********************************!*\
  !*** ./src/app/share/helper.ts ***!
  \*********************************/
/*! exports provided: convertHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHelper", function() { return convertHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let convertHelper = class convertHelper {
    constructor() {
        this.defaultNumbers = '';
        this.chuHangDonVi = '';
        this.chuHangChuc = '';
        this.chuHangTram = '';
        this.dvBlock = '';
        this.defaultNumbers = ' hai ba bốn năm sáu bảy tám chín';
        this.chuHangDonVi = ('1 một' + this.defaultNumbers).split(' ');
        this.chuHangChuc = ('lẻ mười' + this.defaultNumbers).split(' ');
        this.chuHangTram = ('không một' + this.defaultNumbers).split(' ');
        this.dvBlock = '1 nghìn triệu tỷ'.split(' ');
    }
    to_vietnamese(number) {
        var str = parseInt(number) + '';
        var i = 0;
        var arr = [];
        var index = str.length;
        var result = [];
        var rsString = '';
        if (index == 0 || str == 'NaN') {
            return '';
        }
        // Chia chuỗi số thành một mảng từng khối có 3 chữ số
        while (index >= 0) {
            arr.push(str.substring(index, Math.max(index - 3, 0)));
            index -= 3;
        }
        // Lặp từng khối trong mảng trên và convert từng khối đấy ra chữ Việt Nam
        for (i = arr.length - 1; i >= 0; i--) {
            if (arr[i] != '' && arr[i] != '000') {
                result.push(this.convert_block_three(arr[i]));
                // Thêm đuôi của mỗi khối
                if (this.dvBlock[i]) {
                    result.push(this.dvBlock[i]);
                }
            }
        }
        // Join mảng kết quả lại thành chuỗi string
        rsString = result.join(' ');
        // Trả về kết quả kèm xóa những ký tự thừa
        return rsString.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
    }
    convert_block_three(number) {
        if (number == '000')
            return '';
        var _a = number + ''; //Convert biến 'number' thành kiểu string
        //Kiểm tra độ dài của khối
        switch (_a.length) {
            case 0: return '';
            case 1: return this.chuHangDonVi[_a];
            case 2: return this.convert_block_two(_a);
            case 3:
                var chuc_dv = '';
                if (_a.slice(1, 3) != '00') {
                    chuc_dv = this.convert_block_two(_a.slice(1, 3));
                }
                var tram = this.chuHangTram[_a[0]] + ' trăm';
                return tram + ' ' + chuc_dv;
        }
    }
    convert_block_two(number) {
        var dv = this.chuHangDonVi[number[1]];
        var chuc = this.chuHangChuc[number[0]];
        var append = '';
        // Nếu chữ số hàng đơn vị là 5
        if (number[0] > 0 && number[1] == 5) {
            dv = 'lăm';
        }
        // Nếu số hàng chục lớn hơn 1
        if (number[0] > 1) {
            append = ' mươi';
            if (number[1] == 1) {
                dv = ' mốt';
            }
        }
        return chuc + '' + append + ' ' + dv;
    }
    env() {
        return `https://${localStorage.getItem('unit')}.tvsgpp.net/api/`;
    }
    env2() {
        return `https://tvsgpp.net/api/`;
    }
    typeProduct() {
        // return ['Thuốc','Vật tư y tế','Thực phẩm chức năng'];
        return [
            {
                'item': 'Thuốc',
                'value': 'THUOC'
            },
            {
                'item': 'Vật tư y tế',
                'value': 'VTYT'
            },
            {
                'item': 'Thực phẩm chức năng',
                'value': 'TPCN'
            },
        ];
    }
    typeChungTu(LoaiCTID) {
        var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');
        for (let i = 0; i < typeArr.length; i++) {
            if (typeArr[i].LoaiCTID == LoaiCTID) {
                return typeArr[i].DienGiai;
            }
        }
    }
    typeChungTuObj(LoaiCTID) {
        var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');
        for (let i = 0; i < typeArr.length; i++) {
            if (typeArr[i].LoaiCTID == LoaiCTID) {
                return typeArr[i];
            }
        }
    }
    convertFileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
};
convertHelper.ctorParameters = () => [];
convertHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], convertHelper);



/***/ })

}]);
//# sourceMappingURL=bill-bill-list-bill-list-module-es2015.js.map