import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { FunctionService } from '../function.service';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { ToastService } from '../service/toastService';
import { XuatkhoService } from '../service/xuatkho.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;
  userId: any;
  UserName: string = "";
  FullName: string = "";
  nameCompany: string = '';
  nameUser: string = '';
  Doanhthuthangnay: string = "";
  Doanhthuthangtruoc: string = "";
  Doanhthutrongngay: string = "0";
  Hoadonthangnay: string = "";
  Hoadonthangtruoc: string = "";
  Hoadontrongngay: string = "0";
  DoanhthuDataAll: Observable<any>;
  BieudoData: Observable<any>;
  LienthongData: Observable<any>;
  listLoaiCT: any = [];
  displayLienThong: boolean;
  constructor(
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public Function: FunctionService,
    public ToastService: ToastService,
    private navController: NavController,
    private storage: Storage,
    private XuatkhoService: XuatkhoService,
    public platform: Platform) {

    storage.create()
  }

  
  getLoaiCT() {
    var loaiNhapHang = [];
    var loaiBanle = [];
    var loaiNHDefault = JSON.parse(localStorage.getItem('LoaiNhapHangDefault') || null);
    var loaiBLDefault = JSON.parse(localStorage.getItem('LoaiBanLeDefault') || null);

    this.Function.getLoaiCT().subscribe((response: any) => {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        if (response[i].LoaiNX == '2_1') {
          if(loaiNHDefault && loaiNHDefault.LoaiCTID == response[i].LoaiCTID){
            loaiNhapHang.unshift(response[i]);
          }else{
            loaiNhapHang.push(response[i]);
          }

        }
        if (response[i].LoaiNX == '4_1') {
          // response[i].name = 'Bán lẻ';
          // this.listLoaiCT.unshift(response[i]);
          // if()
            if(loaiBLDefault && loaiBLDefault.LoaiCTID == response[i].LoaiCTID){
              loaiBanle.unshift(response[i]);
            }else{
              loaiBanle.push(response[i]);
            }
        }
      }
      this.listLoaiCT = loaiBanle.concat(loaiNhapHang);
      
      // this.listLoaiCT = response;
      localStorage.setItem('LoaiCT', JSON.stringify(this.listLoaiCT));
      localStorage.setItem('loaiNhapHang', JSON.stringify(loaiNhapHang));
      localStorage.setItem('loaiBanle', JSON.stringify(loaiBanle));

    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
      }, 1000);
    });
  }
  getDoiSoatLienThongGPP() {
    let officeId = localStorage.getItem("officeId")
    let data = this.Function.getDoiSoatLienThongGPP(officeId)
    data.subscribe(rsLT => {
      this.LienthongData = rsLT.root;
    })
  }
  getTonghopdoanhthu() {
    let officeId = localStorage.getItem("officeId")
    let data = this.Function.getTonghopdoanhthu(officeId);
    data.subscribe(rs => {
      let dt = rs.root[0];
      this.Doanhthuthangnay = this.Function.convertMoney1(dt.DoanhThuThangNay);
      this.Doanhthuthangtruoc = this.Function.convertMoney1(dt.DoanhThuThangTruoc);
      this.Doanhthutrongngay = dt.DoanhThuTrongNgay;
      this.Hoadonthangnay = dt.HoaDonThangNay;
      this.Hoadonthangtruoc = dt.HoaDonThangTruoc;
      this.Hoadontrongngay = dt.HoaDonTrongNgay;
    })
  }
  getBieudodoanhthu() {
    let officeId = localStorage.getItem("officeId")
    var valueOfObjects = new Array();
    var nameOfObjects = new Array();
    this.BieudoData = this.Function.getBieudodoanhthu(officeId);
    this.BieudoData.subscribe(rs => {
      for (let i = 0; i < rs.root.length; i++) {
        let item = rs.root[i]
        nameOfObjects.push(item.Thang);
        item.doanhthu = this.Function.convertMoney1(item.DoanhThu)
        valueOfObjects.push(item.DoanhThu);
      }
      this.bars = new Chart(this.barChart.nativeElement, {
        type: 'bar',
        data: {
          labels: nameOfObjects,
          datasets: [{
            label: 'Doanh thu tháng',
            data: valueOfObjects,
            backgroundColor: '#1a7dcb', // array should have same number of elements as number of dataset
            borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
            borderWidth: 1,
          }]
        },

        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                tickWidth: 5,
                beginAtZero: true,
                callback: function (value, index, values) {
                  if (parseInt(value) >= 1000000000) {
                    let formattedNumber = (value / 1000000000).toFixed(1);
                    if (formattedNumber.endsWith('.0')) {
                      formattedNumber = formattedNumber.slice(0, -2);
                    }
                    return formattedNumber + " Tỉ";
                  } else if (parseInt(value) >= 1000000) {
                    let formattedNumber = (value / 1000000).toFixed(1);
                    if (formattedNumber.endsWith('.0')) {
                      formattedNumber = formattedNumber.slice(0, -2);
                    }
                    return formattedNumber + " Tr";
                  }
                  else if (parseInt(value) >= 1000) {
                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  } else {
                    return value;
                  }
                }
              }
            }]
          }
        }
      });
    })
  }
  openTab1() {
    this.router.navigateByUrl("/tabs/tab1");
  }
  openNotification() {
    this.router.navigateByUrl("/notifications-list");
  }
  ionViewDidEnter() {
    this.displayLienThong = JSON.parse(localStorage.getItem('displayLienThong') || 'false');

    this.listLoaiCT = [];
    this.storage.get("gppUser").then(value => {
      this.FullName = value;
    });
    this.userId = localStorage.getItem("gppUserId")
    this.getTonghopdoanhthu();
    this.getBieudodoanhthu();
    this.getDoiSoatLienThongGPP();
    this.getLoaiCT();
    this.getHeThong();
  }
  getHeThong() {
    this.XuatkhoService.heThong().subscribe((response: any) => {
      localStorage.setItem('HeThong', JSON.stringify(response));
      for (let i = 0; i < response.length; i++) {
        if (response[i].INIOption == "inpTenCongTy") {
          this.nameCompany = response[i].INIValue;
        }
        if (response[i].INIOption == "inpTenChuKhoan") {
          this.nameUser = response[i].INIValue;
        }
      }
    }, (error) => {
      console.log('error', error);
    });
  }
  openGroup(item) {

    var sendData = {
      nam_du_lieu: new Date().getFullYear().toString(),
      Type: 'create',
      LoaiCTID: item.LoaiCTID,
      DienGiai: item.DienGiai,
      pageParent: 'home'
    }
    if (item == "banle") {
      this.navController.navigateBack(['xuathang-detail'], {
        queryParams: sendData
      });
    } else if (item == "nhaphang") {
      this.navController.navigateBack(['nhaphang-detail'], {
        queryParams: sendData
      });
    } else {
      this.ToastService.errorToast("Nội dung đang được cập nhật!")
    }
  }
  openBill() {
    this.navController.navigateBack(["bill-list"], {
      queryParams: {
        'LoaiCTID': this.listLoaiCT[0].LoaiCTID,
        'DienGiai': this.listLoaiCT[0].DienGiai,
      }
    });
  }
  openItem(page?) {
    if (page == 'vattu') {
      this.navController.navigateBack(['vattu-list']);
    } else {
      this.ToastService.warningToast("Nội dung đang được cập nhật!")
    }
  }
  openInventory() {
    this.navController.navigateBack(['tonkho-index']);
  }
  openSapHetHan() {
    this.navController.navigateBack(['saphethan-index']);
  }
  openNhapHang() {
    this.router.navigateByUrl("nhaphang");
  }
  openXuatHang() {
    this.router.navigateByUrl("xuathang");
  }

  openLienThong() {
    this.router.navigateByUrl("lienthong");
  }
}