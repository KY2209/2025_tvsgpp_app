(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f"], {
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
    "./src/app/service/vattu.service.ts":
    /*!******************************************!*\
      !*** ./src/app/service/vattu.service.ts ***!
      \******************************************/

    /*! exports provided: VattuService */

    /***/
    function srcAppServiceVattuServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VattuService", function () {
        return VattuService;
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

      var VattuService = /*#__PURE__*/function () {
        function VattuService(http, router, toastController, http1, storage, convertHelper, modalController) {
          _classCallCheck(this, VattuService);

          this.http = http;
          this.router = router;
          this.toastController = toastController;
          this.http1 = http1;
          this.storage = storage;
          this.convertHelper = convertHelper;
          this.modalController = modalController;
          this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlGpp;
        }

        _createClass(VattuService, [{
          key: "getVatTu",
          value: function getVatTu() {
            var _url = this.convertHelper.env() + "VatTu";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getVatTuQuocGia",
          value: function getVatTuQuocGia(searchText) {
            var _url = this.convertHelper.env2() + "GPP/" + searchText;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "GetListVT",
          value: function GetListVT(item) {
            var _url = this.convertHelper.env() + "VatTu/GetListVT?loainx=".concat(item.loainx, "&khohang=").concat(item.khohang, "&banggia=").concat(item.banggia, "&xuatam=").concat(item.xuatam);

            console.log(_url);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "detailVattu",
          value: function detailVattu(maVT) {
            var _url = this.convertHelper.env() + "VatTu/".concat(maVT);

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "createVattu",
          value: function createVattu(item) {
            var _url = this.convertHelper.env() + "VatTu";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, item, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "deleteVattu",
          value: function deleteVattu(id) {
            var _url = this.convertHelper.env() + "VatTu/" + id;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http["delete"](_url, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
              headers: headers
            }));
          }
        }, {
          key: "detailDVT",
          value: function detailDVT(maVT) {
            var _url = this.convertHelper.env() + "DonViTinh/".concat(maVT);

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "createDVT",
          value: function createDVT(item) {
            var _url = this.convertHelper.env() + "DonViTinh";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, item, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "deleteDVT",
          value: function deleteDVT(id) {
            var _url = this.convertHelper.env() + "DonViTinh/" + id;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http["delete"](_url, new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
              headers: headers
            }));
          }
        }, {
          key: "getVatTuTonKho",
          value: function getVatTuTonKho(item) {
            var _url = this.convertHelper.env() + "Report/TonKho";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, item, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getVatTuSapHetHan",
          value: function getVatTuSapHetHan(item) {
            var _url = this.convertHelper.env() + "Report/TonKhoHanDung";

            console.log("115", item);
            console.log("url - ", _url);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, item, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }]);

        return VattuService;
      }();

      VattuService.ctorParameters = function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _share_helper__WEBPACK_IMPORTED_MODULE_9__["convertHelper"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      VattuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], VattuService);
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
//# sourceMappingURL=default~bill-bill-detail-bill-detail-module~nhapkho-nhaphang-detail-nhaphang-detail-module~nhapkho-n~6427828f-es5.js.map