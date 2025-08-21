(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"padding:10px!important\">\r\n\r\n  <div\r\n    style=\"padding: 10px!important; border-radius: 5px; text-align: center!important; display:block; height: 100%!important;\">\r\n\r\n    <p\r\n      style=\"text-align: center!important; margin-top:50px!important; margin-bottom:20px!important; padding-left: 60px!important; padding-right: 60px!important;\">\r\n      <img src=\"../../assets/images/Logo.png\" (click)=\"openConfig()\" style=\"border-radius: 6px; width: 35%!important;\">\r\n    </p>\r\n\r\n    <div style=\"font-weight: bold; color: #7077d6;\">\r\n      <table>\r\n        <tr>\r\n          <td style=\"width: 100px;\"></td>\r\n          <td>\r\n            ĐĂNG NHẬP\r\n          </td>\r\n          <td style=\"width: 100px;\">\r\n            <ion-icon *ngIf=\"!this.Show\" (click)=\"changeOrg()\" name=\"chevron-down-outline\" style = \"font-size: 20px; margin-bottom: -5px!important;\"></ion-icon>\r\n            <ion-icon *ngIf=\"this.Show\" (click)=\"changeOrg()\" name=\"chevron-up-outline\" style = \"font-size: 20px; margin-bottom: -5px!important;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div style=\"padding-left: 30px; padding-right: 30px;\">\r\n      <div *ngIf=\"this.Show==true\"\r\n        style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 3px!important; padding-left: 10px!important; padding-right: 10px!important; margin-top: 30px!important; margin-bottom: -10px!important; border-radius: 30px;\">\r\n        <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8;\">\r\n          <tr>\r\n            <td style=\"width: 30px; background-color: #fcf8f8;\">\r\n              <ion-icon item-left name=\"scan-circle-outline\" style=\"color: #7077d6; font-size: 20px;\"></ion-icon>\r\n            </td>\r\n            <td style=\"text-align: justify;\">\r\n              <ion-input type=\"text\" [(ngModel)]=\"orgId\"\r\n                style=\"--padding-start:5px!important;color: #7077d6; font-weight: bold;\" placeholder=\"Mã cơ sở\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div\r\n        style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 3px!important; padding-left: 10px!important; padding-right: 10px!important; margin-top: 30px!important; border-radius: 30px;\">\r\n        <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8;\">\r\n          <tr>\r\n            <td style=\"width: 30px; background-color: #fcf8f8;\">\r\n              <ion-icon item-left name=\"person\" style=\"color: #7077d6; font-size: 20px;\"></ion-icon>\r\n            </td>\r\n            <td style=\"text-align: justify;\">\r\n              <ion-input type=\"text\" [(ngModel)]=\"UserName\" style=\"--padding-start:5px!important;color: #7077d6;\"\r\n                placeholder=\"Tài khoản\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n     \r\n      <div\r\n        style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 3px!important; padding-left: 10px!important; padding-right: 10px!important; margin-top: 10px!important; border-radius: 30px;\">\r\n        <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8;\">\r\n          <tr>\r\n            <td style=\"width: 30px; background-color: #fcf8f8;\">\r\n              <ion-icon item-left name=\"lock-closed-outline\" style=\"color: #7077d6; font-size: 20px;\"></ion-icon>\r\n            </td>\r\n            <td style=\"text-align: justify;\">\r\n              <ion-input type=\"password\" *ngIf=\"!this.ShowPass\" [(ngModel)]=\"PassWord\"\r\n                style=\"--padding-start:10px!important;color: #7077d6;\" placeholder=\"Mật khẩu\">\r\n              </ion-input>\r\n              <ion-input type=\"text\" *ngIf=\"this.ShowPass\" [(ngModel)]=\"PassWord\"\r\n                style=\"--padding-start:10px!important;color: #7077d6;\" placeholder=\"Mật khẩu\">\r\n              </ion-input>\r\n            </td>\r\n            <td style=\"width: 40px; padding: 5px!important; background-color: #fcf8f8;\">\r\n\r\n              <ion-icon *ngIf=\"this.ShowPass\" (click)=\"onShowPass()\" item-left name=\"eye\"\r\n                style=\"font-size: 20px; color: #7077d6;\"></ion-icon>\r\n              <ion-icon *ngIf=\"!this.ShowPass\" (click)=\"onShowPass()\" item-left name=\"eye-off-outline\"\r\n                style=\"font-size: 20px; color: #7077d6;\"></ion-icon>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div style=\"margin-top: 20px;\">\r\n      <table>\r\n        <tr>\r\n          <td style=\"width: 50%; text-align: left; padding-left: 35px;\">\r\n          Ghi nhớ mật khẩu\r\n          </td>\r\n          <td style=\"width: 50%; text-align: right; padding-right: 35px;color: red;\">\r\n            Quên mật khẩu?\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 20px; padding-left: 30px; padding-right:30px; text-align: justify!important;\">\r\n\r\n      <div (click)=\"signIn()\"\r\n        style=\"margin-top: 40px; border-radius: 20px; padding: 12px; text-align: center; background-color:#7077d6!important; color: #fff; width: 100%!important;\">\r\n        Đăng nhập\r\n      </div>\r\n\r\n      <!-- <div style=\"padding: 10px; text-align: center; margin-top: 10px;\">\r\n        Bạn chưa có tài khoản? <span style=\"color: red;\">Đăng ký ngay!</span>\r\n      </div> -->\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar style=\"--background:#fff;--border-width:0px!important;\">\r\n    <!-- <table style=\"width: 100%!important; margin-bottom: 0px;\">\r\n      <tr>\r\n        <td style=\"text-align: center; vertical-align: bottom!important; font-size: 15px; color: #6a6e72;\">\r\n          Câu hỏi thường gặp\r\n        </td>\r\n      </tr>\r\n    </table> -->\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(),
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQUE7RUFDQSwwQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGVcclxue1xyXG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/esm/index.js");
/* harmony import */ var _function_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../function.service */ "./src/app/function.service.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");









