(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/donvi/donvi-create/donvi-create.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donvi/donvi-create/donvi-create.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDonviDonviCreateDonviCreatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>donvi-create</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"unit\">\r\n    <div class=\"unit-header\">\r\n      <div class=\"unit-title\">{{isCreate == 'true' ? 'Thêm' : 'Sửa'}} {{page == 'nhapmua' ? 'đơn vị' : 'khách hàng'}} </div>\r\n      <ion-icon (click)=\"closeModal()\" name=\"close-outline\"></ion-icon>\r\n    </div>\r\n    <table class=\"w-full\">\r\n      <tr>\r\n        <td colspan=\"2\">\r\n          <div class=\"unit-item\">\r\n            <label for=\"\">Tên {{page == 'nhapmua' ? 'đơn vị' : 'khách hàng'}}  <span class=\"text-err\">*</span></label>\r\n            <input type=\"text\" [(ngModel)]=\"sendItem.TenDV\">\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td *ngIf=\"submit && !sendItem.TenDV\" colspan=\"2\" style=\"padding-top: 10px;\">\r\n          <div class=\"text-err\">\r\n            Trường bắt buộc nhập\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        \r\n        <td>\r\n          <div class=\"unit-item pr-5\">\r\n            <label for=\"\">Loại {{page == 'nhapmua' ? 'đơn vị' : 'khách hàng'}}  <span class=\"text-err\">*</span></label>\r\n            <!-- <input type=\"text\" [(ngModel)]=\"sendItem.LoaiDV\"> -->\r\n            <div class=\"unit-input\" (click)=\"handleType()\"> {{loaiDV}}</div>\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"unit-item pl-5\">\r\n            <label for=\"\">Nhóm {{page == 'nhapmua' ? 'đơn vị' : 'khách hàng'}} </label>\r\n            <input type=\"text\" [(ngModel)]=\"sendItem.NhomDV\">\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        \r\n        <td>\r\n          <div class=\"unit-item pr-5\">\r\n            <label for=\"\">Mã GPP</label>\r\n            <input type=\"text\" [(ngModel)]=\"sendItem.MaGPP\">\r\n          </div>\r\n        </td>\r\n        <td colspan=\"2\">\r\n          <div class=\"unit-item pl-5\">\r\n            <label for=\"\">Điện thoại</label>\r\n            <input type=\"text\" [(ngModel)]=\"sendItem.DienThoai\">\r\n          </div>\r\n        </td>\r\n        \r\n      </tr>\r\n      \r\n      <tr>\r\n        <td  colspan=\"2\">\r\n            <div class=\"unit-item\">\r\n              <label for=\"\">Địa chỉ</label>\r\n              <input type=\"text\" [(ngModel)]=\"sendItem.DiaChi\">\r\n            </div>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div> \r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n\r\n  <div class=\"unit-footer\">\r\n    <button (click)=\"confirmSubmit()\">{{isCreate == 'true' ? 'THÊM' : 'SỬA'}} {{page == 'nhapmua' ? 'đơn vị' : 'khách hàng'}}  </button>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/donvi/donvi-create/donvi-create.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/donvi/donvi-create/donvi-create.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDonviDonviCreateDonviCreatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".unit {\n  padding: 4px 10px;\n}\n.unit-header {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #cbcbcb;\n}\n.unit-header ion-icon {\n  font-size: 30px;\n}\n.unit-title {\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: #242424;\n  padding: 8px 0 8px 0;\n  color: var(--background-color);\n}\n.unit-footer {\n  padding: 6px;\n}\n.unit-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n  text-transform: uppercase;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date], .unit-input {\n  width: 100%;\n  border: 1px solid white;\n  background: #caeeff;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding: 8px 10px;\n}\nlabel {\n  font-weight: 500;\n}\n.input-no-border {\n  background: white !important;\n  text-align: right !important;\n}\ntd {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9udmkvZG9udmktY3JlYXRlL2RvbnZpLWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBRlI7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFIWjtBQVFBOzs7RUFPSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVEo7QUFZQTtFQUNJLGdCQUFBO0FBVEo7QUFZQTtFQUNJLDRCQUFBO0VBQ0EsNEJBQUE7QUFUSjtBQWFBO0VBQ0ksaUJBQUE7QUFWSiIsImZpbGUiOiJzcmMvYXBwL2RvbnZpL2RvbnZpLWNyZWF0ZS9kb252aS1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuaXR7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweCAgIDtcclxuICAgIFxyXG4gICAgJi1oZWFkZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNDI0MjQ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDAgOHB4IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAmLWZvb3RlcntcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGVcIl0sIC51bml0LWlucHV0IHtcclxuICAgIC8vIHdpZHRoOiAxMDBweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNjYWVlZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaW5wdXQtbm8tYm9yZGVye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG50ZHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/donvi/donvi-create/donvi-create.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/donvi/donvi-create/donvi-create.page.ts ***!
      \*********************************************************/

    /*! exports provided: DonviCreatePage */

    /***/
    function srcAppDonviDonviCreateDonviCreatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonviCreatePage", function () {
        return DonviCreatePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/global.service */
      "./src/app/service/global.service.ts");
      /* harmony import */


      var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/loading.service */
      "./src/app/service/loading.service.ts");
      /* harmony import */


      var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/toastService */
      "./src/app/service/toastService.ts");
      /* harmony import */


      var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/unit.service */
      "./src/app/service/unit.service.ts");

      var DonviCreatePage = /*#__PURE__*/function () {
        function DonviCreatePage(GlobalService, route, LoadingService, UnitService, ToastService, actionSheetController) {
          _classCallCheck(this, DonviCreatePage);

          this.GlobalService = GlobalService;
          this.route = route;
          this.LoadingService = LoadingService;
          this.UnitService = UnitService;
          this.ToastService = ToastService;
          this.actionSheetController = actionSheetController;
          this.isCreate = '';
          this.DonViItem = {};
          this.page = '';
          this.listPhone = [];
          this.sendItem = {
            "DonViID": 0,
            "LoaiDV": "NCC",
            "NhomDV": "",
            "MaGPP": "",
            "TenDV": "",
            "DiaChi": "",
            "DienThoai": ""
          };
          this.loaiDV = 'Nhà cung cấp'; // isCreate: string = '';

          this.submit = false;
        }

        _createClass(DonviCreatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.page == 'xuatbanle') {
              this.loaiDV = 'Khách hàng';
              this.sendItem.LoaiDV = 'KH';
            }

            if (this.isCreate == 'false') {
              this.sendItem = this.DonViItem;
              this.loaiDV = this.DonViItem.LoaiDV == "NCC" ? 'Nhà cung cấp' : 'Khách hàng';
              this.DonViItem.NhomDV = this.DonViItem.LoaiDV ? this.DonViItem.LoaiDV : '';
            }
          }
        }, {
          key: "confirmSubmit",
          value: function confirmSubmit() {
            var _this = this;

            var checkPhone = false;
            this.submit = true;

            if (!this.sendItem.TenDV) {
              return;
            }

            if (this.sendItem.DienThoai) {
              this.listPhone.find(function (o) {
                if (o == _this.sendItem.DienThoai) {
                  checkPhone = true;
                }
              });
            }

            if (checkPhone) {
              this.ToastService.warningToast("Số điện thoại đã tồn tại!");
              return;
            }

            this.LoadingService.setValue(true);
            this.UnitService.createUnit(this.sendItem).subscribe(function (response) {
              _this.ToastService.successToast('Thêm đơn vị thành công!');

              if (_this.isCreate == 'true') {
                _this.formatItem();

                _this.GlobalService.closeModalSenData('reload');
              }

              _this.LoadingService.setValue(false);
            }, function (error) {
              setTimeout(function () {
                console.log('error', error);

                _this.LoadingService.setValue(false);
              }, 1000);
            });
          }
        }, {
          key: "handleType",
          value: function handleType() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: [{
                          text: 'Nhà cung cấp',
                          icon: 'cash-outline',
                          cssClass: this.loaiDV == 'Nhà cung cấp' ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            _this2.loaiDV = 'Nhà cung cấp';
                            _this2.sendItem.LoaiDV = "NCC";
                          }
                        }, {
                          text: 'Khách hàng',
                          icon: 'card-outline',
                          cssClass: this.loaiDV == 'Khách hàng' ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            _this2.loaiDV = 'Khách hàng';
                            _this2.sendItem.LoaiDV = "KH";
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context.sent;
                      role = _yield$actionSheet$on.role;

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "formatItem",
          value: function formatItem() {
            this.submit = false;
            this.sendItem = {
              "DonViID": 0,
              "LoaiDV": "NCC",
              "NhomDV": "",
              "MaGPP": "",
              "TenDV": "",
              "DiaChi": "",
              "DienThoai": ""
            };
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.GlobalService.closeModal();
          }
        }]);

        return DonviCreatePage;
      }();

      DonviCreatePage.ctorParameters = function () {
        return [{
          type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_7__["UnitService"]
        }, {
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }];
      };

      DonviCreatePage.propDecorators = {
        isCreate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        DonViItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        listPhone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      DonviCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donvi-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./donvi-create.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/donvi/donvi-create/donvi-create.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./donvi-create.page.scss */
        "./src/app/donvi/donvi-create/donvi-create.page.scss"))["default"]]
      })], DonviCreatePage);
      /***/
    },

    /***/
    "./src/app/service/toastService.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/toastService.ts ***!
      \*****************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppServiceToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toastController) {
          _classCallCheck(this, ToastService);

          this.toastController = toastController;
        }

        _createClass(ToastService, [{
          key: "successToast",
          value: function successToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'success',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context2.sent;
                      _context2.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "errorToast",
          value: function errorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'danger',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context3.sent;
                      _context3.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "warningToast",
          value: function warningToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'warning',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context4.sent;
                      _context4.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "./src/app/service/unit.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/unit.service.ts ***!
      \*****************************************/

    /*! exports provided: UnitService */

    /***/
    function srcAppServiceUnitServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnitService", function () {
        return UnitService;
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


      var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/http */
      "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/dist/esm/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _share_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../share/helper */
      "./src/app/share/helper.ts");

      var UnitService = /*#__PURE__*/function () {
        function UnitService(http, router, toastController, http1, convertHelper, storage, modalController) {
          _classCallCheck(this, UnitService);

          this.http = http;
          this.router = router;
          this.toastController = toastController;
          this.http1 = http1;
          this.convertHelper = convertHelper;
          this.storage = storage;
          this.modalController = modalController;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlGpp;
        }

        _createClass(UnitService, [{
          key: "getUnit",
          value: function getUnit() {
            var _url = this.convertHelper.env() + "DonVi";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "createUnit",
          value: function createUnit(item) {
            var _url = this.convertHelper.env() + "DonVi";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, item, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "deleteUnit",
          value: function deleteUnit(id) {
            var _url = this.convertHelper.env() + "DonVi/" + id;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http["delete"](_url, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
              headers: headers
            }));
          }
        }]);

        return UnitService;
      }();

      UnitService.ctorParameters = function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _share_helper__WEBPACK_IMPORTED_MODULE_9__["convertHelper"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      UnitService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UnitService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~bill-bill-detail-bill-detail-module~donvi-donvi-create-donvi-create-module~donvi-donvi-index~6c9bd0aa-es5.js.map