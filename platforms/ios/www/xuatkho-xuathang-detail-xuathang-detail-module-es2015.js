(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xuatkho-xuathang-detail-xuathang-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-detail/xuathang-detail.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-detail/xuathang-detail.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"openBack()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600;\"\r\n      [style]=\"typePage == 'create' && LoaiCTByBill.length > 1 && sumTongTien > 0 ? 'text-align: left' : 'text-align: center'\">\r\n      {{convertHelper.typeChungTu(sendItem.LoaiCTID) }}\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item (click)=\"handleBillWait()\" *ngIf=\"typePage == 'create' && sumTongTien > 0\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"duplicate-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"openPrint()\" *ngIf=\"typePage == 'detail'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"print-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item (click)=\"handleEdit()\" *ngIf=\"typePage == 'detail'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"create-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <!-- <ion-item (click)=\"handleDetail()\" *ngIf=\"typePage == 'edit'\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-item> -->\r\n      <ion-item *ngIf=\"(typePage == 'create' || typePage == 'edit') && LoaiCTByBill.length > 1\"\r\n        (click)=\"openTypeChungTu()\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"funnel-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item (click)=\"backListBill()\" lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"menu-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"synthetic\">\r\n\r\n    <div class=\"synthetic-item\" style=\"font-weight: 600; font-size: 16px; padding: 10px; border-top: 1px solid white;\">\r\n      <div class=\"synthetic-item-left\" style=\"display: flex; align-items: center; gap: 10px;\">\r\n        <ion-icon name=\"cloud-done-outline\" style=\"font-size: 24px;\"></ion-icon>\r\n        <span>{{kho}}</span>\r\n\r\n      </div>\r\n      <div *ngIf=\"typePage == 'create' || typePage == 'edit'\" (click)=\"openKho()\" class=\"synthetic-item-right\">\r\n        <ion-icon style=\"font-size: 24px;\" name=\"search-outline\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <div class=\"bill\">\r\n    <div class=\"bill-header \">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      Khách hàng\r\n      <ion-icon *ngIf=\"typePage == 'create' || typePage == 'edit'\" (click)=\"openUnit()\" class=\"bill-header-right\"\r\n        name=\"chevron-forward-outline\"></ion-icon>\r\n\r\n    </div>\r\n    <div *ngIf=\"donvi\" class=\"bill-item\">\r\n      {{donvi}}\r\n    </div>\r\n    <div *ngIf=\"submit && !donvi && sendItem.ThanhToan < sumTongTien\" class=\"bill-item text-err\">\r\n      Trường bắt buộc nhập\r\n    </div>\r\n    <div class=\"bill-header \">\r\n      <ion-icon name=\"menu-outline\"></ion-icon>\r\n      Hàng hóa\r\n\r\n      <ion-icon *ngIf=\"typePage == 'create' || typePage == 'edit'\" (click)=\"openVattu()\" class=\"bill-header-right\"\r\n        name=\"chevron-forward-outline\"></ion-icon>\r\n    </div>\r\n\r\n    <div>\r\n      <div *ngFor=\"let item of displayChiTietHang; index as i\" class=\"bill-content\"\r\n        [style.border-bottom]=\"i+1 == countProduct ? 'none' : '1px dashed var(--gray-light3)'\">\r\n        <div class=\"bill-content-header\">\r\n          <p>{{i+1}}. {{item._TenVT}} ({{item.MaVT}})</p>\r\n\r\n          <!-- <ion-icon (click)=\"handleRemove(item, i)\" name=\"trash-outline\"></ion-icon> -->\r\n          <ion-icon (click)=\"handleRemove(item, i)\" class=\"bill-content-right\" name=\"trash-outline\"></ion-icon>\r\n\r\n        </div>\r\n        <table>\r\n\r\n          <tr>\r\n            <td class=\"pr-10\">\r\n              <div class=\"flex-item\">\r\n\r\n                <div class=\"title-width\">\r\n                  ĐVT:\r\n                </div>\r\n                <div class=\"bill-select-form\">\r\n                  <div (click)=\"handleDVT(sendItem.ChiTietHang[i].MaVT, sendItem.ChiTietHang[i].DVT, i)\">\r\n                    {{sendItem.ChiTietHang[i].DVT}}</div>\r\n                  <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n                </div>\r\n              </div>\r\n\r\n            </td>\r\n            <td class=\"pl-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">\r\n                  Giá:\r\n                </div>\r\n                <input type=\"text\" [(ngModel)]=\"item.DonGia\" (ngModelChange)=\"formatInput('DonGia', i)\">\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"pr-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">SL:\r\n                </div>\r\n                <input type=\"text\" [(ngModel)]=\"item.SoLuong\" (ngModelChange)=\"formatInput('SoLuong', i)\">\r\n              </div>\r\n\r\n            </td>\r\n\r\n            <td class=\"pl-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">VAT:\r\n                </div>\r\n                <input type=\"number\" [(ngModel)]=\"item.VAT_Percent\" (ngModelChange)=\"setInput($event,'VAT_Percent', i)\">\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"pr-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">\r\n                  C.K:\r\n                </div>\r\n\r\n                <input type=\"number\" [(ngModel)]=\"item.ChietKhau_Percent\"\r\n                  (ngModelChange)=\"setInput($event,'ChietKhau_Percent', i)\">\r\n              </div>\r\n            </td>\r\n\r\n            <td class=\"pl-10\">\r\n              <div class=\"text-right flex-item\">\r\n                <div class=\"title-width\">\r\n                  Lô:\r\n                </div>\r\n                <span class=\"input-disable\">{{sendItem.ChiTietHang[i].LoHang}}</span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td class=\"pr-10\">\r\n              <div style=\"display: flex; align-items: center; gap: 4px;\">\r\n                <div class=\"title-width\">H.D:\r\n                </div>\r\n                <span class=\"input-disable\" style=\"font-weight: 400;\">{{sendItem.ChiTietHang[i].HanDung}}</span>\r\n              </div>\r\n\r\n            </td>\r\n\r\n            <td class=\"pl-10\">\r\n              <div style=\"display: flex; align-items: center; gap: 4px;\">\r\n                <div class=\"title-width\">\r\n                  Tiền:\r\n                </div>\r\n                <span class=\"input-disable\">{{item.TongTien | number}} </span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"bill-header \">\r\n      <ion-icon name=\"reader-outline\"></ion-icon>\r\n      Thông tin thanh toán\r\n    </div>\r\n    <div class=\"bill-table\">\r\n      <table>\r\n        <tr>\r\n          <td class=\"bill-table-left\">T.Thành tiền</td>\r\n          <td class=\"text-right font-bold\">\r\n            <div>\r\n              {{sumThanhTien | number}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">T.VAT</td>\r\n          <td class=\"text-right font-bold\">\r\n            <div>\r\n              {{sumVAT | number}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">Chiết khấu HĐ</td>\r\n          <td class=\"text-right font-bold p-0\">\r\n            <div *ngIf=\"typePage == 'detail'\"> {{itemDetail.ChietKhau | number}} </div>\r\n            <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" style=\"color: #006bc6;\">\r\n              <input class=\"input-no-border\" type=\"text\" [(ngModel)]=\"ChietKhauHD\"\r\n                (ngModelChange)=\"formatInputBill('ChietKhau', $event)\">\r\n\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">T.Chiết khấu</td>\r\n          <td class=\"text-right font-bold\">\r\n            <div>\r\n              {{sumChietKhau | number}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-table-left\">Đã thanh toán</td>\r\n          <td class=\"text-right font-bold p-0\">\r\n            <div *ngIf=\"typePage == 'detail'\"> {{itemDetail.ThanhToan | number}} </div>\r\n            <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" style=\"color: #006bc6;\">\r\n              <input class=\"input-no-border\" type=\"text\" [(ngModel)]=\"ThanhToanHD\"\r\n                (ngModelChange)=\"formatInputBill('ThanhToan', $event)\">\r\n\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <tr style=\"border-bottom: none !important;\">\r\n          <td class=\"bill-table-left\">T.Tiền</td>\r\n          <td class=\"text-right font-bold\">\r\n            <div>\r\n              {{sumTongTien | number}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        <!-- <tr>\r\n          <td class=\"bill-table-left\">HTTT</td>\r\n          <td class=\"text-right\">\r\n            <div style=\"display: flex; float: right;\">\r\n              <div *ngIf=\"typePage == 'detail'\"> {{HTTT_name}} </div>\r\n              <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"handleHTTT()\" style=\"color: #006bc6;\">\r\n                {{HTTT_name}}\r\n              </div>\r\n            </div>\r\n\r\n          </td>\r\n        </tr> -->\r\n        <tr>\r\n          <td class=\"bill-table-left\">HTTT</td>\r\n          <td class=\"text-right\">\r\n            <div style=\"display: flex; float: right;font-weight: bold;color: #000;\">\r\n              <ion-select interface=\"action-sheet\" placeholder=\"Chọn tài khoản\" (ionChange)=\"onSoTKChange($event)\"\r\n                [(ngModel)]=\"SoTK\">\r\n                <ion-select-option *ngFor=\"let item of listTaiKhoan\" value=\"{{item.SoTK}}\">\r\n                  {{item.TenTK}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!-- <div class=\"bill\" style=\"margin-top: 50px;\">\r\n    <div class=\"bill-product\">\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          THÔNG TIN HÓA ĐƠN\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"bill-table\">\r\n        <table>\r\n          \r\n          <tr *ngIf=\"typePage != 'create'\">\r\n            <td class=\"bill-table-left\">Số chứng từ</td>\r\n            <td class=\"text-right\">\r\n              <div>\r\n                {{itemDetail.SoCT}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Loại CT</td>\r\n            <td class=\"text-right\">\r\n                <div style=\"display: flex; float: right;\">\r\n                  <div *ngIf=\"typePage == 'detail'\"> {{convertHelper.typeChungTu(sendItem.LoaiCTID) }} </div>\r\n                  <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"openTypeChungTu()\" style=\"color: #006bc6;\">\r\n                    {{convertHelper.typeChungTu(sendItem.LoaiCTID) }}\r\n                  </div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Khách hàng</td>\r\n            <td class=\"text-right\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div *ngIf=\"typePage == 'detail'\"> {{donvi}} </div>\r\n                <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"openUnit()\" style=\"color: #006bc6;\">\r\n                  {{donvi}}\r\n                  <ion-icon *ngIf=\"!donvi\" name=\"pencil-outline\"></ion-icon>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n          </td>\r\n          </tr>\r\n          <tr style=\"border-top: none;\" *ngIf=\"submit && !donvi && sendItem.ThanhToan < sumTongTien\">\r\n            <td class=\"bill-table-left\" style=\"padding: 0 10px;\"></td>\r\n            <td class=\"text-right\" style=\"padding: 0 10px;\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div style=\"color: red;\">\r\n                  Trường bắt buộc nhập  \r\n\r\n                </div>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Kho hàng</td>\r\n            <td class=\"text-right\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div *ngIf=\"typePage == 'detail'\"> {{kho}} </div>\r\n                <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"openKho()\" style=\"color: #006bc6;\">\r\n                  {{kho}}\r\n                  <ion-icon *ngIf=\"!kho\" name=\"pencil-outline\"></ion-icon>\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"typePage != 'create'\">\r\n            <td class=\"bill-table-left\">Thời gian</td>\r\n            <td class=\"text-right\">\r\n              <div>\r\n                {{itemDetail.ThoiDiem | date:'dd/MM/yyyy HH:mm'}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    \r\n\r\n      <div class=\"bill-header\" style=\"display: flex; align-items: center;\">\r\n        <div>\r\n          CHI TIẾT HÓA ĐƠN ({{countProduct}})\r\n        </div>\r\n        <ion-icon (click)=\"openVattu()\" *ngIf=\"typePage == 'edit' || typePage == 'create'\" name=\"add-outline\"\r\n          style=\"margin-left: auto; font-size: 24px;  color: #2990f7;\"></ion-icon>\r\n\r\n      </div>\r\n      <div *ngIf=\"typePage == 'detail'\">\r\n\r\n        <div *ngFor=\"let item of itemDetail.ChiTietHang; index as i\" class=\"bill-item\">\r\n\r\n          <div class=\"bill-item-title\">\r\n            <p>{{i+1}}. {{item._TenVT}} - {{item.MaVT}}</p>\r\n          </div>\r\n          <table class=\"bill-table-content\">\r\n            <tr>\r\n              <td class=\"pr-20\">\r\n                <div>\r\n                  <span>ĐVT: </span> {{item.DVT}}\r\n                </div>\r\n\r\n              </td>\r\n              <td>\r\n                <span>Giá: </span>\r\n                {{item.DonGia | number}}\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>SL: </span>\r\n                {{item.SoLuong | number}}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\" pr-20\">\r\n                <span>C.K: </span>\r\n                {{item.ChietKhau_Percent}}\r\n              </td>\r\n              <td>\r\n                <span>VAT(%): </span>\r\n                {{item.VAT_Percent}}\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>T.Tiền: </span>\r\n                {{item.TongTien | number}}\r\n              </td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <td class=\" pr-20\">\r\n                <span>Lô hàng: </span>\r\n                {{item.LoHang}}\r\n              </td>\r\n              <td colspan=\"2\">\r\n                <span>Hạn dùng: </span>\r\n                {{item.HanDung | date:'dd/MM/yyyy'}}\r\n              </td>\r\n          \r\n\r\n            </tr>\r\n          </table>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"typePage != 'detail'\">\r\n\r\n        <div *ngFor=\"let item of displayChiTietHang; index as i\" class=\"bill-item\">\r\n\r\n          <div class=\"bill-item-title\">\r\n            <p>{{i+1}}. {{item._TenVT}} - {{item.MaVT}}</p>\r\n            <ion-icon (click)=\"handleRemove(item, i)\" name=\"trash-outline\"></ion-icon>\r\n\r\n          </div>\r\n         \r\n          <table>\r\n\r\n            <tr>\r\n              <td class=\"bill-select\">\r\n                <span>ĐVT:&nbsp;</span>\r\n                <div class=\"bill-select-form\">\r\n                  <div  (click)=\"handleDVT(sendItem.ChiTietHang[i].MaVT, sendItem.ChiTietHang[i].DVT, i)\">{{sendItem.ChiTietHang[i].DVT}}</div>\r\n                  <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n                </div>\r\n\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <span>Đơn giá: </span>\r\n                <input type=\"text\" [(ngModel)]=\"item.DonGia\" (ngModelChange)=\"formatInput('DonGia', i)\">\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <span>SL:&nbsp;&nbsp;&nbsp; </span>\r\n                <input type=\"text\" [(ngModel)]=\"item.SoLuong\" (ngModelChange)=\"formatInput('SoLuong', i)\">\r\n              </td>\r\n\r\n              <td class=\"text-right\">\r\n                <span>VAT: </span>\r\n                <input type=\"number\" [(ngModel)]=\"item.VAT_Percent\" (ngModelChange)=\"setInput($event,'VAT_Percent', i)\">\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <span>C.K: &nbsp;</span>\r\n                <input type=\"number\" [(ngModel)]=\"item.ChietKhau_Percent\"\r\n                (ngModelChange)=\"setInput($event,'ChietKhau_Percent', i)\">              \r\n              </td>\r\n\r\n              <td>\r\n                <div  style=\"display: flex; align-items: center; gap: 4px;\">\r\n                  <span style=\"margin-left: auto;\">Lô hàng: </span> \r\n                  <span class=\"input-disable\">{{sendItem.ChiTietHang[i].LoHang}}</span>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>\r\n                <div style=\"display: flex; align-items: center; gap: 4px;\">\r\n                  <span>H.D: </span>\r\n                  <span class=\"input-disable\">{{sendItem.ChiTietHang[i].HanDung}}</span>\r\n                </div>\r\n              </td>\r\n\r\n              <td class=\"text-center\" style=\"display: flex; float: right; padding-top: 5px;\">\r\n                <span>Tổng tiền:&nbsp;</span>\r\n                <div style=\"width: 100px; font-weight: 600;\">\r\n                  {{item.TongTien | number}}              \r\n\r\n                </div>\r\n              </td>\r\n            </tr>\r\n\r\n           \r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          THÔNG TIN THANH TOÁN\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"bill-table\">\r\n        <table>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Thành tiền</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div>\r\n                {{sumThanhTien | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.VAT</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div>\r\n                {{sumVAT | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Chiết khấu HĐ</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div *ngIf=\"typePage == 'detail'\"> {{itemDetail.ChietKhau | number}} </div>\r\n              <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" style=\"color: #006bc6;\">\r\n                <input class=\"input-no-border\" type=\"text\" [(ngModel)]=\"ChietKhauHD\" (ngModelChange)=\"formatInputBill('ChietKhau', $event)\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Chiết khấu</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div>\r\n                {{sumChietKhau | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Đã thanh toán</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div *ngIf=\"typePage == 'detail'\"> {{itemDetail.ThanhToan | number}} </div>\r\n              <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" style=\"color: #006bc6;\">\r\n                <input class=\"input-no-border\" type=\"text\" [(ngModel)]=\"ThanhToanHD\" (ngModelChange)=\"formatInputBill('ThanhToan', $event)\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">T.Tiền</td>\r\n            <td class=\"text-right font-bold\">\r\n              <div>\r\n                {{sumTongTien | number}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">HTTT</td>\r\n            <td class=\"text-right\">\r\n              <div style=\"display: flex; float: right;\">\r\n                <div *ngIf=\"typePage == 'detail'\"> {{HTTT_name}} </div>\r\n                <div *ngIf=\"typePage == 'edit' || typePage == 'create'\" (click)=\"handleHTTT()\" style=\"color: #006bc6;\">\r\n                  {{HTTT_name}}\r\n                </div>\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div> -->\r\n\r\n  <div id=\"myDiv\" class=\"printBill\">\r\n    <app-print-bill [data]=\"itemDetail2\"></app-print-bill>\r\n  </div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"typePage != 'detail'\">\r\n  <ion-toolbar>\r\n\r\n    <div class=\"bill-footer\">\r\n      <table>\r\n        <tr>\r\n          <td class=\"bill-bold\" style=\"font-weight: 600;\">T.Tiền cần trả</td>\r\n          <td class=\"text-right font-bold\" style=\"font-weight: 600;\">{{sumTongTien | number}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"bill-bold flex-item\" style=\"padding-bottom: 20px;\">\r\n            <input type=\"checkbox\" class=\"mr-5\" [(ngModel)]=\"checkToggle\" id=\"printBill\">\r\n            <label for=\"printBill\"> In hóa đơn</label>\r\n          </td>\r\n          <!-- <td class=\"text-right\">\r\n            <ion-toggle [(ngModel)]=\"checkToggle\" color=\"primary\"></ion-toggle>\r\n          </td> -->\r\n        </tr>\r\n\r\n      </table>\r\n\r\n\r\n\r\n      <div class=\"bill-btn\">\r\n\r\n        <div class=\"bill-btn-left\">\r\n          <div *ngIf=\"typePage == 'create' && sumBillWait > 0\" (click)=\"openBillWait()\" class=\"bill-btn-relative\">\r\n            <ion-icon name=\"receipt-outline\"></ion-icon>\r\n            <div>{{sumBillWait}}</div>\r\n          </div>\r\n          <button [class.w-full]=\"(typePage == 'create' && sumBillWait == 0) || typePage == 'edit'\"\r\n            [class.bg-gray-dark]=\"sumTongTien == 0\" (click)=\"confirmSubmit()\">LƯU HÓA ĐƠN</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/xuatkho/xuathang-detail/xuathang-detail-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/xuatkho/xuathang-detail/xuathang-detail-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: XuathangDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuathangDetailPageRoutingModule", function() { return XuathangDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _xuathang_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuathang-detail.page */ "./src/app/xuatkho/xuathang-detail/xuathang-detail.page.ts");




const routes = [
    {
        path: '',
        component: _xuathang_detail_page__WEBPACK_IMPORTED_MODULE_3__["XuathangDetailPage"]
    }
];
let XuathangDetailPageRoutingModule = class XuathangDetailPageRoutingModule {
};
XuathangDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], XuathangDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/xuatkho/xuathang-detail/xuathang-detail.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/xuatkho/xuathang-detail/xuathang-detail.module.ts ***!
  \*******************************************************************/