// import { Network } from '@ionic-native/network/ngx';

let LoginPage = class LoginPage {
    constructor(navCtrl, router, loadingController, toastController, storage, 
    // private network: Network,
    platform, oneSignal, Function) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.storage = storage;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.Function = Function;
        this.Show = true;
        this.ShowPass = false;
        this.SavePass = false;
        this.orgId = "";
        this.userID = "";
        this.UserName = "";
        this.PassWord = "";
        this.FullName = "";
        this.TypeId = "";
        this.State = "";
        this.logStatus = "1";
        this.checkNet = "1";
        this.countClick = 0;
        this.orgId = "";
        try {
            storage.create();
            this.storage.get("connLink").then(link => {
                if (link != null || link != undefined) {
                    this.connLink = link;
                }
            });
            this.storage.get("Code").then(Code => {
                this.orgId = Code;
            });
            storage.get("User").then(User => {
                this.UserName = User;
            });
            storage.get("Pass").then(Pass => {
                this.PassWord = Pass;
            });
        }
        catch (_a) {
        }
    }
    ngOnInit() {
        this.storage.create();
        this.storage.get("connLink").then(link => {
            if (link != null || link != undefined) {
                this.connLink = link;
            }
        });
    }
    ionViewDidEnter() {
        this.connLink = localStorage.getItem('unit');
        this.orgId = this.connLink;
        this.storage.get("User").then(User => {
            this.UserName = User;
        });
        this.storage.get("Pass").then(Pass => {
            this.PassWord = Pass;
        });
        // setTimeout(() => {
        //   this.orgId = "nhathuocvuhai";
        // this.UserName = "tvs";
        // this.PassWord = "123456@";
        // }, 1000);
    }
    changeOrg() {
        this.Show = !this.Show;
        this.storage.set("connLink", this.orgId);
    }
    signIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.orgId == null || this.orgId.trim() == '') {
                this.presentToastMsg("Bạn chưa nhập mã cơ sở!");
                return;
            }
            if (this.UserName == null || this.UserName.trim() == '') {
                this.presentToastMsg("Bạn chưa nhập tài khoản!");
                return;
            }
            if (this.PassWord == null || this.PassWord.trim() == '') {
                this.presentToastMsg("Bạn chưa nhập mật khẩu của tài khoản!");
                return;
            }
            this.oneSetup();
            console.log("connLink", this.orgId);
            this.LoginDataAll = this.Function.login(this.orgId, this.UserName, this.PassWord);
            this.LoginDataAll.subscribe(response => {
                if (response.code == 1) {
                    this.storage.set("userId", response.userid);
                    this.storage.set("gppUser", response.fullname);
                    this.storage.set("User", this.UserName);
                    this.storage.set("Pass", this.PassWord);
                    this.storage.set("Code", this.orgId);
                    localStorage.setItem('unit', this.orgId);
                    localStorage.setItem("Token", response.token);
                    localStorage.setItem("gppUserId", response.userid);
                    localStorage.setItem('officeId', response.officeid);
                    this.router.navigateByUrl("tabs/tab3");
                }
                else if (response.code == 2) {
                    this.presentToastMsg("Tên đăg nhập hoặc mật khẩu không đúng !");
                    return;
                }
                else {
                    this.presentToastMsg("Đăng nhập thất bại!");
                    return;
                }
            });
        });
    }
    oneSetup() {
        if (this.platform.is("android")) {
            this.oneSignal.getIds().then((id) => {
                this.userID = id.userId;
                this.presentToastMsg(this.userID);
                localStorage.setItem("DeviceId", id.userId);
                if (this.InforNotificationData != null) {
                    this.InforNotificationData.subscribe((data) => {
                        this.InforNotificationData = data;
                        this.InforNotification = data;
                        this.presentToastMsg(data);
                    });
                }
            });
            this.oneSignal.startInit("76b6289-4ea1-4446-b846-ce39ee1bf0c5", this.userID);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(() => {
                let a = "abc";
            });
            this.oneSignal.handleNotificationOpened().subscribe((data) => {
                let sdata = data.notification;
            });
            this.oneSignal.endInit();
        }
        if (this.platform.is("ios")) {
            this.oneSignal.getIds().then((id) => {
                this.userID = id.userId;
                localStorage.setItem("DeviceId", id.userId);
                if (this.InforNotificationData != null) {
                    this.InforNotificationData.subscribe((data) => {
                        this.InforNotificationData = data;
                        this.InforNotification = data;
                        // this.presentToastMsg(data);
                    });
                }
            });
            this.oneSignal.startInit("562a14e0-d33d-4fb0-875d-9aacba5682e6", this.userID);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(() => {
                let a = "abc";
            });
            this.oneSignal.handleNotificationOpened().subscribe(() => {
                let a = "abc";
            });
            this.oneSignal.endInit();
        }
        //Code mới trên Onesignal 3.0
        // if (this.platform.is('android')) {
        //   // NOTE: Update the setAppId value below with your OneSignal AppId.
        //   OneSignal.getDeviceState(response => {
        //     console.log("227", response)
        //     console.log("228", response.userId)
        //     if (response.userId == undefined) {
        //       this.oneSetup();
        //     }
        //     localStorage.setItem("DeviceId", response.userId);
        //   })
        //   OneSignal.setAppId("776b6289-4ea1-4446-b846-ce39ee1bf0c5");
        //   OneSignal.setNotificationOpenedHandler(function (data) {
        //     console.log('notificationOpenedCallback: ' + JSON.stringify(data));
        //   });
        //   // Prompts the user for notification permissions.
        //   //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
        //   OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
        //     console.log("User accepted notifications: " + accepted);
        //   });
        // }
        // if (this.platform.is('ios')) {
        //   // NOTE: Update the setAppId value below with your OneSignal AppId.
        //   OneSignal.getDeviceState(response => {
        //     console.log("213", response)
        //     console.log("214", response.userId)
        //     if (response.userId == undefined) {
        //       this.oneSetup();
        //     }
        //     localStorage.setItem("DeviceId", response.userId);
        //   })
        //   OneSignal.setAppId("562a14e0-d33d-4fb0-875d-9aacba5682e6");
        //   OneSignal.setNotificationOpenedHandler(function (data) {
        //     console.log('notificationOpenedCallback: ' + JSON.stringify(data));
        //   });
        //   // Prompts the user for notification permissions.
        //   //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
        //   OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
        //     console.log("User accepted notifications: " + accepted);
        //   });
        // }
    }
    openConfig() {
        if (this.countClick <= 4) {
            this.countClick = this.countClick + 1;
        }
        else {
            this.storage.remove("User");
            this.storage.remove("Pass");
            this.UserName = "";
            this.PassWord = "";
            this.router.navigateByUrl('ht-madonvi');
        }
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '<center>Đăng nhập không thành công</center>',
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
    presentToastMsg(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '<center>' + msg + '</center>',
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
    presentToast1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: '<center>Không có kết nối mạng !</center>',
                color: 'danger',
                duration: 3000
            });
            toast.present();
        });
    }
    presentToast2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.userID,
                color: 'danger',
                duration: 3000
            });
            toast.present();
        });
    }
    presentToast3() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "<center>Bạn chưa chọn đơn vị thành viên</center>",
                color: 'danger',
                duration: 3000
            });
            toast.present();
        });
    }
    presentToast4() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: "<center>Không tìm thấy thông tin máy chủ</center>",
                color: 'danger',
                duration: 3000
            });
            toast.present();
        });
    }
    onShowPass() {
        this.ShowPass = !this.ShowPass;
    }
    openGetPass() {
        this.router.navigateByUrl("laylaimatkhau");
    }
    onSavePass() {
    }
    openBack() {
        this.router.navigateByUrl("sys-home");
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"] },
    { type: _function_service__WEBPACK_IMPORTED_MODULE_5__["FunctionService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map