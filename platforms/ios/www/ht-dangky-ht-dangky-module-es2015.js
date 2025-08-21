(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ht-dangky-ht-dangky-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ht-dangky/ht-dangky.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ht-dangky/ht-dangky.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-item lines=\"none\"\n        style=\"--background:#fff; --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\n        <ion-icon (click)=\"openBack()\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-item>\n    </ion-buttons>\n    <ion-title style=\"text-align: center; font-size: 18px;\">\n      Đăng ký\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-item lines=\"none\"\n        style=\"--background:#fff; --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\n        <ion-icon name=\"close-circle-outline\" style=\"font-size: 25px; color: #fff; font-weight: bold;\">\n        </ion-icon>\n      </ion-item>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"padding:10px!important\">\n\n  <div\n    style=\"padding: 10px!important; border-radius: 5px; text-align: center!important; display:block; height: 100%!important;\">\n\n    <!-- <p\n      style=\"text-align: center!important; margin-top:40px!important; margin-bottom:40px!important; padding-left: 60px!important; padding-right: 60px!important;\">\n      <img src=\"../../assets/images/TTHLogo.png\" style=\"border-radius: 6px; width: 30%!important;\">\n    </p> -->\n\n    <div style=\"padding-left: 30px; padding-right: 30px;\">\n\n      <div\n        style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 2px!important; border-radius: 2px; margin-top: 30px!important;\">\n        <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fff;\">\n          <tr>\n            <td style=\"width: 50px; background-color: #fff;\">\n              <ion-icon item-left name=\"person\" style=\"color: #7077d6; font-size: 30px;\"></ion-icon>\n            </td>\n            <td style=\"text-align: justify;\">\n              <ion-input type=\"text\" [(ngModel)]=\"UserName\" style=\"--padding-start:10px!important;color: #7077d6;\"\n                placeholder=\"Tài khoản\">\n              </ion-input>\n            </td>\n          </tr>\n        </table>\n      </div>\n\n      <div\n        style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 2px!important; margin-top: 5px; border-radius: 2px;\">\n        <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fff;\">\n          <tr>\n            <td style=\"width: 50px; background-color: #fff;\">\n              <ion-icon item-left name=\"lock-closed-outline\" style=\"color: #7077d6; font-size: 30px;\"></ion-icon>\n            </td>\n            <td style=\"text-align: justify;\">\n              <ion-input type=\"password\" [(ngModel)]=\"PassWord\" style=\"--padding-start:10px!important;color: #7077d6;\"\n                placeholder=\"Mật khẩu\">\n              </ion-input>\n          </tr>\n        </table>\n      </div>\n\n      <div\n      style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 2px!important; margin-top: 5px; border-radius: 2px;\">\n      <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fff;\">\n        <tr>\n          <td style=\"width: 50px; background-color: #fff;\">\n            <ion-icon item-left name=\"lock-closed-outline\" style=\"color: #7077d6; font-size: 30px;\"></ion-icon>\n          </td>\n          <td style=\"text-align: justify;\">\n            <ion-input type=\"password\" [(ngModel)]=\"PassWord\" style=\"--padding-start:10px!important;color: #7077d6;\"\n              placeholder=\"Lặp lại mật khẩu\">\n            </ion-input>\n        </tr>\n      </table>\n    </div>\n\n    </div>\n\n    <div style=\"margin-top: 20px; padding-left: 30px; padding-right:30px; text-align: justify!important;\">\n\n      <div\n        style=\"margin-top: 40px; padding: 12px; text-align: center; background-color:#7077d6!important; color: #fff; border-radius:4px!important; width: 100%!important;\">\n        Đăng ký\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar style=\"--background:#fff;--border-width:0px!important;\">\n    <table style=\"width: 100%!important; margin-bottom: 0px;\">\n      <tr>\n        <td style=\"text-align: center; padding-left: 50px; padding-right: 50px; vertical-align: bottom!important; font-size: 15px; color: #6a6e72;\">\n          Đăng ký nghĩa là bạn đã đồng ý với các <span><u>điều khoản</u></span><br> sử dụng app của TTH Group\n        </td>\n      </tr>\n    </table>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/ht-dangky/ht-dangky-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ht-dangky/ht-dangky-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HtDangkyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtDangkyPageRoutingModule", function() { return HtDangkyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ht_dangky_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ht-dangky.page */ "./src/app/ht-dangky/ht-dangky.page.ts");




const routes = [
    {
        path: '',
        component: _ht_dangky_page__WEBPACK_IMPORTED_MODULE_3__["HtDangkyPage"]
    }
];
let HtDangkyPageRoutingModule = class HtDangkyPageRoutingModule {
};
HtDangkyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HtDangkyPageRoutingModule);



/***/ }),

/***/ "./src/app/ht-dangky/ht-dangky.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ht-dangky/ht-dangky.module.ts ***!
  \***********************************************/
/*! exports provided: HtDangkyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtDangkyPageModule", function() { return HtDangkyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ht_dangky_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ht-dangky-routing.module */ "./src/app/ht-dangky/ht-dangky-routing.module.ts");
/* harmony import */ var _ht_dangky_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ht-dangky.page */ "./src/app/ht-dangky/ht-dangky.page.ts");







let HtDangkyPageModule = class HtDangkyPageModule {
};
HtDangkyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ht_dangky_routing_module__WEBPACK_IMPORTED_MODULE_5__["HtDangkyPageRoutingModule"]
        ],
        declarations: [_ht_dangky_page__WEBPACK_IMPORTED_MODULE_6__["HtDangkyPage"]]
    })
], HtDangkyPageModule);



/***/ }),

/***/ "./src/app/ht-dangky/ht-dangky.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ht-dangky/ht-dangky.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2h0LWRhbmdreS9odC1kYW5na3kucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ht-dangky/ht-dangky.page.ts":
/*!*********************************************!*\
  !*** ./src/app/ht-dangky/ht-dangky.page.ts ***!
  \*********************************************/
/*! exports provided: HtDangkyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtDangkyPage", function() { return HtDangkyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let HtDangkyPage = class HtDangkyPage {
    constructor(navCtrl, router, loadingController, toastController, platform) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.platform = platform;
    }
    ngOnInit() {
    }
    openBack() {
        this.router.navigateByUrl("sys-home");
    }
};
HtDangkyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
HtDangkyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ht-dangky',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ht-dangky.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ht-dangky/ht-dangky.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ht-dangky.page.scss */ "./src/app/ht-dangky/ht-dangky.page.scss")).default]
    })
], HtDangkyPage);



/***/ })

}]);
//# sourceMappingURL=ht-dangky-ht-dangky-module-es2015.js.map