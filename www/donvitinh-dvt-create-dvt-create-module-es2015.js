(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donvitinh-dvt-create-dvt-create-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>donvi-create</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"unit\">\r\n    <div class=\"unit-header\">\r\n      <div class=\"unit-title\">Đơn vị tính</div>\r\n      <ion-icon (click)=\"closeModal()\" name=\"close-outline\"></ion-icon>\r\n    </div>\r\n    <table class=\"w-full\">\r\n      <tr>\r\n        <td colspan=\"2\">\r\n          <div class=\"unit-item\">\r\n            <label for=\"\">Đơn vị tính <span class=\"text-err\">*</span></label>\r\n            <input type=\"text\" [(ngModel)]=\"sendItem.DVT\">\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"submit && !sendItem.DVT\" class=\"no-border-top\">\r\n        <td colspan=\"2\" class=\"text-err\"  style=\"padding-top: 8px !important;\">\r\n          Trường bắt buộc nhập\r\n        </td>\r\n      </tr>\r\n  \r\n \r\n      <tr>\r\n        <td>\r\n            <div class=\"unit-item pr-5\">\r\n              <label for=\"\">Quy đổi thành</label>\r\n              <input type=\"number\" [(ngModel)]=\"sendItem.SoLuongQuyDoi\" >\r\n            </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"unit-item pl-5\">\r\n            <label for=\"\">Đơn giá mua</label>\r\n            <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaMua\" (ngModelChange)=\"formatInput('GiaMua', $event)\">\r\n          </div>\r\n      </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n            <div class=\"unit-item pr-5\">\r\n              <label for=\"\">Đơn giá bán lẻ</label>\r\n              <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaBanLe\" (ngModelChange)=\"formatInput('GiaBanLe', $event)\">\r\n            </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"unit-item pl-5\">\r\n            <label for=\"\">Đơn giá bán sỷ</label>\r\n            <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaBanSy\" (ngModelChange)=\"formatInput('GiaBanSy', $event)\">\r\n          </div>\r\n      </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div> \r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n\r\n  <div class=\"unit-footer\">\r\n    <button (click)=\"confirmSubmit()\">LƯU ĐƠN VỊ TÍNH </button>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/donvitinh/dvt-create/dvt-create-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/donvitinh/dvt-create/dvt-create-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DvtCreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DvtCreatePageRoutingModule", function() { return DvtCreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dvt_create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dvt-create.page */ "./src/app/donvitinh/dvt-create/dvt-create.page.ts");




const routes = [
    {
        path: '',
        component: _dvt_create_page__WEBPACK_IMPORTED_MODULE_3__["DvtCreatePage"]
    }
];
let DvtCreatePageRoutingModule = class DvtCreatePageRoutingModule {
};
DvtCreatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DvtCreatePageRoutingModule);



/***/ }),

/***/ "./src/app/donvitinh/dvt-create/dvt-create.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/donvitinh/dvt-create/dvt-create.module.ts ***!
  \***********************************************************/
/*! exports provided: DvtCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DvtCreatePageModule", function() { return DvtCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dvt_create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dvt-create-routing.module */ "./src/app/donvitinh/dvt-create/dvt-create-routing.module.ts");
/* harmony import */ var _dvt_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dvt-create.page */ "./src/app/donvitinh/dvt-create/dvt-create.page.ts");







let DvtCreatePageModule = class DvtCreatePageModule {
};
DvtCreatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dvt_create_routing_module__WEBPACK_IMPORTED_MODULE_5__["DvtCreatePageRoutingModule"]
        ],
        declarations: [_dvt_create_page__WEBPACK_IMPORTED_MODULE_6__["DvtCreatePage"]]
    })
], DvtCreatePageModule);



/***/ }),

