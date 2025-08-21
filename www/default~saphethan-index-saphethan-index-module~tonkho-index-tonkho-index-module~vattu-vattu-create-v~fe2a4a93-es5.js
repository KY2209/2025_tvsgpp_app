(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~fe2a4a93"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDonvitinhDvtCreateDvtCreatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>donvi-create</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"unit\">\r\n    <div class=\"unit-header\">\r\n      <div class=\"unit-title\">Đơn vị tính</div>\r\n      <ion-icon (click)=\"closeModal()\" name=\"close-outline\"></ion-icon>\r\n    </div>\r\n    <table class=\"w-full\">\r\n      <tr>\r\n        <td colspan=\"2\">\r\n          <div class=\"unit-item\">\r\n            <label for=\"\">Đơn vị tính <span class=\"text-err\">*</span></label>\r\n            <input type=\"text\" [(ngModel)]=\"sendItem.DVT\">\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr *ngIf=\"submit && !sendItem.DVT\" class=\"no-border-top\">\r\n        <td colspan=\"2\" class=\"text-err\"  style=\"padding-top: 8px !important;\">\r\n          Trường bắt buộc nhập\r\n        </td>\r\n      </tr>\r\n  \r\n \r\n      <tr>\r\n        <td>\r\n            <div class=\"unit-item pr-5\">\r\n              <label for=\"\">Quy đổi thành</label>\r\n              <input type=\"number\" [(ngModel)]=\"sendItem.SoLuongQuyDoi\" >\r\n            </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"unit-item pl-5\">\r\n            <label for=\"\">Đơn giá mua</label>\r\n            <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaMua\" (ngModelChange)=\"formatInput('GiaMua', $event)\">\r\n          </div>\r\n      </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n            <div class=\"unit-item pr-5\">\r\n              <label for=\"\">Đơn giá bán lẻ</label>\r\n              <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaBanLe\" (ngModelChange)=\"formatInput('GiaBanLe', $event)\">\r\n            </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"unit-item pl-5\">\r\n            <label for=\"\">Đơn giá bán sỷ</label>\r\n            <input type=\"text\" [(ngModel)]=\"this.sendItemConv.GiaBanSy\" (ngModelChange)=\"formatInput('GiaBanSy', $event)\">\r\n          </div>\r\n      </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div> \r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n\r\n  <div class=\"unit-footer\">\r\n    <button (click)=\"confirmSubmit()\">LƯU ĐƠN VỊ TÍNH </button>\r\n  </div>\r\n</ion-toolbar>\r\n\r\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-create/vattu-create.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-create/vattu-create.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVattuVattuCreateVattuCreatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Thêm vật tư\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"duplicate-outline\"></ion-icon> -->\r\n        <ion-icon (click)=\"handleProductCountry()\" name=\"search-outline\"></ion-icon>\r\n      </ion-item>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"bill\">\r\n    <div class=\"bill-product\">\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n\r\n          Chi tiết vật tư\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"bill-table\">\r\n        <table>\r\n          <tr *ngIf=\"displayImg\">\r\n            <td class=\"bill-table-left\">Ảnh đại diện</td>\r\n            <td>\r\n              <div>\r\n                <label class=\"bill-avatar\" for=\"file-upload\">\r\n                  <img *ngIf=\"!sendItem.Img\" src=\"../../../assets/images/no-img.jpg\" alt=\"\">\r\n                  <img *ngIf=\"sendItem.Img\" [src]=\"'data:image/jpeg;base64,'+sendItem.Img\" alt=\"\">\r\n                </label>\r\n                <input id=\"file-upload\" type=\"file\" accept=\"image/png, image/jpeg\" (change)=\"onChange($event)\">\r\n              </div>\r\n\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Link ảnh</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.ImgLink\">\r\n                <!-- <ion-icon (click)=\"handleGroupProduct()\" name=\"options-outline\"></ion-icon> -->\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Nhóm VT</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.NhomVT\">\r\n                <!-- <ion-icon (click)=\"handleGroupProduct()\" name=\"options-outline\"></ion-icon> -->\r\n                <ion-icon (click)=\"handleGroupProduct()\" name=\"menu-outline\"></ion-icon>\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n\r\n          <!-- <tr *ngIf=\"isCreate != 'true'\">\r\n            <td class=\"bill-table-left\">Mã vạch</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input class=\"bg-gray\" type=\"text\" [(ngModel)]=\"sendItem.MaVach\" [disabled]=\"true\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr> -->\r\n          <tr>\r\n            <td class=\"bill-table-left\">Tên hàng <span class=\"text-err\">*</span></td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.TenVT\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"isSubmit && !sendItem.TenVT\" class=\"no-border-top\">\r\n            <td class=\"bill-table-left\"></td>\r\n            <td class=\"text-right text-err\">\r\n              Trường bắt buộc nhập\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td class=\"bill-table-left\">Đơn vị tính <span class=\"text-err\">*</span></td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.DVT\">\r\n                <ion-icon (click)=\"changeCalculation()\" name=\"add-circle-outline\"></ion-icon>\r\n                <!-- <ion-icon (click)=\"changeCalculation()\" name=\"add-outline\" style=\"margin-left: auto; font-size: 24px;  color: #2990f7;\"></ion-icon> -->\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"isSubmit && !sendItem.DVT\" class=\"no-border-top\">\r\n            <td class=\"bill-table-left\"></td>\r\n            <td class=\"text-right text-err\">\r\n              Trường bắt buộc nhập\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Giá nhập</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"GiaMuaConv\" (ngModelChange)=\"formatInput('GiaMua', $event)\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Giá bán lẻ</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"GiaBanLeConv\" (ngModelChange)=\"formatInput('GiaBanLe', $event)\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Giá buôn</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"GiaBanSyConv\" (ngModelChange)=\"formatInput('GiaBanSy', $event)\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n\r\n          Thông tin khác\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"bill-table\">\r\n        <table>\r\n          <!-- <tr *ngIf=\"isCreate != 'true'\">\r\n            <td class=\"bill-table-left\">Mã dược QG</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input class=\"bg-gray\" type=\"text\" [(ngModel)]=\"sendItem.MaDuocQG\" [disabled]=\"true\">\r\n              </div>\r\n            </td>\r\n          </tr> -->\r\n          <tr>\r\n            <td class=\"bill-table-left\">Số đăng ký</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.SoDangKy\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Hoạt chất chính</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.HoatChatChinh\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Hàm lượng</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.HamLuong\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Liều dùng</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.LieuDung\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Đường dùng</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.DuongDung\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Quy cách</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.QuyCach\">\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Hãng SX</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.HangSanXuat\">\r\n                <!-- <ion-icon (click)=\"handleHangSX()\" name=\"options-outline\"></ion-icon> -->\r\n                <ion-icon (click)=\"handleHangSX()\" name=\"menu-outline\"></ion-icon>\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Nước SX</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <input type=\"text\" [(ngModel)]=\"sendItem.NuocSanXuat\">\r\n                <!-- <ion-icon (click)=\"handleNuocSX()\" name=\"options-outline\"></ion-icon> -->\r\n                <ion-icon (click)=\"handleNuocSX()\" name=\"menu-outline\"></ion-icon>\r\n\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\">Loại hàng</td>\r\n            <td class=\"text-right\">\r\n              <div class=\"bill-input\">\r\n                <div (click)=\"handleLoaiHang()\" class=\"forminput\" style=\"width: 100%;\">\r\n                  {{LoaiVT_name}}\r\n                </div>\r\n                <!-- <input type=\"text\" [(ngModel)]=\"sendItem.LoaiVT\">\r\n                <ion-icon (click)=\"handleLoaiHang()\" name=\"options-outline\"></ion-icon> -->\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"bill-table-left\"></td>\r\n            <td style=\"display: flex; gap: 10px;\">\r\n              <input type=\"checkbox\" [(ngModel)]=\"sendItem.TichDiem\" name=\"\" id=\"\">\r\n              Áp dụng tích điểm\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"bill-header bill-header-p13\">\r\n        <div class=\"bill-header-left\">\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n\r\n          Đơn vị tính quy đổi ({{listDVTConv.length}})\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <div class=\"bill-header\" style=\"display: flex; align-items: center;\">\r\n        <div>\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n\r\n          ĐƠN VỊ TÍNH QUY ĐỔI ({{listDVTConv.length}})\r\n        </div>\r\n\r\n      </div> -->\r\n      <div *ngFor=\"let item of listDVTConv; index as i\" class=\"bill-item\">\r\n        <div class=\"bill-item-title\">\r\n          <p>{{i+1}}. {{item.DVT}}</p>\r\n          <ion-icon (click)=\"confirmRemove(item, i)\" name=\"trash-outline\"></ion-icon>\r\n\r\n        </div>\r\n        <table>\r\n\r\n          <tr>\r\n            <td>\r\n              <span>SLQĐ:&nbsp;&nbsp;&nbsp; </span>\r\n              <input type=\"number\" [(ngModel)]=\"item.SoLuongQuyDoi\">\r\n            </td>\r\n\r\n            <td class=\"text-right\">\r\n              <span>Giá mua: </span>\r\n              <input type=\"text\" [(ngModel)]=\"item.GiaMua\" (ngModelChange)=\"formatInputDVT('GiaMua', i, $event)\">\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <span>Giá BL: &nbsp;</span>\r\n              <input type=\"text\" [(ngModel)]=\"item.GiaBanLe\" (ngModelChange)=\"formatInputDVT('GiaBanLe', i, $event)\">\r\n            </td>\r\n\r\n            <td class=\"text-right\">\r\n              <span>Giá BB: </span>\r\n              <input type=\"text\" [(ngModel)]=\"item.GiaBanSy\" (ngModelChange)=\"formatInputDVT('GiaBanSy', i, $event)\">\r\n            </td>\r\n          </tr>\r\n\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n\r\n  <ion-toolbar>\r\n    <div class=\"bill-footer\">\r\n      <table>\r\n        <!-- <tr>\r\n          <td style=\"font-weight: 700;\">Tích điểm</td>\r\n          <td class=\"text-right\">\r\n            <ion-toggle color=\"primary\" [(ngModel)]=\"sendItem.TichDiem\"></ion-toggle>\r\n          </td>\r\n        </tr> -->\r\n\r\n      </table>\r\n      <div class=\"bill-footer-left\">\r\n        <button (click)=\"handleProduct()\">LƯU VẬT TƯ</button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/donvitinh/dvt-create/dvt-create.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/donvitinh/dvt-create/dvt-create.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDonvitinhDvtCreateDvtCreatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".unit {\n  padding: 4px 10px;\n}\n.unit-header {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #cbcbcb;\n}\n.unit-header ion-icon {\n  font-size: 30px;\n}\n.unit-title {\n  width: 100%;\n  font-size: 18px;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: #242424;\n  padding: 8px 0 8px 0;\n  color: var(--background-color);\n}\n.unit-footer {\n  padding: 5px;\n}\n.unit-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date], .unit-input {\n  width: 100%;\n  border: 1px solid white;\n  background: #caeeff;\n  border-radius: 5px;\n  margin-top: 6px;\n  padding: 8px 10px;\n}\nlabel {\n  font-weight: 500;\n}\n.input-no-border {\n  background: white !important;\n  text-align: right !important;\n}\ntd {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9udml0aW5oL2R2dC1jcmVhdGUvZHZ0LWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0FBQ1o7QUFJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBRlI7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFTQTs7O0VBT0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVZKO0FBYUE7RUFDSSxnQkFBQTtBQVZKO0FBYUE7RUFDSSw0QkFBQTtFQUNBLDRCQUFBO0FBVko7QUFjQTtFQUNJLGlCQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC9kb252aXRpbmgvZHZ0LWNyZWF0ZS9kdnQtY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0e1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHggICA7XHJcbiAgICBcclxuICAgICYtaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcclxuXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjQyNDI0O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwIDhweCAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi1mb290ZXJ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSwgLnVuaXQtaW5wdXQge1xyXG4gICAgLy8gd2lkdGg6IDEwMHB4O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2NhZWVmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnB1dC1uby1ib3JkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbnRke1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/donvitinh/dvt-create/dvt-create.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/donvitinh/dvt-create/dvt-create.page.ts ***!
      \*********************************************************/

    /*! exports provided: DvtCreatePage */

    /***/
    function srcAppDonvitinhDvtCreateDvtCreatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DvtCreatePage", function () {
        return DvtCreatePage;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
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

      var DvtCreatePage = /*#__PURE__*/function () {
        // GiaMuaConv: string = '';
        // GiaBanLeConv: string = '';
        // GiaBanSyConv: string = '';
        function DvtCreatePage(GlobalService, currencyPipe, route, LoadingService, ToastService) {
          _classCallCheck(this, DvtCreatePage);

          this.GlobalService = GlobalService;
          this.currencyPipe = currencyPipe;
          this.route = route;
          this.LoadingService = LoadingService;
          this.ToastService = ToastService;
          this.sendItem = {
            "DonViTinhID": 0,
            "DVT": "",
            "GiaMua": 0,
            "GiaBanLe": 0,
            "GiaBanSy": 0,
            "SoLuongQuyDoi": 1
          };
          this.sendItemConv = {
            "DVT": "",
            "GiaMua": "",
            "GiaBanLe": "",
            "GiaBanSy": "",
            "SoLuongQuyDoi": 1
          };
          this.submit = false;
        }

        _createClass(DvtCreatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "formatInput",
          value: function formatInput(item, e) {
            var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            this.sendItemConv[item] = convNumber; // this.GiaBanLeConv = convNumber;

            this.sendItem[item] = Number(e.replace(/,/g, ''));
            console.log('convNumber', convNumber);
            console.log('this.sendItemConv', this.sendItemConv);
          }
        }, {
          key: "confirmSubmit",
          value: function confirmSubmit() {
            this.sendItemConv.SoLuongQuyDoi = this.sendItem.SoLuongQuyDoi;
            this.submit = true;

            if (!this.sendItem.DVT) {
              return;
            }

            console.log('this.sendItem.DVT', this.sendItem.DVT);
            this.sendItemConv.DVT = this.sendItem.DVT; // console.log('sendItem', this.sendItem);

            this.GlobalService.closeModalSenData({
              'item': this.sendItem,
              'itemConv': this.sendItemConv
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.GlobalService.closeModal();
          }
        }]);

        return DvtCreatePage;
      }();

      DvtCreatePage.ctorParameters = function () {
        return [{
          type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }];
      };

      DvtCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dvt-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dvt-create.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/donvitinh/dvt-create/dvt-create.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dvt-create.page.scss */
        "./src/app/donvitinh/dvt-create/dvt-create.page.scss"))["default"]]
      })], DvtCreatePage);
      /***/
    },

    /***/
    "./src/app/vattu/vattu-create/vattu-create.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/vattu/vattu-create/vattu-create.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVattuVattuCreateVattuCreatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bill-header {\n  background: #e9e9e9;\n  padding: 10px;\n  display: flex;\n  gap: 8px;\n  font-weight: 600;\n}\n.bill-header-p13 {\n  padding: 13px 10px;\n}\n.bill-header-left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.bill-header-left ion-icon {\n  font-size: 20px;\n}\n.bill-avatar {\n  height: 70px;\n  width: 70px;\n}\n.bill-avatar img {\n  width: 100%;\n  height: 100%;\n  border: 2px solid var(--gray-line);\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.bill-item {\n  padding: 10px 10px 15px;\n  border-bottom: 1px solid #d7d7d7;\n}\n.bill-item-title {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.bill-item-title p {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n.bill-item-title ion-icon {\n  margin-left: auto;\n  font-size: 20px;\n  color: #dd0000;\n}\n.bill-table {\n  padding: 5px 10px;\n}\n.bill-table td {\n  padding: 5px 0;\n}\n.bill-table ion-icon {\n  float: right;\n  color: var(--primary-color);\n  font-size: 26px;\n  width: 30px;\n}\n.bill-table-content ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.bill-table-left {\n  font-weight: 500;\n  width: 115px;\n}\n.bill-footer {\n  padding: 6px;\n}\n.bill-footer button {\n  color: white;\n  background: var(--background-color);\n  width: calc(100% - 60px);\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n  margin-left: auto;\n}\n.bill-input {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.bill-input input {\n  width: 100% !important;\n}\n.bill-btn-left {\n  display: flex;\n  align-items: center;\n}\n.bill-btn-relative {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  /* height: 100%; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.bill-btn-relative ion-icon {\n  font-size: 18px;\n}\n.bill-btn-relative div {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: var(--background-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\n.bill-bold {\n  font-weight: 500;\n}\n.bill-right {\n  text-align: right;\n}\n.bill-select {\n  display: flex;\n  align-items: center;\n}\n.bill-select-form {\n  position: relative;\n}\n.bill-select-form div {\n  width: 105px;\n  border: 1px solid white;\n  text-align: center;\n  background: #caeeff;\n  border-radius: 5px;\n  padding: 6px 0;\n}\n.bill-select-form ion-icon {\n  position: absolute;\n  top: 8px;\n  right: 2px;\n  color: gray;\n  font-size: 13px;\n}\n.bill-footer {\n  padding: 6px;\n}\n.bill-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  margin-left: auto;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.bill-footer-left {\n  display: flex;\n  align-items: center;\n}\n.bill-footer-left ion-icon {\n  font-size: 18px;\n}\n.bill-footer-form {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.bill-footer-number {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: #0663a9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\ntable {\n  width: 100%;\n  table-layout: fixed;\n}\ntd {\n  padding-bottom: 10px;\n}\ntd span {\n  color: gray;\n}\ntd i {\n  font-size: 18px;\n}\n.pr-20 {\n  padding-right: 20px;\n}\n.pr-44 {\n  padding-right: 44px !important;\n}\n.pr-15 {\n  padding-right: 15px !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\ninput[type=text],\ninput[type=number],\ninput[type=date], .forminput {\n  width: 105px;\n  border: 1px solid white;\n  text-align: right;\n  background: #caeeff;\n  border-radius: 5px;\n  padding: 6px 10px;\n}\n.input-no-border {\n  background: white !important;\n  text-align: right !important;\n}\nion-toggle {\n  height: 26px;\n  --handle-width: calc(28px - (2px * 2));\n  --ion-color-base: var(--primary-color) !important;\n}\nion-footer {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n}\np {\n  margin-bottom: 0 !important;\n  margin-top: 0 !important;\n}\ninput[type=checkbox] {\n  zoom: 1.5;\n}\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF0dHUvdmF0dHUtY3JlYXRlL3ZhdHR1LWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBRFI7QUFLUTtFQUNJLGtCQUFBO0FBSFo7QUFNUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFKWjtBQU1ZO0VBQ0ksZUFBQTtBQUpoQjtBQVNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFQUjtBQVVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQVJaO0FBWUk7RUFDSSx1QkFBQTtFQUNBLGdDQUFBO0FBVlI7QUFZUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVlo7QUFZWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBVmhCO0FBYVk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWGhCO0FBZ0JJO0VBQ0ksaUJBQUE7QUFkUjtBQW9CUTtFQUNJLGNBQUE7QUFsQlo7QUFzQlE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXBCWjtBQXdCWTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQXRCaEI7QUEwQlE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUF4Qlo7QUE0Qkk7RUFDSSxZQUFBO0FBMUJSO0FBNEJRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQTFCWjtBQStCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE3QlI7QUErQlE7RUFDSSxzQkFBQTtBQTdCWjtBQXdDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXRDWjtBQXlDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUF2Q1o7QUF5Q1k7RUFDSSxlQUFBO0FBdkNoQjtBQTBDWTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQXhDaEI7QUE4Q0k7RUFDSSxnQkFBQTtBQTVDUjtBQStDSTtFQUNJLGlCQUFBO0FBN0NSO0FBZ0RJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBOUNSO0FBZ0RRO0VBQ0ksa0JBQUE7QUE5Q1o7QUFnRFk7RUFFSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBL0NoQjtBQWtEWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWhEaEI7QUF1REk7RUFDSSxZQUFBO0FBckRSO0FBdURRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBckRaO0FBd0RRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBdERaO0FBeURZO0VBQ0ksZUFBQTtBQXZEaEI7QUE0RFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQTFEWjtBQThEUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTVEWjtBQWtFQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQS9ESjtBQWtFQTtFQUNJLG9CQUFBO0FBL0RKO0FBaUVJO0VBQ0ksV0FBQTtBQS9EUjtBQWtFSTtFQUNJLGVBQUE7QUFoRVI7QUFvRUE7RUFDSSxtQkFBQTtBQWpFSjtBQW9FQTtFQUNJLDhCQUFBO0FBakVKO0FBb0VBO0VBQ0ksOEJBQUE7QUFqRUo7QUFvRUE7RUFDSSw0QkFBQTtBQWpFSjtBQW9FQTs7O0VBT0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFyRUo7QUF3RUE7RUFDSSw0QkFBQTtFQUNBLDRCQUFBO0FBckVKO0FBeUVBO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0VBQ0EsaURBQUE7QUF0RUo7QUF5RUE7RUFDSSxxRkFBQTtBQXRFSjtBQTBFQTtFQUNJLDJCQUFBO0VBQ0Esd0JBQUE7QUF2RUo7QUEwRUE7RUFDSSxTQUFBO0FBdkVKO0FBMEVBO0VBQ0ksYUFBQTtBQXZFSiIsImZpbGUiOiJzcmMvYXBwL3ZhdHR1L3ZhdHR1LWNyZWF0ZS92YXR0dS1jcmVhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpbGwge1xyXG5cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICAvLyBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcblxyXG4gICAgICAgICYtcDEzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTNweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1hdmF0YXIge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAvLyBtYXJnaW46IDEwcHggMTBweCAwIDEwcHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktbGluZSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkN2Q3ZDc7XHJcblxyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZGQwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtdGFibGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDdkN2Q3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1pbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWJ0biB7XHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtcmVsYXRpdmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTYxNjE7XHJcbiAgICAgICAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTdweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICYtYm9sZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAmLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAmLXNlbGVjdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NhZWVmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtZm9ybSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYxNjE2MTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgJi1udW1iZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDY2M2E5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuLnByLTIwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5wci00NCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wci0xNSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYi0wIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSwgLmZvcm1pbnB1dCB7XHJcbiAgICAvLyB3aWR0aDogMTAwcHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2FlZWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1uby1ib3JkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5pb24tdG9nZ2xlIHtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIC0taGFuZGxlLXdpZHRoOiBjYWxjKDI4cHggLSAoMnB4ICogMikpO1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ1ZDU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgem9vbTogMS41O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/vattu/vattu-create/vattu-create.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/vattu/vattu-create/vattu-create.page.ts ***!
      \*********************************************************/

    /*! exports provided: VattuCreatePage */

    /***/
    function srcAppVattuVattuCreateVattuCreatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VattuCreatePage", function () {
        return VattuCreatePage;
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


      var src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/vattu.service */
      "./src/app/service/vattu.service.ts");
      /* harmony import */


      var src_app_share_group_product_group_product_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/share/group-product/group-product.page */
      "./src/app/share/group-product/group-product.page.ts");
      /* harmony import */


      var src_app_share_hang_san_xuat_hang_san_xuat_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/share/hang-san-xuat/hang-san-xuat.page */
      "./src/app/share/hang-san-xuat/hang-san-xuat.page.ts");
      /* harmony import */


      var src_app_share_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/share/helper */
      "./src/app/share/helper.ts");
      /* harmony import */


      var src_app_share_nuoc_san_xuat_nuoc_san_xuat_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/share/nuoc-san-xuat/nuoc-san-xuat.page */
      "./src/app/share/nuoc-san-xuat/nuoc-san-xuat.page.ts");
      /* harmony import */


      var src_app_donvitinh_dvt_create_dvt_create_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/donvitinh/dvt-create/dvt-create.page */
      "./src/app/donvitinh/dvt-create/dvt-create.page.ts");
      /* harmony import */


      var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/service/AlertService */
      "./src/app/service/AlertService.ts");
      /* harmony import */


      var src_app_service_toastService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/service/toastService */
      "./src/app/service/toastService.ts");
      /* harmony import */


      var _vattu_quocgia_vattu_quocgia_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../vattu-quocgia/vattu-quocgia.page */
      "./src/app/vattu/vattu-quocgia/vattu-quocgia.page.ts");

      var VattuCreatePage = /*#__PURE__*/function () {
        function VattuCreatePage(GlobalService, modalController, currencyPipe, LoadingService, actionSheetController, VattuService, navParams, AlertService, popoverController, convertHelper, ToastService) {
          _classCallCheck(this, VattuCreatePage);

          this.GlobalService = GlobalService;
          this.modalController = modalController;
          this.currencyPipe = currencyPipe;
          this.LoadingService = LoadingService;
          this.actionSheetController = actionSheetController;
          this.VattuService = VattuService;
          this.navParams = navParams;
          this.AlertService = AlertService;
          this.popoverController = popoverController;
          this.convertHelper = convertHelper;
          this.ToastService = ToastService;
          this.typeProduct = [];
          this.sendItem = {
            "LoaiVT": "THUOC",
            "NhomVT": "",
            "VatTuID": 0,
            "MaDuocQG": "",
            "TenVT": "",
            "MaVach": "",
            "SoDangKy": "",
            "DVT": "",
            "GiaMua": 0,
            "GiaBanLe": 0,
            "GiaBanSy": "",
            "HoatChatChinh": "",
            "HamLuong": "",
            "LieuDung": "",
            "CachDung": "",
            "DuongDung": "",
            "QuyCach": "",
            "HangSanXuat": "",
            "NuocSanXuat": "",
            "TichDiem": 0,
            "DVTQD": [],
            "Img": ""
          };
          this.isSubmit = false;
          this.LoaiVT_name = 'Thuốc';
          this.isCreate = '';
          this.vatTuId = '0';
          this.GiaMuaConv = '';
          this.GiaBanLeConv = '';
          this.GiaBanSyConv = '';
          this.listDVT = [];
          this.listDVTRemove = [];
          this.listDVTConv = [];
          this.reloadParent = false;
          this.displayImg = false;
          this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');
        } // ionViewDidEnter() { }


        _createClass(VattuCreatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.typeProduct = this.convertHelper.typeProduct();

            if (this.isCreate == 'false') {
              this.vattuDetail(); // this.getDVTByVT();
            }
          }
        }, {
          key: "vattuDetail",
          value: function vattuDetail() {
            var _this = this;

            this.LoadingService.setValue(true);
            this.VattuService.detailVattu(this.vatTuId).subscribe(function (response) {
              _this.sendItem = {
                "LoaiVT": response[0].LoaiVT ? response[0].LoaiVT : "THUOC",
                "NhomVT": response[0].NhomVT,
                "VatTuID": response[0].VatTuID,
                "MaDuocQG": response[0].MaDuocQG ? response[0].MaDuocQG : "",
                "TenVT": response[0].TenVT,
                "MaVach": response[0].MaVach,
                "SoDangKy": response[0].SoDangKy,
                "DVT": response[0].DVT,
                "GiaMua": response[0].GiaMua,
                "GiaBanLe": response[0].GiaBanLe,
                "GiaBanSy": response[0].GiaBanSy,
                "HoatChatChinh": response[0].HoatChatChinh,
                "HamLuong": response[0].HamLuong,
                "LieuDung": response[0].LieuDung,
                "CachDung": response[0].CachDung,
                "DuongDung": response[0].DuongDung,
                "QuyCach": response[0].QuyCach,
                "HangSanXuat": response[0].HangSanXuat,
                "NuocSanXuat": response[0].NuocSanXuat,
                "Img": response[0].Img,
                "TichDiem": response[0].TichDiem
              };

              _this.getDVTByVT(response[0].DVTQD);

              _this.GiaMuaConv = _this.formatNumber(response[0].GiaMua);
              _this.GiaBanLeConv = _this.formatNumber(response[0].GiaBanLe);
              _this.GiaBanSyConv = _this.formatNumber(response[0].GiaBanSy);

              _this.typeProduct.find(function (o) {
                if (o.value == response[0].LoaiVT) {
                  _this.LoaiVT_name = o.item;
                }
              }); // this.listDataSearch = response;


              _this.LoadingService.setValue(false);
            }, function (error) {
              _this.LoadingService.setValue(false);

              console.log('error', error);
            });
          }
        }, {
          key: "getDVTByVT",
          value: function getDVTByVT(response) {
            this.listDVT = _toConsumableArray(response);
            var test = JSON.parse(JSON.stringify(response));

            for (var i = 0; i < test.length; i++) {
              test[i].GiaMua = this.formatNumber(test[i].GiaMua);
              test[i].GiaBanLe = this.formatNumber(test[i].GiaBanLe);
              test[i].GiaBanSy = this.formatNumber(test[i].GiaBanSy);
            }

            this.listDVTConv = test;
            this.LoadingService.setValue(false);
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            var _this2 = this;

            var file = event.target.files[0];

            if (file) {
              this.convertHelper.convertFileToBase64(file).then(function (base64) {
                var index = base64.indexOf(",");
                _this2.sendItem.Img = base64.substring(index + 1); // console.log('base64', this.sendItem.Img);
                // Bạn có thể lưu trữ hoặc sử dụng chuỗi Base64 tại đây
              })["catch"](function (error) {
                console.error('Error converting file to Base64', error);
              });
            } else {
              console.error('No file selected');
            }
          }
        }, {
          key: "formatNumber",
          value: function formatNumber(number) {
            return number ? this.currencyPipe.transform(String(number).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0') : "0";
          }
        }, {
          key: "resetItem",
          value: function resetItem() {
            this.GiaMuaConv = '';
            this.GiaBanLeConv = '';
            this.GiaBanSyConv = '';
            this.listDVT = [];
            this.LoaiVT_name = 'Thuốc';
            this.listDVTRemove = [];
            this.listDVTConv = [];
            this.isSubmit = false;
            this.sendItem = {
              "LoaiVT": "THUOC",
              "NhomVT": "",
              "VatTuID": 0,
              "MaDuocQG": "",
              "TenVT": "",
              "MaVach": "",
              "SoDangKy": "",
              "DVT": "",
              "GiaMua": 0,
              "GiaBanLe": 0,
              "GiaBanSy": "",
              "HoatChatChinh": "",
              "HamLuong": "",
              "LieuDung": "",
              "CachDung": "",
              "DuongDung": "",
              "QuyCach": "",
              "HangSanXuat": "",
              "NuocSanXuat": "",
              "Img": "",
              "TichDiem": 0,
              "DVTQD": []
            };
          }
        }, {
          key: "formatInput",
          value: function formatInput(item, e) {
            var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
            this[item + 'Conv'] = convNumber; // this.GiaBanLeConv = convNumber;

            this.sendItem[item] = Number(e.replace(/,/g, ''));
          }
        }, {
          key: "formatInputDVT",
          value: function formatInputDVT(item, index, e) {
            var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0'); // this[item + 'Conv'] = convNumber;
            // this.GiaBanLeConv = convNumber;

            this.listDVTConv[index][item] = convNumber;
            this.listDVT[index][item] = Number(e.replace(/,/g, '')); // console.log('convNumber', convNumber, item + 'Conv');
          }
        }, {
          key: "handleGroupProduct",
          value: function handleGroupProduct() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: src_app_share_group_product_group_product_page__WEBPACK_IMPORTED_MODULE_7__["GroupProductPage"],
                        cssClass: 'modalOpen',
                        componentProps: {}
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this3.sendItem.NhomVT = dataReturned.data;
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
          key: "handleHangSX",
          value: function handleHangSX() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: src_app_share_hang_san_xuat_hang_san_xuat_page__WEBPACK_IMPORTED_MODULE_8__["HangSanXuatPage"],
                        cssClass: 'modalOpen',
                        componentProps: {// "listUnit": this.listUnit,
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this4.sendItem.HangSanXuat = dataReturned.data;
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
          key: "handleNuocSX",
          value: function handleNuocSX() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: src_app_share_nuoc_san_xuat_nuoc_san_xuat_page__WEBPACK_IMPORTED_MODULE_10__["NuocSanXuatPage"],
                        cssClass: 'modalOpen',
                        componentProps: {// "listUnit": this.listUnit,
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this5.sendItem.NuocSanXuat = dataReturned.data;
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
          key: "handleLoaiHang",
          value: function handleLoaiHang() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var listbtn, _loop, i, actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      listbtn = [];

                      _loop = function _loop(i) {
                        listbtn.push({
                          text: _this6.typeProduct[i].item,
                          icon: 'medkit-outline',
                          // cssClass: this.HTTT_name == 'Tiền mặt' ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            _this6.LoaiVT_name = _this6.typeProduct[i].item;
                            _this6.sendItem.LoaiVT = _this6.typeProduct[i].value; // this.HTTT_name = 'Tiền mặt'
                          }
                        });
                      };

                      for (i = 0; i < this.typeProduct.length; i++) {
                        _loop(i);
                      }

                      _context4.next = 5;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: listbtn
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
          key: "changeCalculation",
          value: function changeCalculation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this7 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: src_app_donvitinh_dvt_create_dvt_create_page__WEBPACK_IMPORTED_MODULE_11__["DvtCreatePage"],
                        cssClass: 'halfModal3',
                        componentProps: {// "listUnit": this.listUnit,
                        }
                      });

                    case 2:
                      modal = _context5.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this7.listDVT.push(dataReturned.data.item);

                          _this7.listDVTConv.push(dataReturned.data.itemConv);
                        }
                      });
                      _context5.next = 6;
                      return modal.present();

                    case 6:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "handleProduct",
          value: function handleProduct() {
            var _this8 = this;

            this.isSubmit = true;

            if (!this.sendItem.TenVT || !this.sendItem.DVT) {
              this.ToastService.warningToast("Vui lòng điền đầy đủ thông tin!");
              return;
            }

            if (this.sendItem.TichDiem == true || this.sendItem.TichDiem == false) {
              this.sendItem.TichDiem = this.sendItem.TichDiem ? 1 : 0;
            } // console.log('listDVT', this.listDVT);
            // console.log('listDVTConv', this.listDVTConv);


            this.sendItem.DVTQD = this.listDVT;
            console.log('ffffffff', this.sendItem); // console.log('this.listDVT', this.listDVT);

            this.AlertService.presentAlert("X\xE1c nh\u1EADn l\u01B0u v\u1EADt t\u01B0?").then(function (res) {
              if (res == 'true') {
                _this8.LoadingService.setValue(true);

                _this8.VattuService.createVattu(_this8.sendItem).subscribe(function (response) {
                  _this8.reloadParent = true;
                  console.log("342", response);

                  if (response[0].VatTuID) {
                    //   if(this.listDVT){
                    //     this.handleDVT('listDVT', response[0].MaVT);
                    //   }
                    if (_this8.listDVTRemove) {
                      _this8.handleDVT('listDVTRemove');
                    }

                    _this8.ToastService.successToast("Lưu vật tư thành công!");

                    if (_this8.isCreate == 'true') {
                      // setTimeout(() => {
                      _this8.resetItem(); // }, 2000);

                    }
                  } else {
                    _this8.ToastService.errorToast("Không thể lưu vật tư!");
                  }

                  _this8.LoadingService.setValue(false);
                }, function (error) {
                  setTimeout(function () {
                    _this8.ToastService.errorToast("Không thể lưu vật tư!");

                    _this8.LoadingService.setValue(false);

                    console.log('error', error);
                  }, 1000);
                });
              }
            });
          }
        }, {
          key: "confirmRemove",
          value: function confirmRemove(item, index) {
            if (this.listDVT[index].DonViTinhID) {
              this.listDVTRemove.push(this.listDVT[index]);
            }

            this.listDVT.splice(index, 1);
            this.listDVTConv.splice(index, 1);
          }
        }, {
          key: "handleDVT",
          value: function handleDVT(item) {
            for (var i = 0; i < this.listDVTRemove.length; i++) {
              this.removeDVT(this[item][i].DonViTinhID);
            }
          } // updateDVT(item) {
          //   this.VattuService.createDVT(item).subscribe((response: any) => {
          //     console.log('response', response);
          //   }, (error) => {
          //     setTimeout(() => {
          //       console.log('error', error);
          //     }, 1000);
          //   });
          // }

        }, {
          key: "removeDVT",
          value: function removeDVT(DonViTinhID) {
            this.VattuService.deleteDVT(DonViTinhID).subscribe(function (response) {}, function (error) {
              setTimeout(function () {
                console.log('error', error);
              }, 1000);
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            if (this.reloadParent) {
              this.GlobalService.closeModalSenData('reload');
            } else {
              this.GlobalService.closeModal();
            }
          }
        }, {
          key: "handleProductCountry",
          value: function handleProductCountry() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.modalController.create({
                        component: _vattu_quocgia_vattu_quocgia_page__WEBPACK_IMPORTED_MODULE_14__["VattuQuocgiaPage"],
                        cssClass: 'modalOpen',
                        componentProps: {}
                      });

                    case 2:
                      modal = _context6.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned.data) {
                          _this9.sendItem.MaDuocQG = dataReturned.data.MaDuocQG;
                          _this9.sendItem.DVT = dataReturned.data.DVT;
                          _this9.sendItem.HamLuong = dataReturned.data.HamLuong;
                          _this9.sendItem.HangSanXuat = dataReturned.data.HangSX;
                          _this9.sendItem.HoatChatChinh = dataReturned.data.HoatChatChinh;
                          _this9.sendItem.NuocSanXuat = dataReturned.data.NuocSX;
                          _this9.sendItem.QuyCach = dataReturned.data.QuyCach;
                          _this9.sendItem.SoDangKy = dataReturned.data.SoDangKy;
                          _this9.sendItem.TenVT = dataReturned.data.TenVT;
                        }
                      });
                      _context6.next = 6;
                      return modal.present();

                    case 6:
                      return _context6.abrupt("return", _context6.sent);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return VattuCreatePage;
      }();

      VattuCreatePage.ctorParameters = function () {
        return [{
          type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
        }, {
          type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: src_app_service_vattu_service__WEBPACK_IMPORTED_MODULE_6__["VattuService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_12__["AlertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: src_app_share_helper__WEBPACK_IMPORTED_MODULE_9__["convertHelper"]
        }, {
          type: src_app_service_toastService__WEBPACK_IMPORTED_MODULE_13__["ToastService"]
        }];
      };

      VattuCreatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vattu-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vattu-create.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/vattu/vattu-create/vattu-create.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vattu-create.page.scss */
        "./src/app/vattu/vattu-create/vattu-create.page.scss"))["default"]]
      })], VattuCreatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~saphethan-index-saphethan-index-module~tonkho-index-tonkho-index-module~vattu-vattu-create-v~fe2a4a93-es5.js.map