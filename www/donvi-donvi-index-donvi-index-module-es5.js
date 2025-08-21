(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donvi-donvi-index-donvi-index-module"], {
    /***/
    "./src/app/donvi/donvi-index/donvi-index-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/donvi/donvi-index/donvi-index-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: DonviIndexPageRoutingModule */

    /***/
    function srcAppDonviDonviIndexDonviIndexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonviIndexPageRoutingModule", function () {
        return DonviIndexPageRoutingModule;
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


      var _donvi_index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./donvi-index.page */
      "./src/app/donvi/donvi-index/donvi-index.page.ts");

      var routes = [{
        path: '',
        component: _donvi_index_page__WEBPACK_IMPORTED_MODULE_3__["DonviIndexPage"]
      }];

      var DonviIndexPageRoutingModule = function DonviIndexPageRoutingModule() {
        _classCallCheck(this, DonviIndexPageRoutingModule);
      };

      DonviIndexPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DonviIndexPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/donvi/donvi-index/donvi-index.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/donvi/donvi-index/donvi-index.module.ts ***!
      \*********************************************************/

    /*! exports provided: DonviIndexPageModule */

    /***/
    function srcAppDonviDonviIndexDonviIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonviIndexPageModule", function () {
        return DonviIndexPageModule;
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


      var _donvi_index_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./donvi-index-routing.module */
      "./src/app/donvi/donvi-index/donvi-index-routing.module.ts");
      /* harmony import */


      var _donvi_index_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donvi-index.page */
      "./src/app/donvi/donvi-index/donvi-index.page.ts");

      var DonviIndexPageModule = function DonviIndexPageModule() {
        _classCallCheck(this, DonviIndexPageModule);
      };

      DonviIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _donvi_index_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonviIndexPageRoutingModule"]],
        declarations: [_donvi_index_page__WEBPACK_IMPORTED_MODULE_6__["DonviIndexPage"]]
      })], DonviIndexPageModule);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
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
          key: "closeModalSenData",
          value: function closeModalSenData(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      onClosedData = item;
                      _context2.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
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
//# sourceMappingURL=donvi-donvi-index-donvi-index-module-es5.js.map