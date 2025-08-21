(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~saphethan-index-saphethan-index-module~share-group-product-group-product-module~tonkho-index~82b7df12"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/group-product/group-product.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/share/group-product/group-product.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons (click)=\"closeModal()\" slot=\"start\">\r\n      <ion-item lines=\"none\"\r\n        style=\"--padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n      </ion-item>\r\n    </ion-buttons>\r\n\r\n    <ion-title style=\"font-weight: 600; text-align: center;\">\r\n      Nhóm vật tư\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-item lines=\"none\"\r\n        style=\" --padding-start: 10px!important; --padding-end:0px!important;--padding-top:0px!important;--border-width:0px!important;\">\r\n        <!-- <ion-icon name=\"add-outline\" style=\"font-size: 26px;\"></ion-icon> -->\r\n      </ion-item>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <div class=\"product-header\">\r\n    <div class=\"product-search\">\r\n      <input (keyup)=\"onSearch($event)\" [(ngModel)]=\"keyword\" type=\"text\"\r\n        placeholder=\"Tìm kiếm tên vật tư ...\" style=\"text-align: left; background: white;\">\r\n      <ion-icon class=\"search-icon\" *ngIf=\"keyword == ''\" name=\"search-outline\"></ion-icon>\r\n      <ion-icon (click)=\"deleteSearch()\" *ngIf=\"keyword != ''\" class=\"search-icon2\"\r\n        name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  \r\n\r\n  <div class=\"product\">\r\n    <div (click)=\"handleItem(item)\" *ngFor=\"let item of listData; index as i\" class=\"product-item border-b\" [class]=\"item.checkHover == true ? 'bg-hover' : ''\">\r\n\r\n      <div class=\"product-content\">\r\n        <div class=\"product-content-item\">\r\n          <div class=\"product-content-left product-content-title\">\r\n            {{item}}\r\n          </div>\r\n          <!-- <div class=\"product-content-right\">\r\n            <button ><ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon></button>\r\n\r\n          </div> -->\r\n        </div>\r\n     \r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <!-- <ion-infinite-scroll *ngIf=\"!pageInfo.keyword\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Đang tải dữ liệu...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/share/group-product/group-product.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/share/group-product/group-product.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-header {\n  position: sticky;\n  top: 0;\n  background: white;\n  z-index: 9;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n.product-search {\n  padding: 0 10px 10px 10px;\n  background: var(--background-color);\n  position: relative;\n}\n.product-search input {\n  width: 100%;\n  padding: 8px;\n  border-radius: 5px;\n  border: 1px solid gray;\n}\n.product-search input:focus {\n  outline: 1px solid gray;\n}\n.product-search ion-icon {\n  position: absolute;\n  right: 20px;\n  top: 8px;\n  font-size: 22px;\n  color: var(--background-color);\n}\n.product-title {\n  padding: 14px 10px 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: var(--gray-dark);\n}\n.product-item {\n  display: flex;\n  padding: 18px 15px 18px 15px;\n}\n.product-icon {\n  font-size: 20px;\n  padding-right: 15px;\n}\n.product-red {\n  border: 1px solid var(--red-dark) !important;\n  color: var(--red-dark) !important;\n}\n.product-content {\n  width: 100%;\n}\n.product-content-item {\n  display: flex;\n}\n.product-content-left {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.product-content-left span {\n  color: gray;\n}\n.product-content-left ion-icon {\n  border: 1px solid gray;\n  border-radius: 3px;\n}\n.product-content-title {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--background-color);\n  text-transform: capitalize;\n}\n.product-content-sm {\n  font-size: 14px;\n  color: gray;\n}\n.product-content-right {\n  margin-left: auto;\n}\n.product-content-right span {\n  color: gray;\n}\n.product-content-right ion-icon {\n  font-size: 15px;\n}\n.product-content-right button {\n  border: 1px solid var(--primary-color);\n  color: var(--primary-color);\n  padding: 2px 6px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.product-content-sl {\n  display: flex;\n  gap: 10px;\n}\n.product-content-sl ion-icon {\n  font-size: 24px;\n  color: var(--primary-color);\n}\n.product-footer {\n  padding: 10px;\n}\n.product-footer button {\n  color: white;\n  background: var(--background-color);\n  width: 100%;\n  margin-left: auto;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  border-radius: 5px;\n}\n.product-footer-left {\n  display: flex;\n  align-items: center;\n}\n.product-footer-left ion-icon {\n  font-size: 18px;\n}\n.product-footer-form {\n  position: absolute;\n  width: 50px;\n  height: 40px;\n  background: #616161;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  color: white;\n}\n.product-footer-number {\n  border-radius: 100vw;\n  position: absolute;\n  top: -4px;\n  right: -7px;\n  width: 20px;\n  height: 20px;\n  background: #0663a9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid white;\n  font-size: 10px;\n}\n.border-b {\n  border-bottom: 1px solid #bfbfbf;\n}\ntable {\n  width: 100%;\n  margin-bottom: 10px;\n}\ntd {\n  padding: 8px 0px;\n}\ntd span {\n  color: var(--background-color);\n  font-weight: 600;\n}\ninput[type=text],\ninput[type=number], input[type=date] {\n  width: 72px;\n  border: 1px solid #a7e9f7;\n  text-align: center;\n  background: #a7e9f7;\n  border-radius: 5px;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmUvZ3JvdXAtcHJvZHVjdC9ncm91cC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0FBTFI7QUFVSTtFQUNJLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQVJSO0FBVVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFSWjtBQVdRO0VBQ0ksdUJBQUE7QUFUWjtBQVlRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQVZaO0FBY0k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBWlI7QUFlSTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtBQWJSO0FBZ0JJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBZFI7QUFpQkk7RUFDSSw0Q0FBQTtFQUNBLGlDQUFBO0FBZlI7QUFrQkk7RUFDSSxXQUFBO0FBaEJSO0FBa0JRO0VBQ0ksYUFBQTtBQWhCWjtBQW9CUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFsQlo7QUFxQlk7RUFFSSxXQUFBO0FBcEJoQjtBQXVCWTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFyQmhCO0FBMEJRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQXhCWjtBQTJCUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBekJaO0FBNEJRO0VBQ0ksaUJBQUE7QUExQlo7QUE0Qlk7RUFDSSxXQUFBO0FBMUJoQjtBQTZCWTtFQUNJLGVBQUE7QUEzQmhCO0FBOEJZO0VBQ0ksc0NBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBNUJoQjtBQWdDUTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBOUJaO0FBZ0NZO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0FBOUJoQjtBQXFDSTtFQUNJLGFBQUE7QUFuQ1I7QUFxQ1E7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFuQ1o7QUFzQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFwQ1o7QUF1Q1k7RUFDSSxlQUFBO0FBckNoQjtBQTBDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBeENaO0FBNENRO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBMUNaO0FBZ0RBO0VBQ0ksZ0NBQUE7QUE3Q0o7QUFnREE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUE3Q0o7QUFnREE7RUFDSSxnQkFBQTtBQTdDSjtBQWdEQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUE3Q0o7QUFnREE7O0VBRUksV0FBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQTlDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL2dyb3VwLXByb2R1Y3QvZ3JvdXAtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XHJcblxyXG4gICAgLy8gcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgJi1zZWFyY2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxMHB4IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktZGFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHggMTVweCAxOHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXJlZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcmVkLWRhcmspICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZC1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuXHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtc20ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1yaWdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1zbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWZvcm0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MTYxNjE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICYtbnVtYmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgICAgICByaWdodDogLTdweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA2NjNhOTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmJvcmRlci1iIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiZmJmO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmc6IDhweCAwcHg7XHJcbn1cclxuXHJcbnRkIHNwYW4ge1xyXG4gICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJde1xyXG4gICAgd2lkdGg6IDcycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTdlOWY3O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2E3ZTlmNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG59XHJcblxyXG4vLyBpbnB1dFt0eXBlPSdkYXRlJ106Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIGJvdHRvbTogMDtcclxuLy8gICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIHRvcDogMDtcclxuLy8gICAgIHdpZHRoOiBhdXRvO1xyXG4vLyB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/share/group-product/group-product.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/share/group-product/group-product.page.ts ***!
  \***********************************************************/
/*! exports provided: GroupProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupProductPage", function() { return GroupProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/loading.service */ "./src/app/service/loading.service.ts");




