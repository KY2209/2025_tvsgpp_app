(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-detail-notifications-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications-detail/notifications-detail.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications-detail/notifications-detail.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Nội dung thông báo\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"duplicate-outline\"></ion-icon> -->\r\n      </ion-item>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <table>\r\n    <tr>\r\n      <td class=\"font-bold\" style=\"font-size: 18px;padding-left: 10px;\">{{this.tittle}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td style=\"font-size: 15px;padding-left: 10px;padding-right: 10px;\">\r\n        {{this.content}}\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/notifications-detail/notifications-detail-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/notifications-detail/notifications-detail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: NotificationsDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsDetailPageRoutingModule", function() { return NotificationsDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notifications_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications-detail.page */ "./src/app/notifications-detail/notifications-detail.page.ts");




const routes = [
    {
        path: '',
        component: _notifications_detail_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsDetailPage"]
    }
];
let NotificationsDetailPageRoutingModule = class NotificationsDetailPageRoutingModule {
};
NotificationsDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/notifications-detail/notifications-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/notifications-detail/notifications-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsDetailPageModule", function() { return NotificationsDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-detail-routing.module */ "./src/app/notifications-detail/notifications-detail-routing.module.ts");
/* harmony import */ var _notifications_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications-detail.page */ "./src/app/notifications-detail/notifications-detail.page.ts");







let NotificationsDetailPageModule = class NotificationsDetailPageModule {
};
NotificationsDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsDetailPageRoutingModule"]
        ],
        declarations: [_notifications_detail_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsDetailPage"]]
    })
], NotificationsDetailPageModule);



/***/ }),

/***/ "./src/app/notifications-detail/notifications-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/notifications-detail/notifications-detail.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMtZGV0YWlsL25vdGlmaWNhdGlvbnMtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/notifications-detail/notifications-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/notifications-detail/notifications-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationsDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsDetailPage", function() { return NotificationsDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../function.service */ "./src/app/function.service.ts");





let NotificationsDetailPage = class NotificationsDetailPage {
    constructor(navCtrl, router, loadingController, toastController, Function, modalController, navController, platform) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.Function = Function;
        this.modalController = modalController;
        this.navController = navController;
        this.platform = platform;
        this.router.queryParams.subscribe(params => {
            console.log("23", params);
            this.Id = params.nftID;
            this.getThongBao();
        });
    }
    getThongBao() {
        let data = this.Function.getChiTietThongBao(this.Id);
        data.subscribe(rs => {
            console.log(rs);
            this.content = rs[0].NoiDung;
            this.tittle = rs[0].TieuDe;
        });
    }
    openBack() {
        this.navController.navigateBack("notifications-list");
    }
};
NotificationsDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _function_service__WEBPACK_IMPORTED_MODULE_4__["FunctionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
NotificationsDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications-detail/notifications-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications-detail.page.scss */ "./src/app/notifications-detail/notifications-detail.page.scss")).default]
    })
], NotificationsDetailPage);



/***/ })

}]);
//# sourceMappingURL=notifications-detail-notifications-detail-module-es2015.js.map