/*! exports provided: XuathangDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuathangDetailPageModule", function() { return XuathangDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _xuathang_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xuathang-detail-routing.module */ "./src/app/xuatkho/xuathang-detail/xuathang-detail-routing.module.ts");
/* harmony import */ var src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/share/print-bill/print-bill.component */ "./src/app/share/print-bill/print-bill.component.ts");
/* harmony import */ var src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/donvitinh/dvt/dvt.component */ "./src/app/donvitinh/dvt/dvt.component.ts");
/* harmony import */ var _xuathang_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xuathang-detail.page */ "./src/app/xuatkho/xuathang-detail/xuathang-detail.page.ts");









// import { PrintBillComponent } from 'src/app/share/print-bill/print-bill.component';
let XuathangDetailPageModule = class XuathangDetailPageModule {
};
XuathangDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _xuathang_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["XuathangDetailPageRoutingModule"]
        ],
        declarations: [_xuathang_detail_page__WEBPACK_IMPORTED_MODULE_8__["XuathangDetailPage"], src_app_share_print_bill_print_bill_component__WEBPACK_IMPORTED_MODULE_6__["PrintBillComponent"], src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_7__["DVTComponent"]]
    })
], XuathangDetailPageModule);



/***/ }),

/***/ "./src/app/xuatkho/xuathang-detail/xuathang-detail.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/xuatkho/xuathang-detail/xuathang-detail.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bill-header {\n  padding: 10px 0 10px 10px;\n  font-weight: 600;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  background: #F1F3F4;\n  border-bottom: 4px solid white;\n}\n.bill-header-right {\n  margin-left: auto;\n}\n.bill-header ion-icon {\n  font-size: 24px;\n  margin-right: 8px;\n}\n.bill-item {\n  padding: 10px;\n  display: flex;\n  align-items: center;\n}\n.bill-item-right {\n  margin-left: auto;\n}\n.bill-content {\n  padding: 10px;\n  border-bottom: 1px dashed var(--gray-light3);\n}\n.bill-content-header {\n  display: flex;\n  margin-bottom: 10px;\n}\n.bill-content-header div {\n  font-weight: 600;\n}\n.bill-content ion-icon {\n  font-size: 22px;\n  color: red;\n  margin-left: auto;\n}\n.bill-select {\n  display: flex;\n  align-items: center;\n}\n.bill-select-form {\n  position: relative;\n  width: 100% !important;\n}\n.bill-select-form div {\n  border: 1px solid #afafaf;\n  background: #F5F5F5;\n  border-radius: 5px;\n  padding: 6px 10px;\n}\n.bill-select-form ion-icon {\n  position: absolute;\n  top: 8px;\n  right: 2px;\n  color: gray;\n  font-size: 20px;\n}\n.bill-table {\n  padding: 0 10px;\n}\n.bill-table tr {\n  border-bottom: 1px dashed var(--gray-light3);\n}\n.bill-table td {\n  padding: 10px 0;\n}\n.bill-table ion-icon {\n  float: right;\n  color: var(--primary-color);\n  font-size: 18px;\n  width: 30px;\n}\n.bill-table-content ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.bill-table-left {\n  font-weight: 500;\n  width: 150px;\n}\n.bill-footer {\n  padding: 6px;\n}\n.bill-footer button {\n  color: white;\n  background: var(--background-color);\n  width: calc(100% - 60px);\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n}\n.bill-btn-left {\n  display: flex;\n  align-items: center;\n}\n.bill-btn-relative {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  /* height: 100%; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.bill-btn-relative ion-icon {\n  font-size: 18px;\n}\n.bill-btn-relative div {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: var(--background-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\ntable {\n  width: 100%;\n  table-layout: fixed;\n}\ntd {\n  padding-bottom: 10px;\n}\ntd i {\n  font-size: 18px;\n}\n.pr-20 {\n  padding-right: 20px;\n}\n.pr-44 {\n  padding-right: 44px !important;\n}\n.pr-15 {\n  padding-right: 15px !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date] {\n  width: 100%;\n  border: 1px solid #afafaf;\n  text-align: right;\n  background: #F5F5F5;\n  border-radius: 5px;\n  padding: 6px 10px;\n}\n.input-disable {\n  color: black !important;\n  display: inline-block;\n  text-align: right;\n  width: 100%;\n  border: 1px solid #b5b5b5;\n  background: #e7e7e7;\n  border-radius: 5px;\n  padding: 6px 10px;\n  min-height: 30px;\n}\n.input-no-border {\n  text-align: right !important;\n  border: none !important;\n  padding: 6px 0px !important;\n}\nion-toggle {\n  height: 26px;\n  --handle-width: calc(28px - (2px * 2));\n  --ion-color-base: var(--primary-color) !important;\n}\nion-footer {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n}\np {\n  margin-top: 0 !important;\n  margin-bottom: 10px !important;\n  font-weight: 600;\n}\ninput[type=checkbox] {\n  zoom: 1.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveHVhdGtoby94dWF0aGFuZy1kZXRhaWwveHVhdGhhbmctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUZSO0FBR1E7RUFDSSxpQkFBQTtBQURaO0FBSVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQU1JO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUpSO0FBTVE7RUFDSSxpQkFBQTtBQUpaO0FBUUk7RUFDSSxhQUFBO0VBQ0EsNENBQUE7QUFOUjtBQVFRO0VBQ0ksYUFBQTtFQUVBLG1CQUFBO0FBUFo7QUFTWTtFQUNJLGdCQUFBO0FBUGhCO0FBV1E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBVFo7QUFhSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVhSO0FBYVE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBWFo7QUFhWTtFQUlJLHlCQUFBO0VBRUEsbUJBQUE7RUFHQSxrQkFBQTtFQUNBLGlCQUFBO0FBakJoQjtBQW9CWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWxCaEI7QUF1Qkk7RUFDSSxlQUFBO0FBckJSO0FBdUJRO0VBQ0ksNENBQUE7QUFyQlo7QUF3QlE7RUFDSSxlQUFBO0FBdEJaO0FBMEJRO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF4Qlo7QUE0Qlk7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUExQmhCO0FBOEJRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBNUJaO0FBaUNJO0VBQ0ksWUFBQTtBQS9CUjtBQWlDUTtFQUNJLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUEvQlo7QUFxQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFuQ1o7QUFzQ1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBcENaO0FBc0NZO0VBQ0ksZUFBQTtBQXBDaEI7QUF1Q1k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFyQ2hCO0FBZ09BO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBN05KO0FBZ09BO0VBQ0ksb0JBQUE7QUE3Tko7QUFtT0k7RUFDSSxlQUFBO0FBak9SO0FBcU9BO0VBQ0ksbUJBQUE7QUFsT0o7QUFxT0E7RUFDSSw4QkFBQTtBQWxPSjtBQXFPQTtFQUNJLDhCQUFBO0FBbE9KO0FBcU9BO0VBQ0ksNEJBQUE7QUFsT0o7QUFxT0E7OztFQU9JLFdBQUE7RUFDQSx5QkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBdk9KO0FBMk9BO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF4T0o7QUEyT0E7RUFDSSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUF4T0o7QUEyT0E7RUFDSSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpREFBQTtBQXhPSjtBQTJPQTtFQUNJLHFGQUFBO0FBeE9KO0FBNE9BO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBek9KO0FBNk9BO0VBQ0ksU0FBQTtBQTFPSiIsImZpbGUiOiJzcmMvYXBwL3h1YXRraG8veHVhdGhhbmctZGV0YWlsL3h1YXRoYW5nLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRjFGM0Y0O1xyXG5cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjFGM0Y0O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAmLXJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYtcmlnaHQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tZ3JheS1saWdodDMpO1xyXG5cclxuICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXNlbGVjdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZmFmYWY7XHJcbiAgICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2NhZWVmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXRhYmxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1ncmF5LWxpZ2h0Myk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1idG4ge1xyXG4gICAgICAgICYtbGVmdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLXJlbGF0aXZlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xyXG4gICAgICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC03cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyAuYmlsbCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRjFGM0Y0O1xyXG4vLyAgICAgJi1oZWFkZXIge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGdhcDogOHB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHJcbi8vICAgICAgICAgJi1wMTMge1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgJi1sZWZ0IHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4vLyAgICAgICAgICAgICBpb24taWNvbiB7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1pdGVtIHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDdkN2Q3O1xyXG5cclxuLy8gICAgICAgICAmLXRpdGxlIHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xyXG5cclxuLy8gICAgICAgICAgICAgcCB7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBpb24taWNvbiB7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjZGQwMDAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgICYtdGFibGUge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuXHJcbi8vICAgICAgICAgdHIge1xyXG4vLyAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q3ZDdkNztcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHRkIHtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlvbi1pY29uIHtcclxuLy8gICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbi8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAmLWNvbnRlbnQge1xyXG4vLyAgICAgICAgICAgICBpb24taWNvbiB7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICYtbGVmdCB7XHJcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgJi1mb290ZXIge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuXHJcbi8vICAgICAgICAgYnV0dG9uIHtcclxuLy8gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAmLWJ0biB7XHJcbi8vICAgICAgICAgJi1sZWZ0IHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICYtcmVsYXRpdmUge1xyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTYxNjE7XHJcbi8vICAgICAgICAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuLy8gICAgICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBkaXYge1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XHJcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgICAgICB0b3A6IC00cHg7XHJcbi8vICAgICAgICAgICAgICAgICByaWdodDogLTdweDtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG5cclxuLy8gICAgICYtYm9sZCB7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAmLXJpZ2h0IHtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgIH1cclxuXHJcblxyXG4vLyAgICAgJi1zZWxlY3Qge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgICAgICAgJi1mb3JtIHtcclxuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuLy8gICAgICAgICAgICAgZGl2IHtcclxuXHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTA1cHg7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuLy8gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjYWVlZmY7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbi8vICAgICAgICAgICAgICAgICByaWdodDogMnB4O1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG5cclxuLy8gICAgIH1cclxuXHJcbi8vIH1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxudGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgLy8gc3BhbiB7XHJcbiAgICAvLyAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHItMjAge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnByLTQ0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByLTE1IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBiLTAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICAgIC8vIHdpZHRoOiAxMDBweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWZhZmFmO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uaW5wdXQtZGlzYWJsZSB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjViNWI1O1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmlucHV0LW5vLWJvcmRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIC0taGFuZGxlLXdpZHRoOiBjYWxjKDI4cHggLSAoMnB4ICogMikpO1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ1ZDU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICB6b29tOiAxLjM7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/xuatkho/xuathang-detail/xuathang-detail.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/xuatkho/xuathang-detail/xuathang-detail.page.ts ***!
  \*****************************************************************/
