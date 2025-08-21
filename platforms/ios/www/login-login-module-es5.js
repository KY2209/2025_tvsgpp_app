(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"padding:10px!important\">\r\n\r\n  <div\r\n    style=\"padding: 10px!important; border-radius: 5px; text-align: center!important; display:block; height: 100%!important;\">\r\n\r\n    <p\r\n      style=\"text-align: center!important; margin-top:50px!important; margin-bottom:20px!important; padding-left: 60px!important; padding-right: 60px!important;\">\r\n      <img src=\"../../assets/images/Logo.png\" (click)=\"openConfig()\" style=\"border-radius: 6px; width: 35%!important;\">\r\n    </p>\r\n\r\n    <div style=\"font-weight: bold; color: #7077d6;\">\r\n      <table>\r\n        <tr>\r\n          <td style=\"width: 100px;\"></td>\r\n          <td>\r\n            ĐĂNG NHẬP\r\n          </td>\r\n          <td style=\"width: 100px;\">\r\n            <ion-icon *ngIf=\"!this.Show\" (click)=\"changeOrg()\" name=\"chevron-down-outline\" style = \"font-size: 20px; margin-bottom: -5px!important;\"></ion-icon>\r\n            <ion-icon *ngIf=\"this.Show\" (click)=\"changeOrg()\" name=\"chevron-up-outline\" style = \"font-size: 20px; margin-bottom: -5px!important;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div style=\"padding-left: 30px; padding-right: 30px;\">\r\n      <div *ngIf=\"this.Show==true\"\r\n        style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 3px!important; padding-left: 10px!important; padding-right: 10px!important; margin-top: 30px!important; margin-bottom: -10px!important; border-radius: 30px;\">\r\n        <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8;\">\r\n          <tr>\r\n            <td style=\"width: 30px; background-color: #fcf8f8;\">\r\n              <ion-icon item-left name=\"scan-circle-outline\" style=\"color: #7077d6; font-size: 20px;\"></ion-icon>\r\n            </td>\r\n            <td style=\"text-align: justify;\">\r\n              <ion-input type=\"text\" [(ngModel)]=\"orgId\"\r\n                style=\"--padding-start:5px!important;color: #7077d6; font-weight: bold;\" placeholder=\"Mã cơ sở\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div\r\n        style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 3px!important; padding-left: 10px!important; padding-right: 10px!important; margin-top: 30px!important; border-radius: 30px;\">\r\n        <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8;\">\r\n          <tr>\r\n            <td style=\"width: 30px; background-color: #fcf8f8;\">\r\n              <ion-icon item-left name=\"person\" style=\"color: #7077d6; font-size: 20px;\"></ion-icon>\r\n            </td>\r\n            <td style=\"text-align: justify;\">\r\n              <ion-input type=\"text\" [(ngModel)]=\"UserName\" style=\"--padding-start:5px!important;color: #7077d6;\"\r\n                placeholder=\"Tài khoản\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n     \r\n      <div\r\n        style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8; padding: 3px!important; padding-left: 10px!important; padding-right: 10px!important; margin-top: 10px!important; border-radius: 30px;\">\r\n        <table style=\"width: 100%!important; max-width: 100%!important; background-color: #fcf8f8;\">\r\n          <tr>\r\n            <td style=\"width: 30px; background-color: #fcf8f8;\">\r\n              <ion-icon item-left name=\"lock-closed-outline\" style=\"color: #7077d6; font-size: 20px;\"></ion-icon>\r\n            </td>\r\n            <td style=\"text-align: justify;\">\r\n              <ion-input type=\"password\" *ngIf=\"!this.ShowPass\" [(ngModel)]=\"PassWord\"\r\n                style=\"--padding-start:10px!important;color: #7077d6;\" placeholder=\"Mật khẩu\">\r\n              </ion-input>\r\n              <ion-input type=\"text\" *ngIf=\"this.ShowPass\" [(ngModel)]=\"PassWord\"\r\n                style=\"--padding-start:10px!important;color: #7077d6;\" placeholder=\"Mật khẩu\">\r\n              </ion-input>\r\n            </td>\r\n            <td style=\"width: 40px; padding: 5px!important; background-color: #fcf8f8;\">\r\n\r\n              <ion-icon *ngIf=\"this.ShowPass\" (click)=\"onShowPass()\" item-left name=\"eye\"\r\n                style=\"font-size: 20px; color: #7077d6;\"></ion-icon>\r\n              <ion-icon *ngIf=\"!this.ShowPass\" (click)=\"onShowPass()\" item-left name=\"eye-off-outline\"\r\n                style=\"font-size: 20px; color: #7077d6;\"></ion-icon>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div style=\"margin-top: 20px;\">\r\n      <table>\r\n        <tr>\r\n          <td style=\"width: 50%; text-align: left; padding-left: 35px;\">\r\n          Ghi nhớ mật khẩu\r\n          </td>\r\n          <td style=\"width: 50%; text-align: right; padding-right: 35px;color: red;\">\r\n            Quên mật khẩu?\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div style=\"margin-top: 20px; padding-left: 30px; padding-right:30px; text-align: justify!important;\">\r\n\r\n      <div (click)=\"signIn()\"\r\n        style=\"margin-top: 40px; border-radius: 20px; padding: 12px; text-align: center; background-color:#7077d6!important; color: #fff; width: 100%!important;\">\r\n        Đăng nhập\r\n      </div>\r\n\r\n      <!-- <div style=\"padding: 10px; text-align: center; margin-top: 10px;\">\r\n        Bạn chưa có tài khoản? <span style=\"color: red;\">Đăng ký ngay!</span>\r\n      </div> -->\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar style=\"--background:#fff;--border-width:0px!important;\">\r\n    <!-- <table style=\"width: 100%!important; margin-bottom: 0px;\">\r\n      <tr>\r\n        <td style=\"text-align: center; vertical-align: bottom!important; font-size: 15px; color: #6a6e72;\">\r\n          Câu hỏi thường gặp\r\n        </td>\r\n      </tr>\r\n    </table> -->\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__["IonicStorageModule"].forRoot(), _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "table {\n  width: 100% !important;\n  max-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQUE7RUFDQSwwQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGVcclxue1xyXG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/dist/esm/index.js");
      /* harmony import */


      var _function_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../function.service */
      "./src/app/function.service.ts");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js"); // import { Network } from '@ionic-native/network/ngx';


      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(navCtrl, router, loadingController, toastController, storage, // private network: Network,
        platform, oneSignal, Function) {
          var _this = this;

          _classCallCheck(this, LoginPage);

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
            this.storage.get("connLink").then(function (link) {
              if (link != null || link != undefined) {
                _this.connLink = link;
              }
            });
            this.storage.get("Code").then(function (Code) {
              _this.orgId = Code;
            });
            storage.get("User").then(function (User) {
              _this.UserName = User;
            });
            storage.get("Pass").then(function (Pass) {
              _this.PassWord = Pass;
            });
          } catch (_a) {}
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storage.create();
            this.storage.get("connLink").then(function (link) {
              if (link != null || link != undefined) {
                _this2.connLink = link;
              }
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this3 = this;

            this.connLink = localStorage.getItem('unit');
            this.orgId = this.connLink;
            this.storage.get("User").then(function (User) {
              _this3.UserName = User;
            });
            this.storage.get("Pass").then(function (Pass) {
              _this3.PassWord = Pass;
            }); // setTimeout(() => {
            //   this.orgId = "nhathuocvuhai";
            // this.UserName = "tvs";
            // this.PassWord = "123456@";
            // }, 1000);
          }
        }, {
          key: "changeOrg",
          value: function changeOrg() {
            this.Show = !this.Show;
            this.storage.set("connLink", this.orgId);
          }
        }, {
          key: "signIn",
          value: function signIn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.orgId == null || this.orgId.trim() == '')) {
                        _context.next = 3;
                        break;
                      }

                      this.presentToastMsg("Bạn chưa nhập mã cơ sở!");
                      return _context.abrupt("return");

                    case 3:
                      if (!(this.UserName == null || this.UserName.trim() == '')) {
                        _context.next = 6;
                        break;
                      }

                      this.presentToastMsg("Bạn chưa nhập tài khoản!");
                      return _context.abrupt("return");

                    case 6:
                      if (!(this.PassWord == null || this.PassWord.trim() == '')) {
                        _context.next = 9;
                        break;
                      }

                      this.presentToastMsg("Bạn chưa nhập mật khẩu của tài khoản!");
                      return _context.abrupt("return");

                    case 9:
                      this.oneSetup();
                      console.log("connLink", this.orgId);
                      this.LoginDataAll = this.Function.login(this.orgId, this.UserName, this.PassWord);
                      this.LoginDataAll.subscribe(function (response) {
                        if (response.code == 1) {
                          _this4.storage.set("userId", response.userid);

                          _this4.storage.set("gppUser", response.fullname);

                          _this4.storage.set("User", _this4.UserName);

                          _this4.storage.set("Pass", _this4.PassWord);

                          _this4.storage.set("Code", _this4.orgId);

                          localStorage.setItem('unit', _this4.orgId);
                          localStorage.setItem("Token", response.token);
                          localStorage.setItem("gppUserId", response.userid);
                          localStorage.setItem('officeId', response.officeid);

                          _this4.router.navigateByUrl("tabs/tab3");
                        } else if (response.code == 2) {
                          _this4.presentToastMsg("Tên đăg nhập hoặc mật khẩu không đúng !");

                          return;
                        } else {
                          _this4.presentToastMsg("Đăng nhập thất bại!");

                          return;
                        }
                      });

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "oneSetup",
          value: function oneSetup() {
            var _this5 = this;

            if (this.platform.is("android")) {
              this.oneSignal.getIds().then(function (id) {
                _this5.userID = id.userId;

                _this5.presentToastMsg(_this5.userID);

                localStorage.setItem("DeviceId", id.userId);

                if (_this5.InforNotificationData != null) {
                  _this5.InforNotificationData.subscribe(function (data) {
                    _this5.InforNotificationData = data;
                    _this5.InforNotification = data;

                    _this5.presentToastMsg(data);
                  });
                }
              });
              this.oneSignal.startInit("76b6289-4ea1-4446-b846-ce39ee1bf0c5", this.userID);
              this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
              this.oneSignal.handleNotificationReceived().subscribe(function () {
                var a = "abc";
              });
              this.oneSignal.handleNotificationOpened().subscribe(function (data) {
                var sdata = data.notification;
              });
              this.oneSignal.endInit();
            }

            if (this.platform.is("ios")) {
              this.oneSignal.getIds().then(function (id) {
                _this5.userID = id.userId;
                localStorage.setItem("DeviceId", id.userId);

                if (_this5.InforNotificationData != null) {
                  _this5.InforNotificationData.subscribe(function (data) {
                    _this5.InforNotificationData = data;
                    _this5.InforNotification = data; // this.presentToastMsg(data);
                  });
                }
              });
              this.oneSignal.startInit("562a14e0-d33d-4fb0-875d-9aacba5682e6", this.userID);
              this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
              this.oneSignal.handleNotificationReceived().subscribe(function () {
                var a = "abc";
              });
              this.oneSignal.handleNotificationOpened().subscribe(function () {
                var a = "abc";
              });
              this.oneSignal.endInit();
            } //Code mới trên Onesignal 3.0
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
        }, {
          key: "openConfig",
          value: function openConfig() {
            if (this.countClick <= 4) {
              this.countClick = this.countClick + 1;
            } else {
              this.storage.remove("User");
              this.storage.remove("Pass");
              this.UserName = "";
              this.PassWord = "";
              this.router.navigateByUrl('ht-madonvi');
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: '<center>Đăng nhập không thành công</center>',
                        color: 'danger',
                        duration: 2000
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentToastMsg",
          value: function presentToastMsg(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: '<center>' + msg + '</center>',
                        color: 'danger',
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentToast1",
          value: function presentToast1() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: '<center>Không có kết nối mạng !</center>',
                        color: 'danger',
                        duration: 3000
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentToast2",
          value: function presentToast2() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: this.userID,
                        color: 'danger',
                        duration: 3000
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentToast3",
          value: function presentToast3() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: "<center>Bạn chưa chọn đơn vị thành viên</center>",
                        color: 'danger',
                        duration: 3000
                      });

                    case 2:
                      toast = _context6.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "presentToast4",
          value: function presentToast4() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: "<center>Không tìm thấy thông tin máy chủ</center>",
                        color: 'danger',
                        duration: 3000
                      });

                    case 2:
                      toast = _context7.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "onShowPass",
          value: function onShowPass() {
            this.ShowPass = !this.ShowPass;
          }
        }, {
          key: "openGetPass",
          value: function openGetPass() {
            this.router.navigateByUrl("laylaimatkhau");
          }
        }, {
          key: "onSavePass",
          value: function onSavePass() {}
        }, {
          key: "openBack",
          value: function openBack() {
            this.router.navigateByUrl("sys-home");
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
        }, {
          type: _function_service__WEBPACK_IMPORTED_MODULE_5__["FunctionService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map