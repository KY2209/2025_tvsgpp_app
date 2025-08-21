(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-nuoc-san-xuat-nuoc-san-xuat-module"],{

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

/***/ "./src/app/share/nuoc-san-xuat/nuoc-san-xuat-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/share/nuoc-san-xuat/nuoc-san-xuat-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NuocSanXuatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuocSanXuatPageRoutingModule", function() { return NuocSanXuatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nuoc_san_xuat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuoc-san-xuat.page */ "./src/app/share/nuoc-san-xuat/nuoc-san-xuat.page.ts");




const routes = [
    {
        path: '',
        component: _nuoc_san_xuat_page__WEBPACK_IMPORTED_MODULE_3__["NuocSanXuatPage"]
    }
];
let NuocSanXuatPageRoutingModule = class NuocSanXuatPageRoutingModule {
};
NuocSanXuatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NuocSanXuatPageRoutingModule);



/***/ }),

/***/ "./src/app/share/nuoc-san-xuat/nuoc-san-xuat.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/share/nuoc-san-xuat/nuoc-san-xuat.module.ts ***!
  \*************************************************************/
/*! exports provided: NuocSanXuatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuocSanXuatPageModule", function() { return NuocSanXuatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _nuoc_san_xuat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuoc-san-xuat-routing.module */ "./src/app/share/nuoc-san-xuat/nuoc-san-xuat-routing.module.ts");
/* harmony import */ var _nuoc_san_xuat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuoc-san-xuat.page */ "./src/app/share/nuoc-san-xuat/nuoc-san-xuat.page.ts");







let NuocSanXuatPageModule = class NuocSanXuatPageModule {
};
NuocSanXuatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nuoc_san_xuat_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuocSanXuatPageRoutingModule"]
        ],
        declarations: [_nuoc_san_xuat_page__WEBPACK_IMPORTED_MODULE_6__["NuocSanXuatPage"]]
    })
], NuocSanXuatPageModule);



/***/ })

}]);
//# sourceMappingURL=share-nuoc-san-xuat-nuoc-san-xuat-module-es2015.js.map