/*! exports provided: XuathangDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuathangDetailPage", function() { return XuathangDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_bill_bill_wait_bill_wait_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/bill/bill-wait/bill-wait.page */ "./src/app/bill/bill-wait/bill-wait.page.ts");
/* harmony import */ var src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/donvi/donvi-index/donvi-index.page */ "./src/app/donvi/donvi-index/donvi-index.page.ts");
/* harmony import */ var src_app_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/function.service */ "./src/app/function.service.ts");
/* harmony import */ var src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/kho/kho-index/kho-index.page */ "./src/app/kho/kho-index/kho-index.page.ts");
/* harmony import */ var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/AlertService */ "./src/app/service/AlertService.ts");
/* harmony import */ var src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/kho.service */ "./src/app/service/kho.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");
/* harmony import */ var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/toastService */ "./src/app/service/toastService.ts");
/* harmony import */ var src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/service/unit.service */ "./src/app/service/unit.service.ts");
/* harmony import */ var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/service/vattu.service */ "./src/app/service/vattu.service.ts");
/* harmony import */ var src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/service/xuatkho.service */ "./src/app/service/xuatkho.service.ts");
/* harmony import */ var src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/donvitinh/dvt/dvt.component */ "./src/app/donvitinh/dvt/dvt.component.ts");
/* harmony import */ var src_app_vattu_vattu_index_vattu_index_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/vattu/vattu-index/vattu-index.page */ "./src/app/vattu/vattu-index/vattu-index.page.ts");
/* harmony import */ var src_app_share_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/share/helper */ "./src/app/share/helper.ts");




















