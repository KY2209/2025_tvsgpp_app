(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0"], {
    /***/
    "./src/app/function.service.ts":
    /*!*************************************!*\
      !*** ./src/app/function.service.ts ***!
      \*************************************/

    /*! exports provided: FunctionService */

    /***/
    function srcAppFunctionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FunctionService", function () {
        return FunctionService;
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

      var FunctionService_1;

      var FunctionService = FunctionService_1 = /*#__PURE__*/function () {
        //public static apiUrl: string = "http://localhost:65302";
        function FunctionService(http, router, toastController, http1, storage, modalController) {
          _classCallCheck(this, FunctionService);

          this.http = http;
          this.router = router;
          this.toastController = toastController;
          this.http1 = http1;
          this.storage = storage;
          this.modalController = modalController;
        }

        _createClass(FunctionService, [{
          key: "login",
          value: function login(orgId, userName, passWord) {
            var userLogin = btoa(userName + ':' + passWord);
            var DeviceId = localStorage.getItem("DeviceId");

            if (DeviceId == null) {
              DeviceId = "8103a125-f127-4e92-ad46-21173c2bdaa3";
            }

            FunctionService_1.apiUrl = "https://" + orgId + ".tvsgpp.net/api/"; // FunctionService.apiUrl = "http://localhost:65302/api/"

            src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlGpp = "https://" + orgId + ".tvsgpp.net/api/";
            var url = FunctionService_1.apiUrl + 'Login/' + DeviceId;

            var _headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();

            _headers.append('Authorization', 'Basic ' + userLogin);

            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
              headers: _headers
            });
            return this.http.post(url, {}, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getAllBillPagging",
          value: function getAllBillPagging(Keyword, Page, PageSize, TypeInput) {
            var objUserName = localStorage.getItem("objUserName");
            var link = localStorage.getItem("DbName");
            var tempObj = JSON.parse(objUserName);
            var expired = tempObj["expired"] || Date.now();
            var token = tempObj["Token"];

            var _url = FunctionService_1.apiUrl + "TablBill/GetAllBillPagging?Keyword=" + Keyword + "&Page=" + Page + "&PageSize=" + PageSize + "&TypeInput=" + TypeInput;

            var _header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
              'Content-Type': 'Application/json',
              "Authorization": "Bearer " + token.toString(),
              "connLink": link
            });

            var _option = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
              method: _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestMethod"].Get,
              headers: _header
            });

            return this.http.get(_url, _option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getTonghopdoanhthu",
          value: function getTonghopdoanhthu(officeId) {
            console.log("64", officeId);

            var _url = FunctionService_1.apiUrl + "Report/TongHopDoanhThu/" + officeId;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getBieudodoanhthu",
          value: function getBieudodoanhthu(officeId) {
            var _url = FunctionService_1.apiUrl + "Report/BieuDoDoanhThu/" + officeId;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getDoiSoatLienThongGPP",
          value: function getDoiSoatLienThongGPP(officeId) {
            var _url = FunctionService_1.apiUrl + "Report/DoiSoatLienThongGPP/" + officeId;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getDanhsachKho",
          value: function getDanhsachKho() {
            var _url = FunctionService_1.apiUrl + "Kho";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getTongHopNhapKho",
          value: function getTongHopNhapKho(officeId, tuNgay, denNgay, searchKey) {
            var _url = FunctionService_1.apiUrl + "Report/TongHopNhapKho";

            var _body = {
              "officeid": officeId,
              "tu_ngay": tuNgay,
              "den_ngay": denNgay,
              "dieukien": searchKey
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, _body, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getTongHopXuatKho",
          value: function getTongHopXuatKho(officeId, tuNgay, denNgay, searchKey) {
            var _url = FunctionService_1.apiUrl + "Report/TongHopXuatKho";

            var _body = {
              "officeid": officeId,
              "tu_ngay": tuNgay,
              "den_ngay": denNgay,
              "dieukien": searchKey
            };
            console.log(_body);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, _body, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getTongHopTonKho",
          value: function getTongHopTonKho(officeId, tuNgay, searchKey) {
            var _url = FunctionService_1.apiUrl + "Report/TonKho";

            var _body = {
              "officeid": officeId,
              "thoidiem": tuNgay,
              "dieukien": searchKey
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, _body, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "addnewPhieunhaphang",
          value: function addnewPhieunhaphang(LoaiCTID, ChungTuID, SoCT, ThoiDiem, DVNhap, KhoNhap, ChiTietHang) {
            var root = JSON.stringify(ChiTietHang);
            var result = JSON.parse(root);

            var _url = FunctionService_1.apiUrl + "ChungTu";

            var _body = {
              "nam_du_lieu": ThoiDiem.substring(0, 4),
              "LoaiCTID": LoaiCTID,
              "ChungTuID": ChungTuID,
              "SoCT": SoCT,
              "ThoiDiem": ThoiDiem,
              "DienGiai": "",
              "DVNhap": DVNhap,
              "KhoNhap": KhoNhap,
              "ChiTietHang": result // {
              //   "MaVT": "HH0031",
              //   "DVT": "Chai",
              //   "SoLuong": 3,
              //   "DonGia": 63500,
              //   "GiaBanLe": 0,
              //   "GiaBanSy": 0,
              //   "ThanhTien": 190500,
              //   "VAT_Percent": 0,
              //   "VAT": 0,
              //   "ChietKhau_Percent": 0,
              //   "ChietKhau": 0,
              //   "TongTien": 190500,
              //   "HTTT": "TM",
              //   "LoHang": "0490623",
              //   "HanDung": "2025-06-30"
              // }

            };
            console.log(_body);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, _body, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getVatTu",
          value: function getVatTu() {
            var _url = FunctionService_1.apiUrl + "VatTu";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getLoaiCT",
          value: function getLoaiCT() {
            var _url = FunctionService_1.apiUrl + "LoaiCT";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "dongboCT",
          value: function dongboCT(ctId) {
            var _url = FunctionService_1.apiUrl + "GPP/DongBoDuLieuGPP";

            var _body = {
              "chungtuid": ctId
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, _body, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getThongBaoGPP",
          value: function getThongBaoGPP(officeId, tuNgay, denNgay, searchKey) {
            var _url = FunctionService_1.apiUrl + "GPP/ThongBaoGPP";

            var _body = {
              "officeid": officeId,
              "tu_ngay": tuNgay,
              "den_ngay": denNgay,
              "dieukien": searchKey
            };
            console.log(_body);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.post(_url, _body, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getThongBao",
          value: function getThongBao() {
            var _url = FunctionService_1.apiUrl + "ThongBao";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getChiTietThongBao",
          value: function getChiTietThongBao(Id) {
            var _url = FunctionService_1.apiUrl + "ThongBao/" + Id;

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getChungtu",
          value: function getChungtu(item) {
            console.log(item);

            var _url = FunctionService_1.apiUrl + "ChungTu?nam_du_lieu=".concat(item.nam_du_lieu, "&loaictid=").concat(item.loaictid);

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getValue",
          value: function getValue() {
            var userId = "";
            this.storage.get("userId").then(function (id) {
              userId = id;
            });

            var _url = FunctionService_1.apiUrl + "Users";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "getDSTK",
          value: function getDSTK() {
            var _url = FunctionService_1.apiUrl + "TaiKhoan";

            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"));
            return this.http.get(_url, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
              return res.json();
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.dismiss();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "convertMoney1",
          value: function convertMoney1(param) {
            var s = param.toString();

            if (Number(s) < 0) {
              s = s.replace("-", "");

              if (param.toString().length == 5) {
                var a = s.substring(0, 2);
                var b = s.substring(2, 5);
                var c = "-" + a + "," + b;
                s = c;
              } else if (s.length == 6) {
                var _a = s.substring(0, 3);

                var _b = s.substring(3, 6);

                var _c = "-" + _a + "," + _b;

                s = _c;
              } else if (s.length == 7) {
                var _a2 = s.substring(0, 1);

                var _b2 = s.substring(1, 4);

                var _c2 = s.substring(4, 7);

                var d = "-" + _a2 + "," + _b2 + "," + _c2;
                s = d;
              } else if (s.length == 8) {
                var _a3 = s.substring(0, 2);

                var _b3 = s.substring(2, 5);

                var _c3 = s.substring(5, 8);

                var _d = s.substring(8, 10);

                var e = "-" + _a3 + "," + _b3 + "," + _c3 + "," + _d;
                s = e;
              }
            } else {
              if (param.toString().length == 5) {
                var _a4 = s.substring(0, 2);

                var _b4 = s.substring(2, 5);

                var _c4 = _a4 + "," + _b4;

                s = _c4;
              } else if (s.length == 6) {
                var _a5 = s.substring(0, 3);

                var _b5 = s.substring(3, 6);

                var _c5 = _a5 + "," + _b5;

                s = _c5;
              } else if (s.length == 7) {
                var _a6 = s.substring(0, 1);

                var _b6 = s.substring(1, 4);

                var _c6 = s.substring(4, 7);

                var _d2 = _a6 + "," + _b6 + "," + _c6;

                s = _d2;
              } else if (s.length == 8) {
                var _a7 = s.substring(0, 2);

                var _b7 = s.substring(2, 5);

                var _c7 = s.substring(5, 8);

                var _d3 = s.substring(8, 10);

                var _e = _a7 + "," + _b7 + "," + _c7 + "," + _d3;

                s = _e;
              } else if (s.length == 9) {
                var _a8 = s.substring(0, 3);

                var _b8 = s.substring(3, 6);

                var _c8 = s.substring(6, 9);

                var _e2 = _a8 + "," + _b8 + "," + _c8;

                s = _e2;
              } else if (s.length == 10) {
                var _a9 = s.substring(0, 1);

                var _b9 = s.substring(1, 4);

                var _c9 = s.substring(4, 7);

                var _d4 = s.substring(7, 10);

                var _e3 = _a9 + "," + _b9 + "," + _c9 + "," + _d4;

                s = _e3;
              }
            }

            return s;
          }
        }, {
          key: "randomBetween",
          value: function randomBetween(min, max) {
            var rs = "";

            if (min < 0) {
              rs = min + Math.random() * (Math.abs(min) + max);
              rs = rs.toString().replace(".", "");
              rs = rs.substring(0, 4);
              return rs;
            } else {
              rs = min + Math.random() * max;
              rs = rs.toString().replace(".", "");
              rs = rs.substring(0, 4);
              return rs;
            }
          }
        }]);

        return FunctionService;
      }();

      FunctionService.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlGpp;

      FunctionService.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      FunctionService = FunctionService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FunctionService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~bill-bill-detail-bill-detail-module~bill-bill-list-bill-list-module~ht-madonvi-ht-madonvi-mo~b372dfb0-es5.js.map