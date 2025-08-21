(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kho/kho-create/kho-create.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kho/kho-create/kho-create.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>donvi-create</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"unit\">\r\n    <div class=\"unit-header\">\r\n      <div class=\"unit-title\">{{isCreate == 'true' ? 'Thêm' : 'Sửa'}} kho</div>\r\n      <ion-icon (click)=\"closeModal()\" name=\"close-outline\"></ion-icon>\r\n    </div>\r\n    <table class=\"w-full\">\r\n      <tr>\r\n        <td colspan=\"2\">\r\n          <div class=\"unit-item\">\r\n            <label for=\"\">Tên kho <span class=\"text-err\">*</span></label>\r\n            <input type=\"text\" [(ngModel)]=\"sendItem.TenKho\">\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td *ngIf=\"submit && !sendItem.TenKho\" colspan=\"2\" style=\"padding-top: 10px;\">\r\n          <div class=\"text-err\">\r\n            Trường bắt buộc nhập\r\n          </div>\r\n        </td>\r\n      </tr>\r\n \r\n      <tr>\r\n        <td  colspan=\"2\">\r\n            <div class=\"unit-item\">\r\n              <label for=\"\">Địa chỉ</label>\r\n              <input type=\"text\" [(ngModel)]=\"sendItem.DiaChi\">\r\n            </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div> \r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n\r\n  <div class=\"unit-footer\">\r\n    <button (click)=\"confirmSubmit()\">{{isCreate == 'true' ? 'THÊM' : 'SỬA'}} KHO </button>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/kho/kho-create/kho-create.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/kho/kho-create/kho-create.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".unit {\n  padding: 4px 10px;\n}\n.unit-header {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #cbcbcb;\n}\n.unit-header ion-icon {\n  font-size: 30px;\n}\n.unit-title {\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: #242424;\n  padding: 8px 0 8px 0;\n  color: var(--background-color);\n}\n.unit-footer {\n  padding: 6px;\n}\n.unit-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date], .unit-input {\n  width: 100%;\n  border: 1px solid white;\n  background: #caeeff;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding: 8px 10px;\n}\nlabel {\n  font-weight: 500;\n}\n.input-no-border {\n  background: white !important;\n  text-align: right !important;\n}\ntd {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2hvL2toby1jcmVhdGUva2hvLWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBRlI7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFTQTs7O0VBT0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVZKO0FBYUE7RUFDSSxnQkFBQTtBQVZKO0FBYUE7RUFDSSw0QkFBQTtFQUNBLDRCQUFBO0FBVko7QUFjQTtFQUNJLGlCQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC9raG8va2hvLWNyZWF0ZS9raG8tY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0e1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHggICA7XHJcbiAgICBcclxuICAgICYtaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcclxuXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjQyNDI0O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwIDhweCAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi1mb290ZXJ7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSwgLnVuaXQtaW5wdXQge1xyXG4gICAgLy8gd2lkdGg6IDEwMHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2NhZWVmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnB1dC1uby1ib3JkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbnRke1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG59Il19 */");

/***/ }),

/***/ "./src/app/kho/kho-create/kho-create.page.ts":
/*!***************************************************!*\
  !*** ./src/app/kho/kho-create/kho-create.page.ts ***!
  \***************************************************/
/*! exports provided: KhoCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoCreatePage", function() { return KhoCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/kho.service */ "./src/app/service/kho.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");








let KhoCreatePage = class KhoCreatePage {
    constructor(GlobalService, route, LoadingService, KhoService, ToastService, actionSheetController) {
        this.GlobalService = GlobalService;
        this.route = route;
        this.LoadingService = LoadingService;
        this.KhoService = KhoService;
        this.ToastService = ToastService;
        this.actionSheetController = actionSheetController;
        this.isCreate = '';
        this.KhoItem = {};
        this.sendItem = {
            "OfficeID": 0,
            "KhoID": 0,
            "TenKho": "",
            "DiaChi": ""
        };
        this.submit = false;
    }
    ngOnInit() {
        if (this.isCreate == 'false') {
            this.sendItem = this.KhoItem;
            console.log('KhoItem', this.KhoItem);
        }
        this.sendItem.officeId = Number(localStorage.getItem("officeId"));
    }
    confirmSubmit() {
        console.log('this.sendItem', this.sendItem);
        this.submit = true;
        if (!this.sendItem.TenKho) {
            return;
        }
        this.LoadingService.setValue(true);
        this.KhoService.createKho(this.sendItem).subscribe((response) => {
            console.log('response', response);
            this.ToastService.successToast('Cập nhật thành công!');
            if (this.isCreate == 'true') {
                this.formatItem();
            }
            this.LoadingService.setValue(false);
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    formatItem() {
        this.submit = false;
        this.sendItem = {
            "OfficeID": 0,
            "KhoID": 0,
            "TenKho": "",
            "DiaChi": ""
        };
    }
    closeModal() {
        this.GlobalService.closeModal();
    }
};
KhoCreatePage.ctorParameters = () => [
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_5__["KhoService"] },
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
KhoCreatePage.propDecorators = {
    isCreate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    KhoItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
KhoCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kho-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./kho-create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kho/kho-create/kho-create.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./kho-create.page.scss */ "./src/app/kho/kho-create/kho-create.page.scss")).default]
    })
], KhoCreatePage);



/***/ }),

/***/ "./src/app/service/kho.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/kho.service.ts ***!
  \****************************************/
/*! exports provided: KhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoService", function() { return KhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/esm/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _share_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../share/helper */ "./src/app/share/helper.ts");











let KhoService = class KhoService {
    constructor(http, router, toastController, convertHelper, http1, storage, modalController) {
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.convertHelper = convertHelper;
        this.http1 = http1;
        this.storage = storage;
        this.modalController = modalController;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlGpp;
    }
    getKho() {
        let _url = this.convertHelper.env() + "Kho";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.get(_url, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    createKho(item) {
        let _url = this.convertHelper.env() + "Kho";
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.post(_url, item, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.json()));
    }
    deleteKho(id) {
        let _url = this.convertHelper.env() + "Kho/" + id;
        const headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
        return this.http.delete(_url, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: headers,
        }));
    }
};
KhoService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _share_helper__WEBPACK_IMPORTED_MODULE_9__["convertHelper"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
KhoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KhoService);



/***/ })

}]);
//# sourceMappingURL=default~bill-bill-detail-bill-detail-module~kho-kho-create-kho-create-module~kho-kho-index-kho-index~717b022a-es2015.js.map