let XuathangDetailPage = class XuathangDetailPage {
    constructor(ToastService, FunctionService, popoverController, router, toastController, modalController, XuatkhoService, AlertService, navController, LoadingService, route, printer, currencyPipe, KhoService, cdr, actionSheetController, UnitService, VattuService, convertHelper) {
        this.ToastService = ToastService;
        this.FunctionService = FunctionService;
        this.popoverController = popoverController;
        this.router = router;
        this.toastController = toastController;
        this.modalController = modalController;
        this.XuatkhoService = XuatkhoService;
        this.AlertService = AlertService;
        this.navController = navController;
        this.LoadingService = LoadingService;
        this.route = route;
        this.printer = printer;
        this.currencyPipe = currencyPipe;
        this.KhoService = KhoService;
        this.cdr = cdr;
        this.actionSheetController = actionSheetController;
        this.UnitService = UnitService;
        this.VattuService = VattuService;
        this.convertHelper = convertHelper;
        this.chungchi = {
            ChungTuID: '',
            nam_du_lieu: ''
        };
        this.donvi = '';
        this.submit = false;
        this.kho = '';
        this.HTTT = 'TM';
        this.sendItem = {
            "DVXuat": "",
            "KhoXuat": "",
            "nam_du_lieu": "",
            "LoaiCTID": 2,
            "ChungTuID": 0,
            "BanTheoDon": false,
            "SoCT": "",
            "ThoiDiem": "",
            "DienGiai": "",
            "ChietKhau": 0,
            "ThanhToan": 0,
            "SoTK": "",
            "ChiTietHang": []
        };
        this.loaiCT_name = '';
        this.LoaiCTByBill = [];
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
            "LoHang": "",
            "HanDung": ""
        };
        this.sendVattu = {
            "loainx": "''",
            "khohang": "",
            "xuatam": 0,
            "banggia": ""
        };
        this.checkToggle = false;
        this.displayChiTietHang = [];
        this.listKho = [];
        this.sumBillWait = 0;
        this.listUnit = [];
        this.listVattu = [];
        this.banggia = [];
        this.itemDetail2 = [];
        this.sendChungChi = {
            isCreate: false,
            ChungTuID: '',
            nam_du_lieu: ''
        };
        this.checkChungTuID = 0;
        this.ChietKhauHD = '0';
        this.ThanhToanHD = '0';
        this.sumChietKhauTemp = 0;
        this.sumTongTienTemp = 0;
        this.title = '';
        this.typePage = '';
        this.itemDetail = [];
        this.check = false;
        this.indexItem = [];
        this.listBillWait = [];
        this.countProduct = 0;
        this.sumThanhTien = 0;
        this.sumTongTien = 0;
        this.sumVAT = 0;
        this.sumChietKhau = 0;
        // sumThanhToan: number = 0;
        this.LoaiCTID = 0;
        this.DienGiai = '';
        this.loainx = '';
        this.HTTT_name = 'Tiền mặt';
        this.loaiCTNow = {};
        this.pageParent = '';
        this.getDSTK();
        this.listBillWait = JSON.parse(localStorage.getItem('billWaitXuatHang') || '[]');
        this.route.queryParams.subscribe(params => {
            this.chungchi.ChungTuID = params.ChungTuID;
            this.chungchi.nam_du_lieu = params.nam_du_lieu;
            this.sendChungChi.ChungTuID = params.ChungTuID;
            this.sendChungChi.nam_du_lieu = params.nam_du_lieu;
            this.LoaiCTID = params.LoaiCTID;
            this.DienGiai = params.DienGiai;
            this.typePage = params.Type;
            this.pageParent = params.pageParent;
            this.title = params.Type == 'detail' ? 'Chi tiết' : params.Type == 'create' ? 'Thêm' : 'Sửa';
            this.countBillWait();
            if (this.typePage == 'detail' || this.typePage == 'edit') {
                this.getDSTKAndDetail();
            }
            else {
                var now = new Date();
                var year = now.getFullYear();
                var hours = now.getHours();
                var minute = now.getMinutes();
                this.sendItem.nam_du_lieu = year.toString();
                var LoaiCT = JSON.parse(localStorage.getItem('loaiBanle') || '[]');
                if (params.LoaiCTID) {
                    this.loaiCTNow = this.convertHelper.typeChungTuObj(params.LoaiCTID);
                    // this.loaiCT_name = this.loaiCTNow.DienGiai;
                    this.sendItem.LoaiCTID = this.loaiCTNow.LoaiCTID;
                }
                else {
                    this.loaiCTNow = LoaiCT[0];
                    this.sendItem.LoaiCTID = LoaiCT[0].LoaiCTID;
                }
                this.sendItem.SoTK = this.SoTK;
                this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
                this.sendItem.ChungTuID = new Date().getTime();
                this.sendItem.SoCT = `${this.getInitials(this.loaiCTNow.DienGiai)}${this.sendItem.ChungTuID}`;
                this.chungchi.ChungTuID = this.sendItem.ChungTuID;
                this.chungchi.nam_du_lieu = year.toString();
                this.getLoaiCT();
            }
            this.getUnit();
        });
    }
    ngOnInit() {
        this.getDSTK();
    }
    onSoTKChange($event) {
        this.SoTK = "111";
        if ($event.target.value == undefined) {
            this.SoTK = "111";
        }
        else {
            this.SoTK = $event.target.value;
            console.log("197", this.SoTK);
            this.sendItem.SoTK = this.SoTK;
        }
    }
    getInitials(text) {
        const words = text.split(' ');
        const initials = words.map(word => word.charAt(0).toUpperCase());
        return initials.join('');
    }
    getLoaiCT() {
        this.LoaiCTByBill = JSON.parse(localStorage.getItem('loaiBanle') || '[]');
        for (let i = 0; i < this.LoaiCTByBill.length; i++) {
            if (this.LoaiCTByBill[i].LoaiCTID == this.sendItem.LoaiCTID) {
                this.loaiCTNow = this.LoaiCTByBill[i];
                // this.loaiCT_name = this.LoaiCTByBill[i].DienGiai;
                this.banggia = this.LoaiCTByBill[i].BangGia;
                this.loainx = this.LoaiCTByBill[i].LoaiNX;
                this.xuatam = this.LoaiCTByBill[i].XuatAm;
                break;
            }
        }
        this.getKho();
    }
    getDSTK() {
        this.FunctionService.getDSTK().subscribe((response) => {
            this.listTaiKhoan = response;
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    getDSTKAndDetail() {
        this.FunctionService.getDSTK().subscribe((response) => {
            this.listTaiKhoan = response;
            this.getChungTuDetail();
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    getKho() {
        this.KhoService.getKho().subscribe((response) => {
            this.listKho = response;
            if (this.typePage == 'create') {
                // this.makho = response[0].MaKho;
                this.kho = response[0].TenKho;
                // this.sendItem.KhoXuat = response[0].MaKho;
                this.sendItem.KhoXuat = response[0].MaKho;
            }
            this.getVattu();
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    getUnit() {
        this.UnitService.getUnit().subscribe((response) => {
            this.listUnit = response;
        }, (error) => {
            setTimeout(() => {
                console.log('error', error);
            }, 1000);
        });
    }
    getVattu() {
        this.sendVattu.loainx = this.loainx;
        this.sendVattu.banggia = this.banggia;
        this.sendVattu.khohang = this.sendItem.KhoXuat;
        this.sendVattu.xuatam = this.xuatam ? 1 : 0;
        this.VattuService.GetListVT(this.sendVattu).subscribe((response) => {
            // console.log('llllllllllll', response);
            this.listVattu = response;
        }, (error) => {
            console.log('error', error);
        });
    }
    convNumber(number) {
        return number < 10 ? '0' + number : number;
    }
    handleDVT(MaVT, DVT, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem("InOutType", "X");
            const popover = yield this.popoverController.create({
                component: src_app_donvitinh_dvt_dvt_component__WEBPACK_IMPORTED_MODULE_17__["DVTComponent"],
                cssClass: 'popup-cont-info',
                componentProps: {
                    "MaVT": MaVT,
                    "DVT": DVT
                },
                translucent: true,
            });
            yield popover.present();
            popover.onDidDismiss().then((dataReturned) => {
                if (dataReturned.data) {
                    this.sendItem.ChiTietHang[index].DVT = dataReturned.data.DVT;
                    this.sendItem.ChiTietHang[index].DonGia = dataReturned.data.GiaBanLe;
                    this.sendItem.ChiTietHang[index].GiaBanLe = dataReturned.data.GiaBanLe;
                    this.sendItem.ChiTietHang[index].GiaBanSy = dataReturned.data.GiaBanSy;
                    this.sumMoney(index);
                    this.displayChiTietHang[index].DonGia = new Intl.NumberFormat().format(dataReturned.data.GiaBanLe).replace(/\./g, ',');
                    this.getTongTien(index);
                }
            });
        });
    }
    sumMoney(index) {
        this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;
        this.sendItem.ChiTietHang[index].ChietKhau = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].ChietKhau_Percent / 100;
        this.sendItem.ChiTietHang[index].VAT = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].VAT_Percent / 100;
    }
    handleEdit() {
        this.typePage = 'edit';
    }
    handleDetail() {
        this.typePage = 'detail';
    }
    getChungTuDetail(print) {
        this.LoadingService.setValue(true);
        this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe((response) => {
            this.itemDetail = response[0];
            console.log(this.itemDetail);
            this.itemDetail2 = response[0];
            this.countProduct = response[0].ChiTietHang.length;
            // this.sendItem.BanTheoDon = response[0].BanTheoDon;
            this.sendItem.ChungTuID = response[0].ChungTuID;
            this.sendItem.LoaiCTID = response[0].LoaiCTID;
            this.sendItem.SoCT = response[0].SoCT;
            this.sendItem.ThoiDiem = response[0].ThoiDiem;
            this.sendItem.nam_du_lieu = this.chungchi.nam_du_lieu;
            this.sendItem.DVXuat = response[0].DVXuat;
            this.sendItem.KhoXuat = response[0].KhoXuat;
            this.sendItem.ChietKhau = response[0].ChietKhau;
            this.sendItem.ThanhToan = response[0].ThanhToan;
            this.donvi = response[0]._TenDVXuat;
            this.kho = response[0]._TenKhoXuat;
            this.HTTT_name = response[0].ChiTietHang[0].HTTT == 'CK' ? 'Chuyển khoản' : 'Tiền mặt';
            this.ChietKhauHD = this.currencyPipe.transform(String(response[0].ChietKhau).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            try {
                for (let i = 0; i <= this.listTaiKhoan.length; i++) {
                    let item = this.listTaiKhoan[i];
                    if (item != undefined) {
                        if (item.SoTK == response[0].SoTK) {
                            this.SoTK = item.SoTK;
                        }
                    }
                }
            }
            catch (_a) { }
            if (print) {
                setTimeout(() => {
                    this.LoadingService.setValue(false);
                    this.openPrint();
                }, 3000);
            }
            else {
                this.LoadingService.setValue(false);
            }
            this.getLoaiCT();
            this.setChietHang();
            this.countMoney(response[0]);
        }, (error) => {
            console.log('error', error);
            this.LoadingService.setValue(false);
        });
    }
    getChungTuDetail2() {
        // this.LoadingService.setValue(true);
        this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe((response) => {
            this.itemDetail2 = response[0];
            this.cdr.detectChanges();
            setTimeout(() => {
                this.LoadingService.setValue(false);
                this.openPrint();
            }, 3000);
        }, (error) => {
            console.log('error', error);
            this.LoadingService.setValue(false);
        });
    }
    setChietHang() {
        this.sendItem.ChiTietHang = [];
        this.displayChiTietHang = [];
        for (let i = 0; i < this.itemDetail.ChiTietHang.length; i++) {
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
                "TongTien": this.itemDetail.ChiTietHang[i].TongTien,
            });
        }
    }
    countMoney(billDetail) {
        this.sumThanhTien = 0;
        this.sumTongTien = 0;
        this.sumVAT = 0;
        this.sumChietKhau = 0;
        this.sumChietKhauTemp = 0;
        // this.sumThanhToan = 0;
        if (this.typePage != 'create') {
            this.sumChietKhau = this.itemDetail.ChietKhau ? this.itemDetail.ChietKhau : 0;
        }
        for (let i = 0; i < billDetail.ChiTietHang.length; i++) {
            this.sumThanhTien = this.sumThanhTien + billDetail.ChiTietHang[i].ThanhTien;
            this.sumTongTien = this.sumTongTien + billDetail.ChiTietHang[i].TongTien;
            this.sumVAT = this.sumVAT + billDetail.ChiTietHang[i].VAT;
            this.sumChietKhauTemp = this.sumChietKhauTemp + billDetail.ChiTietHang[i].ChietKhau;
            // this.sumChietKhauTemp = this.sumChietKhau + billDetail.ChiTietHang[i].ChietKhau;
        }
        this.sumChietKhau = this.sumChietKhauTemp + billDetail.ChietKhau;
        this.sumTongTien -= billDetail.ChietKhau;
        if (this.typePage == 'create') {
            this.sendItem.ThanhToan = this.sumTongTien;
            this.ThanhToanHD = this.currencyPipe.transform(String(this.sumTongTien).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
        }
        else {
            this.ThanhToanHD = this.currencyPipe.transform(String(this.sendItem.ThanhToan).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
        }
        this.sumTongTienTemp = this.sumTongTien;
    }
    formatInput(item, index, type) {
        // if (type && type == 'plus') {
        //   this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) + 1);
        // }
        // if (type && type == 'subtraction') {
        //   this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) - 1);
        // }
        var convNumber = this.currencyPipe.transform(this.displayChiTietHang[index][item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
        this.displayChiTietHang[index][item] = convNumber;
        this.sendItem.ChiTietHang[index][item] = Number(convNumber.replace(/,/g, ''));
        if (item == "DonGia" || item == "SoLuong") {
            this.sendItem.ChiTietHang[index][item] = Number(this.displayChiTietHang[index][item].replace(/,/g, ''));
            this.sumMoney(index);
            this.getTongTien(index);
        }
    }
    formatInputBill(item, e) {
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
        }
        else if (item == 'ThanhToan') {
            this.ThanhToanHD = convNumber;
        }
    }
    openUnit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_donvi_donvi_index_donvi_index_page__WEBPACK_IMPORTED_MODULE_7__["DonviIndexPage"],
                cssClass: 'modalOpen',
                componentProps: {
                    'page': 'xuatbanle'
                    // "listUnit": this.listUnit,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                if (dataReturned.data) {
                    this.sendItem.DVXuat = dataReturned.data.MaDV;
                    this.donvi = dataReturned.data.TenDV;
                }
            });
            return yield modal.present();
        });
    }
    openKho() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_kho_kho_index_kho_index_page__WEBPACK_IMPORTED_MODULE_9__["KhoIndexPage"],
                cssClass: 'modalOpen',
                componentProps: {
                // "listKho": this.listKho,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned.data) {
                    // this.makho = dataReturned.data.MaKho;
                    this.sendItem.KhoXuat = dataReturned.data.MaKho;
                    this.kho = dataReturned.data.TenKho;
                    this.getVattu();
                }
            });
            return yield modal.present();
        });
    }
    openVattu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (!this.makho) {
            //   return;
            // }
            // this.LoadingService.setValue(true);
            const modal = yield this.modalController.create({
                component: src_app_vattu_vattu_index_vattu_index_page__WEBPACK_IMPORTED_MODULE_18__["VattuIndexPage"],
                cssClass: 'modalOpen',
                componentProps: {
                    // "makho": this.sendItem.KhoXuat,
                    // "banggia": this.banggia,
                    "page": "xuatbanle",
                    "listVattu": this.listVattu,
                    "listItem": this.sendItem.ChiTietHang,
                },
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned && dataReturned.data) {
                    this.displayChiTietHang = [];
                    for (let i = 0; i < dataReturned.data.length; i++) {
                        let foundVattu = this.listVattu.find((o) => o.MaVT === dataReturned.data[i].MaVT);
                        this.displayChiTietHang.push({
                            "_TenVT": foundVattu.TenVT,
                            "MaVT": dataReturned.data[i].MaVT,
                            "DVT": dataReturned.data[i].DVT,
                            'DonGia': dataReturned.data[i].DonGia ? new Intl.NumberFormat().format(dataReturned.data[i].DonGia).replace(/\./g, ',') : '0',
                            'SoLuong': new Intl.NumberFormat().format(dataReturned.data[i].SoLuong).replace(/\./g, ','),
                            "ChietKhau_Percent": dataReturned.data[i].ChietKhau_Percent,
                            "VAT_Percent": dataReturned.data[i].VAT_Percent,
                            "TongTien": dataReturned.data[i].TongTien,
                        });
                    }
                    this.sendItem.ChiTietHang = dataReturned.data;
                    this.countProduct = this.displayChiTietHang.length;
                    this.countMoney(this.sendItem);
                }
            });
            return yield modal.present();
        });
    }
    setInput(e, item, index) {
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
    getTongTien(index) {
        this.sendItem.ChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].ThanhTien + this.sendItem.ChiTietHang[index].VAT - this.sendItem.ChiTietHang[index].ChietKhau;
        this.displayChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].TongTien;
        this.countMoney(this.sendItem);
    }
    handleRemove(item, index) {
        this.AlertService.presentAlert(`Bạn có chắc muốn xóa mặt hàng "${item._TenVT}"?`).then(res => {
            if (res == 'true') {
                // console.log('eeee');
                this.displayChiTietHang.splice(index, 1);
                this.sendItem.ChiTietHang.splice(index, 1);
                this.countMoney(this.sendItem);
                // this.countMoney(this.displayChiTietHang);
            }
        });
    }
    openTypeChungTu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var arrBtn = [];
            for (let i = 0; i < this.LoaiCTByBill.length; i++) {
                arrBtn.push({
                    text: this.LoaiCTByBill[i].DienGiai,
                    icon: 'cash-outline',
                    cssClass: this.sendItem.LoaiCTID == this.LoaiCTByBill[i].LoaiCTID ? 'buttonSheetOn' : 'buttonSheetOff',
                    handler: () => {
                        // this.loaiCT_name = this.LoaiCTByBill[i].DienGiai;
                        this.sendItem.LoaiCTID = this.LoaiCTByBill[i].LoaiCTID;
                        this.sendItem.SoCT = `${this.getInitials(this.LoaiCTByBill[i].DienGiai)}${this.sendItem.ChungTuID}`;
                        this.loaiCTNow = this.LoaiCTByBill[i];
                    }
                });
            }
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'left-align-buttons',
                buttons: arrBtn
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
        });
    }
    resetItem() {
        this.submit = false;
        this.sendItem = {
            "DVXuat": "",
            "KhoXuat": this.sendItem.KhoXuat,
            "BanTheoDon": false,
            "nam_du_lieu": "",
            "LoaiCTID": this.sendItem.LoaiCTID,
            "ChungTuID": 0,
            "SoCT": "",
            "ThoiDiem": "",
            "DienGiai": "",
            "ChietKhau": 0,
            "ThanhToan": 0,
            "SoTK": "111",
            "ChiTietHang": []
        };
        this.ChietKhauHD = '0';
        this.ThanhToanHD = '0';
        this.sumChietKhauTemp = 0;
        this.sumTongTienTemp = 0;
        this.donvi = "";
        this.sendItem.ChiTietHang = [];
        this.displayChiTietHang = [];
        this.sumThanhTien = 0;
        this.sumTongTien = 0;
        this.sumVAT = 0;
        this.sumChietKhau = 0;
        // this.sumThanhToan = 0;
        this.countProduct = 0;
        var now = new Date();
        var year = now.getFullYear();
        var hours = now.getHours();
        var minute = now.getMinutes();
        this.sendItem.nam_du_lieu = year.toString();
        this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
        this.sumTongTien = 0;
        this.sendItem.ChungTuID = new Date().getTime();
        this.sendItem.SoCT = `${this.getInitials(this.loaiCTNow.DienGiai)}${this.sendItem.ChungTuID}`;
        this.getVattu();
        setTimeout(() => {
            this.chungchi.ChungTuID = this.sendItem.ChungTuID;
            this.chungchi.nam_du_lieu = this.sendItem.nam_du_lieu;
        }, 4000);
    }
    openBillWait() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_bill_bill_wait_bill_wait_page__WEBPACK_IMPORTED_MODULE_6__["BillWaitPage"],
                cssClass: 'modalOpen',
                componentProps: {
                    "LoaiCTID": this.LoaiCTID,
                    "LoaiNX": this.loaiCTNow.LoaiNX
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                this.listBillWait = JSON.parse(localStorage.getItem('billWaitXuatHang') || '[]');
                this.sumBillWait = this.listBillWait.length;
                if (dataReturned.data) {
                    this.sendItem = dataReturned.data.item;
                    this.kho = dataReturned.data.item.kho_name;
                    this.donvi = dataReturned.data.item.donvi_name;
                    this.displayChiTietHang = [];
                    for (let i = 0; i < dataReturned.data.item.ChiTietHang.length; i++) {
                        this.displayChiTietHang.push({
                            "_TenVT": dataReturned.data.item.ChiTietHang[i]._TenVT,
                            "MaVT": dataReturned.data.item.ChiTietHang[i].MaVT,
                            "DVT": dataReturned.data.item.ChiTietHang[i].DVT,
                            'DonGia': dataReturned.data.item.ChiTietHang[i].DonGia ? new Intl.NumberFormat().format(dataReturned.data.item.ChiTietHang[i].DonGia).replace(/\./g, ',') : '0',
                            'SoLuong': new Intl.NumberFormat().format(dataReturned.data.item.ChiTietHang[i].SoLuong).replace(/\./g, ','),
                            "ChietKhau_Percent": dataReturned.data.item.ChiTietHang[i].ChietKhau_Percent,
                            "VAT_Percent": dataReturned.data.item.ChiTietHang[i].VAT_Percent,
                            "TongTien": dataReturned.data.item.ChiTietHang[i].TongTien,
                        });
                    }
                    this.countProduct = this.displayChiTietHang.length;
                    this.checkChungTuID = dataReturned.data.item.ChungTuID;
                    this.countMoney(this.sendItem);
                    // for (let i = 0; i < this.listKho.length; i++) {
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
                    this.sendItem.nam_du_lieu = year.toString();
                    this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
                    this.sendItem.ChietKhau = dataReturned.data.item.ChietKhau;
                    this.sendItem.ThanhToan = dataReturned.data.item.ThanhToan;
                    this.ChietKhauHD = this.currencyPipe.transform(String(this.sendItem.ChietKhau).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
                    // this.ThanhToanHD = this.currencyPipe.transform(String(this.sendItem.ThanhToan).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
                    this.sendItem.ChungTuID = dataReturned.data.item.ChungTuID;
                    this.sendItem.SoCT = dataReturned.data.item.SoCT;
                }
            });
            return yield modal.present();
        });
    }
    countBillWait() {
        // this.sumBillWait = 0;
        // for (let i = 0; i < this.listBillWait.length; i++) {
        //   if (this.listBillWait[i].LoaiCTID == this.LoaiCTID) {
        //     this.sumBillWait += 1;
        //   }
        // }
        this.sumBillWait = this.listBillWait.length;
    }
    handleHTTT() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                cssClass: 'left-align-buttons',
                buttons: [
                    {
                        text: 'Tiền mặt',
                        icon: 'cash-outline',
                        cssClass: this.HTTT_name == 'Tiền mặt' ? 'buttonSheetOn' : 'buttonSheetOff',
                        handler: () => {
                            this.HTTT_name = 'Tiền mặt';
                            this.HTTT = 'TM';
                        }
                    },
                    {
                        text: 'Chuyển khoản',
                        icon: 'card-outline',
                        cssClass: this.HTTT_name == 'Chuyển khoản' ? 'buttonSheetOn' : 'buttonSheetOff',
                        handler: () => {
                            this.HTTT_name = 'Chuyển khoản';
                            this.HTTT = 'CK';
                        },
                    }
                ]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
        });
    }
    confirmSubmit() {
        this.submit = true;
        if (this.sumTongTien == 0) {
            return;
        }
        if (!this.donvi && (this.sendItem.ThanhToan < this.sumTongTien)) {
            this.ToastService.warningToast("Vui lòng chọn khách hàng!");
            return;
        }
        if (this.SoTK == undefined) {
            for (let i = 0; i <= this.listTaiKhoan.length; i++) {
                let item = this.listTaiKhoan[i];
                if (item != undefined) {
                    if (item.LoaiTK == "111") {
                        this.SoTK = item.SoTK;
                        console.log("827", this.SoTK);
                        this.sendItem.SoTK = this.SoTK;
                    }
                }
            }
        }
        // console.log("820", this.sendItem.SoTK);
        // console.log('this.sendItem', this.sendItem);
        if (this.typePage == 'create') {
            // if (!checkExit) {
            this.AlertService.presentAlert(`Bạn có chắc muốn thêm hóa đơn?`).then(res => {
                if (res == 'true') {
                    this.createImport();
                }
            });
            // }
        }
        else {
            this.AlertService.presentAlert(`Bạn có chắc muốn sửa hóa đơn?`).then(res => {
                if (res == 'true') {
                    this.updateImport();
                }
            });
        }
    }
    createImport() {
        this.LoadingService.setValue(true);
        this.XuatkhoService.createXuatHang(this.sendItem).subscribe((response) => {
            if (response.code == 0) {
                this.ToastService.successToast(response.message);
                this.resetItem();
                this.getVattu();
                if (this.checkToggle) {
                    this.getChungTuDetail2();
                }
                else {
                    this.LoadingService.setValue(false);
                }
                for (let i = 0; i < this.listBillWait.length; i++) {
                    if (this.listBillWait[i].ChungTuID == this.checkChungTuID) {
                        this.listBillWait.splice(i, 1);
                        localStorage.setItem('billWaitXuatHang', JSON.stringify(this.listBillWait));
                        this.countBillWait();
                        break;
                    }
                }
            }
            else {
                this.ToastService.errorToast(response.message);
                this.LoadingService.setValue(false);
            }
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
    updateImport() {
        this.LoadingService.setValue(true);
        this.XuatkhoService.updateXuatHang(this.sendItem).subscribe((response) => {
            if (response.code == 0) {
                this.ToastService.successToast(response.message);
                // this.getChungTuDetail();
                this.getVattu();
                if (this.checkToggle) {
                    this.getChungTuDetail('print');
                }
                else {
                    this.LoadingService.setValue(false);
                }
            }
            else {
                this.ToastService.errorToast(response.message);
                this.LoadingService.setValue(false);
            }
            // this.LoadingService.setValue(false);
        }, (error) => {
            this.LoadingService.setValue(false);
            console.log('error', error);
        });
    }
    openPrint() {
        var myDiv = document.getElementById("myDiv");
        var divContent = myDiv.outerHTML;
        this.printer.isAvailable().then((onsuccess) => {
            let options = {};
            this.printer.print(divContent, options).then((value) => {
                console.log('value:', value);
            }, (error) => {
                console.log('error:', error);
            });
        }, (err) => {
            console.log('Error', err);
        });
    }
    handleBillWait() {
        this.sendItem.kho_name = this.kho;
        this.sendItem.donvi_name = this.donvi;
        this.listBillWait.push(this.sendItem);
        localStorage.setItem('billWaitXuatHang', JSON.stringify(this.listBillWait));
        this.countBillWait();
        this.resetItem();
        this.ToastService.successToast('Thêm hóa đơn chờ thành công!');
    }
    backListBill() {
        this.navController.navigateBack(["bill-list"], {
            queryParams: {
                'LoaiCTID': this.loaiCTNow.LoaiCTID,
                'DienGiai': this.DienGiai
            }
        });
    }
    handleTypeCT() {
    }
    openBack() {
        if (this.pageParent == 'home') {
            this.navController.navigateBack(['tabs/tab3']);
        }
        else {
            this.navController.navigateBack(["bill-list"], {
                queryParams: {
                    'LoaiCTID': this.LoaiCTID,
                    'DienGiai': this.DienGiai
                }
            });
        }
    }
};
XuathangDetailPage.ctorParameters = () => [
    { type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_13__["ToastService"] },
    { type: src_app_function_service__WEBPACK_IMPORTED_MODULE_8__["FunctionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_service_xuatkho_service__WEBPACK_IMPORTED_MODULE_16__["XuatkhoService"] },
    { type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_12__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__["Printer"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"] },
    { type: src_app_service_kho_service__WEBPACK_IMPORTED_MODULE_11__["KhoService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: src_app_service_unit_service__WEBPACK_IMPORTED_MODULE_14__["UnitService"] },
    { type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_15__["VattuService"] },
    { type: src_app_share_helper__WEBPACK_IMPORTED_MODULE_19__["convertHelper"] }
];
XuathangDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-xuathang-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./xuathang-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/xuatkho/xuathang-detail/xuathang-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./xuathang-detail.page.scss */ "./src/app/xuatkho/xuathang-detail/xuathang-detail.page.scss")).default]
    })
], XuathangDetailPage);



/***/ })

}]);
//# sourceMappingURL=xuatkho-xuathang-detail-xuathang-detail-module-es2015.js.map