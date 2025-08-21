(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ht-madonvi-ht-madonvi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ht-madonvi/ht-madonvi.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ht-madonvi/ht-madonvi.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><center>Xác định mã đơn vị</center></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"padding: 50px; padding-bottom: 20px!important; margin-top: 0px;\">\n    Vui lòng nhập mã đơn vị đã được cấp trước khi sử dụng phần mềm!\n  </div>\n\n  <div\n    style=\"width: 100%!important; max-width: 100%!important; background-color: #fff; padding: 50px!important; padding-top: 0px!important; margin-top: 0px!important;\">\n    <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fff;\">\n      <tr>\n        <td style = \"text-align: justify; padding-bottom: 10px;\">\n          Mã đơn vị\n        </td>\n      </tr>\n      <tr>\n        <td style=\"text-align: center;\">\n          <ion-input type=\"text\" [(ngModel)]=\"this.ORG_CODE\"\n            style=\"--padding-start:10px!important;color: #1349eb; background-color: aliceblue; font-weight: bold; font-size: 20px; text-align: center; text-transform: uppercase; border: solid 1px #cecece!important; border-radius: 4px;\"\n            placeholder=\"\">\n          </ion-input>\n        </td>\n      </tr>\n    </table>\n\n    <div style=\"margin-top: 15px;\" *ngIf = \"this.ORG_CODE != ''\">\n\n      <ion-button *ngIf=\"this.logStatus\" (click)=\"ghiDuLieu()\"\n        style=\"font-weight: bold;--background:#21409a!important; --border-border-radius:30px!important;\">\n        Xác thực mã đơn vị\n      </ion-button>\n\n      <ion-button *ngIf=\"!this.logStatus\" style=\"font-weight: bold;--background:#21409a!important;\">\n        <ion-spinner name=\"lines\"></ion-spinner>&nbsp;Đang kiểm tra, vui lòng đợi...\n      </ion-button>\n\n    </div>\n\n    <!-- <ion-button (click)=\"ghiDuLieu()\"\n      style=\"font-weight: bold;--background:#21409a!important; --border-border-radius:30px!important;\">\n      GHI DU LIEU\n    </ion-button>\n    \n    <ion-button (click)=\"docDuLieu()\"\n      style=\"font-weight: bold;--background:#21409a!important; --border-border-radius:30px!important;\">\n      DOC DU LIEU\n    </ion-button> -->\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/ht-madonvi/ht-madonvi-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ht-madonvi/ht-madonvi-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HtMadonviPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtMadonviPageRoutingModule", function() { return HtMadonviPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ht_madonvi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ht-madonvi.page */ "./src/app/ht-madonvi/ht-madonvi.page.ts");




const routes = [
    {
        path: '',
        component: _ht_madonvi_page__WEBPACK_IMPORTED_MODULE_3__["HtMadonviPage"]
    }
];
let HtMadonviPageRoutingModule = class HtMadonviPageRoutingModule {
};
HtMadonviPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HtMadonviPageRoutingModule);



/***/ }),

/***/ "./src/app/ht-madonvi/ht-madonvi.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ht-madonvi/ht-madonvi.module.ts ***!
  \*************************************************/
/*! exports provided: HtMadonviPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtMadonviPageModule", function() { return HtMadonviPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ht_madonvi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ht-madonvi-routing.module */ "./src/app/ht-madonvi/ht-madonvi-routing.module.ts");
/* harmony import */ var _ht_madonvi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ht-madonvi.page */ "./src/app/ht-madonvi/ht-madonvi.page.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");








let HtMadonviPageModule = class HtMadonviPageModule {
};
HtMadonviPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
            _ht_madonvi_routing_module__WEBPACK_IMPORTED_MODULE_5__["HtMadonviPageRoutingModule"]
        ],
        declarations: [_ht_madonvi_page__WEBPACK_IMPORTED_MODULE_6__["HtMadonviPage"]]
    })
], HtMadonviPageModule);



/***/ }),

/***/ "./src/app/ht-madonvi/ht-madonvi.page.scss":
/*!*************************************************!*\
  !*** ./src/app/ht-madonvi/ht-madonvi.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2h0LW1hZG9udmkvaHQtbWFkb252aS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ht-madonvi/ht-madonvi.page.ts":
/*!***********************************************!*\
  !*** ./src/app/ht-madonvi/ht-madonvi.page.ts ***!
  \***********************************************/
/*! exports provided: HtMadonviPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtMadonviPage", function() { return HtMadonviPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _function_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../function.service */ "./src/app/function.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/esm/index.js");










let HtMadonviPage = class HtMadonviPage {
    constructor(http, navCtrl, router, loadingController, toastController, Function, storage, platform) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.Function = Function;
        this.storage = storage;
        this.platform = platform;
        this.logStatus = true;
        storage.create();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.storage.create();
        try {
            this.storage.get("orgCode").then((myValue) => {
                this.ORG_CODE = myValue;
                let objorgCode = {
                    orgCode: myValue,
                    time: Date.now(),
                    expire: Date.now() + 1000 * 6000
                };
                localStorage.setItem("ORGCODE", JSON.stringify(objorgCode));
            });
        }
        catch (_a) {
        }
        let objORGCODE = localStorage.getItem("ORGCODE");
        let tempObj = JSON.parse(objORGCODE);
        if (tempObj["ORGCODE"] != null) {
            this.ORG_CODE = tempObj["ORGCODE"];
        }
        if (this.ORG_CODE == null) {
            this.ORG_CODE = "";
        }
        localStorage.setItem("CURR_PAGE", "HtMadonviPage");
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "<center>Mã đơn vị không xác định</center>",
                color: 'danger',
                duration: 3000
            });
            toast.present();
        });
    }
};
HtMadonviPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _function_service__WEBPACK_IMPORTED_MODULE_5__["FunctionService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
HtMadonviPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ht-madonvi',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ht-madonvi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ht-madonvi/ht-madonvi.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ht-madonvi.page.scss */ "./src/app/ht-madonvi/ht-madonvi.page.scss")).default]
    })
], HtMadonviPage);



/***/ })

}]);
//# sourceMappingURL=ht-madonvi-ht-madonvi-module-es2015.js.map