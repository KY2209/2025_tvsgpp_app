(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhapkho-nhaphang-update-nhaphang-update-module~xuatkho-xuathang-addnew-xuathang-addnew-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-item/xuathang-item.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-item/xuathang-item.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppXuatkhoXuathangItemXuathangItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"import\">\r\n\r\n  <div class=\"import-card\">\r\n    <div class=\"import-header\">\r\n      <div (click)=\"changeCheck()\">Hàng hóa {{index+1}}</div>\r\n      <ion-icon class=\"open-icon\" name=\"add-outline\" *ngIf=\"!checkOpen\" (click)=\"changeCheck()\"></ion-icon>\r\n      <ion-icon class=\"open-icon\" name=\"remove-outline\" *ngIf=\"checkOpen\" (click)=\"changeCheck()\"></ion-icon>\r\n\r\n      <ion-icon (click)=\"deleteForm()\" class=\"close-icon\" name=\"close-outline\"></ion-icon>\r\n    </div>\r\n\r\n    <div style=\"padding: 0 10px;\">\r\n      <table>\r\n        <tr>\r\n          <td class=\"table-left\">Tên mặt hàng <span>*</span></td>\r\n          <td>\r\n            <!-- <ion-input (click)=\"openVattu()\" [(ngModel)]=\"tenHang\"></ion-input>         -->\r\n            <div (click)=\"openVattu()\" class=\"form-input\" style=\"min-height: 38px;\">\r\n              {{tenHang}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"submitForm != 0 && !tenHang\">\r\n          <td>\r\n          </td>\r\n          <td>\r\n            <div class=\"text-err\">Trường bắt buộc nhập</div>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n  \r\n      <table *ngIf=\"checkOpen\">\r\n        <tr>\r\n          <td class=\"table-left\">Số lượng <span>*</span></td>\r\n          <td>\r\n            <ion-input (keyup)=\"senData($event)\" [(ngModel)]=\"displayItem.SoLuong\"\r\n            (ngModelChange)=\"formatInput('SoLuong')\"></ion-input>        \r\n          </td>\r\n        </tr>\r\n        <tr *ngIf=\"submitForm != 0 && !displayItem.SoLuong\">\r\n          <td>\r\n          </td>\r\n          <td>\r\n            <div class=\"text-err\">Trường bắt buộc nhập</div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"table-left\">Đơn giá</td>\r\n          <td>\r\n            <ion-input (keyup)=\"senData($event)\" [(ngModel)]=\"displayItem.DonGia\" (ngModelChange)=\"formatInput('DonGia')\"></ion-input>        \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"table-left\">Chiết khẩu (%)</td>\r\n          <td>\r\n            <ion-input (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.ChietKhau_Percent\"\r\n            (ngModelChange)=\"convSendData('ChietKhau_Percent')\"></ion-input>        \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"table-left\">VAT (%)</td>\r\n          <td>\r\n            <ion-input (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.VAT_Percent\"\r\n            (ngModelChange)=\"convSendData('VAT_Percent')\"></ion-input>        \r\n          </td>\r\n        </tr>\r\n        <!-- <tr>\r\n          <td>HTTT</td>\r\n          <td>\r\n            <ion-input (click)=\"openHttt()\" (keyup)=\"senData($event)\" [(ngModel)]=\"displayItem.HTTT\"></ion-input>        \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>T.Thành tiền</td>\r\n          <td>\r\n            <ion-input (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.ThanhTien\"\r\n            [disabled]=\"true\"></ion-input>        \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>Tổng VAT</td>\r\n          <td>\r\n            <ion-input (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.VAT\" [disabled]=\"true\"></ion-input>        \r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>T.Chiết khấu</td>\r\n          <td>\r\n            <ion-input (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.ChietKhau\"\r\n            [disabled]=\"true\"></ion-input>        \r\n          </td>\r\n        </tr> \r\n        <tr>\r\n          <td>Tổng tiền</td>\r\n          <td>\r\n            <ion-input (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.TongTien\"\r\n            [disabled]=\"true\"></ion-input>        \r\n          </td>\r\n        </tr>-->\r\n      </table>\r\n    </div>\r\n    \r\n\r\n\r\n  </div>\r\n\r\n\r\n  <!-- <table class=\"\">\r\n    <tr>\r\n      <td (click)=\"openVattu()\" colspan=\"6\" class=\"import-label2\">\r\n        <label>Tên mặt hàng <span>(*)</span></label>\r\n        <div class=\"import-disable\" [class]=\"!makho ? 'bg-gray' : ''\">\r\n          {{tenHang}}\r\n        </div>\r\n      </td>\r\n\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"6\" *ngIf=\"submitForm != 0 && !tenHang\">\r\n        <div class=\"text-err\">Trường bắt buộc nhập</div>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"2\" class=\"import-label2 import-right\">\r\n        <label>Lô hàng</label>\r\n        <input type=\"text\" [(ngModel)]=\"displayItem.LoHang\" [disabled]=\"true\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n      <td colspan=\"2\" class=\"import-label2 import-left import-right\">\r\n        <label>Đơn vị tính</label>\r\n        <input type=\"text\" [(ngModel)]=\"displayItem.DVT\" [disabled]=\"true\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n      <td colspan=\"2\" class=\"import-label2 import-left\">\r\n        <label>Hạn dùng</label>\r\n        <input type=\"text\" [(ngModel)]=\"displayItem.HanDung\" [disabled]=\"true\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colspan=\"3\" class=\"import-label2 import-right\">\r\n        <label>Số lượng <span>(*)</span></label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.SoLuong\"\r\n          (ngModelChange)=\"formatInput('SoLuong')\" [disabled]=\"!tenHang ? true : false\"\r\n          [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n      <td colspan=\"3\" class=\"import-label2 import-left\">\r\n        <label>Đơn giá</label>\r\n        <input type=\"text\" class=\"text-right\" [(ngModel)]=\"displayItem.DonGia\" [disabled]=\"true\"\r\n          [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n    </tr>\r\n    <tr *ngIf=\"submitForm != 0 && !displayItem.SoLuong\">\r\n      <td colspan=\"3\">\r\n        <div class=\"text-err\">Trường bắt buộc nhập</div>\r\n      </td>\r\n      <td colspan=\"3\">\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"3\" class=\"import-label2 import-right\">\r\n        <label>Chiết khẩu (%)</label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.ChietKhau_Percent\"\r\n          (ngModelChange)=\"convSendData('ChietKhau_Percent')\" [disabled]=\"!tenHang ? true : false\"\r\n          [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n      <td colspan=\"3\" class=\"import-label2 import-left\">\r\n        <label>VAT (%)</label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.VAT_Percent\"\r\n          (ngModelChange)=\"convSendData('VAT_Percent')\" [disabled]=\"!tenHang ? true : false\"\r\n          [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td *ngIf=\"banggia == 'GiaBanLe'\" colspan=\"3\" class=\"import-label2  import-right\">\r\n        <label>Giá bán lẻ</label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.GiaBanLe\"\r\n          [disabled]=\"true\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n      <td *ngIf=\"banggia == 'GiaBanSy'\" colspan=\"3\" class=\"import-label2  import-right\">\r\n        <label>Giá bán sỷ</label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.GiaBanSy\"\r\n          [disabled]=\"true\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n      <td colspan=\"3\" class=\"import-label2  import-left\">\r\n        <label>HTTT: <span>(*)</span></label>\r\n        <input type=\"text\" (click)=\"openHttt()\" (keyup)=\"senData($event)\" [(ngModel)]=\"displayItem.HTTT\"\r\n          [disabled]=\"!tenHang ? true : false\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colspan=\"3\" class=\"import-label2  import-right\">\r\n        <label>T.Thành tiền:</label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.ThanhTien\"\r\n          [disabled]=\"true\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n\r\n      </td>\r\n      <td colspan=\"3\" class=\"import-label2  import-left\">\r\n        <label>Tổng VAT</label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.VAT\" [disabled]=\"true\"\r\n          [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n\r\n\r\n      </td>\r\n\r\n\r\n\r\n    </tr>\r\n\r\n    <tr>\r\n      <td colspan=\"3\" class=\"import-label2  import-right\">\r\n        <label>T.Chiết khấu</label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.ChietKhau\"\r\n          [disabled]=\"true\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n      <td colspan=\"3\" class=\"import-label2  import-left\">\r\n        <label>Tổng tiền</label>\r\n        <input type=\"text\" (keyup)=\"senData($event)\" class=\"text-right\" [(ngModel)]=\"displayItem.TongTien\"\r\n          [disabled]=\"true\" [class]=\"!tenHang ? 'bg-gray' : ''\">\r\n      </td>\r\n    </tr>\r\n  </table> -->\r\n</div>";
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-item/xuathang-item.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-item/xuathang-item.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppXuatkhoXuathangItemXuathangItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".import-header {\n  font-weight: 600;\n  padding: 10px;\n  border-bottom: 1px solid var(--gray-line);\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  background: #225b95;\n  color: white;\n  border-radius: 5px 5px 0 0;\n}\n.import-header .open-icon {\n  border: 1px solid white;\n  border-radius: 3px;\n  font-size: 16px;\n}\n.import-header .close-icon {\n  margin-left: auto;\n  font-size: 24px;\n}\n.import-card {\n  background: white;\n  margin-top: 15px;\n  padding: 0 5px 15px;\n}\n.import-title {\n  display: flex;\n  line-height: 28px;\n}\n.import-right {\n  margin-left: auto;\n}\n.import-right ion-icon {\n  color: var(--primary-color);\n}\n.import-product {\n  margin-top: 12px;\n}\n.import-item {\n  padding: 10px 15px;\n}\n.import-primary {\n  color: var(--primary-color);\n}\ntable {\n  width: 100%;\n}\ntd {\n  padding-top: 15px;\n  min-width: 120px;\n}\ntd span {\n  color: red;\n}\ntd ion-input input {\n  text-align: right;\n}\nion-input, .form-input {\n  width: 100%;\n  padding: 8px 10px 8px;\n  background: #F0F5FF;\n  border-radius: 5px;\n  border: 1px solid #F0F5FF;\n  text-align: right;\n}\n.sc-ion-input-ios-h {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 10px;\n}\n.table-left {\n  width: 125px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveHVhdGtoby94dWF0aGFuZy1pdGVtL3h1YXRoYW5nLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUE1RVI7QUE4RVE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTVFWjtBQStFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQTdFWjtBQWlGSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQS9FUjtBQWtGSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQWhGUjtBQW1GSTtFQUNJLGlCQUFBO0FBakZSO0FBbUZRO0VBQ0ksMkJBQUE7QUFqRlo7QUFxRkk7RUFDSSxnQkFBQTtBQW5GUjtBQXNGSTtFQUNJLGtCQUFBO0FBcEZSO0FBdUZJO0VBQ0ksMkJBQUE7QUFyRlI7QUF5RkE7RUFDSSxXQUFBO0FBdEZKO0FBMkZBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQXhGSjtBQTBGSTtFQUNJLFVBQUE7QUF4RlI7QUEyRkk7RUFDSSxpQkFBQTtBQXpGUjtBQTZGQTtFQUNJLFdBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBM0ZKO0FBOEZBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBM0ZKO0FBK0ZBO0VBQ0ksWUFBQTtBQTVGSiIsImZpbGUiOiJzcmMvYXBwL3h1YXRraG8veHVhdGhhbmctaXRlbS94dWF0aGFuZy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmltcG9ydHtcclxuXHJcbi8vICAgICAmLXRpdGxle1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMDc2NGFlO1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgIG1hcmdpbjogMTVweCAwOyAgICBcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAmLWljb257XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtbGFiZWx7XHJcbi8vICAgICAgICAgc3BhbntcclxuLy8gICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1sYWJlbDJ7XHJcblxyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuLy8gICAgICAgICBzcGFue1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgbGFiZWx7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtYWRke1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxuLy8gICAgICAgICBnYXA6IDVweDtcclxuLy8gICAgICAgICBjb2xvcjogIzE5NmZiNDtcclxuLy8gICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuLy8gICAgICAgICBpb24taWNvbntcclxuLy8gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtcmlnaHR7XHJcbi8vICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgIFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtbGVmdHtcclxuLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDsgIFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHRke1xyXG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB0YWJsZXtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcblxyXG4vLyBpbnB1dCwgLmltcG9ydC1kaXNhYmxle1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRjBGNUZGO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRjVGRjtcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLmltcG9ydCB7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG5cclxuICAgICYtaGVhZGVye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JheS1saW5lKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjViOTU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG5cclxuICAgICAgICAub3Blbi1pY29ue1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2UtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXJpZ2h0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtcHJvZHVjdHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1wcmltYXJ5IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbnRke1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taW5wdXQgaW5wdXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pbnB1dCwgLmZvcm0taW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgcGFkZGluZzogOHB4IDEwcHggOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0YwRjVGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEY1RkY7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcblxyXG59XHJcblxyXG4udGFibGUtbGVmdHtcclxuICAgIHdpZHRoOiAxMjVweDtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/xuatkho/xuathang-item/xuathang-item.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/xuatkho/xuathang-item/xuathang-item.component.ts ***!
      \******************************************************************/

    /*! exports provided: XuathangItemComponent */

    /***/
    function srcAppXuatkhoXuathangItemXuathangItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XuathangItemComponent", function () {
        return XuathangItemComponent;
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


      var src_app_vattu_vattu_index_vattu_index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/vattu/vattu-index/vattu-index.page */
      "./src/app/vattu/vattu-index/vattu-index.page.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/AlertService */
      "./src/app/service/AlertService.ts");
      /* harmony import */


      var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/loading.service */
      "./src/app/service/loading.service.ts");

      var XuathangItemComponent = /*#__PURE__*/function () {
        function XuathangItemComponent(modalController, currencyPipe, actionSheetController, AlertService, LoadingService) {
          _classCallCheck(this, XuathangItemComponent);

          this.modalController = modalController;
          this.currencyPipe = currencyPipe;
          this.actionSheetController = actionSheetController;
          this.AlertService = AlertService;
          this.LoadingService = LoadingService;
          this.makho = [];
          this.listVattu = [];
          this.banggia = '';
          this.index = 0;
          this.submitForm = 0;
          this.indexOpen = 0;
          this.data = '';
          this.httt = '';
          this.isCreate = true;
          this.sendData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.sendIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.sendDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.formattedNumber = '';
          this.tenHang = '';
          this.ThanhTien = 0;
          this.sendItem = {
            "NhapXuatID": 0,
            "MaVT": "",
            "DVT": "",
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
            "LoHang": "",
            "HanDung": ""
          };
          this.displayItem = {
            "NhapXuatID": 0,
            "MaVT": "",
            "DVT": "",
            "SoLuong": "",
            "DonGia": "",
            "GiaBanLe": "",
            "GiaBanSy": "",
            "ThanhTien": "",
            "VAT_Percent": "",
            "VAT": "",
            "ChietKhau_Percent": "",
            "ChietKhau": "",
            "TongTien": "",
            "HTTT": "Tiền mặt",
            "LoHang": "",
            "HanDung": ""
          };
          this.checkOpen = false;
        }

        _createClass(XuathangItemComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.makho) {
              this.makho = changes.makho.currentValue;
            }

            if (changes.banggia) {
              this.banggia = changes.banggia.currentValue;
            }

            if (changes.submitForm) {
              this.submitForm = changes.submitForm.currentValue;
            }

            if (changes.httt) {
              this.sendItem.HTTT = changes.httt.currentValue;
            }

            if (changes.listVattu) {
              this.listVattu = changes.listVattu.currentValue;
            }

            if (changes.data) {
              // console.log('this.isCreate', this.isCreate);
              if (this.isCreate == 'false' && changes.data.currentValue.DonGia) {
                var data = changes.data.currentValue; // console.log('changes.submitForm.data;', changes.data.currentValue);

                this.tenHang = data._TenVT;
                this.sendItem.DonGia = data.DonGia;
                this.sendItem.HanDung = data.HanDung ? data.HanDung : '';
                this.sendItem.LoHang = data.LoHang ? data.LoHang : '';
                this.sendItem.MaVT = data.MaVT;
                this.sendItem.DVT = data.DVT;
                this.sendItem.GiaBanLe = data.GiaBanLe ? data.GiaBanLe : 0;
                this.sendItem.GiaBanSy = data.GiaBanSy ? data.GiaBanSy : 0;
                this.sendItem.ChietKhau = data.ChietKhau;
                this.sendItem.ChietKhau_Percent = data.ChietKhau_Percent;
                this.sendItem.HTTT = data.HTTT ? data.HTTT : '';
                this.sendItem.SoLuong = data.SoLuong;
                this.sendItem.ThanhTien = data.ThanhTien;
                this.ThanhTien = data.ThanhTien;
                this.sendItem.TongTien = data.TongTien;
                this.sendItem.VAT_Percent = data.VAT_Percent;
                this.sendItem.VAT = data.VAT;
                this.sendItem.NhapXuatID = data.NhapXuatID;
                this.displayItem.DonGia = new Intl.NumberFormat().format(data.DonGia).replace(/\./g, ',');
                this.displayItem.HanDung = data.HanDung;
                this.displayItem.LoHang = data.LoHang;
                this.displayItem.MaVT = data.MaVT;
                this.displayItem.DVT = data.DVT;
                this.displayItem.GiaBanLe = data.GiaBanLe ? new Intl.NumberFormat().format(data.GiaBanLe).replace(/\./g, ',') : '0';
                this.displayItem.GiaBanSy = data.GiaBanSy ? new Intl.NumberFormat().format(data.GiaBanSy).replace(/\./g, ',') : '0';
                this.displayItem.SoLuong = new Intl.NumberFormat().format(data.SoLuong).replace(/\./g, ',');
                this.displayItem.ChietKhau = data.ChietKhau ? new Intl.NumberFormat().format(data.ChietKhau).replace(/\./g, ',') : '0';
                this.displayItem.ChietKhau_Percent = data.ChietKhau_Percent;
                this.displayItem.HTTT = !data.HTTT ? '' : data.HTTT == 'TM' ? 'Tiền mặt' : 'Chuyển khoản'; // this.displayItem.SoLuong = data.SoLuong;

                this.displayItem.ThanhTien = data.ThanhTien ? new Intl.NumberFormat().format(data.ThanhTien).replace(/\./g, ',') : '0';
                this.displayItem.TongTien = data.TongTien ? new Intl.NumberFormat().format(data.TongTien).replace(/\./g, ',') : '0';
                this.displayItem.VAT_Percent = data.VAT_Percent;
                this.displayItem.VAT = data.VAT ? new Intl.NumberFormat().format(data.VAT).replace(/\./g, ',') : '0';
                this.senData();
              } else {
                this.checkOpen = true;
              }
            }

            if (changes.indexOpen) {
              if (changes.indexOpen.currentValue == this.index) {
                this.checkOpen = true;
              } else {
                this.checkOpen = false;
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openVattu",
          value: function openVattu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this.makho) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      _context.next = 4;
                      return this.modalController.create({
                        component: src_app_vattu_vattu_index_vattu_index_page__WEBPACK_IMPORTED_MODULE_3__["VattuIndexPage"],
                        cssClass: 'modalOpen',
                        componentProps: {
                          "makho": this.makho,
                          "banggia": this.banggia,
                          "listVattu": this.listVattu
                        }
                      });

                    case 4:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this.tenHang = dataReturned.data.TenVT;
                          _this.sendItem.DonGia = dataReturned.data.DonGia ? dataReturned.data.DonGia : 0;
                          _this.sendItem.HanDung = dataReturned.data.HanDung ? dataReturned.data.HanDung : '';
                          _this.sendItem.LoHang = dataReturned.data.LoHang ? dataReturned.data.LoHang : '';
                          _this.sendItem.MaVT = dataReturned.data.MaVT;
                          _this.sendItem.DVT = dataReturned.data.DVT;
                          _this.sendItem.GiaBanLe = dataReturned.data.GiaBanLe ? dataReturned.data.GiaBanLe : 0;
                          _this.sendItem.GiaBanSy = dataReturned.data.GiaBanSy ? dataReturned.data.GiaBanSy : 0;
                          _this.displayItem.DonGia = new Intl.NumberFormat().format(dataReturned.data.DonGia).replace(/\./g, ',');
                          _this.displayItem.HanDung = dataReturned.data.HanDung;
                          _this.displayItem.LoHang = dataReturned.data.LoHang;
                          _this.displayItem.MaVT = dataReturned.data.MaVT;
                          _this.displayItem.DVT = dataReturned.data.DVT;
                          _this.displayItem.GiaBanLe = new Intl.NumberFormat().format(dataReturned.data.GiaBanLe).replace(/\./g, ',');
                          _this.displayItem.GiaBanSy = new Intl.NumberFormat().format(dataReturned.data.GiaBanSy).replace(/\./g, ',');

                          _this.senData();
                        }
                      });
                      _context.next = 8;
                      return modal.present();

                    case 8:
                      return _context.abrupt("return", _context.sent);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "formatInput",
          value: function formatInput(item) {
            var convNumber = this.currencyPipe.transform(this.displayItem[item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            this.displayItem[item] = convNumber;
            this.sendItem[item] = Number(convNumber.replace(/,/g, ''));

            if (this.sendItem.SoLuong) {
              this.sendItem.ThanhTien = this.sendItem.SoLuong * this.sendItem.DonGia;
              this.ThanhTien = this.sendItem.SoLuong * this.sendItem.DonGia;
              this.displayItem.ThanhTien = new Intl.NumberFormat().format(this.sendItem.ThanhTien).replace(/\./g, ',');
              this.getTongTien();
            }
          }
        }, {
          key: "convSendData",
          value: function convSendData(item) {
            this.sendItem[item] = Number(this.displayItem[item]);

            if (item == "ChietKhau_Percent") {
              this.sendItem.ChietKhau = this.ThanhTien * this.sendItem.ChietKhau_Percent / 100;
              this.displayItem.ChietKhau = new Intl.NumberFormat().format(this.sendItem.ChietKhau).replace(/\./g, ','); // console.log('this.sendItem.ChietKhau', this.sendItem.ChietKhau);
              // console.log('this.sendItem.ThanhTien;', this.sendItem.ThanhTien);
              // console.log('this.sendItem.ChietKhau_Percent', this.sendItem.ChietKhau_Percent);

              this.getTongTien();
            }

            if (item == "VAT_Percent") {
              this.sendItem.VAT = this.ThanhTien * this.sendItem.VAT_Percent / 100;
              this.displayItem.VAT = new Intl.NumberFormat().format(this.sendItem.VAT).replace(/\./g, ',');
              this.getTongTien();
            }
          }
        }, {
          key: "getTongTien",
          value: function getTongTien() {
            this.sendItem.TongTien = this.ThanhTien + this.sendItem.VAT - this.sendItem.ChietKhau;
            this.displayItem.TongTien = new Intl.NumberFormat().format(this.sendItem.TongTien).replace(/\./g, ',');
          }
        }, {
          key: "senData",
          value: function senData(e) {
            this.sendData.emit({
              'item': this.sendItem,
              'index': this.index
            });
          }
        }, {
          key: "changeCheck",
          value: function changeCheck() {
            this.checkOpen = !this.checkOpen;
            this.sendIndex.emit({
              'index': this.index
            });
          }
        }, {
          key: "deleteForm",
          value: function deleteForm() {
            var _this2 = this;

            this.AlertService.presentAlert("B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a h\xE0ng h\xF3a ".concat(this.index + 1, "?")).then(function (res) {
              if (res == 'true') {
                console.log('eeee');

                _this2.sendDelete.emit({
                  'index': _this2.index
                });
              }
            });
          }
        }]);

        return XuathangItemComponent;
      }();

      XuathangItemComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
        }];
      };

      XuathangItemComponent.propDecorators = {
        makho: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        listVattu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        banggia: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        submitForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        indexOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        httt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isCreate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sendData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        sendIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        sendDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      XuathangItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuathang-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./xuathang-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-item/xuathang-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./xuathang-item.component.scss */
        "./src/app/xuatkho/xuathang-item/xuathang-item.component.scss"))["default"]]
      })], XuathangItemComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~nhapkho-nhaphang-update-nhaphang-update-module~xuatkho-xuathang-addnew-xuathang-addnew-module-es5.js.map