/***/ "./src/app/donvitinh/dvt-create/dvt-create.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/donvitinh/dvt-create/dvt-create.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".unit {\n  padding: 4px 10px;\n}\n.unit-header {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #cbcbcb;\n}\n.unit-header ion-icon {\n  font-size: 30px;\n}\n.unit-title {\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: #242424;\n  padding: 8px 0 8px 0;\n  color: var(--background-color);\n}\n.unit-footer {\n  padding: 5px;\n}\n.unit-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date], .unit-input {\n  width: 100%;\n  border: 1px solid white;\n  background: #caeeff;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding: 8px 10px;\n}\nlabel {\n  font-weight: 500;\n}\n.input-no-border {\n  background: white !important;\n  text-align: right !important;\n}\ntd {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9udml0aW5oL2R2dC1jcmVhdGUvZHZ0LWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBRlI7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFTQTs7O0VBT0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVZKO0FBYUE7RUFDSSxnQkFBQTtBQVZKO0FBYUE7RUFDSSw0QkFBQTtFQUNBLDRCQUFBO0FBVko7QUFjQTtFQUNJLGlCQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC9kb252aXRpbmgvZHZ0LWNyZWF0ZS9kdnQtY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0e1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHggICA7XHJcbiAgICBcclxuICAgICYtaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcclxuXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjQyNDI0O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwIDhweCAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi1mb290ZXJ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSwgLnVuaXQtaW5wdXQge1xyXG4gICAgLy8gd2lkdGg6IDEwMHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2NhZWVmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnB1dC1uby1ib3JkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbnRke1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/donvitinh/dvt-create/dvt-create.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/donvitinh/dvt-create/dvt-create.page.ts ***!
  \*********************************************************/
/*! exports provided: DvtCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DvtCreatePage", function() { return DvtCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");







let DvtCreatePage = class DvtCreatePage {
    // GiaMuaConv: string = '';
    // GiaBanLeConv: string = '';
    // GiaBanSyConv: string = '';
    constructor(GlobalService, currencyPipe, route, LoadingService, ToastService) {
        this.GlobalService = GlobalService;
        this.currencyPipe = currencyPipe;
        this.route = route;
        this.LoadingService = LoadingService;
        this.ToastService = ToastService;
        this.sendItem = {
            "DonViTinhID": 0,
            "DVT": "",
            "GiaMua": 0,
            "GiaBanLe": 0,
            "GiaBanSy": 0,
            "SoLuongQuyDoi": 1
        };
        this.sendItemConv = {
            "DVT": "",
            "GiaMua": "",
            "GiaBanLe": "",
            "GiaBanSy": "",
            "SoLuongQuyDoi": 1
        };
        this.submit = false;
    }
    ngOnInit() {
    }
    formatInput(item, e) {
        var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
        this.sendItemConv[item] = convNumber;
        // this.GiaBanLeConv = convNumber;
        this.sendItem[item] = Number(e.replace(/,/g, ''));
        console.log('convNumber', convNumber);
        console.log('this.sendItemConv', this.sendItemConv);
    }
    confirmSubmit() {
        this.sendItemConv.SoLuongQuyDoi = this.sendItem.SoLuongQuyDoi;
        this.submit = true;
        if (!this.sendItem.DVT) {
            return;
        }
        console.log('this.sendItem.DVT', this.sendItem.DVT);
        this.sendItemConv.DVT = this.sendItem.DVT;
        // console.log('sendItem', this.sendItem);
        this.GlobalService.closeModalSenData({
            'item': this.sendItem,
            'itemConv': this.sendItemConv
        });
    }
    closeModal() {
        this.GlobalService.closeModal();
    }
};
DvtCreatePage.ctorParameters = () => [
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
DvtCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dvt-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dvt-create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dvt-create.page.scss */ "./src/app/donvitinh/dvt-create/dvt-create.page.scss")).default]
    })
], DvtCreatePage);



/***/ }),

/***/ "./src/app/service/global.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/global.service.ts ***!
  \*******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




// import { StringResources } from '@app/models/sharedmodels';
let GlobalService = class GlobalService {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.controlMove = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('Quản lý trạm');
        this.sendMove = this.controlMove.asObservable();
    }
    changeMoveCont(item) {
        setTimeout(() => {
            this.controlMove.next(item);
        });
    }
    presentAlert(question, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: question,
                message: message,
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
    closeModalSenData(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = item;
            yield this.modalController.dismiss(onClosedData);
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const onClosedData: string = "ok";
            yield this.modalController.dismiss();
        });
    }
};
GlobalService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalService);



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



/***/ })

}]);
//# sourceMappingURL=donvitinh-dvt-create-dvt-create-module-es2015.js.map