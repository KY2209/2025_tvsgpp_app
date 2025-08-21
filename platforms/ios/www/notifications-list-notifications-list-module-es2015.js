(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-list-notifications-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications-list/notifications-list.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications-list/notifications-list.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon (click)=\"openBack()\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"text-align: center!important;\">\r\n      Thông báo mới\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\"color: #fff; --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon *ngIf=\"this.TabIndex == 2\" (click)=\"openTab(1)\" name=\"close-circle-outline\" style=\"font-size: 25px;\">\r\n        </ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div>\r\n\r\n    <div style=\"padding: 10px;\">\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n        <tr>\r\n          <td style=\"padding: 0px!important;\">\r\n            <ion-searchbar showCancelButton=\"always\" color=\"light\" style=\"--border-radius:1px;\"\r\n              placeholder=\"Tìm kiếm thông tin\" (ionInput)=\"filterInfo($event)\" [(ngModel)]=\"Keyword\"\r\n              style=\"--font-size:20px!important;\" clearInput>\r\n            </ion-searchbar>\r\n          </td>\r\n          <td style=\"padding: 0px!important; padding: 10px!important; width: 40px; text-align: right;\">\r\n            <ion-icon (click)=\"getThongBaoGPP()\" name=\"search-outline\" style=\"font-size: 25px;\r\n            margin-bottom: -5px !important;            \r\n            padding: 9px;\r\n            border: solid 1px #7077d6;\r\n            border-radius: 4px;\r\n            color: #7077d6;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <div *ngFor=\"let item of lstThongBao\" style=\"margin-top: 20px;\">\r\n\r\n        <div style=\"margin-bottom: 15px; border-bottom: solid 1px #ddd; padding-bottom: 5px;\">\r\n          <table style=\"width: 100%!important; max-width: 100%!important; margin-bottom: 0px;\"\r\n            (click)=\"viewDetail(item.Id)\">\r\n            <tr>\r\n              <td style=\"padding-bottom: 5px;padding-left: 5px;\">\r\n                <div style=\"font-size: 15px;font-weight: bold;\">\r\n                  <p>{{item.TieuDe}}</p>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/notifications-list/notifications-list-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/notifications-list/notifications-list-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: NotificationsListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsListPageRoutingModule", function() { return NotificationsListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notifications_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications-list.page */ "./src/app/notifications-list/notifications-list.page.ts");




const routes = [
    {
        path: '',
        component: _notifications_list_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsListPage"]
    }
];
let NotificationsListPageRoutingModule = class NotificationsListPageRoutingModule {
};
NotificationsListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsListPageRoutingModule);



/***/ }),

/***/ "./src/app/notifications-list/notifications-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/notifications-list/notifications-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsListPageModule", function() { return NotificationsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-list-routing.module */ "./src/app/notifications-list/notifications-list-routing.module.ts");
/* harmony import */ var _notifications_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications-list.page */ "./src/app/notifications-list/notifications-list.page.ts");







let NotificationsListPageModule = class NotificationsListPageModule {
};
NotificationsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsListPageRoutingModule"]
        ],
        declarations: [_notifications_list_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsListPage"]]
    })
], NotificationsListPageModule);



/***/ }),

/***/ "./src/app/notifications-list/notifications-list.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/notifications-list/notifications-list.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMtbGlzdC9ub3RpZmljYXRpb25zLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/notifications-list/notifications-list.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications-list/notifications-list.page.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsListPage", function() { return NotificationsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../function.service */ "./src/app/function.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);







let NotificationsListPage = class NotificationsListPage {
    constructor(navCtrl, router, loadingController, toastController, Function, modalController, navController, platform) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.Function = Function;
        this.modalController = modalController;
        this.navController = navController;
        this.platform = platform;
        this.TabIndex = 1;
        this.tuNgay = new Date().toISOString();
        this.denNgay = new Date(new Date().getTime() + (1 * (1 * 24 * 60 * 60 * 1000))).toISOString();
        this.Keyword = "";
    }
    getThongBaoGPP() {
        let data = this.Function.getThongBao();
        data.subscribe(rs => {
            console.log(rs);
            this.lstThongBao = rs;
            this.lstThongBaoAll = this.lstThongBao;
            for (let i = 0; i <= this.lstThongBao.length - 1; i++) {
                let item = this.lstThongBao[i];
                if (item.NoiDung.length > 50) {
                    item.NoiDung = item.NoiDung.substring(0, 50) + "...";
                }
            }
        });
    }
    filterInfo(pid) {
        const val = pid.target.value;
        console.log(val);
        if (val && val.trim() != '') {
            this.lstThongBao = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.values(this.lstThongBaoAll);
            this.lstThongBao = this.lstThongBao.filter((info) => {
                return (info.NoiDung.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.lstThongBao = this.lstThongBaoAll;
        }
    }
    viewDetail(ChungTuID) {
        var item = {
            "nftID": ChungTuID,
        };
        this.navController.navigateBack(['notifications-detail'], {
            queryParams: item
        });
    }
    ionViewDidEnter() {
        this.getThongBaoGPP();
    }
    openBack() {
        this.router.navigateByUrl("tabs/tab3");
    }
    openTab(_tabIndex) {
        this.TabIndex = _tabIndex;
    }
};
NotificationsListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _function_service__WEBPACK_IMPORTED_MODULE_4__["FunctionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
NotificationsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications-list/notifications-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications-list.page.scss */ "./src/app/notifications-list/notifications-list.page.scss")).default]
    })
], NotificationsListPage);



/***/ })

}]);
//# sourceMappingURL=notifications-list-notifications-list-module-es2015.js.map