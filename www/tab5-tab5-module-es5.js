(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab5Tab5PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon (click)=\"openBack()\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"text-align: center!important;\">\r\n      Tài khoản\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\"color: #fff; --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon *ngIf=\"this.TabIndex == 2\" (click)=\"openTab(1)\" name=\"close-circle-outline\"\r\n          style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div style=\"padding: 15px; padding-top: 5px!important;\" *ngIf=\"this.TabIndex == 1\">\r\n\r\n    <div style=\"background-color: #f9f9fb!important; padding: 10px; border-radius: 4px; margin-top: 15px;\">\r\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n        <tr>\r\n          <td style=\"width: 90px; text-align: center; vertical-align: middle!important;\">\r\n            <ion-icon name=\"person-circle-outline\" style=\"color: #0764ae; font-size: 80px;\"></ion-icon>\r\n          </td>\r\n          <td>\r\n            <div style=\"font-weight: bold; padding: 5px; color: #0764ae;\">\r\n              {{this.UserName}} <span style=\"float: right;\">\r\n                <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\r\n              </span>\r\n            </div>\r\n            <div style=\"font-weight: bold; padding: 5px; padding-top: 0px!important;  color: #0764ae;\">\r\n              {{this.FullName}}\r\n            </div>\r\n            <div style=\"padding: 5px; padding-top: 0px!important; font-size: 15px; color: #0764ae;\">\r\n              Số điện thoại: {{dienthoai}}\r\n            </div>\r\n            <div style=\"padding: 5px; padding-top: 0px!important; font-size: 15px;  color: #0764ae;\">\r\n              Hạn dùng: {{reverseString(handung)}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <!-- <div>\r\n\r\n    <table (click)=\"openSetting()\" style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n      <tr style=\"border-bottom: solid 1px #f9f9fb;\">\r\n        <td style=\"width: 30px; padding: 10px; padding-left: 0px!important;\">\r\n          <ion-icon name=\"home\" style=\"font-size: 22px; color: #0764ae;\"></ion-icon>\r\n        </td>\r\n        <td style=\"padding: 10px; padding-left: 0px!important;\">\r\n          Cấu hình hệ thống\r\n        </td>\r\n        <td style=\"width: 30px; padding: 10px; padding-right: 0px!important; text-align: right!important;\">\r\n          <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n\r\n    </div> -->\r\n    <!-- <div>\r\n      <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n        <tr style=\"border-bottom: solid 1px #f9f9fb;\">\r\n          <td style=\"width: 30px; padding: 10px; padding-left: 0px!important;\">\r\n            <ion-icon name=\"home\" style=\"font-size: 22px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n          <td style=\"padding: 10px; padding-left: 0px!important;\">\r\n            Thông tin đon vị\r\n          </td>\r\n          <td style=\"width: 30px; padding: 10px; padding-right: 0px!important; text-align: right!important;\">\r\n            <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 0px;\">\r\n        <tr style=\"border-bottom: solid 1px #f9f9fb;\">\r\n          <td style=\"width: 30px; padding: 10px; padding-left: 0px!important;\">\r\n            <ion-icon name=\"lock-closed-outline\" style=\"font-size: 22px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n          <td style=\"padding: 10px; padding-left: 0px!important;\">\r\n            Đổi mật khẩu\r\n          </td>\r\n          <td style=\"width: 30px; padding: 10px; padding-right: 0px!important; text-align: right!important;\">\r\n            <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 0px;\">\r\n        <tr style=\"border-bottom: solid 1px #f9f9fb;\">\r\n          <td style=\"width: 30px; padding: 10px; padding-left: 0px!important;\">\r\n            <ion-icon name=\"help-circle\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n          <td style=\"padding: 10px; padding-left: 0px!important;\">\r\n            Hướng dẫn sử dụng\r\n          </td>\r\n          <td style=\"width: 30px; padding: 10px; padding-right: 0px!important; text-align: right!important;\">\r\n            <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 0px;\">\r\n        <tr style=\"border-bottom: solid 1px #f9f9fb;\">\r\n          <td style=\"width: 30px; padding: 10px; padding-left: 0px!important;\">\r\n            <ion-icon name=\"information-circle\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n          <td style=\"padding: 10px; padding-left: 0px!important;\">\r\n            Thông tin ứng dụng\r\n          </td>\r\n          <td style=\"width: 30px; padding: 10px; padding-right: 0px!important; text-align: right!important;\">\r\n            <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 0px;\">\r\n        <tr style=\"border-bottom: solid 1px #f9f9fb;\">\r\n          <td style=\"width: 30px; padding: 10px; padding-left: 0px!important;\">\r\n            <ion-icon name=\"crop\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n          <td style=\"padding: 10px; padding-left: 0px!important;\">\r\n            Điều khoản sử dụng\r\n          </td>\r\n          <td style=\"width: 30px; padding: 10px; padding-right: 0px!important; text-align: right!important;\">\r\n            <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 25px; color: #0764ae;\"></ion-icon>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div> -->\r\n\r\n    <div style=\"padding: 5px; margin-top: 30px;\">\r\n\r\n      <div (click) = \"logout()\"\r\n        style=\"width: 150px; margin: auto; padding: 10px; border-radius: 4px; background-color: #ececf1; color: #0764ae; text-align: center;\">\r\n        Đăng xuất\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab5/tab5-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab5/tab5-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab5PageRoutingModule */

    /***/
    function srcAppTab5Tab5RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function () {
        return Tab5PageRoutingModule;
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


      var _tab5_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab5.page */
      "./src/app/tab5/tab5.page.ts");

      var routes = [{
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_3__["Tab5Page"]
      }];

      var Tab5PageRoutingModule = function Tab5PageRoutingModule() {
        _classCallCheck(this, Tab5PageRoutingModule);
      };

      Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab5PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab5/tab5.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.module.ts ***!
      \*************************************/

    /*! exports provided: Tab5PageModule */

    /***/
    function srcAppTab5Tab5ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function () {
        return Tab5PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab5.page */
      "./src/app/tab5/tab5.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab5-routing.module */
      "./src/app/tab5/tab5-routing.module.ts");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");

      var Tab5PageModule = function Tab5PageModule() {
        _classCallCheck(this, Tab5PageModule);
      };

      Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]
        }]), _tab5_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab5PageRoutingModule"]],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
      })], Tab5PageModule);
      /***/
    },

    /***/
    "./src/app/tab5/tab5.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab5Tab5PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjUvdGFiNS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab5/tab5.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab5/tab5.page.ts ***!
      \***********************************/

    /*! exports provided: Tab5Page */

    /***/
    function srcAppTab5Tab5PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab5Page", function () {
        return Tab5Page;
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

      var Tab5Page = /*#__PURE__*/function () {
        function Tab5Page(navCtrl, router, storage, loadingController, toastController, platform) {
          _classCallCheck(this, Tab5Page);

          this.navCtrl = navCtrl;
          this.router = router;
          this.storage = storage;
          this.loadingController = loadingController;
          this.toastController = toastController;
          this.platform = platform;
          this.TabIndex = 1;
          this.UserName = "";
          this.FullName = "";
          this.hethong = {};
          this.dienthoai = "";
          this.handung = "";
          storage.create();
          var hethong = JSON.parse(localStorage.getItem('HeThong') || null);

          for (var i = 0; i < hethong.length; i++) {
            if (hethong[i].INIOption == "inpDienThoai") {
              this.dienthoai = hethong[i].INIValue;
            }

            if (hethong[i].INIKey == "handung") {
              this.handung = hethong[i].INIValue;
            }
          }
        }

        _createClass(Tab5Page, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.storage.get("gppUser").then(function (value) {
              _this.FullName = value;
            });
          }
        }, {
          key: "reverseString",
          value: function reverseString(str) {
            return str.substring(0, 10).split('-').reverse().join('/');
          }
        }, {
          key: "openDangKyKhamBenh",
          value: function openDangKyKhamBenh() {
            this.router.navigateByUrl("kh-khambenh-tructuyen");
          }
        }, {
          key: "openBack",
          value: function openBack() {
            this.router.navigateByUrl("tabs/tab3");
          }
        }, {
          key: "openSetting",
          value: function openSetting() {
            this.navCtrl.navigateBack(['setting']);
          }
        }, {
          key: "openTab",
          value: function openTab(_tabIndex) {
            this.TabIndex = _tabIndex;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storage.set("User", "");
            this.storage.set("Pass", "");
            this.storage.set("connLink", "");
            localStorage.setItem("objUserName", "");
            this.navCtrl.navigateBack("login");
          }
        }]);

        return Tab5Page;
      }();

      Tab5Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      Tab5Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab5',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab5.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab5.page.scss */
        "./src/app/tab5/tab5.page.scss"))["default"]]
      })], Tab5Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab5-tab5-module-es5.js.map