let GroupProductPage = class GroupProductPage {
    constructor(GlobalService, LoadingService) {
        this.GlobalService = GlobalService;
        this.LoadingService = LoadingService;
        this.listData = [];
        this.listDataSearch = [];
        this.keyword = '';
        this.getVattu();
    }
    ionViewDidEnter() { }
    ngOnInit() { }
    getVattu() {
        // this.LoadingService.setValue(true);
        this.listData = JSON.parse(localStorage.getItem('NhomVT') || '[]');
        this.listDataSearch = JSON.parse(localStorage.getItem('NhomVT') || '[]');
        // this.LoadingService.setValue(false);
    }
    onSearch(e) {
        var arrPlan = [];
        this.keyword = e.target.value;
        this.listDataSearch.find((o, i) => {
            console.log(o);
            if (o.toLowerCase().includes(this.keyword.toLowerCase()) == true) {
                arrPlan.push(this.listDataSearch[i]);
            }
        });
        this.listData = arrPlan;
    }
    handleItem(item) {
        this.GlobalService.closeModalSenData(item);
    }
    deleteSearch() {
        this.keyword = '';
        this.listData = this.listDataSearch;
    }
    closeModal() {
        this.GlobalService.closeModal();
    }
};
GroupProductPage.ctorParameters = () => [
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: src_app_service_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }
];
GroupProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./group-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/share/group-product/group-product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./group-product.page.scss */ "./src/app/share/group-product/group-product.page.scss")).default]
    })
], GroupProductPage);



/***/ })

}]);
//# sourceMappingURL=default~saphethan-index-saphethan-index-module~share-group-product-group-product-module~tonkho-index~82b7df12-es2015.js.map