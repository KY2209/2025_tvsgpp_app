(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhapkho-nhaphang-detail-nhaphang-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNhapkhoNhaphangDetailNhaphangDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600;\"\r\n      [style]=\"typePage == 'create' && LoaiCTByBill.length > 1 && sumTongTien > 0 ? 'text-align: left' : 'text-align: center'\">\r\n      {{convertHelper.typeChungTu(sendItem.LoaiCTID) }}\r\n\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item (click)=\"handleBillWait()\" *ngIf=\"typePage == 'create' && sumTongTien > 0\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"duplicate-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"handleEdit()\" *ngIf=\"typePage == 'detail'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"create-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"handleDetail()\" *ngIf=\"typePage == 'edit'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"(typePage == 'create' || typePage == 'edit') && LoaiCTByBill.length > 1\"\r\n        (click)=\"openTypeChungTu()\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"funnel-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"backListBill()\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"synthetic\">\r\n\r\n    <div class=\"synthetic-item\" style=\"font-weight: 600; font-size: 16px; padding: 10px; border-top: 1px solid white;\">\r\n      <div class=\"synthetic-item-left\" style=\"display: flex; align-items: center; gap: 10px;\">\r\n        <ion-icon name=\"cloud-done-outline\" style=\"font-size: 24px;\"></ion-icon>\r\n        <span>{{kho}}</span>\r\n\r\n      </div>\r\n      <div *ngIf=\"typePage == 'create' || typePage == 'edit'\" (click)=\"openKho()\" class=\"synthetic-item-right\">\r\n        <ion-icon style=\"font-size: 24px;\" name=\"search-outline\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <div class=\"bill\">\r\n    <div class=\"bill-header \">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      Đơn vị\r\n      <ion-icon *ngIf=\"typePage == 'create' || typePage == 'edit'\" (click)=\"openUnit()\" class=\"bill-header-right\"\r\n        name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n    </div>\r\n    <div *ngIf=\"donvi\" class=\"bill-item\">\r\n      {{donvi}}\r\n    </div>\r\n\r\n    <div *ngIf=\"submit && !donvi\" class=\"bill-item text-err\">\r\n      Trường bắt buộc nhập\r\n\r\n    </div>\r\n    <div class=\"bill-header \">\r\n      <ion-icon name=\"menu-outline\"></ion-icon>\r\n      Hàng hóa\r\n\r\n      <ion-icon *ngIf=\"typePage == 'create' || typePage == 'edit'\" (click)=\"openVattu()\" class=\"bill-header-right\"\r\n        name=\"chevron-forward-outline\"></ion-icon>\r\n    </div>\r\n\r\n    <div>\r\n      <div *ngFor=\"let item of displayChiTietHang; index as i\" class=\"bill-content\"\r\n        [style.border-bottom]=\"i+1 == countProduct ? 'none' : '1px dashed var(--gray-light3)'\">\r\n        <div class=\"bill-content-header\">\r\n          <p>{{i+1}}. {{item._TenVT}} ({{item.MaVT}})</p>\r\n\r\n          <!-- <ion-icon (click)=\"handleRemove(item, i)\" name=\"trash-outline\"></ion-icon> -->\r\n          <ion-icon (click)=\"handleRemove(item, i)\" class=\"bill-content-right\" name=\"trash-outline\"></ion-icon>\r\n\r\n        </div>\r\n        <table>\r\n\r\n          <tr>\r\n            <td class=\"pr-10\">\r\n              <div class=\"flex-item\">\r\n\r\n                <div class=\"title-width\">\r\n                  ĐVT:\r\n                </div>\r\n                <div class=\"bill-select-form\">\r\n                  <div (click)=\"handleDVT(sendItem.ChiTietHang[i].MaVT, sendItem.ChiTietHang[i].DVT, i)\">\r\n                    {{sendItem.ChiTietHang[i].DVT}}</div>\r\n                  <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n                </div>\r\n              </div>\r\n\r\n            </td>\r\n            <td class=\"pl-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">\r\n                  Giá:\r\n                </div>\r\n                <input type=\"text\" [(ngModel)]=\"item.DonGia\" (ngModelChange)=\"formatInput('DonGia', i)\">\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"pr-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">SL:\r\n                </div>\r\n                <input type=\"text\" [(ngModel)]=\"item.SoLuong\" (ngModelChange)=\"formatInput('SoLuong', i)\">\r\n              </div>\r\n\r\n            </td>\r\n\r\n            <td class=\"pl-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">VAT:\r\n                </div>\r\n                <input type=\"number\" [(ngModel)]=\"item.VAT_Percent\" (ngModelChange)=\"setInput($event,'VAT_Percent', i)\">\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"pr-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">\r\n                  C.K:\r\n                </div>\r\n\r\n                <input type=\"number\" [(ngModel)]=\"item.ChietKhau_Percent\"\r\n                  (ngModelChange)=\"setInput($event,'ChietKhau_Percent', i)\">\r\n              </div>\r\n            </td>\r\n\r\n            <td class=\"pl-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">\r\n                  Lô:\r\n                </div>\r\n                <input style=\"text-align: left;\" type=\"text\" [(ngModel)]=\"sendItem.ChiTietHang[i].LoHang\">\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td class=\"pr-10\">\r\n              <div style=\"display: flex; align-items: center; gap: 4px;\">\r\n                <div class=\"title-width\">H.D:\r\n                </div>\r\n                <!-- <span class=\"input-disable\" style=\"font-weight: 400;\">{{sendItem.ChiTietHang[i].HanDung}}</span> -->\r\n                <input style=\"text-align: left;\" type=\"date\" [(ngModel)]=\"sendItem.ChiTietHang[i].HanDung\">\r\n\r\n              </div>\r\n\r\n            </td>\r\n\r\n            <td class=\"pl-10\">\r\n              <div style=\"display: flex; align-items: center; gap: 4px;\">\r\n                <div class=\"title-width\">\r\n                  Tiền:\r\n                </div>\r\n                <span class=\"input-disable\">{{item.TongTien | number}} </span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"bill-header \">\r\n      <ion-icon name=\"reader-outline\"></ion-icon>\r\n      Thông tin thanh toán\r\n    </div>\r\n    <div class=\"bill-table\">\r\n      <table>\r\n        <tr>\r\n          <td class=\"bill-table-left\">T.Thành tiền</td>\r\n          <td class=\"text-right font-bold\">\r\n            <div>\r\n              {{sumThanhTien | number}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">T.VAT</td>\r\n          <td class=\"text-right font-bold\">\r\n            <div>\r\n              {{sumVAT | number}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">Chiết khấu HĐ</td>\r\n          <td class=\"text-right font-bold p-0\">\r\n            <div *ngIf=\"typePage == 'detail'\"> {{itemDetail.ChietKhau | number}} </div>\r\n            <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" style=\"color: #006bc6;\">\r\n              <input class=\"input-no-border\" type=\"text\" [(ngModel)]=\"ChietKhauHD\"\r\n                (ngModelChange)=\"formatInputBill('ChietKhau', $event)\">\r\n\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">T.Chiết khấu</td>\r\n          <td class=\"text-right font-bold\">\r\n            <div>\r\n              {{sumChietKhau | number}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">Đã thanh toán</td>\r\n          <td class=\"text-right font-bold p-0\">\r\n            <div *ngIf=\"typePage == 'detail'\"> {{itemDetail.ThanhToan | number}} </div>\r\n            <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" style=\"color: #006bc6;\">\r\n              <input class=\"input-no-border\" type=\"text\" [(ngModel)]=\"ThanhToanHD\"\r\n                (ngModelChange)=\"formatInputBill('ThanhToan', $event)\">\r\n\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr style=\"border-bottom: none !important;\">\r\n          <td class=\"bill-table-left\">T.Tiền</td>\r\n          <td class=\"text-right font-bold\">\r\n            <div>\r\n              {{sumTongTien | number}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">HTTT</td>\r\n          <td class=\"text-right\">\r\n            <div style=\"display: flex; float: right;font-weight: bold;color: #000;\">\r\n              <ion-select interface=\"action-sheet\" placeholder=\"Chọn tài khoản\" (ionChange)=\"onSoTKChange($event)\"\r\n                [(ngModel)]=\"SoTK\">\r\n                <ion-select-option *ngFor=\"let item of listTaiKhoan\" value=\"{{item.SoTK}}\">\r\n                  {{item.TenTK}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"bill\">\r\n    <div class=\"bill-product\">\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          THÔNG TIN HÓA ĐƠN\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"bill-table\">\r\n        <table>\r\n      \r\n          <tr *ngIf=\"typePage != 'create'\">\r\n            <td class=\"bill-table-left\">Số chứng từ</td>\r\n            <td class=\"text-right\">\r\n              <div>\r\n                {{itemDetail.SoCT}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Loại CT</td>\r\n            <td class=\"text-right\">\r\n                <div style=\"display: flex; float: right;\">\r\n                  <div *ngIf=\"typePage == 'detail'\"> {{convertHelper.typeChungTu(sendItem.LoaiCTID) }} </div>\r\n                  <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"openTypeChungTu()\" style=\"color: #006bc6;\">\r\n                    {{convertHelper.typeChungTu(sendItem.LoaiCTID) }}\r\n                  </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Đơn vị</td>\r\n            <td class=\"text-right\">\r\n                <div style=\"display: flex; float: right;\">\r\n                  <div *ngIf=\"typePage == 'detail'\"> {{donvi}} </div>\r\n                  <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"openUnit()\" style=\"color: #006bc6;\">\r\n                    {{donvi}}\r\n                    <ion-icon *ngIf=\"!donvi\" name=\"pencil-outline\"></ion-icon>\r\n\r\n                  </div>\r\n\r\n              </div>\r\n\r\n\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"submit && !donvi\" style=\"border-top: none;\">\r\n            <td class=\"bill-table-left\" style=\"padding: 0 10px;\"></td>\r\n            <td class=\"text-right\" style=\"padding: 0 10px;\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div style=\"color: red;\">\r\n                  Trường bắt buộc nhập  \r\n\r\n                </div>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Kho hàng</td>\r\n            <td class=\"text-right\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div *ngIf=\"typePage == 'detail'\"> {{kho}} </div>\r\n                <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"openKho()\" style=\"color: #006bc6;\">\r\n                  {{kho}}\r\n                  <ion-icon *ngIf=\"!kho\" name=\"pencil-outline\"></ion-icon>\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"typePage != 'create'\">\r\n            <td class=\"bill-table-left\">Thời gian</td>\r\n            <td class=\"text-right\">\r\n              <div>\r\n                {{itemDetail.ThoiDiem | date:'dd/MM/yyyy HH:mm'}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      \r\n\r\n      <div class=\"bill-header\" style=\"display: flex; align-items: center;\">\r\n        <div>\r\n          CHI TIẾT HÓA ĐƠN ({{countProduct}})\r\n        </div>\r\n        <ion-icon (click)=\"openVattu()\" *ngIf=\"typePage == 'edit' || typePage == 'create'\" name=\"add-outline\"\r\n          style=\"margin-left: auto; font-size: 24px;  color: #2990f7;\"></ion-icon>\r\n\r\n      </div>\r\n      <div *ngIf=\"typePage == 'detail'\">\r\n\r\n        <div *ngFor=\"let item of itemDetail.ChiTietHang; index as i\" class=\"bill-item\">\r\n\r\n          <div class=\"bill-item-title\">\r\n            <p>{{i+1}}. {{item._TenVT}} - {{item.MaVT}}</p>\r\n          </div>\r\n          <table class=\"bill-table-content\">\r\n            <tr>\r\n              <td class=\"pr-20\">\r\n                <div>\r\n                  <span>ĐVT: </span> {{item.DVT}}\r\n                </div>\r\n\r\n              </td>\r\n              <td>\r\n                <span>Giá: </span>\r\n                {{item.DonGia | number}}\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>SL: </span>\r\n                {{item.SoLuong | number}}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\" pr-20\">\r\n                <span>C.K: </span>\r\n                {{item.ChietKhau_Percent}}\r\n              </td>\r\n              <td>\r\n                <span>VAT(%): </span>\r\n                {{item.VAT_Percent}}\r\n              </td>\r\n              <td class=\"text-right\" style=\"font-weight: 600;\">\r\n                <span style=\"font-weight: 400;\">T.Tiền: </span>\r\n                {{item.TongTien | number}}\r\n              </td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <td class=\" pr-20\">\r\n                <span>Lô hàng: </span>\r\n                {{item.LoHang}}\r\n              </td>\r\n              <td colspan=\"2\">\r\n                <span>Hạn dùng: </span>\r\n                {{item.HanDung | date:'dd/MM/yyyy'}}\r\n              </td>\r\n\r\n\r\n            </tr>\r\n          </table>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"typePage != 'detail'\">\r\n\r\n        <div *ngFor=\"let item of displayChiTietHang; index as i\" class=\"bill-item\">\r\n\r\n          <div class=\"bill-item-title\">\r\n            <p>{{i+1}}. {{item._TenVT}} - {{item.MaVT}}</p>\r\n            <ion-icon (click)=\"handleRemove(item, i)\" name=\"trash-outline\"></ion-icon>\r\n\r\n          </div>\r\n        \r\n          <table>\r\n\r\n            <tr>\r\n              <td class=\"bill-select\">\r\n                <span>ĐVT:&nbsp;</span>\r\n                <div class=\"bill-select-form\">\r\n                  <div (click)=\"handleDVT(sendItem.ChiTietHang[i].MaVT, sendItem.ChiTietHang[i].DVT, i)\">\r\n                    {{sendItem.ChiTietHang[i].DVT}}</div>\r\n                  <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n                </div>\r\n\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>Đơn giá: </span>\r\n                <input type=\"text\" [(ngModel)]=\"item.DonGia\" (ngModelChange)=\"formatInput('DonGia', i)\">\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <span>SL:&nbsp;&nbsp;&nbsp; </span>\r\n                <input type=\"text\" [(ngModel)]=\"item.SoLuong\" (ngModelChange)=\"formatInput('SoLuong', i)\">\r\n              </td>\r\n\r\n              <td class=\"text-right\">\r\n                <span>VAT: </span>\r\n                <input type=\"number\" [(ngModel)]=\"item.VAT_Percent\" (ngModelChange)=\"setInput($event,'VAT_Percent', i)\">\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <span>C.K: &nbsp;</span>\r\n                <input type=\"number\" [(ngModel)]=\"item.ChietKhau_Percent\"\r\n                  (ngModelChange)=\"setInput($event,'ChietKhau_Percent', i)\">\r\n              </td>\r\n\r\n              <td class=\"text-right\">\r\n                <span>Lô hàng: </span>\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.ChiTietHang[i].LoHang\">\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>\r\n                <span>H.D: &nbsp;</span>\r\n                <input type=\"date\" [(ngModel)]=\"sendItem.ChiTietHang[i].HanDung\">\r\n              </td>\r\n\r\n              <td class=\"text-center\" style=\"display: flex; float: right; padding-top: 5px;\">\r\n                <span>Tổng tiền:&nbsp;</span>\r\n                <div style=\"width: 100px; font-weight: 600;\">\r\n                  {{item.TongTien | number}}\r\n\r\n                </div>\r\n              </td>\r\n            </tr>\r\n\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          THÔNG TIN THANH TOÁN\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"bill-table\">\r\n        <table>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Thành tiền</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div>\r\n                {{sumThanhTien | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.VAT</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div>\r\n                {{sumVAT | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Chiết khấu HĐ</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div *ngIf=\"typePage == 'detail'\"> {{itemDetail.ChietKhau | number}} </div>\r\n              <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" style=\"color: #006bc6;\">\r\n                <input class=\"input-no-border\" type=\"text\" [(ngModel)]=\"ChietKhauHD\" (ngModelChange)=\"formatInputBill('ChietKhau', $event)\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Chiết khấu</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div>\r\n                {{sumChietKhau | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Đã thanh toán</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div *ngIf=\"typePage == 'detail'\"> {{itemDetail.ThanhToan | number}} </div>\r\n              <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" style=\"color: #006bc6;\">\r\n                <input class=\"input-no-border\" type=\"text\" [(ngModel)]=\"ThanhToanHD\" (ngModelChange)=\"formatInputBill('ThanhToan', $event)\">\r\n\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Tiền</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div>\r\n                {{sumTongTien | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">HTTT</td>\r\n            <td class=\"text-right\">\r\n              <div style=\"display: flex; float: right;\">\r\n\r\n                <div *ngIf=\"typePage == 'detail'\"> {{HTTT_name}} </div>\r\n                <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"handleHTTT()\" style=\"color: #006bc6;\">\r\n                  {{HTTT_name}}\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div> -->\r\n</ion-content>\r\n<ion-footer *ngIf=\"typePage != 'detail'\">\r\n  <ion-toolbar>\r\n\r\n    <div class=\"bill-footer\">\r\n      <table>\r\n\r\n        <tr>\r\n          <td class=\"bill-bold\" style=\"font-weight: 600;\">T.Tiền cần trả</td>\r\n          <td class=\"text-right\" style=\"font-weight: 600;\">{{sumTongTien | number}}</td>\r\n        </tr>\r\n      </table>\r\n\r\n\r\n\r\n      <div class=\"bill-btn\">\r\n\r\n        <div class=\"bill-btn-left\">\r\n          <div *ngIf=\"typePage == 'create' && sumBillWait > 0\" (click)=\"openBillWait()\" class=\"bill-btn-relative\">\r\n            <ion-icon name=\"receipt-outline\"></ion-icon>\r\n            <div>{{sumBillWait}}</div>\r\n          </div>\r\n          <button [class.w-full]=\"(typePage == 'create' && sumBillWait == 0) || typePage == 'edit'\"\r\n            [class.bg-gray-dark]=\"sumTongTien == 0\" (click)=\"confirmSubmit()\">LƯU HÓA ĐƠN</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/nhapkho/nhaphang-detail/nhaphang-detail-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/nhapkho/nhaphang-detail/nhaphang-detail-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: NhaphangDetailPageRoutingModule */

    /***/
    function srcAppNhapkhoNhaphangDetailNhaphangDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NhaphangDetailPageRoutingModule", function () {
        return NhaphangDetailPageRoutingModule;
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


      var _nhaphang_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nhaphang-detail.page */
      "./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.ts");

      var routes = [{
        path: '',
        component: _nhaphang_detail_page__WEBPACK_IMPORTED_MODULE_3__["NhaphangDetailPage"]
      }];

      var NhaphangDetailPageRoutingModule = function NhaphangDetailPageRoutingModule() {
        _classCallCheck(this, NhaphangDetailPageRoutingModule);
      };

      NhaphangDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NhaphangDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/nhapkho/nhaphang-detail/nhaphang-detail.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/nhapkho/nhaphang-detail/nhaphang-detail.module.ts ***!
      \*******************************************************************/

    /*! exports provided: NhaphangDetailPageModule */

    /***/
    function srcAppNhapkhoNhaphangDetailNhaphangDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NhaphangDetailPageModule", function () {
        return NhaphangDetailPageModule;
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


      var _nhaphang_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nhaphang-detail-routing.module */
      "./src/app/nhapkho/nhaphang-detail/nhaphang-detail-routing.module.ts");
      /* harmony import */


      var _nhaphang_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nhaphang-detail.page */
      "./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.ts");
      /* harmony import */


      var src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/donvitinh/dvt/dvt.component */
      "./src/app/donvitinh/dvt/dvt.component.ts");

      var NhaphangDetailPageModule = function NhaphangDetailPageModule() {
        _classCallCheck(this, NhaphangDetailPageModule);
      };

      NhaphangDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nhaphang_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["NhaphangDetailPageRoutingModule"]],
        declarations: [_nhaphang_detail_page__WEBPACK_IMPORTED_MODULE_6__["NhaphangDetailPage"], src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_7__["DVTComponent"]]
      })], NhaphangDetailPageModule);
      /***/
    },

    /***/
    "./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNhapkhoNhaphangDetailNhaphangDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bill-header {\n  padding: 10px 0 10px 10px;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  background: #F1F3F4;\n  border-bottom: 4px solid white;\n}\n.bill-header-right {\n  margin-left: auto;\n}\n.bill-header ion-icon {\n  font-size: 24px;\n  margin-right: 8px;\n}\n.bill-item {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n.bill-item-right {\n  margin-left: auto;\n}\n.bill-content {\n  padding: 10px;\n  border-bottom: 1px dashed var(--gray-light3);\n}\n.bill-content-header {\n  display: flex;\n  margin-bottom: 10px;\n}\n.bill-content-header div {\n  font-weight: 600;\n}\n.bill-content ion-icon {\n  font-size: 22px;\n  color: red;\n  margin-left: auto;\n}\n.bill-select {\n  display: flex;\n  align-items: center;\n}\n.bill-select-form {\n  position: relative;\n  width: 100% !important;\n}\n.bill-select-form div {\n  border: 1px solid #afafaf;\n  background: #F5F5F5;\n  border-radius: 5px;\n  padding: 6px 10px;\n}\n.bill-select-form ion-icon {\n  position: absolute;\n  top: 8px;\n  right: 2px;\n  color: gray;\n  font-size: 20px;\n}\n.bill-table {\n  padding: 0 10px;\n}\n.bill-table tr {\n  border-bottom: 1px dashed var(--gray-light3);\n}\n.bill-table td {\n  padding: 10px 0;\n}\n.bill-table ion-icon {\n  float: right;\n  color: var(--primary-color);\n  font-size: 18px;\n  width: 30px;\n}\n.bill-table-content ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.bill-table-left {\n  font-weight: 500;\n  width: 150px;\n}\n.bill-footer {\n  padding: 6px;\n}\n.bill-footer button {\n  color: white;\n  background: var(--background-color);\n  width: calc(100% - 60px);\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n}\n.bill-btn-left {\n  display: flex;\n  align-items: center;\n}\n.bill-btn-relative {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  /* height: 100%; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.bill-btn-relative ion-icon {\n  font-size: 18px;\n}\n.bill-btn-relative div {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: var(--background-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\ntable {\n  width: 100%;\n  table-layout: fixed;\n}\ntd {\n  padding-bottom: 10px;\n}\ntd i {\n  font-size: 18px;\n}\n.pr-20 {\n  padding-right: 20px;\n}\n.pr-44 {\n  padding-right: 44px !important;\n}\n.pr-15 {\n  padding-right: 15px !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date] {\n  width: 100%;\n  border: 1px solid #afafaf;\n  text-align: right;\n  background: #F5F5F5;\n  border-radius: 5px;\n  padding: 6px 10px;\n}\n.input-disable {\n  color: black !important;\n  display: inline-block;\n  text-align: right;\n  width: 100%;\n  border: 1px solid #b5b5b5;\n  background: #e7e7e7;\n  border-radius: 5px;\n  padding: 6px 10px;\n  min-height: 30px;\n}\n.input-no-border {\n  text-align: right !important;\n  border: none !important;\n  padding: 6px 0px !important;\n}\nion-toggle {\n  height: 26px;\n  --handle-width: calc(28px - (2px * 2));\n  --ion-color-base: var(--primary-color) !important;\n}\nion-footer {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n}\np {\n  margin-top: 0 !important;\n  margin-bottom: 10px !important;\n  font-weight: 600;\n}\ninput[type=checkbox] {\n  zoom: 1.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmhhcGtoby9uaGFwaGFuZy1kZXRhaWwvbmhhcGhhbmctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUZSO0FBR1E7RUFDSSxpQkFBQTtBQURaO0FBSVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQU1JO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUpSO0FBTVE7RUFDSSxpQkFBQTtBQUpaO0FBUUk7RUFDSSxhQUFBO0VBQ0EsNENBQUE7QUFOUjtBQVFRO0VBQ0ksYUFBQTtFQUVBLG1CQUFBO0FBUFo7QUFTWTtFQUNJLGdCQUFBO0FBUGhCO0FBV1E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBVFo7QUFhSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVhSO0FBYVE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBWFo7QUFhWTtFQUlJLHlCQUFBO0VBRUEsbUJBQUE7RUFHQSxrQkFBQTtFQUNBLGlCQUFBO0FBakJoQjtBQW9CWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWxCaEI7QUF1Qkk7RUFDSSxlQUFBO0FBckJSO0FBdUJRO0VBQ0ksNENBQUE7QUFyQlo7QUF3QlE7RUFDSSxlQUFBO0FBdEJaO0FBMEJRO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF4Qlo7QUE0Qlk7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUExQmhCO0FBOEJRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBNUJaO0FBaUNJO0VBQ0ksWUFBQTtBQS9CUjtBQWlDUTtFQUNJLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUEvQlo7QUFxQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFuQ1o7QUFzQ1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBcENaO0FBc0NZO0VBQ0ksZUFBQTtBQXBDaEI7QUF1Q1k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFyQ2hCO0FBNENBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBekNKO0FBNENBO0VBQ0ksb0JBQUE7QUF6Q0o7QUErQ0k7RUFDSSxlQUFBO0FBN0NSO0FBaURBO0VBQ0ksbUJBQUE7QUE5Q0o7QUFpREE7RUFDSSw4QkFBQTtBQTlDSjtBQWlEQTtFQUNJLDhCQUFBO0FBOUNKO0FBaURBO0VBQ0ksNEJBQUE7QUE5Q0o7QUFpREE7OztFQU9JLFdBQUE7RUFDQSx5QkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBbkRKO0FBdURBO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFwREo7QUF1REE7RUFDSSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFwREo7QUF1REE7RUFDSSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpREFBQTtBQXBESjtBQXVEQTtFQUNJLHFGQUFBO0FBcERKO0FBd0RBO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBckRKO0FBeURBO0VBQ0ksU0FBQTtBQXRESiIsImZpbGUiOiJzcmMvYXBwL25oYXBraG8vbmhhcGhhbmctZGV0YWlsL25oYXBoYW5nLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRjFGM0Y0O1xyXG5cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjFGM0Y0O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYtcmlnaHQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tZ3JheS1saWdodDMpO1xyXG5cclxuICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXNlbGVjdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZmFmYWY7XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2NhZWVmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXRhYmxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1ncmF5LWxpZ2h0Myk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1idG4ge1xyXG4gICAgICAgICYtbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJlbGF0aXZlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xyXG4gICAgICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC03cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIC8vIHNwYW4ge1xyXG4gICAgLy8gICAgIGNvbG9yOiBncmF5O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByLTIwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wci00NCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wci0xNSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYi0wIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgICAvLyB3aWR0aDogMTAwcHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG59XHJcblxyXG5cclxuLmlucHV0LWRpc2FibGUge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I1YjViNTtcclxuICAgIGJhY2tncm91bmQ6ICNlN2U3ZTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1uby1ib3JkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogNnB4IDBweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuaW9uLXRvZ2dsZSB7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAtLWhhbmRsZS13aWR0aDogY2FsYygyOHB4IC0gKDJweCAqIDIpKTtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkNWQ1O1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgem9vbTogMS4zO1xyXG59XHJcblxyXG5cclxuLy8gLmJpbGwge1xyXG5cclxuLy8gICAgICYtaGVhZGVyIHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBnYXA6IDhweDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuLy8gICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcblxyXG4vLyAgICAgICAgICYtcDEzIHtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICYtbGVmdCB7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGdhcDogNXB4O1xyXG5cclxuLy8gICAgICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtaXRlbSB7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDdkNztcclxuXHJcbi8vICAgICAgICAgJi10aXRsZSB7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcclxuXHJcbi8vICAgICAgICAgICAgIHAge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2RkMDAwMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAmLXRhYmxlIHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4vLyAgICAgICAgIHRyIHtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkN2Q3ZDc7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB0ZCB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpb24taWNvbiB7XHJcbi8vICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgJi1jb250ZW50IHtcclxuLy8gICAgICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAmLWxlZnQge1xyXG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtZm9vdGVyIHtcclxuLy8gICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4vLyAgICAgICAgIGJ1dHRvbiB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1idG4ge1xyXG4vLyAgICAgICAgICYtbGVmdCB7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAmLXJlbGF0aXZlIHtcclxuLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xyXG4vLyAgICAgICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbi8vICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgZGl2IHtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xyXG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgcmlnaHQ6IC03cHg7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vICAgICAmLWJvbGQge1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1yaWdodCB7XHJcbi8vICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vICAgICB9XHJcblxyXG5cclxuLy8gICAgICYtc2VsZWN0IHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4vLyAgICAgICAgICYtZm9ybSB7XHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgICAgICAgICAgIGRpdiB7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2FlZWZmO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuXHJcbi8vICAgICB9XHJcblxyXG4vLyB9XHJcblxyXG4vLyB0YWJsZSB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbi8vIH1cclxuXHJcbi8vIHRkIHtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuLy8gICAgIHNwYW4ge1xyXG4vLyAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGkge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnByLTIwIHtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5wci00NCB7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wci0xNSB7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wYi0wIHtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4vLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG4vLyBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbi8vICAgICB3aWR0aDogMTA1cHg7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNjYWVlZmY7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBwYWRkaW5nOiA2cHggMDtcclxuLy8gfVxyXG5cclxuLy8gLmlucHV0LW5vLWJvcmRlcntcclxuLy8gICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG5cclxuLy8gfVxyXG5cclxuLy8gaW9uLXRvZ2dsZSB7XHJcbi8vICAgICBoZWlnaHQ6IDI2cHg7XHJcbi8vICAgICAtLWhhbmRsZS13aWR0aDogY2FsYygyOHB4IC0gKDJweCAqIDIpKTtcclxuLy8gICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1mb290ZXIge1xyXG4vLyAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNnB4IDI0cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCAwcHggMHB4IDFweDtcclxuLy8gfVxyXG5cclxuLy8gcHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuLy8gICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.ts ***!
      \*****************************************************************/

    /*! exports provided: NhaphangDetailPage */

    /***/
    function srcAppNhapkhoNhaphangDetailNhaphangDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NhaphangDetailPage", function () {
        return NhaphangDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_bill_bill_wait_bill_wait_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/bill/bill-wait/bill-wait.page */
      "./src/app/bill/bill-wait/bill-wait.page.ts");
      /* harmony import */


      var src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/donvi/donvi-index/donvi-index.page */
      "./src/app/donvi/donvi-index/donvi-index.page.ts");
      /* harmony import */


      var src_app_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/function.service */
      "./src/app/function.service.ts");
      /* harmony import */


      var src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/kho/kho-index/kho-index.page */
      "./src/app/kho/kho-index/kho-index.page.ts");
      /* harmony import */


      var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/service/AlertService */
      "./src/app/service/AlertService.ts");
      /* harmony import */


      var src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/service/kho.service */
      "./src/app/service/kho.service.ts");
      /* harmony import */


      var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/service/loading.service */
      "./src/app/service/loading.service.ts");
      /* harmony import */


      var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/service/toastService */
      "./src/app/service/toastService.ts");
      /* harmony import */


      var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/service/unit.service */
      "./src/app/service/unit.service.ts");
      /* harmony import */


      var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/service/vattu.service */
      "./src/app/service/vattu.service.ts");
      /* harmony import */


      var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/service/xuatkho.service */
      "./src/app/service/xuatkho.service.ts");
      /* harmony import */


      var src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/donvitinh/dvt/dvt.component */
      "./src/app/donvitinh/dvt/dvt.component.ts");
      /* harmony import */


      var src_app_vattu_vattu_index_vattu_index_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/app/vattu/vattu-index/vattu-index.page */
      "./src/app/vattu/vattu-index/vattu-index.page.ts");
      /* harmony import */


      var src_app_share_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! src/app/share/helper */
      "./src/app/share/helper.ts");

      var NhaphangDetailPage = /*#__PURE__*/function () {
        function NhaphangDetailPage(ToastService, FunctionService, router, toastController, modalController, convertHelper, XuatkhoService, AlertService, navController, LoadingService, route, printer, currencyPipe, popoverController, KhoService, cdr, UnitService, VattuService, actionSheetController) {
          var _this = this;

          _classCallCheck(this, NhaphangDetailPage);

          this.ToastService = ToastService;
          this.FunctionService = FunctionService;
          this.router = router;
          this.toastController = toastController;
          this.modalController = modalController;
          this.convertHelper = convertHelper;
          this.XuatkhoService = XuatkhoService;
          this.AlertService = AlertService;
          this.navController = navController;
          this.LoadingService = LoadingService;
          this.route = route;
          this.printer = printer;
          this.currencyPipe = currencyPipe;
          this.popoverController = popoverController;
          this.KhoService = KhoService;
          this.cdr = cdr;
          this.UnitService = UnitService;
          this.VattuService = VattuService;
          this.actionSheetController = actionSheetController;
          this.chungchi = {
            ChungTuID: '',
            nam_du_lieu: ''
          };
          this.donvi = '';
          this.kho = '';
          this.sumBillWait = 0;
          this.submit = false;
          this.sendItem = {
            "DVNhap": "",
            "KhoNhap": "",
            "nam_du_lieu": "",
            "LoaiCTID": 2,
            "ChungTuID": 0,
            // "BanTheoDon": false,
            "SoCT": "",
            "ThoiDiem": "",
            "DienGiai": "",
            "ChietKhau": 0,
            "ThanhToan": 0,
            "ChiTietHang": [],
            "SoTK": ""
          };
          this.ChietKhauHD = '0';
          this.ThanhToanHD = '0';
          this.ChiTietHang = {
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
          this.sendVattu = {
            "loainx": "''",
            "khohang": "",
            "banggia": "",
            "xuatam": 0
          };
          this.displayChiTietHang = [];
          this.listKho = [];
          this.listUnit = [];
          this.listVattu = [];
          this.banggia = [];
          this.HTTT_name = 'Tiền mặt';
          this.sendChungChi = {
            isCreate: false,
            ChungTuID: '',
            nam_du_lieu: ''
          };
          this.loaiCTNow = {};
          this.title = '';
          this.typePage = '';
          this.itemDetail = [];
          this.listBillWait = [];
          this.check = false;
          this.indexItem = [];
          this.countProduct = 0;
          this.sumThanhTien = 0;
          this.sumTongTien = 0;
          this.sumTongTienTemp = 0;
          this.sumVAT = 0;
          this.sumChietKhau = 0;
          this.sumChietKhauTemp = 0; // sumThanhToan: number = 0;

          this.loaiCT_name = '';
          this.LoaiCTID = 0;
          this.checkChungTuID = 0;
          this.DienGiai = '';
          this.pageParent = '';
          this.LoaiCTByBill = [];
          this.loainx = '';
          this.getDSTK();
          this.listBillWait = JSON.parse(localStorage.getItem('billWaitNhapHang') || '[]');
          this.route.queryParams.subscribe(function (params) {
            _this.chungchi.ChungTuID = params.ChungTuID;
            _this.chungchi.nam_du_lieu = params.nam_du_lieu;
            _this.sendChungChi.ChungTuID = params.ChungTuID;
            _this.sendChungChi.nam_du_lieu = params.nam_du_lieu;
            _this.LoaiCTID = params.LoaiCTID;
            _this.DienGiai = params.DienGiai;
            _this.typePage = params.Type;
            _this.pageParent = params.pageParent;
            _this.title = params.Type == 'detail' ? 'Chi tiết' : params.Type == 'create' ? 'Thêm' : 'Sửa';

            _this.countBillWait();

            if (_this.typePage == 'detail' || _this.typePage == 'edit') {
              _this.getChungTuDetail();
            } else {
              var now = new Date();
              var year = now.getFullYear();
              var hours = now.getHours();
              var minute = now.getMinutes();
              _this.sendItem.nam_du_lieu = year.toString();
              var LoaiCT = JSON.parse(localStorage.getItem('loaiNhapHang') || '[]');

              if (params.LoaiCTID) {
                _this.loaiCTNow = _this.convertHelper.typeChungTuObj(params.LoaiCTID);
                _this.loaiCT_name = _this.loaiCTNow.DienGiai;
                _this.sendItem.LoaiCTID = _this.loaiCTNow.LoaiCTID;
              } else {
                _this.loaiCTNow = LoaiCT[0];
                _this.loaiCT_name = LoaiCT[0].DienGiai;
                _this.sendItem.LoaiCTID = LoaiCT[0].LoaiCTID;
              }

              _this.sendItem.SoTK = _this.SoTK;
              _this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + "".concat(_this.convNumber(hours), ":").concat(_this.convNumber(minute), ":00");
              _this.sendItem.ChungTuID = new Date().getTime();
              _this.sendItem.SoCT = "".concat(_this.getInitials(LoaiCT[0].DienGiai)).concat(_this.sendItem.ChungTuID);

              _this.getLoaiCT();
            }

            _this.getUnit();
          });
        }

        _createClass(NhaphangDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sumBillWait = this.listBillWait.length;
          }
        }, {
          key: "onSoTKChange",
          value: function onSoTKChange($event) {
            this.SoTK = "111";

            if ($event.target.value == undefined) {
              this.SoTK = "111";
            } else {
              this.SoTK = $event.target.value;
              console.log("197", this.SoTK);
              this.sendItem.SoTK = this.SoTK;
            }
          }
        }, {
          key: "getDSTK",
          value: function getDSTK() {
            var _this2 = this;

            this.FunctionService.getDSTK().subscribe(function (response) {
              // console.log("212", response)
              _this2.listTaiKhoan = response;
            }, function (error) {
              setTimeout(function () {
                console.log('error', error);
              }, 1000);
            });
          }
        }, {
          key: "getLoaiCT",
          value: function getLoaiCT() {
            this.LoaiCTByBill = JSON.parse(localStorage.getItem('loaiNhapHang') || '[]');

            for (var i = 0; i < this.LoaiCTByBill.length; i++) {
              if (this.LoaiCTByBill[i].LoaiCTID == this.sendItem.LoaiCTID) {
                this.loaiCTNow = this.LoaiCTByBill[i];
                this.loaiCT_name = this.LoaiCTByBill[i].DienGiai;
                this.banggia = this.LoaiCTByBill[i].BangGia;
                this.loainx = this.LoaiCTByBill[i].LoaiNX;
                this.xuatam = this.LoaiCTByBill[i].XuatAm;
                break;
              }
            }

            this.getKho();
          }
        }, {
          key: "getKho",
          value: function getKho() {
            var _this3 = this;

            this.KhoService.getKho().subscribe(function (response) {
              _this3.listKho = response;

              if (_this3.typePage == 'create') {
                // this.makho = response[0].MaKho;
                _this3.kho = response[0].TenKho; // this.sendItem.KhoXuat = response[0].MaKho;

                _this3.sendItem.KhoNhap = response[0].MaKho;
              }

              _this3.getVattu();
            }, function (error) {
              setTimeout(function () {
                console.log('error', error);
              }, 1000);
            });
          }
        }, {
          key: "getUnit",
          value: function getUnit() {
            var _this4 = this;

            this.UnitService.getUnit().subscribe(function (response) {
              _this4.listUnit = response;
            }, function (error) {
              setTimeout(function () {
                console.log('error', error);
              }, 1000);
            });
          }
        }, {
          key: "getVattu",
          value: function getVattu() {
            var _this5 = this;

            this.sendVattu.loainx = this.loainx;
            this.sendVattu.banggia = this.banggia;
            this.sendVattu.xuatam = this.xuatam ? 1 : 0;
            this.sendVattu.khohang = this.sendItem.KhoNhap;
            this.VattuService.GetListVT(this.sendVattu).subscribe(function (response) {
              _this5.listVattu = response;
            }, function (error) {
              console.log('error', error);
            });
          }
        }, {
          key: "convNumber",
          value: function convNumber(number) {
            return number < 10 ? '0' + number : number;
          }
        }, {
          key: "handleEdit",
          value: function handleEdit() {
            this.typePage = 'edit';
          }
        }, {
          key: "handleDetail",
          value: function handleDetail() {
            this.typePage = 'detail';
          }
        }, {
          key: "getChungTuDetail",
          value: function getChungTuDetail() {
            var _this6 = this;

            this.LoadingService.setValue(true);
            this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe(function (response) {
              _this6.itemDetail = response[0];
              _this6.countProduct = response[0].ChiTietHang.length; // this.sendItem.BanTheoDon = response[0].BanTheoDon;

              _this6.sendItem.ChungTuID = response[0].ChungTuID;
              _this6.sendItem.LoaiCTID = response[0].LoaiCTID;
              _this6.sendItem.SoCT = response[0].SoCT;
              _this6.sendItem.ThoiDiem = response[0].ThoiDiem;
              _this6.sendItem.nam_du_lieu = _this6.chungchi.nam_du_lieu;
              _this6.sendItem.DVNhap = response[0].DVNhap;
              _this6.sendItem.KhoNhap = response[0].KhoNhap;
              _this6.sendItem.ChietKhau = response[0].ChietKhau;
              _this6.sendItem.ThanhToan = response[0].ThanhToan;
              _this6.donvi = response[0]._TenDVNhap;
              _this6.kho = response[0]._TenKhoNhap;
              _this6.HTTT_name = response[0].ChiTietHang[0].HTTT == 'CK' ? 'Chuyển khoản' : 'Tiền mặt';
              _this6.ChietKhauHD = _this6.currencyPipe.transform(String(response[0].ChietKhau).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');

              for (var i = 0; i <= _this6.listTaiKhoan.length; i++) {
                var item = _this6.listTaiKhoan[i];

                if (item != undefined) {
                  if (item.SoTK == response[0].SoTK) {
                    _this6.SoTK = item.SoTK;
                  }
                }
              }

              _this6.getLoaiCT();

              _this6.setChietHang();

              _this6.LoadingService.setValue(false);

              _this6.countMoney(response[0]);
            }, function (error) {
              console.log('error', error);

              _this6.LoadingService.setValue(false);
            });
          }
        }, {
          key: "setChietHang",
          value: function setChietHang() {
            this.sendItem.ChiTietHang = [];
            this.displayChiTietHang = [];

            for (var i = 0; i < this.itemDetail.ChiTietHang.length; i++) {
              this.sendItem.ChiTietHang.push({
                "NhapXuatID": this.itemDetail.ChiTietHang[i].NhapXuatID,
                "MaVT": this.itemDetail.ChiTietHang[i].MaVT,
                "DVT": this.itemDetail.ChiTietHang[i].DVT,
                "SoLuong": this.itemDetail.ChiTietHang[i].SoLuong,
                "DonGia": this.itemDetail.ChiTietHang[i].DonGia,
                "GiaBanLe": this.itemDetail.ChiTietHang[i].GiaBanLe ? this.itemDetail.ChiTietHang[i].GiaBanLe : 0,
                "GiaBanSy": this.itemDetail.ChiTietHang[i].GiaBanSy ? this.itemDetail.ChiTietHang[i].GiaBanSy : 0,
                "ThanhTien": this.itemDetail.ChiTietHang[i].ThanhTien,
                "VAT_Percent": this.itemDetail.ChiTietHang[i].VAT_Percent,
                "VAT": this.itemDetail.ChiTietHang[i].VAT,
                "ChietKhau_Percent": this.itemDetail.ChiTietHang[i].ChietKhau_Percent,
                "ChietKhau": this.itemDetail.ChiTietHang[i].ChietKhau,
                "TongTien": this.itemDetail.ChiTietHang[i].TongTien,
                "HTTT": this.itemDetail.ChiTietHang[i].HTTT ? this.itemDetail.ChiTietHang[i].HTTT : '',
                "LoHang": this.itemDetail.ChiTietHang[i].LoHang ? this.itemDetail.ChiTietHang[i].LoHang : '',
                "HanDung": this.itemDetail.ChiTietHang[i].HanDung ? this.itemDetail.ChiTietHang[i].HanDung : ''
              });
              this.displayChiTietHang.push({
                "_TenVT": this.itemDetail.ChiTietHang[i]._TenVT,
                "MaVT": this.itemDetail.ChiTietHang[i].MaVT,
                "DVT": this.itemDetail.ChiTietHang[i].DVT,
                'DonGia': this.itemDetail.ChiTietHang[i].DonGia ? new Intl.NumberFormat().format(this.itemDetail.ChiTietHang[i].DonGia).replace(/\./g, ',') : '0',
                'SoLuong': new Intl.NumberFormat().format(this.itemDetail.ChiTietHang[i].SoLuong).replace(/\./g, ','),
                "ChietKhau_Percent": this.itemDetail.ChiTietHang[i].ChietKhau_Percent,
                "VAT_Percent": this.itemDetail.ChiTietHang[i].VAT_Percent,
                "TongTien": this.itemDetail.ChiTietHang[i].TongTien
              });
            }
          }
        }, {
          key: "countMoney",
          value: function countMoney(billDetail) {
            this.sumThanhTien = 0;
            this.sumTongTien = 0;
            this.sumVAT = 0;
            this.sumChietKhau = 0;
            this.sumChietKhauTemp = 0; // this.sumThanhToan = 0;

            if (this.typePage != 'create') {
              this.sumChietKhau = this.itemDetail.ChietKhau ? this.itemDetail.ChietKhau : 0;
            }

            for (var i = 0; i < billDetail.ChiTietHang.length; i++) {
              this.sumThanhTien = this.sumThanhTien + billDetail.ChiTietHang[i].ThanhTien;
              this.sumTongTien = this.sumTongTien + billDetail.ChiTietHang[i].TongTien;
              this.sumVAT = this.sumVAT + billDetail.ChiTietHang[i].VAT;
              this.sumChietKhauTemp = this.sumChietKhauTemp + billDetail.ChiTietHang[i].ChietKhau; // this.sumChietKhauTemp = this.sumChietKhau + billDetail.ChiTietHang[i].ChietKhau;
            }

            this.sumChietKhau = this.sumChietKhauTemp + billDetail.ChietKhau;
            this.sumTongTien -= billDetail.ChietKhau;

            if (this.typePage == 'create') {
              this.sendItem.ThanhToan = this.sumTongTien;
              this.ThanhToanHD = this.currencyPipe.transform(String(this.sumTongTien).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            } else {
              this.ThanhToanHD = this.currencyPipe.transform(String(this.sendItem.ThanhToan).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            }

            this.sumTongTienTemp = this.sumTongTien;
          }
        }, {
          key: "formatInput",
          value: function formatInput(item, index, type) {
            // if (type && type == 'plus') {
            //   this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) + 1);
            // }
            // if (type && type == 'subtraction') {
            //   this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) - 1);
            // }
            var convNumber = this.currencyPipe.transform(this.displayChiTietHang[index][item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            this.displayChiTietHang[index][item] = convNumber;

            if (item == "DonGia" || item == "SoLuong") {
              this.sendItem.ChiTietHang[index][item] = Number(this.displayChiTietHang[index][item].replace(/,/g, ''));
              this.sumMoney(index);
              this.getTongTien(index);
            }
          }
        }, {
          key: "formatInputBill",
          value: function formatInputBill(item, e) {
            // var tesst = Number(this.sendItem[item].replace(/,/g, ''));
            // var test = e;
            // console.log('tesst', test, e);
            this.sendItem[item] = Number(e.replace(/,/g, ''));
            var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');

            if (item == 'ChietKhau') {
              this.ChietKhauHD = convNumber;
              this.sumChietKhau = this.sumChietKhauTemp;
              this.sumChietKhau += this.sendItem.ChietKhau;
              this.sumTongTien = this.sumThanhTien + this.sumVAT - this.sumChietKhau;
              this.sendItem.ThanhToan = this.sumTongTien;
              this.ThanhToanHD = this.currencyPipe.transform(String(this.sumTongTien).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            } else if (item == 'ThanhToan') {
              this.ThanhToanHD = convNumber;
            }
          }
        }, {
          key: "openUnit",
          value: function openUnit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_7__["DonviIndexPage"],
                        cssClass: 'modalOpen',
                        componentProps: {
                          'page': 'nhapmua' // "listUnit": this.listUnit,

                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        console.log(dataReturned);

                        if (dataReturned.data) {
                          _this7.sendItem.DVNhap = dataReturned.data.MaDV;
                          _this7.donvi = dataReturned.data.TenDV;
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openKho",
          value: function openKho() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_9__["KhoIndexPage"],
                        cssClass: 'modalOpen',
                        componentProps: {// "listKho": this.listKho,
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          // this.makho = dataReturned.data.MaKho;
                          _this8.sendItem.KhoNhap = dataReturned.data.MaKho;
                          _this8.kho = dataReturned.data.TenKho;

                          _this8.getVattu();
                        }
                      });
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openVattu",
          value: function openVattu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: src_app_vattu_vattu_index_vattu_index_page__WEBPACK_IMPORTED_MODULE_18__["VattuIndexPage"],
                        cssClass: 'modalOpen',
                        componentProps: {
                          // "makho": this.sendItem.KhoNhap,
                          "page": "nhapmua",
                          "listVattu": this.listVattu,
                          "listItem": this.sendItem.ChiTietHang
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned && dataReturned.data) {
                          _this9.displayChiTietHang = [];

                          var _loop = function _loop(i) {
                            var foundVattu = _this9.listVattu.find(function (o) {
                              return o.MaVT === dataReturned.data[i].MaVT;
                            });

                            _this9.displayChiTietHang.push({
                              "_TenVT": foundVattu.TenVT,
                              "MaVT": dataReturned.data[i].MaVT,
                              "DVT": dataReturned.data[i].DVT,
                              'DonGia': dataReturned.data[i].DonGia ? new Intl.NumberFormat().format(dataReturned.data[i].DonGia).replace(/\./g, ',') : '0',
                              'SoLuong': new Intl.NumberFormat().format(dataReturned.data[i].SoLuong).replace(/\./g, ','),
                              "ChietKhau_Percent": dataReturned.data[i].ChietKhau_Percent,
                              "VAT_Percent": dataReturned.data[i].VAT_Percent,
                              "TongTien": dataReturned.data[i].TongTien
                            });
                          };

                          for (var i = 0; i < dataReturned.data.length; i++) {
                            _loop(i);
                          }

                          _this9.sendItem.ChiTietHang = dataReturned.data;
                          _this9.countProduct = _this9.displayChiTietHang.length;

                          _this9.countMoney(_this9.sendItem);
                        }
                      });
                      _context3.next = 6;
                      return modal.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openTypeChungTu",
          value: function openTypeChungTu() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this10 = this;

              var arrBtn, _loop2, i, actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      arrBtn = [];

                      _loop2 = function _loop2(i) {
                        arrBtn.push({
                          text: _this10.LoaiCTByBill[i].DienGiai,
                          icon: 'cash-outline',
                          cssClass: _this10.sendItem.LoaiCTID == _this10.LoaiCTByBill[i].LoaiCTID ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            _this10.loaiCT_name = _this10.LoaiCTByBill[i].DienGiai;
                            _this10.sendItem.LoaiCTID = _this10.LoaiCTByBill[i].LoaiCTID;
                            _this10.sendItem.SoCT = "".concat(_this10.getInitials(_this10.LoaiCTByBill[i].DienGiai)).concat(_this10.sendItem.ChungTuID);
                            _this10.loaiCTNow = _this10.LoaiCTByBill[i];
                          }
                        });
                      };

                      for (i = 0; i < this.LoaiCTByBill.length; i++) {
                        _loop2(i);
                      }

                      _context4.next = 5;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: arrBtn
                      });

                    case 5:
                      actionSheet = _context4.sent;
                      _context4.next = 8;
                      return actionSheet.present();

                    case 8:
                      _context4.next = 10;
                      return actionSheet.onDidDismiss();

                    case 10:
                      _yield$actionSheet$on = _context4.sent;
                      role = _yield$actionSheet$on.role;

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getInitials",
          value: function getInitials(text) {
            var words = text.split(' ');
            var initials = words.map(function (word) {
              return word.charAt(0).toUpperCase();
            });
            return initials.join('');
          }
        }, {
          key: "handleHTTT",
          value: function handleHTTT() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this11 = this;

              var actionSheet, _yield$actionSheet$on2, role;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: [{
                          text: 'Tiền mặt',
                          icon: 'cash-outline',
                          cssClass: this.HTTT_name == 'Tiền mặt' ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            _this11.HTTT_name = 'Tiền mặt';
                          }
                        }, {
                          text: 'Chuyển khoản',
                          icon: 'card-outline',
                          cssClass: this.HTTT_name == 'Chuyển khoản' ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            _this11.HTTT_name = 'Chuyển khoản';
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context5.sent;
                      _context5.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context5.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on2 = _context5.sent;
                      role = _yield$actionSheet$on2.role;

                    case 9:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "setInput",
          value: function setInput(e, item, index) {
            this.sendItem.ChiTietHang[index][item] = e;

            if (item == "ChietKhau_Percent") {
              this.sendItem.ChiTietHang[index].ChietKhau = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].ChietKhau_Percent / 100;
              this.getTongTien(index);
            }

            if (item == "VAT_Percent") {
              this.sendItem.ChiTietHang[index].VAT = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].VAT_Percent / 100;
              this.getTongTien(index);
            }
          }
        }, {
          key: "getTongTien",
          value: function getTongTien(index) {
            this.sendItem.ChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].ThanhTien + this.sendItem.ChiTietHang[index].VAT - this.sendItem.ChiTietHang[index].ChietKhau;
            this.displayChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].TongTien;
            this.countMoney(this.sendItem);
          }
        }, {
          key: "handleRemove",
          value: function handleRemove(item, index) {
            var _this12 = this;

            this.AlertService.presentAlert("B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a m\u1EB7t h\xE0ng \"".concat(item._TenVT, "\"?")).then(function (res) {
              if (res == 'true') {
                // console.log('eeee');
                _this12.displayChiTietHang.splice(index, 1);

                _this12.sendItem.ChiTietHang.splice(index, 1);

                _this12.countMoney(_this12.sendItem); // this.countMoney(this.displayChiTietHang);

              }
            });
          }
        }, {
          key: "resetItem",
          value: function resetItem() {
            this.submit = false;
            this.sendItem = {
              "DVNhap": "",
              "KhoNhap": this.sendItem.KhoNhap,
              "nam_du_lieu": "",
              "LoaiCTID": this.sendItem.LoaiCTID,
              "ChungTuID": 0,
              "SoCT": "",
              "ThoiDiem": "",
              "DienGiai": "",
              "ChietKhau": 0,
              "ThanhToan": 0,
              "ChiTietHang": []
            };
            this.ChietKhauHD = '0';
            this.ThanhToanHD = '0';
            this.donvi = "";
            this.sendItem.ChiTietHang = [];
            this.displayChiTietHang = [];
            this.sumThanhTien = 0;
            this.sumTongTien = 0;
            this.sumVAT = 0;
            this.sumChietKhau = 0;
            this.sumChietKhauTemp = 0;
            this.sumTongTienTemp = 0; // this.sumThanhToan = 0;

            this.countProduct = 0;
            var now = new Date();
            var year = now.getFullYear();
            var hours = now.getHours();
            var minute = now.getMinutes();
            this.sendItem.nam_du_lieu = year.toString();
            this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + "".concat(this.convNumber(hours), ":").concat(this.convNumber(minute), ":00");
            this.sumTongTien = 0;
            this.sendItem.ChungTuID = new Date().getTime();
            this.sendItem.SoCT = "".concat(this.getInitials(this.loaiCTNow.DienGiai)).concat(this.sendItem.ChungTuID);
            this.getVattu();
          }
        }, {
          key: "handleDVT",
          value: function handleDVT(MaVT, DVT, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this13 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      localStorage.setItem("InOutType", "N");
                      _context6.next = 3;
                      return this.popoverController.create({
                        component: src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_17__["DVTComponent"],
                        cssClass: 'popup-cont-info',
                        componentProps: {
                          "MaVT": MaVT,
                          "DVT": DVT
                        },
                        translucent: true
                      });

                    case 3:
                      popover = _context6.sent;
                      _context6.next = 6;
                      return popover.present();

                    case 6:
                      popover.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this13.sendItem.ChiTietHang[index].DVT = dataReturned.data.DVT;
                          _this13.sendItem.ChiTietHang[index].DonGia = dataReturned.data.GiaMua;
                          _this13.sendItem.ChiTietHang[index].GiaBanLe = dataReturned.data.GiaBanLe;
                          _this13.sendItem.ChiTietHang[index].GiaBanSy = dataReturned.data.GiaBanSy;

                          _this13.sumMoney(index);

                          _this13.displayChiTietHang[index].DonGia = new Intl.NumberFormat().format(dataReturned.data.GiaMua).replace(/\./g, ',');

                          _this13.getTongTien(index);
                        }
                      });

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "sumMoney",
          value: function sumMoney(index) {
            this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;
            this.sendItem.ChiTietHang[index].ChietKhau = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].ChietKhau_Percent / 100;
            this.sendItem.ChiTietHang[index].VAT = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].VAT_Percent / 100;
          }
        }, {
          key: "countBillWait",
          value: function countBillWait() {
            // this.sumBillWait = 0;
            // for (let i = 0; i < this.listBillWait.length; i++) {
            //   if (this.listBillWait[i].LoaiCTID == this.LoaiCTID) {
            //     this.sumBillWait += 1;
            //   }
            // }
            this.sumBillWait = this.listBillWait.length;
          }
        }, {
          key: "openBillWait",
          value: function openBillWait() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this14 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalController.create({
                        component: src_app_bill_bill_wait_bill_wait_page__WEBPACK_IMPORTED_MODULE_6__["BillWaitPage"],
                        cssClass: 'modalOpen',
                        componentProps: {
                          "LoaiCTID": this.LoaiCTID,
                          "LoaiNX": this.loaiCTNow.LoaiNX
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        console.log(dataReturned);
                        _this14.listBillWait = JSON.parse(localStorage.getItem('billWaitNhapHang') || '[]');
                        _this14.sumBillWait = _this14.listBillWait.length;

                        if (dataReturned.data) {
                          _this14.sendItem = dataReturned.data.item;
                          _this14.kho = dataReturned.data.item.kho_name;
                          _this14.donvi = dataReturned.data.item.donvi_name;
                          _this14.displayChiTietHang = [];

                          for (var i = 0; i < dataReturned.data.item.ChiTietHang.length; i++) {
                            _this14.displayChiTietHang.push({
                              "_TenVT": dataReturned.data.item.ChiTietHang[i]._TenVT,
                              "MaVT": dataReturned.data.item.ChiTietHang[i].MaVT,
                              "DVT": dataReturned.data.item.ChiTietHang[i].DVT,
                              'DonGia': dataReturned.data.item.ChiTietHang[i].DonGia ? new Intl.NumberFormat().format(dataReturned.data.item.ChiTietHang[i].DonGia).replace(/\./g, ',') : '0',
                              'SoLuong': new Intl.NumberFormat().format(dataReturned.data.item.ChiTietHang[i].SoLuong).replace(/\./g, ','),
                              "ChietKhau_Percent": dataReturned.data.item.ChiTietHang[i].ChietKhau_Percent,
                              "VAT_Percent": dataReturned.data.item.ChiTietHang[i].VAT_Percent,
                              "TongTien": dataReturned.data.item.ChiTietHang[i].TongTien,
                              "LoHang": dataReturned.data.item.ChiTietHang[i].LoHang,
                              "HanDung": dataReturned.data.item.ChiTietHang[i].HanDung
                            });
                          }

                          _this14.countProduct = _this14.displayChiTietHang.length;
                          _this14.checkChungTuID = dataReturned.data.item.ChungTuID;

                          _this14.countMoney(_this14.sendItem); // for (let i = 0; i < this.listKho.length; i++) {
                          //   if (this.listKho[i].MaKho == dataReturned.data.item.KhoNhap) {
                          //     this.kho = this.listKho[i].TenKho;
                          //     break;
                          //   }
                          // }
                          // if (dataReturned.data.item.DVNhap) {
                          //   for (let i = 0; i < this.listUnit.length; i++) {
                          //     if (this.listUnit[i].MaDV == dataReturned.data.item.DVNhap) {
                          //       this.donvi = this.listUnit[i].TenDV;
                          //       break;
                          //     }
                          //   }
                          // }


                          var now = new Date();
                          var year = now.getFullYear();
                          var hours = now.getHours();
                          var minute = now.getMinutes();
                          _this14.sendItem.nam_du_lieu = year.toString();
                          _this14.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + "".concat(_this14.convNumber(hours), ":").concat(_this14.convNumber(minute), ":00");
                          _this14.sendItem.ChietKhau = dataReturned.data.item.ChietKhau;
                          _this14.sendItem.ThanhToan = dataReturned.data.item.ThanhToan;
                          _this14.ChietKhauHD = _this14.currencyPipe.transform(String(_this14.sendItem.ChietKhau).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
                          _this14.sendItem.ChungTuID = dataReturned.data.item.ChungTuID;
                          _this14.sendItem.SoCT = dataReturned.data.item.SoCT; // this.sendItem.ChungTuID = new Date().getTime();
                          // this.sendItem.SoCT = `${this.getInitials(this.loaiCTNow.DienGiai)}${this.sendItem.ChungTuID}`;
                        }
                      });
                      _context7.next = 6;
                      return modal.present();

                    case 6:
                      return _context7.abrupt("return", _context7.sent);

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "confirmSubmit",
          value: function confirmSubmit() {
            var _this15 = this;

            this.submit = true;

            if (!this.donvi) {
              this.ToastService.warningToast("Vui lòng chọn đơn vị!");
              return;
            }

            if (this.sumTongTien == 0) {
              return;
            }

            for (var i = 0; i < this.sendItem.ChiTietHang.length; i++) {
              this.sendItem.ChiTietHang[i].HTTT = this.HTTT_name == 'Tiền mặt' ? 'TM' : 'CK';
            }

            if (this.SoTK == undefined) {
              for (var _i = 0; _i <= this.listTaiKhoan.length; _i++) {
                var item = this.listTaiKhoan[_i];

                if (item != undefined) {
                  if (item.LoaiTK == "111") {
                    this.SoTK = item.SoTK;
                    console.log("827", this.SoTK);
                    this.sendItem.SoTK = this.SoTK;
                  }
                }
              }
            }

            if (this.typePage == 'create') {
              // var checkExit = false;
              // if (this.sendItem.ChiTietHang.length != 0) {
              //   for (let i = 0; i < this.sendItem.ChiTietHang.length; i++) {
              //     if (!this.sendItem.ChiTietHang[i].SoLuong) {
              //       checkExit = true;
              //     }
              //   }
              // } else {
              //   checkExit = true;
              // }
              // if (!checkExit) {
              this.AlertService.presentAlert("B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n th\xEAm h\xF3a \u0111\u01A1n?").then(function (res) {
                if (res == 'true') {
                  _this15.createImport();
                }
              }); // }
            } else {
              this.AlertService.presentAlert("B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n s\u1EEDa h\xF3a \u0111\u01A1n?").then(function (res) {
                if (res == 'true') {
                  _this15.updateImport();
                }
              });
            }
          }
        }, {
          key: "backListBill",
          value: function backListBill() {
            this.navController.navigateBack(["bill-list"], {
              queryParams: {
                'LoaiCTID': this.loaiCTNow.LoaiCTID,
                'DienGiai': this.DienGiai
              }
            });
          }
        }, {
          key: "createImport",
          value: function createImport() {
            var _this16 = this;

            this.LoadingService.setValue(true);
            this.XuatkhoService.createXuatHang(this.sendItem).subscribe(function (response) {
              if (response.code == 0) {
                _this16.ToastService.successToast(response.message);

                _this16.resetItem();

                _this16.LoadingService.setValue(false);

                for (var i = 0; i < _this16.listBillWait.length; i++) {
                  if (_this16.listBillWait[i].ChungTuID == _this16.checkChungTuID) {
                    _this16.listBillWait.splice(i, 1);

                    localStorage.setItem('billWaitNhapHang', JSON.stringify(_this16.listBillWait));

                    _this16.countBillWait();

                    break;
                  }
                }
              } else {
                _this16.ToastService.errorToast(response.message);

                _this16.LoadingService.setValue(false);
              }
            }, function (error) {
              _this16.LoadingService.setValue(false);

              console.log('error', error);
            });
          }
        }, {
          key: "updateImport",
          value: function updateImport() {
            var _this17 = this;

            this.LoadingService.setValue(true);
            this.XuatkhoService.updateXuatHang(this.sendItem).subscribe(function (response) {
              if (response.code == 0) {
                _this17.ToastService.successToast(response.message);

                _this17.getChungTuDetail();

                _this17.LoadingService.setValue(false);
              } else {
                _this17.ToastService.errorToast(response.message);

                _this17.LoadingService.setValue(false);
              } // this.LoadingService.setValue(false);

            }, function (error) {
              _this17.LoadingService.setValue(false);

              console.log('error', error);
            });
          }
        }, {
          key: "handleBillWait",
          value: function handleBillWait() {
            this.sendItem.kho_name = this.kho;
            this.sendItem.donvi_name = this.donvi;
            this.listBillWait.push(this.sendItem);
            localStorage.setItem('billWaitNhapHang', JSON.stringify(this.listBillWait));
            this.countBillWait();
            this.resetItem();
            this.ToastService.successToast('Thêm hóa đơn chờ thành công!');
          }
        }, {
          key: "openBack",
          value: function openBack() {
            if (this.pageParent == 'home') {
              this.navController.navigateBack(['tabs/tab3']);
            } else {
              this.navController.navigateBack(["bill-list"], {
                queryParams: {
                  'LoaiCTID': this.LoaiCTID,
                  'DienGiai': this.DienGiai
                }
              });
            }
          }
        }]);

        return NhaphangDetailPage;
      }();

      NhaphangDetailPage.ctorParameters = function () {
        return [{
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_13__["ToastService"]
        }, {
          type: src_app_function_service__WEBPACK_IMPORTED_MODULE_8__["FunctionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: src_app_share_helper__WEBPACK_IMPORTED_MODULE_19__["convertHelper"]
        }, {
          type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_16__["XuatkhoService"]
        }, {
          type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_12__["LoadingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__["Printer"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }, {
          type: src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_11__["KhoService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_14__["UnitService"]
        }, {
          type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_15__["VattuService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }];
      };

      NhaphangDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-nhaphang-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./nhaphang-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./nhaphang-detail.page.scss */
        "./src/app/nhapkho/nhaphang-detail/nhaphang-detail.page.scss"))["default"]]
      })], NhaphangDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=nhapkho-nhaphang-detail-nhaphang-detail-module-es5.js.map