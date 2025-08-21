(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSettingSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Cấu hình\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"duplicate-outline\"></ion-icon> -->\r\n      </ion-item>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"setting\">\r\n    <div class=\"setting-header\">\r\n      <ion-icon name=\"print-outline\"></ion-icon>\r\n      Mẫu in phiếu bán lẻ\r\n    </div>\r\n    <div class=\"setting-content\">\r\n      <table>\r\n        <tr>\r\n          <td>\r\n            <label for=\"a5\">\r\n              <ion-icon name=\"reader-outline\"></ion-icon>            \r\n            </label>\r\n\r\n          </td>\r\n          <td>\r\n            <label for=\"80\">\r\n              <ion-icon name=\"receipt-outline\"></ion-icon>\r\n            </label>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <input type=\"radio\" id=\"a5\" name=\"typePaper\" value=\"A5\" (click)=\"handleTypePaper('A5')\"\r\n                [(ngModel)]=\"typePaper\" />\r\n          </td>\r\n          <td>\r\n            <input type=\"radio\" id=\"80\" name=\"typePaper\" (click)=\"handleTypePaper('80')\" [(ngModel)]=\"typePaper\"\r\n                value=\"80\" />\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            Mẫu A5\r\n          </td>\r\n          <td>Giấy cuộn</td>\r\n        </tr>\r\n      </table>\r\n      <!-- <table>\r\n        <tr>\r\n          <td>\r\n            <div style=\"display: grid; gap: 15px;\">\r\n              <label for=\"a5\"><i class=\"bi bi-clipboard2-check\"></i></label>\r\n              <input type=\"radio\" id=\"a5\" name=\"typePaper\" value=\"A5\" (click)=\"handleTypePaper('A5')\"\r\n                [(ngModel)]=\"typePaper\" />\r\n              <div style=\"font-size: 14px;\">Mẫu A5</div>\r\n\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div style=\"display: grid; gap: 15px;\">\r\n              <label for=\"80\">\r\n                <i class=\"bi bi-bookmark-dash\"></i>\r\n              </label>\r\n              <input type=\"radio\" id=\"80\" name=\"typePaper\" (click)=\"handleTypePaper('80')\" [(ngModel)]=\"typePaper\"\r\n                value=\"80\" />\r\n              <div style=\"font-size: 14px;\">Giấy cuộn</div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </table> -->\r\n    </div>\r\n    <div class=\"setting-header\">\r\n      <ion-icon name=\"document-text-outline\"></ion-icon>\r\n      Hóa đơn mặc định\r\n    </div>\r\n    <div class=\"setting-content\">\r\n      <table class=\"setting-row\">\r\n        <tr style=\"border-bottom: 1px dashed #b9b9b9;\">\r\n          <td>Nhập hàng</td>\r\n          <td (click)=\"handleNhapHang()\" class=\"text-right blue-dark\">{{loaiNHDefault.DienGiai}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>Bán lẻ</td>\r\n          <td (click)=\"handleBanLe()\" class=\"text-right blue-dark\">{{loaiBLDefault.DienGiai}}</td>\r\n\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"setting-header\">\r\n      <ion-icon name=\"image-outline\"></ion-icon>      \r\n      Hiển thị hình ảnh\r\n\r\n      <input type=\"checkbox\" name=\"\" id=\"\" (click)=\"handleDisplayImg()\" [checked]=\"displayImg\">\r\n    </div>\r\n    <div class=\"setting-header\">\r\n      <ion-icon name=\"globe-outline\"></ion-icon>  \r\n      Hiển thị liên thông\r\n\r\n      <input type=\"checkbox\" name=\"\" id=\"\" (click)=\"handleLienThong()\" [checked]=\"displayLienThong\">\r\n    </div>\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/setting/setting-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/setting/setting-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: SettingPageRoutingModule */

    /***/
    function srcAppSettingSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function () {
        return SettingPageRoutingModule;
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


      var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setting.page */
      "./src/app/setting/setting.page.ts");

      var routes = [{
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
      }];

      var SettingPageRoutingModule = function SettingPageRoutingModule() {
        _classCallCheck(this, SettingPageRoutingModule);
      };

      SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/setting/setting.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/setting/setting.module.ts ***!
      \*******************************************/

    /*! exports provided: SettingPageModule */

    /***/
    function srcAppSettingSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
        return SettingPageModule;
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


      var _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./setting-routing.module */
      "./src/app/setting/setting-routing.module.ts");
      /* harmony import */


      var _setting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting.page */
      "./src/app/setting/setting.page.ts");

      var SettingPageModule = function SettingPageModule() {
        _classCallCheck(this, SettingPageModule);
      };

      SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPageRoutingModule"]],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_6__["SettingPage"]]
      })], SettingPageModule);
      /***/
    },

    /***/
    "./src/app/setting/setting.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/setting/setting.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppSettingSettingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".setting {\n  font-size: 16px;\n  margin-top: 10px;\n}\n.setting-header {\n  padding: 10px;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n.setting-header-right {\n  margin-left: auto;\n}\n.setting-header ion-icon {\n  font-size: 24px;\n  margin-right: 8px;\n}\n.setting-header input[type=checkbox] {\n  margin-left: auto;\n  zoom: 1.3;\n}\n.setting-content {\n  padding: 10px;\n  text-align: center;\n  background: white;\n}\n.setting-content label ion-icon {\n  font-size: 50px;\n}\n.setting-row td {\n  padding: 2px 0;\n  padding: 10px 0;\n  text-align: left;\n}\ntable {\n  width: 100%;\n}\ninput {\n  margin-right: 5px;\n}\nion-content {\n  --background: #F1F3F4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFUTtFQUNJLGlCQUFBO0FBQVo7QUFHUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQURaO0FBSVE7RUFDSSxpQkFBQTtFQUNBLFNBQUE7QUFGWjtBQU1JO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU9ZO0VBQ0ksZUFBQTtBQUxoQjtBQVdRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRaO0FBZ0JBO0VBQ0ksV0FBQTtBQWJKO0FBZ0JBO0VBQ0ksaUJBQUE7QUFiSjtBQWdCQTtFQUNJLHFCQUFBO0FBYkoiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3NldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgem9vbTogMS4zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXJvdyB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0YxRjNGNDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/setting/setting.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/setting/setting.page.ts ***!
      \*****************************************/

    /*! exports provided: SettingPage */

    /***/
    function srcAppSettingSettingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
        return SettingPage;
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

      var SettingPage = /*#__PURE__*/function () {
        function SettingPage(navController, actionSheetController) {
          _classCallCheck(this, SettingPage);

          this.navController = navController;
          this.actionSheetController = actionSheetController;
          this.typePaper = 'A5';
          this.listNhaphang = [];
          this.listBanle = [];
          this.loaiNHDefault = {};
          this.loaiBLDefault = {};
          this.typePaper = localStorage.getItem('setting') ? localStorage.getItem('setting') : 'A5';
          this.listNhaphang = JSON.parse(localStorage.getItem('loaiNhapHang') || '[]');
          this.listBanle = JSON.parse(localStorage.getItem('loaiBanle') || '[]');
          this.loaiNHDefault = JSON.parse(localStorage.getItem('LoaiNhapHangDefault') || null);
          this.loaiBLDefault = JSON.parse(localStorage.getItem('LoaiBanLeDefault') || null);
          this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');
          this.displayLienThong = JSON.parse(localStorage.getItem('displayLienThong') || 'false');
          console.log('this.displayImg', this.displayImg);

          if (!this.loaiNHDefault) {
            this.loaiNHDefault = this.listNhaphang[0];
          }

          if (!this.loaiBLDefault) {
            this.loaiBLDefault = this.listBanle[0];
          }
        }

        _createClass(SettingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleTypePaper",
          value: function handleTypePaper(type) {
            this.typePaper = type;
            localStorage.setItem('setting', this.typePaper);
          }
        }, {
          key: "handleNhapHang",
          value: function handleNhapHang() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var arrBtn, _loop, i, actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      arrBtn = [];

                      _loop = function _loop(i) {
                        arrBtn.push({
                          text: _this.listNhaphang[i].DienGiai,
                          icon: 'cash-outline',
                          cssClass: _this.loaiNHDefault.DienGiai == _this.listNhaphang[i].DienGiai ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            localStorage.setItem('LoaiNhapHangDefault', JSON.stringify(_this.listNhaphang[i]));
                            _this.loaiNHDefault = _this.listNhaphang[i]; // đưa phần tử đã chọn lên đầu mảng và lưu vào, thay thế cho loaiNhapHang

                            var element = _this.listNhaphang.splice(i, 1)[0];

                            _this.listNhaphang.unshift(element);

                            localStorage.setItem('loaiNhapHang', JSON.stringify(_this.listNhaphang));
                            console.log('this.listNhaphang', _this.listNhaphang);
                          }
                        });
                      };

                      for (i = 0; i < this.listNhaphang.length; i++) {
                        _loop(i);
                      }

                      _context.next = 5;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: arrBtn
                      });

                    case 5:
                      actionSheet = _context.sent;
                      _context.next = 8;
                      return actionSheet.present();

                    case 8:
                      _context.next = 10;
                      return actionSheet.onDidDismiss();

                    case 10:
                      _yield$actionSheet$on = _context.sent;
                      role = _yield$actionSheet$on.role;

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "handleBanLe",
          value: function handleBanLe() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var arrBtn, _loop2, i, actionSheet, _yield$actionSheet$on2, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      arrBtn = [];

                      _loop2 = function _loop2(i) {
                        arrBtn.push({
                          text: _this2.listBanle[i].DienGiai,
                          icon: 'cash-outline',
                          cssClass: _this2.loaiBLDefault.DienGiai == _this2.listBanle[i].DienGiai ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            localStorage.setItem('LoaiBanLeDefault', JSON.stringify(_this2.listBanle[i]));
                            _this2.loaiBLDefault = _this2.listBanle[i]; // đưa phần tử đã chọn lên đầu mảng và lưu vào, thay thế cho loaiNhapHang

                            var element = _this2.listBanle.splice(i, 1)[0];

                            _this2.listBanle.unshift(element);

                            localStorage.setItem('loaiBanle', JSON.stringify(_this2.listBanle));
                            console.log('this.listBanle', _this2.listBanle);
                          }
                        });
                      };

                      for (i = 0; i < this.listBanle.length; i++) {
                        _loop2(i);
                      }

                      _context2.next = 5;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: arrBtn
                      });

                    case 5:
                      actionSheet = _context2.sent;
                      _context2.next = 8;
                      return actionSheet.present();

                    case 8:
                      _context2.next = 10;
                      return actionSheet.onDidDismiss();

                    case 10:
                      _yield$actionSheet$on2 = _context2.sent;
                      role = _yield$actionSheet$on2.role;

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "handleDisplayImg",
          value: function handleDisplayImg() {
            this.displayImg = !this.displayImg;
            localStorage.setItem('displayImg', String(this.displayImg));
          }
        }, {
          key: "handleLienThong",
          value: function handleLienThong() {
            this.displayLienThong = !this.displayLienThong;
            localStorage.setItem('displayLienThong', String(this.displayLienThong));
          }
        }, {
          key: "openBack",
          value: function openBack() {
            this.navController.navigateBack(['tabs/tab3']);
          }
        }]);

        return SettingPage;
      }();

      SettingPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }];
      };

      SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/setting/setting.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting.page.scss */
        "./src/app/setting/setting.page.scss"))["default"]]
      })], SettingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=setting-setting-module-es5.js.map