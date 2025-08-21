(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-list-bill-list-module~xuatkho-xuathang-addnew-xuathang-addnew-module~xuatkho-xuath~971bda02"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/share/print-bill/print-bill.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/print-bill/print-bill.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharePrintBillPrintBillComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\" padding: 10px; font-size: 14px; font-family: 'Times New Roman'\">\r\n\r\n  <div *ngIf=\"typePaper == '80'\" style=\"width: 300px;\">\r\n\r\n    <p style=\"font-weight: 600;\">Đơn vị: {{tenCongTy}}</p>\r\n    <p style=\"font-weight: 600;\">Địa chỉ: {{diaChi}}</p>\r\n    <p style=\"text-align: center; font-size: 16px; font-weight: 600; text-transform: uppercase;\">PHIẾU {{convertHelper.typeChungTu(itemDetail.LoaiCTID)}}</p>\r\n    <p>Họ và tên người nhận: {{itemDetail?._TenDVXuat}}</p>\r\n    <p>Lý do xuất kho:</p>\r\n\r\n    <table style=\"width: 100%; border: 1px solid black; border-spacing: 0;\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">STT</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; font-size: 14px\">Tên hàng</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">ĐVT</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">SL</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">Giá</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">T.Tiền</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of itemDetail?.ChiTietHang; index as i\">\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{i+1}}</td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; font-size: 12px;\">{{item._TenVT}}</td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{item._DVT}}</td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{item.SoLuong}}\r\n          </td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{item.DonGia |\r\n            number}}</td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: right; font-size: 12px;\">{{item.ThanhTien |\r\n            number}}</td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td colspan=\"5\"\r\n            style=\"border: 1px solid black; font-size: 14px; padding: 5px 2px; font-weight: 600; text-align: center;\">\r\n            Tổng tiền:</td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: right; font-size: 12px;\">{{sumTongTien |\r\n            number}}</td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n\r\n    <p>Tổng số tiền: {{convStringTT}}</p>\r\n    <table style=\"width: 100%;\">\r\n      <tr>\r\n        <td style=\"text-align: center;\"><img style=\"width: 90px; height: 90px;\" [src]=\"maQR\" alt=\"\"></td>\r\n        <td style=\"text-align: center; display: block;\">\r\n          <p style=\"font-weight: 600;\">Thu ngân</p>\r\n          <i>(Ký, họ tên, đóng dấu)</i>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"typePaper == 'A5'\">\r\n    <p style=\"font-weight: 600;\">Đơn vị: {{tenCongTy}}</p>\r\n    <p style=\"font-weight: 600;\">Địa chỉ: {{diaChi}}</p>\r\n    <p style=\"font-weight: 600;\">Điện thoại: {{dienthoai}}</p> \r\n    <div style=\"text-align: center; font-size: 16px; font-weight: 600;\">PHIẾU XUẤT KHO</div>\r\n    <div style=\"text-align: center; margin-top: 5px;\">Số CT: {{itemDetail.SoCT}}</div> \r\n    <div style=\"text-align: center; margin-top: 5px; font-style: italic;\">Ngày CT: {{dienthoai}}</div> \r\n\r\n    <table style=\"width: 100%;\">\r\n      <tr>\r\n        <td>Nhà cung cấp: {{itemDetail._TenDVXuat}}</td>\r\n        <td>Điện thoại</td>\r\n      </tr>\r\n      <tr>\r\n        <td colspan=\"2\">Địa điểm:</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Kho hàng: {{itemDetail._TenKhoXuat}}</td>\r\n        <td>Địa điểm: </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <table style=\"width: 100%; border: 1px solid black; border-spacing: 0; margin-top: 10px;\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">STT</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; font-size: 14px\">Sản phẩm</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">ĐVT</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">Lô hàng</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">Hạn dùng</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">SL</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">Đơn giá</th>\r\n          <th style=\"border: 1px solid black; padding: 5px 2px; text-align: center;  font-size: 14px;\">T.Tiền</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of itemDetail?.ChiTietHang; index as i\">\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{i+1}}</td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; font-size: 12px;\">{{item._TenVT}}</td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{item._DVT}}</td>\r\n          \r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{item.LoHang}}\r\n          </td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{item.HanDung}}\r\n          </td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: center; font-size: 12px;\">{{item.SoLuong}}\r\n          </td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: right; font-size: 12px;\">{{item.DonGia |\r\n            number}}</td>\r\n          <td style=\"border: 1px solid black; padding: 5px 2px; text-align: right; font-size: 12px;\">{{item.ThanhTien |\r\n            number}}</td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td colspan=\"4\"\r\n            style=\"border: 1px solid black; font-size: 14px; padding: 5px 2px; text-align: right; font-style: italic;\">\r\n            Tổng tiền VAT: {{sumVAT | number}}; Tổng tiền chiết khẩu: {{sumChietKhau | number}}</td>\r\n          <td colspan=\"2\" style=\"border: 1px solid black; padding: 5px 2px; text-align: right; font-size: 12px; font-weight: 600;\">Tổng tiền hàng: </td>\r\n            <td colspan=\"2\" style=\"border: 1px solid black; padding: 5px 2px; text-align: right; font-size: 12px; font-weight: 600;\">{{sumTongTien | number}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td colspan=\"4\"\r\n            style=\"border: 1px solid black; font-size: 14px; padding: 5px 2px; text-align: right; font-style: italic;\">\r\n            Nợ cũ: ; Tổng nợ: </td>\r\n          <td colspan=\"2\" style=\"border: 1px solid black; padding: 5px 2px; text-align: right; font-size: 12px; font-weight: 600;\">Tổng tiền phải trả: </td>\r\n            <td colspan=\"2\" style=\"border: 1px solid black; padding: 5px 2px; text-align: right; font-size: 12px; font-weight: 600;\">{{sumTongTien | number}}</td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n\r\n    <p>Tổng số tiền (viết bằng chứ): {{convStringTT}}</p>\r\n    <table style=\"width: 100%; margin-top: 30px;\">\r\n      <tr>\r\n        <td style=\"text-align: center; font-weight: bold;\">Người lập phiếu</td>\r\n        <td style=\"text-align: center; font-weight: bold;\">Người giao hàng/Kiểm hàng</td>\r\n        <td style=\"text-align: center; font-weight: bold;\">Thủ kho</td>\r\n        <td style=\"text-align: center; font-weight: bold;\">Kế toán/Thủ trưởng đơn vị</td>\r\n      </tr>\r\n      <tr>\r\n        <td style=\"font-style: italic; text-align: center;\">(Ký, họ tên)</td>\r\n        <td style=\"font-style: italic; text-align: center;\">(Ký, họ tên)</td>\r\n        <td style=\"font-style: italic; text-align: center;\">(Ký, họ tên)</td>\r\n        <td style=\"font-style: italic; text-align: center;\">(Ký, họ tên, đóng dấu)</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "./src/app/share/print-bill/print-bill.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/share/print-bill/print-bill.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharePrintBillPrintBillComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3ByaW50LWJpbGwvcHJpbnQtYmlsbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/share/print-bill/print-bill.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/share/print-bill/print-bill.component.ts ***!
      \**********************************************************/

    /*! exports provided: PrintBillComponent */

    /***/
    function srcAppSharePrintBillPrintBillComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrintBillComponent", function () {
        return PrintBillComponent;
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


      var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/xuatkho.service */
      "./src/app/service/xuatkho.service.ts");
      /* harmony import */


      var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../helper */
      "./src/app/share/helper.ts");

      var PrintBillComponent = /*#__PURE__*/function () {
        function PrintBillComponent(XuatkhoService, cdr, convertHelper) {
          _classCallCheck(this, PrintBillComponent);

          this.XuatkhoService = XuatkhoService;
          this.cdr = cdr;
          this.convertHelper = convertHelper;
          this.ChungTuInfo = {};
          this.data = {};
          this.itemDetail = [];
          this.sumThanhTien = 0;
          this.tenCongTy = '';
          this.diaChi = '';
          this.dienthoai = '';
          this.maQR = '';
          this.convStringTT = '';
          this.check = 0;
          this.typePaper = '';
          this.sumTongTien = 0;
          this.sumVAT = 0;
          this.sumChietKhau = 0;
        }

        _createClass(PrintBillComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHeThong();
            this.typePaper = localStorage.getItem('setting') ? localStorage.getItem('setting') : 'A5'; // console.log('typePaper', this.typePaper);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.ChungTuInfo) {
              // console.log('changes.ChungTuInfo', changes.ChungTuInfo.currentValue);
              this.ChungTuInfo = changes.ChungTuInfo.currentValue;

              if (this.ChungTuInfo.ChungTuID) {
                this.sumThanhTien = 0;
                this.getChungTuDetail();
              }
            }

            if (changes.data && changes.data.currentValue) {
              // setTimeout(() => {
              this.cdr.detectChanges();
              this.itemDetail = changes.data.currentValue;
              this.cdr.detectChanges();
              this.sumThanhTien = 0;

              if (this.itemDetail.LoaiCTID) {
                this.countMoney();
              } // }, 3000);

            }
          }
        }, {
          key: "getHeThong",
          value: function getHeThong() {
            // this.XuatkhoService.heThong().subscribe((response: any) => {
            // console.log('response12343434', response);
            var HeThong = JSON.parse(localStorage.getItem('HeThong') || '[]');

            for (var i = 0; i < HeThong.length; i++) {
              if (HeThong[i].INIOption == "inpTenCongTy") {
                this.tenCongTy = HeThong[i].INIValue;
              }

              if (HeThong[i].INIOption == "inpDiaChiCongTy") {
                this.diaChi = HeThong[i].INIValue;
              }

              if (HeThong[i].INIOption == "imgQRCode") {
                this.maQR = HeThong[i].INIValue;
              }

              if (HeThong[i].INIOption == "inpDienThoai") {
                this.dienthoai = HeThong[i].INIValue;
              }
            }
          }
        }, {
          key: "getChungTuDetail",
          value: function getChungTuDetail() {
            var _this = this;

            this.XuatkhoService.xuatHangDetail(this.ChungTuInfo).subscribe(function (response) {
              _this.itemDetail = response[0]; // console.log('response1111', response[0]);

              if (response[0]) {
                _this.countMoney();
              }
            }, function (error) {
              console.log('error', error);
            });
          }
        }, {
          key: "countMoney",
          value: function countMoney() {
            var _a; // console.log('this.itemDetail', this.itemDetail);


            this.sumThanhTien = 0;
            this.sumTongTien = 0;
            this.convStringTT = '';
            this.sumVAT = 0;
            this.sumChietKhau = 0;

            for (var i = 0; i < ((_a = this.itemDetail) === null || _a === void 0 ? void 0 : _a.ChiTietHang.length); i++) {
              this.sumThanhTien = this.sumThanhTien + this.itemDetail.ChiTietHang[i].ThanhTien;
              this.sumTongTien = this.sumTongTien + this.itemDetail.ChiTietHang[i].TongTien;
              this.convStringTT = this.convertHelper.to_vietnamese(this.sumTongTien);
              this.sumVAT = this.sumVAT + this.itemDetail.ChiTietHang[i].VAT;
              this.sumChietKhau = this.sumChietKhau + this.itemDetail.ChiTietHang[i].ChietKhau; // this.sumThanhToan = this.sumThanhToan + this.itemDetail.ChiTietHang[i].ThanhToan;
            }

            this.cdr.detectChanges();
          }
        }]);

        return PrintBillComponent;
      }();

      PrintBillComponent.ctorParameters = function () {
        return [{
          type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_2__["XuatkhoService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _helper__WEBPACK_IMPORTED_MODULE_3__["convertHelper"]
        }];
      };

      PrintBillComponent.propDecorators = {
        ChungTuInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      PrintBillComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-print-bill',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./print-bill.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/share/print-bill/print-bill.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./print-bill.component.scss */
        "./src/app/share/print-bill/print-bill.component.scss"))["default"]]
      })], PrintBillComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~bill-bill-list-bill-list-module~xuatkho-xuathang-addnew-xuathang-addnew-module~xuatkho-xuath~971bda02-es5.js.map