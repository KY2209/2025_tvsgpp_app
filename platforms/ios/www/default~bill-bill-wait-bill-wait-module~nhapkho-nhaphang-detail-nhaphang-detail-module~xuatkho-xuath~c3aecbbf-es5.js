(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bill-bill-wait-bill-wait-module~nhapkho-nhaphang-detail-nhaphang-detail-module~xuatkho-xuath~c3aecbbf"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-wait/bill-wait.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-wait/bill-wait.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBillBillWaitBillWaitPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Hóa đơn chờ\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <!-- <ion-item lines=\"none\" (click)=\"openTypeCT()\"\r\n      style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n      <ion-icon style=\"font-size: 26px;\" name=\"filter-outline\"></ion-icon>\r\n    </ion-item> -->\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div *ngIf=\"listBillWait.length == 0\">\r\n      <app-no-data></app-no-data>\r\n    </div>\r\n  <div class=\"wait\">\r\n\r\n    <div (click)=\"hoverItem(item.ChungTuID)\" *ngFor=\"let item of displayChiTietHang; index as i\" class=\"wait-item border-b\" [class.bg-hover]=\"item.check == true\">\r\n\r\n      <div class=\"wait-content\">\r\n        <div class=\"wait-content-item\">\r\n          <div class=\"wait-content-left wait-content-title\">\r\n            Hóa đơn {{i + 1}}\r\n          </div>\r\n          <div (click)=\"presentActionSheet(item, i)\"  class=\"wait-content-right\">\r\n            <span><ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon></span>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"wait-content-item\" style=\"margin-bottom: 5px;\">\r\n          <div class=\"wait-content-left\">\r\n            <ion-icon style=\"border: none; font-size: 18px;\" name=\"bookmarks-outline\"></ion-icon>\r\n            {{convertHelper.typeChungTu(item.LoaiCTID) }}\r\n          </div>\r\n          <div class=\"wait-content-right\">\r\n            {{item.ThoiDiem | date:'dd/MM/yyyy HH:mm'}}\r\n\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"item.donvi_name\" class=\"wait-content-item\" style=\"margin-bottom: 5px;\">\r\n          <div class=\"wait-content-left\">\r\n            <ion-icon style=\"border: none; font-size: 18px;\" name=\"briefcase-outline\"></ion-icon> {{item.donvi_name}}\r\n          </div>\r\n        \r\n        </div>\r\n        <div class=\"wait-content-item\">\r\n          <div (click)=\"toggleOpen(i)\" class=\"wait-content-left\">\r\n            <ion-icon *ngIf=\"!isOpen[i]\" name=\"add-outline\"></ion-icon>\r\n            <ion-icon *ngIf=\"isOpen[i]\" name=\"remove-outline\"></ion-icon>\r\n            {{item.ChiTietHang.length}} mặt hàng\r\n          </div>\r\n          <div class=\"wait-content-right font-bold\">\r\n            <span>{{item.sumMoney | number}}</span>\r\n          </div>\r\n        </div>\r\n        <table *ngIf=\"isOpen[i]\">\r\n          <tr *ngFor=\"let product of item.ChiTietHang; index as a\">\r\n            <td>- {{product._TenVT}} ({{product.DVT}})</td> \r\n            <!-- <td  style=\"display: flex; gap: 10px;\">\r\n              <ion-icon name=\"add-circle-outline\" style=\"font-size: 24px; color: #2990f7;\"></ion-icon>\r\n              <div style=\"margin-top: 4px;\">5</div>\r\n              <ion-icon name=\"remove-circle-outline\" style=\"font-size: 24px; color: #2990f7;\"></ion-icon>\r\n            </td> -->\r\n            <td class=\"text-right\" style=\"display: flex; float: right;\">\r\n              <ion-icon (click)=\"formatInput(i, a, 'plus')\" name=\"add-circle-outline\"></ion-icon>\r\n              <div style=\"margin-top: 4px;\">\r\n                <input [class.bg-hover]=\"item.check == true\" type=\"text\" [(ngModel)]=\"product.SoLuong\" (ngModelChange)=\"formatInput(i, a, '', $event)\">\r\n              </div>\r\n              <ion-icon (click)=\"formatInput(i, a, 'subtraction')\" name=\"remove-circle-outline\"></ion-icon>\r\n\r\n            </td>\r\n            <td><ion-icon name=\"trash-outline\" style=\"font-size: 18px; color: #dd0000;\"></ion-icon></td>\r\n          </tr>\r\n        \r\n        </table>\r\n      </div>\r\n    </div>\r\n   \r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/bill/bill-wait/bill-wait.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/bill/bill-wait/bill-wait.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBillBillWaitBillWaitPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".wait-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.wait-item {\n  display: flex;\n  padding: 18px 15px 10px 15px;\n}\n.wait-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.wait-content {\n  width: 100%;\n}\n.wait-content-item {\n  display: flex;\n}\n.wait-content-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.wait-content-left span {\n  color: gray;\n}\n.wait-content-left ion-icon {\n  border: 1px solid gray;\n  border-radius: 3px;\n}\n.wait-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n}\n.wait-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.wait-content-right {\n  margin-left: auto;\n}\n.wait-content-right span {\n  color: var(--background-color);\n}\n.wait-content-right ion-icon {\n  font-size: 24px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\ntable {\n  width: 100%;\n}\ntable ion-icon {\n  float: right;\n  color: var(--primary-color);\n  font-size: 18px;\n  width: 30px;\n}\ntd {\n  padding: 8px 0px;\n}\ninput[type=text], input[type=number] {\n  width: 65px;\n  border: 1px solid white;\n  border-bottom: 1px solid var(--primary-color);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbC9iaWxsLXdhaXQvYmlsbC13YWl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFMUjtBQVFJO0VBQ0ksYUFBQTtFQUNBLDRCQUFBO0FBTlI7QUFTSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQVBSO0FBVUk7RUFDSSxXQUFBO0FBUlI7QUFVUTtFQUNJLGFBQUE7QUFSWjtBQVdRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBVFo7QUFXWTtFQUVJLFdBQUE7QUFWaEI7QUFhWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFYaEI7QUFnQlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQWRaO0FBaUJRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFmWjtBQWtCUTtFQUNJLGlCQUFBO0FBaEJaO0FBa0JZO0VBQ0ksOEJBQUE7QUFoQmhCO0FBbUJZO0VBQ0ksZUFBQTtBQWpCaEI7QUF1QkE7RUFDSSxnQ0FBQTtBQXBCSjtBQXVCQTtFQUNJLFdBQUE7QUFwQko7QUFzQkk7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXBCUjtBQXlCQTtFQUNJLGdCQUFBO0FBdEJKO0FBeUJBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQXRCSiIsImZpbGUiOiJzcmMvYXBwL2JpbGwvYmlsbC13YWl0L2JpbGwtd2FpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FpdCB7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xyXG5cclxuICAgICYtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtc20ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1yaWdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvcmRlci1iIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxudGR7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/bill/bill-wait/bill-wait.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/bill/bill-wait/bill-wait.page.ts ***!
      \**************************************************/

    /*! exports provided: BillWaitPage */

    /***/
    function srcAppBillBillWaitBillWaitPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillWaitPage", function () {
        return BillWaitPage;
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


      var src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/AlertService */
      "./src/app/service/AlertService.ts");
      /* harmony import */


      var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/global.service */
      "./src/app/service/global.service.ts");
      /* harmony import */


      var src_app_share_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/share/helper */
      "./src/app/share/helper.ts");

      var BillWaitPage = /*#__PURE__*/function () {
        function BillWaitPage(actionSheetController, currencyPipe, navParams, GlobalService, AlertService, convertHelper) {
          _classCallCheck(this, BillWaitPage);

          this.actionSheetController = actionSheetController;
          this.currencyPipe = currencyPipe;
          this.navParams = navParams;
          this.GlobalService = GlobalService;
          this.AlertService = AlertService;
          this.convertHelper = convertHelper;
          this.LoaiCTID = 0;
          this.loainx = '';
          this.sumThanhTien = 0;
          this.listBillWait = [];
          this.LoaiCT = [];
          this.displayChiTietHang = [];
          this.listItem = [];
          this.isOpen = [];
          this.LoaiCTID = this.navParams.data.LoaiCTID;
          this.loainx = this.navParams.data.LoaiNX;
          console.log('this.loainx', this.loainx);

          if (this.loainx == "2_1") {
            this.listItem = JSON.parse(localStorage.getItem('billWaitNhapHang') || '[]');
          } else if (this.loainx == "4_1") {
            this.listItem = JSON.parse(localStorage.getItem('billWaitXuatHang') || '[]');
          }

          console.log('listItem', this.listItem);
          this.listBillWait = this.listItem;
          this.displayChiTietHang = this.listItem; // if(this.listItem[0]){
          //   for (let i = 0; i < this.listItem.length; i++) {
          //     if(this.listItem[i].LoaiNX == this.loainx){
          //       console.log('SoLuong', this.listItem[i].ChiTietHang[0].SoLuong);
          //       this.listBillWait.push(this.listItem[i]);
          //       this.displayChiTietHang.push(this.listItem[i]);
          //     }        
          //   }
          // }

          console.log('this.listBillWait', this.listBillWait); // this.listBillWait = JSON.parse(localStorage.getItem('billWait') || '[]'); 
          // this.displayChiTietHang = JSON.parse(localStorage.getItem('billWait') || '[]');
          // this.LoaiCT = JSON.parse(localStorage.getItem('LoaiCT') || '[]');

          this.sumBill();
          this.setTypeBill();
          console.log('this.displayChiTietHang listItem listItem', this.listItem);
        }

        _createClass(BillWaitPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sumBill",
          value: function sumBill() {
            for (var i = 0; i < this.listBillWait.length; i++) {
              var sumMoney = 0;

              for (var j = 0; j < this.listBillWait[i].ChiTietHang.length; j++) {
                // if (typeof (this.displayChiTietHang[i].ChiTietHang[j].SoLuong) == 'number') {
                //   this.displayChiTietHang[i].ChiTietHang[j].SoLuong = new Intl.NumberFormat().format(this.listBillWait[i].ChiTietHang[j].SoLuong).replace(/\./g, ',');
                // }
                sumMoney = sumMoney + this.listBillWait[i].ChiTietHang[j].TongTien;
              }

              sumMoney -= this.listBillWait[i].ChietKhau;
              this.displayChiTietHang[i].sumMoney = sumMoney;
            }
          }
        }, {
          key: "setTypeBill",
          value: function setTypeBill() {
            for (var i = 0; i < this.displayChiTietHang.length; i++) {
              for (var j = 0; j < this.LoaiCT.length; j++) {
                if (this.displayChiTietHang[i].LoaiCTID == this.LoaiCT[j].LoaiCTID) {
                  this.displayChiTietHang[i].LoaiCT_name = this.LoaiCT[j].DienGiai;
                }
              }
            }
          }
        }, {
          key: "openTypeCT",
          value: function openTypeCT() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var listBtn, i, actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      listBtn = [];

                      for (i = 0; i < this.LoaiCT.length; i++) {
                        listBtn.push({
                          text: this.LoaiCT[i].DienGiai,
                          icon: 'medical-outline',
                          cssClass: this.LoaiCTID == this.LoaiCT[i].LoaiCTID ? 'buttonSheetOn' : 'buttonSheetOff',
                          handler: function handler() {
                            _this.filterLoaiCTID(); // this.sendChungtu.loaictid = this.LoaiCT[i].LoaiCTID;
                            // this.title = this.LoaiCT[i].DienGiai;

                          }
                        });
                      }

                      _context.next = 4;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: listBtn
                      });

                    case 4:
                      actionSheet = _context.sent;
                      _context.next = 7;
                      return actionSheet.present();

                    case 7:
                      _context.next = 9;
                      return actionSheet.onDidDismiss();

                    case 9:
                      _yield$actionSheet$on = _context.sent;
                      role = _yield$actionSheet$on.role;

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "filterLoaiCTID",
          value: function filterLoaiCTID() {// var arrPlan = [];
            // this.listItemSearch.find((o: any, i: any) => {
            //   if (o.SoCT.toLowerCase().includes(this.keyword.toLowerCase()) == true) {
            //     arrPlan.push(this.listItemSearch[i]);
            //   }
            // });
            // this.listItem = arrPlan;
          }
        }, {
          key: "toggleOpen",
          value: function toggleOpen(index) {
            this.isOpen[index] = !this.isOpen[index];
          }
        }, {
          key: "hoverItem",
          value: function hoverItem(ChungTuID) {
            for (var i = 0; i < this.displayChiTietHang.length; i++) {
              if (this.displayChiTietHang[i].ChungTuID == ChungTuID) {
                this.displayChiTietHang[i].check = true;
              } else {
                this.displayChiTietHang[i].check = false;
              }
            }
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet(item, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var actionSheet, _yield$actionSheet$on2, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('this.listBillWait[index]', this.listBillWait[index]);
                      _context2.next = 3;
                      return this.actionSheetController.create({
                        cssClass: 'left-align-buttons',
                        buttons: [{
                          text: 'Chọn hóa đơn',
                          icon: 'reader-outline',
                          handler: function handler() {
                            _this2.handleBill(index);
                          }
                        }, {
                          text: 'Xóa hóa đơn',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            _this2.removeBill(index);
                          }
                        }, {
                          text: 'Đóng',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 3:
                      actionSheet = _context2.sent;
                      _context2.next = 6;
                      return actionSheet.present();

                    case 6:
                      _context2.next = 8;
                      return actionSheet.onDidDismiss();

                    case 8:
                      _yield$actionSheet$on2 = _context2.sent;
                      role = _yield$actionSheet$on2.role;

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "handleBill",
          value: function handleBill(index) {
            // console.log('=============', this.listBillWait[index]);
            // console.log('this.listBillWait[index].DonGia ', this.listBillWait[index].DonGia);
            // for (let i = 0; i < this.listBillWait[index].ChiTietHang.length; i++) {
            //   console.log('this.listBillWait[index].ChiTietHang', this.listBillWait[index].ChiTietHang);
            //   console.log('this.listBillWait[index].ChiTietHang[i].DonGia', typeof(this.listBillWait[index].ChiTietHang[i].DonGia));
            //   console.log('this.listBillWait[index].ChiTietHang[i].DonGia', this.listBillWait[index].ChiTietHang[i].DonGia);
            //   console.log('this.listBillWait[index].ChiTietHang[i].SoLuong', this.listBillWait[index].ChiTietHang[i].SoLuong);
            //   // this.listBillWait[index].ChiTietHang[i].DonGia = Number(this.listBillWait[index].ChiTietHang[i].DonGia.replace(/,/g, ''));
            //   // this.listBillWait[index].ChiTietHang[i].SoLuong = Number(this.listBillWait[index].ChiTietHang[i].SoLuong.replace(/,/g, ''));
            // }
            this.GlobalService.closeModalSenData({
              'item': this.listBillWait[index]
            });
          }
        }, {
          key: "formatInput",
          value: function formatInput(index, index_child, type, e) {
            if (type && type == 'plus') {
              this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong) + 1; // this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = String(Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong.replace(/,/g, '')) + 1);
            }

            if (type && type == 'subtraction') {
              this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong) - 1; // this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = String(Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong.replace(/,/g, '')) - 1);
            } // var convNumber = this.currencyPipe.transform(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
            // this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = convNumber;


            if (typeof this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong == 'string') {
              this.listBillWait[index].ChiTietHang[index_child].SoLuong = Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong);
            } else {
              this.listBillWait[index].ChiTietHang[index_child].SoLuong = this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong;
            } // tính thành tiền của mỗi hàng hóa


            this.getTongTien(index, index_child);
            console.log('this.listBillWait', this.listBillWait);
          }
        }, {
          key: "getTongTien",
          value: function getTongTien(index, index_child) {
            this.listBillWait[index].ChiTietHang[index_child].ThanhTien = this.listBillWait[index].ChiTietHang[index_child].SoLuong * this.listBillWait[index].ChiTietHang[index_child].DonGia;
            this.listBillWait[index].ChiTietHang[index_child].TongTien = this.listBillWait[index].ChiTietHang[index_child].ThanhTien + this.listBillWait[index].ChiTietHang[index_child].VAT - this.listBillWait[index].ChiTietHang[index_child].ChietKhau;
            this.displayChiTietHang[index].ChiTietHang[index_child].TongTien = this.listBillWait[index].ChiTietHang[index_child].TongTien;
            this.sumBill(); // this.listItem.forEach(function (a) {
            //   var index = listItem.findIndex(function (b) {
            //     return b.MaVT == a.MaVT;
            //   });
            //   if (index !== -1) {
            //     listItem[index].check = true;
            //     listItem[index].SoLuong = new Intl.NumberFormat().format(a.SoLuong).replace(/\./g, ',');
            //   }
            // });

            for (var i = 0; i < this.listItem.length; i++) {
              if (this.listItem[i].ChungTuID == this.listBillWait[index].ChungTuID) {
                this.listItem[i] = this.listBillWait[index];
                localStorage.setItem('billWait', JSON.stringify(this.listItem));
                break;
              }
            } // this.countMoney(this.listBillWait);

          }
        }, {
          key: "countMoney",
          value: function countMoney(billDetail) {
            this.sumThanhTien = 0;
            console.log('billDetail', billDetail);

            for (var i = 0; i < billDetail.ChiTietHang.length; i++) {
              this.sumThanhTien = this.sumThanhTien + billDetail.ChiTietHang[i].ThanhTien;
              console.log('this.sumThanhTien', this.sumThanhTien);
              console.log('this.billDetail.ChiTietHang[i].ThanhTien', billDetail.ChiTietHang[i].ThanhTien);
            }
          }
        }, {
          key: "removeBill",
          value: function removeBill(index) {
            var _this3 = this;

            this.AlertService.presentAlert("Bạn có muốn xóa hóa đơn?").then(function (res) {
              if (res == 'true') {
                _this3.listBillWait.splice(index, 1);

                _this3.displayChiTietHang.splice(index, 1);

                localStorage.setItem('billWait', JSON.stringify(_this3.listBillWait));
              }
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.GlobalService.closeModal();
          }
        }]);

        return BillWaitPage;
      }();

      BillWaitPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
        }, {
          type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: src_app_service_AlertService__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: src_app_share_helper__WEBPACK_IMPORTED_MODULE_6__["convertHelper"]
        }];
      };

      BillWaitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bill-wait',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bill-wait.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bill/bill-wait/bill-wait.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bill-wait.page.scss */
        "./src/app/bill/bill-wait/bill-wait.page.scss"))["default"]]
      })], BillWaitPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~bill-bill-wait-bill-wait-module~nhapkho-nhaphang-detail-nhaphang-detail-module~xuatkho-xuath~c3aecbbf-es5.js.map