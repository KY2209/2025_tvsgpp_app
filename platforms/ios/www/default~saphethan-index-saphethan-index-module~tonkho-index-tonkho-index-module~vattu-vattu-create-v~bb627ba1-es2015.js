(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~bb627ba1"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-quocgia/vattu-quocgia.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-quocgia/vattu-quocgia.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Thuốc dược quốc gia\r\n    </ion-title> \r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"add-outline\" style=\"font-size: 26px;\"></ion-icon> -->\r\n      </ion-item>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"product-header\">\r\n    <div class=\"product-search\">\r\n      <input (keyup)=\"onSearch($event)\" [(ngModel)]=\"keyword\" type=\"text\"\r\n        placeholder=\"Tìm kiếm tên vật tư ...\" style=\"text-align: left; background: white;\">\r\n      <!-- <ion-icon class=\"search-icon\" *ngIf=\"pageInfo.keyword == ''\" name=\"search-outline\"></ion-icon> -->\r\n      <ion-icon (click)=\"deleteSearch()\" *ngIf=\"keyword != ''\" class=\"search-icon2\"\r\n        name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n    <!-- <div class=\"product-add\">\r\n        <div class=\"synthetic-item2\">\r\n          <div class=\"synthetic-item-left\">\r\n            {{countVattu | number}} vật tư trong danh sách\r\n          </div>\r\n          <div (click)=\"addItem('true')\" class=\"synthetic-item2-right\">\r\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n          </div>\r\n        </div>\r\n    </div> -->\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  \r\n\r\n  <div class=\"product\">\r\n    <div (click)=\"getItem(item)\" *ngFor=\"let item of listVattu; index as i\" class=\"product-item border-b\" [class]=\"item.checkHover == true ? 'bg-hover' : ''\">\r\n\r\n      <div class=\"product-content\">\r\n        <div class=\"product-content-item\">\r\n          <div class=\"product-content-left product-content-title\">\r\n            {{item.TenVT}} ({{item.MaDuocQG}})\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"product-content-item mt-10\">\r\n          <div class=\"product-content-left\">\r\n            <span>ĐVT:</span>\r\n            <span>\r\n              {{item.DVT}}\r\n            </span>\r\n\r\n          </div>\r\n\r\n          <div class=\"product-content-right\">\r\n            <div class=\"product-content-left\">\r\n              <span>SĐK:</span>\r\n              {{item.SoDangKy}}\r\n           \r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"product-content-item mt-10\">\r\n          <div class=\"product-content-left\">\r\n            <span>Hoạt chất chính:</span>\r\n            {{item.HoatChatChinh}}\r\n\r\n          </div>\r\n         \r\n        </div>\r\n        <div class=\"product-content-item mt-10\">\r\n          <div class=\"product-content-left\">\r\n            <span>Quy cách:</span>\r\n            {{item.QuyCach}}\r\n\r\n          </div>\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

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

/***/ "./src/app/vattu/vattu-quocgia/vattu-quocgia.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/vattu/vattu-quocgia/vattu-quocgia.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.product-search {\n  padding: 0 10px 10px 10px;\n  position: relative;\n  background: var(--background-color);\n}\n.product-search input {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.product-search ion-icon {\n  position: absolute;\n  right: 18px;\n  top: 9px;\n  font-size: 22px;\n}\n.product-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.product-item {\n  display: flex;\n  padding: 15px 10px;\n}\n.product-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.product-red {\n  border: 1px solid var(--red-dark) !important;\n  color: var(--red-dark) !important;\n}\n.product-content {\n  width: 100%;\n}\n.product-content-item {\n  display: flex;\n}\n.product-content-left {\n  display: flex;\n  gap: 5px;\n  color: var(--text-blue);\n}\n.product-content-left span {\n  color: var(--text-blue);\n  white-space: nowrap;\n}\n.product-content-left ion-icon {\n  border: 1px solid gray;\n  border-radius: 3px;\n}\n.product-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n  text-transform: capitalize;\n}\n.product-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.product-content-right {\n  margin-left: auto;\n  color: var(--text-blue);\n}\n.product-content-right span {\n  color: var(--text-blue);\n}\n.product-content-right ion-icon {\n  font-size: 24px;\n}\n.product-content-right button {\n  color: var(--primary-color);\n}\n.product-content-sl {\n  display: flex;\n  gap: 10px;\n}\n.product-content-sl ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.product-footer {\n  padding: 10px;\n}\n.product-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  margin-left: auto;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.product-footer-left {\n  display: flex;\n  align-items: center;\n}\n.product-footer-left ion-icon {\n  font-size: 18px;\n}\n.product-footer-form {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.product-footer-number {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: #0663a9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\ntable {\n  width: 100%;\n  margin-bottom: 10px;\n}\ntd {\n  padding: 8px 0px;\n}\ntd span {\n  color: var(--background-color);\n  font-weight: 600;\n}\ninput[type=text],\ninput[type=number], input[type=date] {\n  width: 72px;\n  border: 1px solid #a7e9f7;\n  text-align: center;\n  background: #a7e9f7;\n  border-radius: 5px;\n  padding: 4px 0;\n}\ninput[type=text]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF0dHUvdmF0dHUtcXVvY2dpYS92YXR0dS1xdW9jZ2lhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBTFI7QUFTSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQVBSO0FBU1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFQWjtBQVVRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFSWjtBQVlJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQVZSO0FBYUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBWlI7QUFlSTtFQUNJLDRDQUFBO0VBQ0EsaUNBQUE7QUFiUjtBQWdCSTtFQUNJLFdBQUE7QUFkUjtBQWdCUTtFQUNJLGFBQUE7QUFkWjtBQWtCUTtFQUNJLGFBQUE7RUFFQSxRQUFBO0VBQ0EsdUJBQUE7QUFqQlo7QUFvQlk7RUFFSSx1QkFBQTtFQUNBLG1CQUFBO0FBbkJoQjtBQXNCWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFwQmhCO0FBeUJRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQXZCWjtBQTBCUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBeEJaO0FBMkJRO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQXpCWjtBQTJCWTtFQUNJLHVCQUFBO0FBekJoQjtBQTRCWTtFQUNJLGVBQUE7QUExQmhCO0FBNkJZO0VBRUksMkJBQUE7QUE1QmhCO0FBcUNRO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFuQ1o7QUFxQ1k7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUFuQ2hCO0FBMENJO0VBQ0ksYUFBQTtBQXhDUjtBQTBDUTtFQUNJLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXhDWjtBQTJDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXpDWjtBQTRDWTtFQUNJLGVBQUE7QUExQ2hCO0FBK0NRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUE3Q1o7QUFpRFE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUEvQ1o7QUFxREE7RUFDSSxnQ0FBQTtBQWxESjtBQXFEQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQWxESjtBQXFEQTtFQUNJLGdCQUFBO0FBbERKO0FBcURBO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtBQWxESjtBQXFEQTs7RUFFSSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBbkRKO0FBc0RBO0VBQ0ksYUFBQTtBQW5ESiIsImZpbGUiOiJzcmMvYXBwL3ZhdHR1L3ZhdHR1LXF1b2NnaWEvdmF0dHUtcXVvY2dpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XHJcblxyXG4gICAgLy8gcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICYtc2VhcmNoIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTBweCAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LWRhcmspO1xyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXJlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmVkLWRhcmspICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmx1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsdWUpO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyBnYXA6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTYxNjE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICYtbnVtYmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICByaWdodDogLTdweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA2NjNhOTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmJvcmRlci1iIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmc6IDhweCAwcHg7XHJcbn1cclxuXHJcbnRkIHNwYW4ge1xyXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJde1xyXG4gICAgd2lkdGg6IDcycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTdlOWY3O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2E3ZTlmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLy8gaW5wdXRbdHlwZT0nZGF0ZSddOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4vLyAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgcmlnaHQ6IDA7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICB3aWR0aDogYXV0bztcclxuLy8gfVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/vattu/vattu-quocgia/vattu-quocgia.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/vattu/vattu-quocgia/vattu-quocgia.page.ts ***!
  \***********************************************************/
/*! exports provided: VattuQuocgiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VattuQuocgiaPage", function() { return VattuQuocgiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/AlertService */ "./src/app/service/AlertService.ts");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");
/* harmony import */ var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/vattu.service */ "./src/app/service/vattu.service.ts");








