(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kho-kho-index-kho-index-module"], {
    /***/
    "./src/app/kho/kho-index/kho-index-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/kho/kho-index/kho-index-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: KhoIndexPageRoutingModule */

    /***/
    function srcAppKhoKhoIndexKhoIndexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KhoIndexPageRoutingModule", function () {
        return KhoIndexPageRoutingModule;
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


      var _kho_index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./kho-index.page */
      "./src/app/kho/kho-index/kho-index.page.ts");

      var routes = [{
        path: '',
        component: _kho_index_page__WEBPACK_IMPORTED_MODULE_3__["KhoIndexPage"]
      }];

      var KhoIndexPageRoutingModule = function KhoIndexPageRoutingModule() {
        _classCallCheck(this, KhoIndexPageRoutingModule);
      };

      KhoIndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], KhoIndexPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/kho/kho-index/kho-index.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/kho/kho-index/kho-index.module.ts ***!
      \***************************************************/

    /*! exports provided: KhoIndexPageModule */

    /***/
    function srcAppKhoKhoIndexKhoIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KhoIndexPageModule", function () {
        return KhoIndexPageModule;
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


      var _kho_index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./kho-index-routing.module */
      "./src/app/kho/kho-index/kho-index-routing.module.ts");
      /* harmony import */


      var _kho_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./kho-index.page */
      "./src/app/kho/kho-index/kho-index.page.ts");

      var KhoIndexPageModule = function KhoIndexPageModule() {
        _classCallCheck(this, KhoIndexPageModule);
      };

      KhoIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kho_index_routing_module__WEBPACK_IMPORTED_MODULE_5__["KhoIndexPageRoutingModule"]],
        declarations: [_kho_index_page__WEBPACK_IMPORTED_MODULE_6__["KhoIndexPage"]]
      })], KhoIndexPageModule);
      /***/
    },

    /***/
    "./src/app/service/AlertService.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/AlertService.ts ***!
      \*****************************************/

    /*! exports provided: AlertService */

    /***/
    function srcAppServiceAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
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
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); // import { StringResources } from '@app/models/sharedmodels';


      var AlertService = /*#__PURE__*/function () {
        function AlertService(alertController) {
          _classCallCheck(this, AlertService);

          this.alertController = alertController;
        }

        _createClass(AlertService, [{
          key: "presentAlert",
          value: function presentAlert(question) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: question,
                        cssClass: 'cssAlert',
                        mode: 'ios',
                        buttons: [{
                          text: "Hủy",
                          role: 'false'
                        }, {
                          text: "Đồng ý",
                          role: 'true'
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context.sent;
                      role = _yield$alert$onDidDis.role;
                      return _context.abrupt("return", "".concat(role));

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlert2",
          value: function presentAlert2(question, print) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var arr, alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      arr = [{
                        text: "Đồng ý",
                        role: 'true'
                      }, {
                        text: "Hủy",
                        role: 'false'
                      }];

                      if (print) {
                        arr.splice(1, 0, {
                          text: "Đồng ý và in",
                          role: 'trueAndPrint'
                        });
                      }

                      _context2.next = 4;
                      return this.alertController.create({
                        header: question,
                        cssClass: 'alertThree',
                        buttons: arr
                      });

                    case 4:
                      alert = _context2.sent;
                      _context2.next = 7;
                      return alert.present();

                    case 7:
                      _context2.next = 9;
                      return alert.onDidDismiss();

                    case 9:
                      _yield$alert$onDidDis2 = _context2.sent;
                      role = _yield$alert$onDidDis2.role;
                      return _context2.abrupt("return", "".concat(role));

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlertService);
      /***/
    },

    /***/
    "./src/app/service/global.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/service/global.service.ts ***!
      \*******************************************/

    /*! exports provided: GlobalService */

    /***/
    function srcAppServiceGlobalServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalService", function () {
        return GlobalService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js"); // import { StringResources } from '@app/models/sharedmodels';


      var GlobalService = /*#__PURE__*/function () {
        function GlobalService(alertController, modalController) {
          _classCallCheck(this, GlobalService);

          this.alertController = alertController;
          this.modalController = modalController;
          this.controlMove = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('Quản lý trạm');
          this.sendMove = this.controlMove.asObservable();
        }

        _createClass(GlobalService, [{
          key: "changeMoveCont",
          value: function changeMoveCont(item) {
            var _this = this;

            setTimeout(function () {
              _this.controlMove.next(item);
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(question, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert, _yield$alert$onDidDis3, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: question,
                        message: message,
                        buttons: [{
                          text: "Hủy",
                          role: 'false'
                        }, {
                          text: "Đồng ý",
                          role: 'true'
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      _context3.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis3 = _context3.sent;
                      role = _yield$alert$onDidDis3.role;
                      return _context3.abrupt("return", "".concat(role));

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "closeModalSenData",
          value: function closeModalSenData(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      onClosedData = item;
                      _context4.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return GlobalService;
      }();

      GlobalService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GlobalService);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'success',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context6.sent;
                      _context6.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "errorToast",
          value: function errorToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'danger',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context7.sent;
                      _context7.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "warningToast",
          value: function warningToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 1500,
                        position: 'top',
                        color: 'warning',
                        cssClass: 'toast-ios'
                      });

                    case 2:
                      toast = _context8.sent;
                      _context8.next = 5;
                      return toast.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
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
    "./src/app/share/helper.ts":
    /*!*********************************!*\
      !*** ./src/app/share/helper.ts ***!
      \*********************************/

    /*! exports provided: convertHelper */

    /***/
    function srcAppShareHelperTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertHelper", function () {
        return convertHelper;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var convertHelper = /*#__PURE__*/function () {
        function convertHelper() {
          _classCallCheck(this, convertHelper);

          this.defaultNumbers = '';
          this.chuHangDonVi = '';
          this.chuHangChuc = '';
          this.chuHangTram = '';
          this.dvBlock = '';
          this.defaultNumbers = ' hai ba bốn năm sáu bảy tám chín';
          this.chuHangDonVi = ('1 một' + this.defaultNumbers).split(' ');
          this.chuHangChuc = ('lẻ mười' + this.defaultNumbers).split(' ');
          this.chuHangTram = ('không một' + this.defaultNumbers).split(' ');
          this.dvBlock = '1 nghìn triệu tỷ'.split(' ');
        }

        _createClass(convertHelper, [{
          key: "to_vietnamese",
          value: function to_vietnamese(number) {
            var str = parseInt(number) + '';
            var i = 0;
            var arr = [];
            var index = str.length;
            var result = [];
            var rsString = '';

            if (index == 0 || str == 'NaN') {
              return '';
            } // Chia chuỗi số thành một mảng từng khối có 3 chữ số


            while (index >= 0) {
              arr.push(str.substring(index, Math.max(index - 3, 0)));
              index -= 3;
            } // Lặp từng khối trong mảng trên và convert từng khối đấy ra chữ Việt Nam


            for (i = arr.length - 1; i >= 0; i--) {
              if (arr[i] != '' && arr[i] != '000') {
                result.push(this.convert_block_three(arr[i])); // Thêm đuôi của mỗi khối

                if (this.dvBlock[i]) {
                  result.push(this.dvBlock[i]);
                }
              }
            } // Join mảng kết quả lại thành chuỗi string


            rsString = result.join(' '); // Trả về kết quả kèm xóa những ký tự thừa

            return rsString.replace(/[0-9]/g, '').replace(/ /g, ' ').replace(/ $/, '');
          }
        }, {
          key: "convert_block_three",
          value: function convert_block_three(number) {
            if (number == '000') return '';

            var _a = number + ''; //Convert biến 'number' thành kiểu string
            //Kiểm tra độ dài của khối


            switch (_a.length) {
              case 0:
                return '';

              case 1:
                return this.chuHangDonVi[_a];

              case 2:
                return this.convert_block_two(_a);

              case 3:
                var chuc_dv = '';

                if (_a.slice(1, 3) != '00') {
                  chuc_dv = this.convert_block_two(_a.slice(1, 3));
                }

                var tram = this.chuHangTram[_a[0]] + ' trăm';
                return tram + ' ' + chuc_dv;
            }
          }
        }, {
          key: "convert_block_two",
          value: function convert_block_two(number) {
            var dv = this.chuHangDonVi[number[1]];
            var chuc = this.chuHangChuc[number[0]];
            var append = ''; // Nếu chữ số hàng đơn vị là 5

            if (number[0] > 0 && number[1] == 5) {
              dv = 'lăm';
            } // Nếu số hàng chục lớn hơn 1


            if (number[0] > 1) {
              append = ' mươi';

              if (number[1] == 1) {
                dv = ' mốt';
              }
            }

            return chuc + '' + append + ' ' + dv;
          }
        }, {
          key: "env",
          value: function env() {
            return "https://".concat(localStorage.getItem('unit'), ".tvsgpp.net/api/");
          }
        }, {
          key: "env2",
          value: function env2() {
            return "https://tvsgpp.net/api/";
          }
        }, {
          key: "typeProduct",
          value: function typeProduct() {
            // return ['Thuốc','Vật tư y tế','Thực phẩm chức năng'];
            return [{
              'item': 'Thuốc',
              'value': 'THUOC'
            }, {
              'item': 'Vật tư y tế',
              'value': 'VTYT'
            }, {
              'item': 'Thực phẩm chức năng',
              'value': 'TPCN'
            }];
          }
        }, {
          key: "typeChungTu",
          value: function typeChungTu(LoaiCTID) {
            var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');

            for (var i = 0; i < typeArr.length; i++) {
              if (typeArr[i].LoaiCTID == LoaiCTID) {
                return typeArr[i].DienGiai;
              }
            }
          }
        }, {
          key: "typeChungTuObj",
          value: function typeChungTuObj(LoaiCTID) {
            var typeArr = JSON.parse(localStorage.getItem('LoaiCT') || '[]');

            for (var i = 0; i < typeArr.length; i++) {
              if (typeArr[i].LoaiCTID == LoaiCTID) {
                return typeArr[i];
              }
            }
          }
        }, {
          key: "convertFileToBase64",
          value: function convertFileToBase64(file) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                return resolve(reader.result);
              };

              reader.onerror = function (error) {
                return reject(error);
              };
            });
          }
        }]);

        return convertHelper;
      }();

      convertHelper.ctorParameters = function () {
        return [];
      };

      convertHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], convertHelper);
      /***/
    }
  }]);
})();
//# sourceMappingURL=kho-kho-index-kho-index-module-es5.js.map