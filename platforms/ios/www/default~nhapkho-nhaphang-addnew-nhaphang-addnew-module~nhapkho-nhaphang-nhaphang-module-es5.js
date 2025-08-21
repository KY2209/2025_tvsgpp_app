(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhapkho-nhaphang-addnew-nhaphang-addnew-module~nhapkho-nhaphang-nhaphang-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNhapkhoNhaphangAddnewNhaphangAddnewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar style=\"--border-width:0px!important;--background:#fff;\">\r\n\r\n    <ion-title style=\"text-align: center!important; color: #7077d6;\">\r\n      <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n        <tr>\r\n          <td style=\"text-align: center!important;\">\r\n            <div style=\"text-align: center;\">\r\n              Phiếu nhập hàng\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--background:#fff; --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n\r\n        <ion-icon name=\"close-circle-outline\" style=\"color: #7077d6; font-size: 25px;\" (click)=\"closeModal()\">\r\n        </ion-icon>\r\n\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"background-color: #ddd;\">\r\n    <div style=\"padding: 10px;\">\r\n\r\n      <div style=\"margin-top: 20px;\">\r\n\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important;\">\r\n          <tr>\r\n            <td style=\"padding-left: 5px;width:100%;font-size: 17px; font-weight: bold; color: #7077d6;\">\r\n              Loại chứng từ:\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"font-size: 20px!important;padding-left: 5px; padding-top: 5px; text-align: justify;width:100%;\">\r\n              <select value=\"{{loaiChungTu}}\" (change)=\"onLoaiCTChange($event)\"\r\n                style=\"font-size: 20px!important; width: 100%!important; max-width: 100%!important; --padding-top: 0px; --padding-end: 5px; --padding-bottom: 0px; --padding-start: 0px; border: solid 0px #ddd;background-color: #fff;\">\r\n                <option *ngFor=\"let item of lstChungTu\" value=\"{{item.LoaiCTID}}\">\r\n                  {{item.DienGiai}}\r\n                </option>\r\n              </select>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n          <tr>\r\n            <td\r\n              style=\"font-weight: bold;padding-left: 5px;width:100%; text-align: justify;font-size: 17px;color: #7077d6;\">\r\n              Ngày tháng:\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"padding: 0px!important;padding-left: 5px;padding-top: 5px;\">\r\n              <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2015-01-01\" max=\"2025-12-31\" [(ngModel)]=\"ngayNhap\"\r\n                Style=\"padding-left: 10px;width: 100%; text-align:justify; border-radius: 3px; color: #000;--padding-top: 5px;--padding-end: 5;--padding-bottom: 5px;--padding-start: 5px;background-color: #fff; border: solid 1px #ddd;font-size: 20px;\">\r\n              </ion-datetime>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n          <tr>\r\n            <td style=\"width:100%;font-size: 17px;color: #7077d6;padding-left: 5px;font-weight: bold;\">\r\n              Tên Nhà Cung Cấp:\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n\r\n            <td style=\"padding-left: 5px; text-align: justify;padding-top: 5px;padding-top: 5px;\">\r\n              <ion-input type=\"text\" [(ngModel)]=\"DVNhap\"\r\n                style=\"border:solid 1px #ddd; border-radius: 2px;background-color: #fff;\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n          <tr>\r\n            <td style=\"padding-left: 5px;width:100%;font-size: 17px;color: #7077d6;font-weight: bold;\">\r\n              Kho nhập:\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n\r\n            <td style=\"padding-left: 5px; text-align: justify;width:60%;padding-top: 5px;\">\r\n              <div style=\"font-size: 20px;\">\r\n                <select value=\"{{loaikho}}\" (ionChange)=\"onkhoChange($event)\"\r\n                  style=\"width: 100%!important; max-width: 100%!important; --padding-top: 0px; --padding-end: 5px; --padding-bottom: 0px; --padding-start: 0px; border: solid 0px #ddd;background-color: #fff;\">\r\n                  <option *ngFor=\"let items of lstKho\" value=\"{{items.MaKho}}\">{{items.TenKho}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table\r\n          style=\"padding-left: 5px;width: 100%!important; max-width: 100%!important; margin-top: 10px;font-size: 20px;\">\r\n          <tr>\r\n            <td style=\"color: #7077d6;padding-left: 5px;font-size:17px;font-weight: bold;\">\r\n              Tên hàng hóa\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"padding-left: 5px; text-align: justify;padding-top: 5px;\">\r\n              <ion-input type=\"text\" (ionBlur)=\"closeList()\" (ionInput)=\"filterProduct($event)\" [(ngModel)]=\"tenHanghoa\"\r\n                (ngModelChange)=\"doSomething()\"\r\n                style=\"border:solid 1px #ddd; border-radius: 2px; font-weight: bold;background-color: #fff;\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"width:100%\" *ngIf=\"this.showProduct\">\r\n\r\n              <div *ngFor=\"let item of lstHangHoa\" style=\"padding: 5px!important;font-size: 15px;\">\r\n                <div (click)=\"selectHanghoa(item)\">\r\n                  <table style=\"width:100%;  max-width: 100%!important;background-color: #fff;\">\r\n                    <tr>\r\n                      <td style=\"width:50%\">\r\n                        {{item.TenVT}}\r\n                      </td>\r\n                      <td style=\"width:20%; padding: 5px;\">{{item.DVT}}</td>\r\n                      <td style=\"width:30%;\">{{item.GiaMua}}</td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;font-size: 20px;\">\r\n          <tr>\r\n            <td\r\n              style=\"font-weight: bold;font-size:17px;color: #7077d6;width: 100%; padding-left:5px; text-align: justify; padding-right: 5px!important;\">\r\n              Số lượng:\r\n            </td>\r\n\r\n          </tr>\r\n          <tr>\r\n\r\n            <td style=\"width: 100%; padding-left: 5px; text-align: justify;padding-top: 5px;\">\r\n              <ion-input [(ngModel)]=\"SoLuongNhap\" type=\"tel\"\r\n                style=\"border:solid 1px #ddd; border-radius: 2px;background-color: #fff;\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n\r\n\r\n\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n          <tr>\r\n\r\n            <td\r\n              style=\"font-weight: bold;font-size: 17px;color: #7077d6;width: 100%; padding-left: 5px; text-align: justify; padding-right: 5px!important;margin-top: 10px;\">\r\n              Hạn dùng:\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n\r\n            <td style=\"width: 100%; padding-left: 5px; text-align: justify;padding-top: 5px;\">\r\n              <ion-datetime displayFormat=\"DD/MM/YYYY\" min=\"2015-01-01\" max=\"2025-12-31\" [(ngModel)]=\"HanDung\"\r\n                Style=\"width: 100%; text-align:justify; border-radius: 3px; color: #000;--padding-top: 5px;--padding-end: 5;--padding-bottom: 5px;--padding-start: 5px;background-color: #fff; border: solid 1px #ddd;font-size: 20px;\">\r\n              </ion-datetime>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n          <tr>\r\n            <td\r\n              style=\"font-weight: bold;font-size: 17px;color: #7077d6;width: 100%; padding-left: 5px; text-align: justify; padding-right: 5px!important;margin-top: 10px;\">\r\n              Lô hàng:\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n\r\n            <td style=\"width: 100%; padding-left: 5px; text-align: justify;padding-top: 5px;\">\r\n              <ion-input [(ngModel)]=\"LoHang\" type=\"tel\"\r\n                style=\"border:solid 1px #ddd; border-radius: 2px;background-color: #fff;\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n          <tr>\r\n            <td style=\"padding-left: 5px; text-align: justify;\">\r\n              <div (click)=\"updateBillDetail()\"\r\n                style=\"padding: 10px; margin-top: 10px; width: 100%; float: right; text-align: center; border-radius: 4px; background-color: #8c6b44; color: #fff;\">\r\n                Ghi nhận\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table\r\n          style=\"padding-left: 5px; width: 100%!important; max-width: 100%!important; margin-top: 15px; margin-bottom: 15px;\">\r\n          <tr>\r\n            <td style=\"padding-bottom: 5px!important; font-weight: bold;\">\r\n              <ion-icon name=\"options-outline\"\r\n                style=\"font-weight: bold;color: #7077d6;font-size: 25px; margin-bottom: -6px;\"></ion-icon>\r\n              &nbsp;Thông tin đơn thuốc\r\n            </td>\r\n            <td style=\"width: 40px; text-align: right;\">\r\n              &nbsp;\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table *ngIf=\"this.lstBillDetail.length > 0\"\r\n          style=\"padding-left: 5px;color: #7077d6;width:100%;  max-width: 100%!important; margin-top: 10px;font-weight: bold;background-color: #fff;\">\r\n          <tr>\r\n            <td style=\"width:50%\">\r\n              Tên VT (Đơn vị tính)\r\n            </td>\r\n            <td style=\"width:20%; padding: 5px;\">SL</td>\r\n            <td style=\"width:30%; padding: 5px;text-align: end;\">Thành tiền</td>\r\n          </tr>\r\n        </table>\r\n\r\n        <div style=\"padding-left: 5px;padding: 5px!important; border-radius: 2px;\"\r\n          *ngIf=\"this.lstBillDetail.length > 0\">\r\n\r\n          <table *ngFor=\"let items of lstBillDetail\"\r\n            style=\"width:100%;  max-width: 100%!important;background-color: #fff;\">\r\n            <tr>\r\n              <td style=\"width:50%\">{{items.TenVT}}({{items.DVT}})</td>\r\n              <td style=\"width:20%; padding: 5px;text-align: justify;\">{{items.SoLuong}}</td>\r\n              <td style=\"width:30%; padding: 5px;text-align: end;\">{{items.ThanhTien}}</td>\r\n            </tr>\r\n\r\n          </table>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <div style=\"margin-top: 20px;background-color: #fff;padding-left: 5px;\">\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n          <tr>\r\n            <td style=\"width:50%\">\r\n              Tổng tiền:\r\n            </td>\r\n            <td style=\"text-align: justify;\">\r\n              <ion-input [(ngModel)]=\"TongTien\" type=\"tel\"\r\n                style=\"border:solid 1px #ddd; border-radius: 2px;background-color: #fff;\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"width:50%\">\r\n              Thanh toán:\r\n            </td>\r\n            <td style=\"text-align: justify;padding-top: 5px;\">\r\n              <ion-input [(ngModel)]=\"ThanhToan\" type=\"tel\"\r\n                style=\"border:solid 1px #ddd; border-radius: 2px;background-color: #fff;\">\r\n              </ion-input>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 10px;\">\r\n          <tr>\r\n            <td style=\"width:50%\">\r\n              Hình thức thanh toán:\r\n            </td>\r\n            <td style=\"padding-left: 0px; text-align: justify;width:60%\">\r\n              <ion-select interface=\"action-sheet\" value=\"{{loaiThanhToan}}\"\r\n                style=\"width: 100%!important; max-width: 100%!important; --padding-top: 0px; --padding-end: 5px; --padding-bottom: 0px; --padding-start: 0px; border: solid 0px #ddd;background-color: #fff;\">\r\n                <ion-select-option *ngFor=\"let items of lstThanhToan\" value=\"{{items.MaLoai}}\">\r\n                  {{items.TenLoai}}</ion-select-option>\r\n\r\n              </ion-select>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n        <table style=\"width: 100%!important; max-width: 100%!important; margin-top: 20px; margin-bottom: 10px;\">\r\n          <tr>\r\n            <td style=\"padding: 0px;\">\r\n\r\n              <div *ngIf=\"this.Saving\"\r\n                style=\"padding: 10px; margin-top: 10px; width: 100%; float: right; text-align: center; border-radius: 4px; background-color: #bebaf0; color: #fff;\">\r\n                <ion-spinner name=\"lines-small\"\r\n                  style=\"margin-bottom: -10px!important; margin-top: -5px!important; color: #fff;\"></ion-spinner>\r\n                &nbsp;Đang xử lý đơn hàng, vui lòng đợi!\r\n              </div>\r\n\r\n              <div *ngIf=\"!this.Saving\" (click)=\"savePhieunhap()\"\r\n                style=\"padding: 10px; margin-top: 10px; width: 100%; float: right; text-align: center; border-radius: 4px; background-color: #4b42cf; color: #fff;\">\r\n                Lưu đơn hàng\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNhapkhoNhaphangAddnewNhaphangAddnewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".import {\n  padding: 0 0 0 10px;\n}\n.import-title {\n  color: #0764ae;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  margin: 15px 0;\n}\n.import-icon {\n  font-size: 25px;\n}\n.import-label span {\n  color: red;\n}\n.import-label2 {\n  margin-bottom: 8px;\n}\n.import-label2 span {\n  color: red;\n}\n.import-label2 label {\n  display: block;\n  margin-bottom: 8px;\n}\n.import-add {\n  display: flex;\n  /* align-items: center; */\n  gap: 5px;\n  color: #196fb4;\n  padding: 10px;\n}\n.import-add ion-icon {\n  margin-left: auto;\n}\n.import td {\n  padding-bottom: 10px;\n  padding-right: 10px;\n}\ntable {\n  width: 100%;\n}\ninput {\n  width: 100%;\n  padding: 8px 10px 8px;\n  background: #F0F5FF;\n  border-radius: 5px;\n  border: 1px solid #F0F5FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmhhcGtoby9uaGFwaGFuZy1hZGRuZXcvbmhhcGhhbmctYWRkbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0FBQUo7QUFFSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0ksZUFBQTtBQURSO0FBS1E7RUFDSSxVQUFBO0FBSFo7QUFPSTtFQUNJLGtCQUFBO0FBTFI7QUFPUTtFQUNJLFVBQUE7QUFMWjtBQVFRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBTlo7QUFVSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQVJSO0FBVVE7RUFDSSxpQkFBQTtBQVJaO0FBYUk7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBWFI7QUFlQTtFQUNJLFdBQUE7QUFaSjtBQWVBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBWkoiLCJmaWxlIjoic3JjL2FwcC9uaGFwa2hvL25oYXBoYW5nLWFkZG5ldy9uaGFwaGFuZy1hZGRuZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltcG9ydCB7XHJcblxyXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogIzA3NjRhZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWxhYmVsIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1sYWJlbDIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtYWRkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMxOTZmYjQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjBGNUZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjVGRjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.ts ***!
      \*****************************************************************/

    /*! exports provided: NhaphangAddnewPage */

    /***/
    function srcAppNhapkhoNhaphangAddnewNhaphangAddnewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NhaphangAddnewPage", function () {
        return NhaphangAddnewPage;
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


      var _function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../function.service */
      "./src/app/function.service.ts");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "./node_modules/lodash/lodash.js");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var NhaphangAddnewPage = /*#__PURE__*/function () {
        function NhaphangAddnewPage(Function, toastController) {
          _classCallCheck(this, NhaphangAddnewPage);

          this.Function = Function;
          this.toastController = toastController;
          this.ngayNhap = new Date().toISOString();
          this.HanDung = new Date().toISOString();
          this.LoHang = "";
          this.ThanhToan = 0;
          this.loaiChungTu = 4;
          this.loaikho = "TK";
          this.lstThanhToan = new Array({
            MaLoai: 0,
            TenLoai: "Tiền mặt"
          }, {
            MaLoai: 1,
            TenLoai: "Chuyển khoản"
          });
          this.loaiThanhToan = 0;
          this.detailObjects = new Array({
            // {
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
            "MaVT": "HH0031",
            "TenVT": "",
            "DVT": "Chai",
            "SoLuong": 0,
            "DonGia": 0,
            "GiaBanLe": 0,
            "GiaBanSy": 0,
            "ThanhTien": 0,
            "VAT_Percent": 0,
            "VAT": 0,
            "ChietKhau_Percent": 0,
            "ChietKhau": 0,
            "TongTien": 0,
            "HTTT": "TM",
            "LoHang": "0490623",
            "HanDung": "2025-06-30",
            "NhapXuatID": 0
          });
          this.lstBillDetail = new Array({
            MaVT: "HH0031",
            TenVT: "",
            DVT: "Chai",
            SoLuong: 0,
            DonGia: 0,
            GiaBanLe: 0,
            GiaBanSy: 0,
            ThanhTien: 0,
            VAT_Percent: 0,
            VAT: 0,
            ChietKhau_Percent: 0,
            ChietKhau: 0,
            TongTien: 0,
            HTTT: "TM",
            LoHang: "0490623",
            HanDung: "2025-06-30",
            NhapXuatID: 0
          });
          this.tenHanghoa = "";
          this.maHanghoa = "";
          this.DVNhap = "";
          this.showProduct = false;
          this.Saving = false;
          this.SoLuongNhap = 0;
          this.TongTien = 0;
          this.getListHangHoa();
          this.getLoaiCT();
          this.getDSKho();
          this.lstBillDetail = [];
          this.loaiChungTu = 4;
          this.loaikho = "TK";
          this.loaiThanhToan = 0;
        }

        _createClass(NhaphangAddnewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getListHangHoa",
          value: function getListHangHoa() {
            var _this = this;

            this.Function.getVatTu().subscribe(function (data) {
              _this.lstHangHoa = data;
              _this.lstHangHoaAll = _this.lstHangHoa;
            });
          }
        }, {
          key: "getLoaiCT",
          value: function getLoaiCT() {
            var _this2 = this;

            this.Function.getLoaiCT().subscribe(function (data) {
              var index = data.indexOf(1);
              data.splice(index);
              index = data.indexOf(2);
              data.splice(index);
              data.splice(1, 1);
              console.log("141", data);
              _this2.lstChungTu = data;
            });
          }
        }, {
          key: "chonHangHoa",
          value: function chonHangHoa() {
            this.showProduct = true;
          }
        }, {
          key: "getDSKho",
          value: function getDSKho() {
            var _this3 = this;

            var data = this.Function.getDanhsachKho();

            if (data != undefined) {
              data.subscribe(function (rs) {
                _this3.lstKho = rs;
              });
            }
          }
        }, {
          key: "onLoaiCTChange",
          value: function onLoaiCTChange(loaiCT) {
            var val = loaiCT.target.value;
            console.log("146", val);
            this.loaiChungTu = Number(val);
          }
        }, {
          key: "onkhoChange",
          value: function onkhoChange(loaiKho) {
            var val = loaiKho.target.value;
            console.log("153", val);
            this.loaikho = val;
          }
        }, {
          key: "closeList",
          value: function closeList() {
            if (this.tenHanghoa == "") {
              this.showProduct = false;
            }
          }
        }, {
          key: "doSomething",
          value: function doSomething() {
            if (this.tenHanghoa != "") {
              this.showProduct = true;
            } else {
              this.showProduct = false;
            }
          }
        }, {
          key: "filterProduct",
          value: function filterProduct(pid) {
            var val = pid.target.value;

            if (this.lstHangHoa != null) {
              if (val && val.trim() != '') {
                this.lstHangHoa = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.values(this.lstHangHoaAll);
                this.lstHangHoa = this.lstHangHoa.filter(function (product) {
                  return product.TenVT.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
              } else {
                this.lstHangHoa = this.lstHangHoaAll;
              }
            }
          }
        }, {
          key: "selectHanghoa",
          value: function selectHanghoa(item) {
            this.tenHanghoa = item.TenVT;
            this.maHanghoa = item.MaVT;
            this.showProduct = false;
            this.detailObjects = [];
            this.detailObjects.push(item);
            localStorage.setItem("objects", JSON.stringify(this.detailObjects));
          }
        }, {
          key: "updateBillDetail",
          value: function updateBillDetail() {
            var object = localStorage.getItem("objects");
            var object1 = JSON.parse(object);

            for (var i = 0; i <= object1.length; i++) {
              var item = object1[i];

              if (item != undefined) {
                if (item.MaVT != '') {
                  this.lstBillDetail.push({
                    MaVT: item.MaVT,
                    TenVT: item.TenVT,
                    DVT: item.DVT,
                    SoLuong: Number(this.SoLuongNhap),
                    DonGia: item.GiaMua,
                    GiaBanLe: item.GiaBanLe,
                    GiaBanSy: item.GiaBanSy,
                    ThanhTien: 0,
                    VAT_Percent: 0,
                    VAT: 0,
                    ChietKhau_Percent: 0,
                    ChietKhau: 0,
                    TongTien: this.TongTien,
                    HTTT: "TM",
                    LoHang: this.LoHang,
                    HanDung: this.HanDung,
                    NhapXuatID: 0
                  });
                }
              }
            }

            this.detailObjects = [];
            console.log("149", this.lstBillDetail);
            this.TongTien = 0;

            for (var j = 0; j <= this.lstBillDetail.length - 1; j++) {
              var _item = this.lstBillDetail[j];

              if (_item != undefined) {
                _item.ThanhTien = _item.DonGia * Number(this.SoLuongNhap.toString());
                _item.TongTien = _item.ThanhTien + _item.ChietKhau;
              }

              this.TongTien = this.TongTien + _item.TongTien;
            }

            this.tenHanghoa = "";
            this.SoLuongNhap = 0;
          }
        }, {
          key: "savePhieunhap",
          value: function savePhieunhap() {
            var _this4 = this;

            var _SoCT = Number(this.Function.randomBetween(1, 9999));

            var _MaCT = this.Function.randomBetween(1, 9999);

            console.log("Ma chung tu", _SoCT);

            if (this.loaiChungTu == 1) {
              //nhap mua
              _MaCT = "NM" + _MaCT;
            } else if (this.loaiChungTu == 3) {
              //nhap hang
              _MaCT = "NH" + _MaCT;
            } else if (this.loaiChungTu == 4) {
              //nhap ton
              _MaCT = "NT" + _MaCT;
            }

            if (this.lstBillDetail.length == 0) {
              this.presentToastMsg("Đơn nhập hàng không hợp lệ !");
              return;
            }

            this.Saving = true;
            var data = this.Function.addnewPhieunhaphang(this.loaiChungTu, _SoCT, _MaCT, this.ngayNhap, this.DVNhap, this.loaikho.toString(), this.lstBillDetail);

            if (data != null) {
              data.subscribe(function (rs) {
                console.log("277", rs);

                if (rs.code == 200) {
                  _this4.presentToastMsg(rs.message);
                }

                _this4.Saving = false;
              });
            }
          }
        }, {
          key: "presentToastMsg",
          value: function presentToastMsg(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: '<center>' + msg + '</center>',
                        color: 'danger',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.Function.closeModal();
          }
        }]);

        return NhaphangAddnewPage;
      }();

      NhaphangAddnewPage.ctorParameters = function () {
        return [{
          type: _function_service__WEBPACK_IMPORTED_MODULE_2__["FunctionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      NhaphangAddnewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhaphang-addnew',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./nhaphang-addnew.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./nhaphang-addnew.page.scss */
        "./src/app/nhapkho/nhaphang-addnew/nhaphang-addnew.page.scss"))["default"]]
      })], NhaphangAddnewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~nhapkho-nhaphang-addnew-nhaphang-addnew-module~nhapkho-nhaphang-nhaphang-module-es5.js.map