let VattuQuocgiaPage = class VattuQuocgiaPage {
    constructor(navController, actionSheetController, LoadingService, AlertService, modalController, ToastService, VattuService, GlobalService) {
        this.navController = navController;
        this.actionSheetController = actionSheetController;
        this.LoadingService = LoadingService;
        this.AlertService = AlertService;
        this.modalController = modalController;
        this.ToastService = ToastService;
        this.VattuService = VattuService;
        this.GlobalService = GlobalService;
        this.listData = [];
        this.listDataSearch = [];
        this.listVattu = [];
        this.page = '';
        this.listExist = [];
        this.timeout = '';
        this.sumThanhTien = 0;
        this.countVattu = 0;
        this.keyword = '';
        this.sendVattu = {
            "loainx": "''",
            "khohang": "",
            "banggia": ""
        };
        this.pageInfo = {
            'page': 1,
            'pageSize': 20,
            'keyword': "",
        };
        this.makho = '';
        this.countIndex = -1;
        this.listVattuExist = [];
        this.getVattuExist();
    }
    ionViewDidEnter() { }
    ngOnInit() { }
    getVattuExist() {
        this.VattuService.getVatTu().subscribe((response) => {
            this.listVattuExist = response;
        }, (error) => {
            console.log('error', error);
        });
    }
    getVatTuQuocGia() {
        this.LoadingService.setValue(true);
        this.VattuService.getVatTuQuocGia(this.keyword).subscribe((response) => {
            this.listVattu = response;
            // this.countVattu = response.length;
            console.log(this.listVattu);
            // this.listDataSearch = response;
            this.LoadingService.setValue(false);
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
    onSearch(e) {
        this.keyword = e.target.value;
        if (!this.keyword) {
            this.deleteSearch();
        }
        else {
            clearTimeout(this.timeout);
            var $this = this;
            this.timeout = setTimeout(function () {
                $this.getVatTuQuocGia();
            }, 1000);
        }
    }
    getItem(item) {
        var checkExist = false;
        for (let i = 0; i < this.listVattuExist.length; i++) {
            if (this.listVattuExist[i].SoDangKy && this.listVattuExist[i].SoDangKy == item.SoDangKy) {
                checkExist = true;
                break;
            }
        }
        if (checkExist) {
            this.ToastService.errorToast("Sản phẩm đã tồn tại!");
            return;
        }
        this.GlobalService.closeModalSenData(item);
        // this.listData.find((o, i) => {
        //   if (o.VatTuID == item.VatTuID) {
        //     this.listData[i]['checkHover'] = true;
        //   } else {
        //     this.listData[i]['checkHover'] = false;
        //   }
        // });
    }
    deleteSearch() {
        this.keyword = '';
        this.listVattu = [];
        // this.getSandVT();
    }
    closeModal() {
        this.GlobalService.closeModal();
    }
};
VattuQuocgiaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_7__["VattuService"] },
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
VattuQuocgiaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vattu-quocgia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vattu-quocgia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-quocgia/vattu-quocgia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vattu-quocgia.page.scss */ "./src/app/vattu/vattu-quocgia/vattu-quocgia.page.scss")).default]
    })
], VattuQuocgiaPage);



/***/ })

}]);
//# sourceMappingURL=default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~bb627ba1-es2015.js.map