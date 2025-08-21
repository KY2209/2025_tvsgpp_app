import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../function.service';
import _ from 'lodash'
import { isNgTemplate } from '@angular/compiler';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-nhaphang-addnew',
  templateUrl: './nhaphang-addnew.page.html',
  styleUrls: ['./nhaphang-addnew.page.scss'],
})
export class NhaphangAddnewPage implements OnInit {
  ngayNhap: string = new Date().toISOString();
  HanDung: string = new Date().toISOString();
  LoHang: string = ""
  ThanhToan: number = 0;
  loaiChungTu: number = 4;
  loaiChungTuAll: any;
  lstKho: Array<
    {
      MaKho: string,
      TenKho: string
    }
  >;
  loaiKhoXuatAll: any;
  loaikho: string = "TK";

  lstThanhToan = new Array(
    {
      MaLoai: 0,
      TenLoai: "Tiền mặt"
    },
    {
      MaLoai: 1,
      TenLoai: "Chuyển khoản"
    }
  )
  loaiThanhToan: number = 0;
  lstHangHoa: Array<{ MaDuocQG: string, MaVT: string, TenVT: string, DVT: string, GiaBanLe: number }>;
  lstHangHoaAll: any;
  detailObjects = new Array({
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
    "NhapXuatID": 0,
    // "GiaBQ": 317.5000,
    // "UserIDCreated": 1,
    // "CreatedTime": "2023-10-10T15:59:27.190",
    // "UpdatedTime": "2023-11-13T17:11:32.113",
    // "UserIDUpdated": 1
  })
  lstBillDetail = new Array({
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
  })
  lstChungTu: Array<{ LoaiCTID: string, LoaiNX: string, DienGiai: string }>;
  tenHanghoa: string = "";
  maHanghoa: string = "";
  DVNhap: string = "";;
  showProduct: boolean = false;
  Saving: boolean = false;
  SoLuongNhap: number = 0;
  TongTien: number = 0;
  constructor(
    public Function: FunctionService,
    public toastController: ToastController
  ) {

    this.getListHangHoa();
    this.getLoaiCT();
    this.getDSKho();
    this.lstBillDetail = [];
    this.loaiChungTu = 4;
    this.loaikho = "TK";
    this.loaiThanhToan = 0;

  }

  ngOnInit() {
  }

  getListHangHoa() {
    this.Function.getVatTu().subscribe(data => {
      this.lstHangHoa = data;
      this.lstHangHoaAll = this.lstHangHoa;
    })
  }

  getLoaiCT() {
    this.Function.getLoaiCT().subscribe(data => {
      let index = data.indexOf(1)
      data.splice(index);
      index = data.indexOf(2);
      data.splice(index);
      data.splice(1, 1);
      console.log("141", data);
      this.lstChungTu = data;
    })
  }
  chonHangHoa() {
    this.showProduct = true;
  }

  getDSKho() {
    let data = this.Function.getDanhsachKho();
    if (data != undefined) {
      data.subscribe(rs => {
        this.lstKho = rs;
      })
    }
  }

  onLoaiCTChange(loaiCT: any) {
    let val = loaiCT.target.value;
    console.log("146", val)
    this.loaiChungTu = Number(val);
  }

  onkhoChange(loaiKho: any) {
    let val = loaiKho.target.value;
    console.log("153", val)
    this.loaikho = val;
  }
  closeList() {
    if (this.tenHanghoa == "") {
      this.showProduct = false;
    }
  }

  doSomething() {
    if (this.tenHanghoa != "") {
      this.showProduct = true;
    }
    else {
      this.showProduct = false;
    }

  }

  filterProduct(pid: any) {
    let val = pid.target.value;
    if (this.lstHangHoa != null) {
      if (val && val.trim() != '') {
        this.lstHangHoa = _.values(this.lstHangHoaAll);
        this.lstHangHoa = this.lstHangHoa.filter((product) => {
          return (product.TenVT.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
      else {
        this.lstHangHoa = this.lstHangHoaAll;
      }
    }
  }

  selectHanghoa(item: any) {
    this.tenHanghoa = item.TenVT
    this.maHanghoa = item.MaVT
    this.showProduct = false;
    this.detailObjects = [];
    this.detailObjects.push(item);
    localStorage.setItem("objects", JSON.stringify(this.detailObjects));
  }

  updateBillDetail() {
    let object = localStorage.getItem("objects");
    let object1 = JSON.parse(object)
    for (let i = 0; i <= object1.length; i++) {
      let item = object1[i]
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
    console.log("149", this.lstBillDetail)
    this.TongTien = 0;
    for (let j = 0; j <= this.lstBillDetail.length - 1; j++) {
      let item = this.lstBillDetail[j];
      if (item != undefined) {
        item.ThanhTien = (item.DonGia * Number(this.SoLuongNhap.toString()))
        item.TongTien = item.ThanhTien + item.ChietKhau
      }
      this.TongTien = this.TongTien + item.TongTien
    }
    this.tenHanghoa = "";
    this.SoLuongNhap = 0;
  }

  savePhieunhap() {
    let _SoCT = Number(this.Function.randomBetween(1, 9999))
    let _MaCT = this.Function.randomBetween(1, 9999)
    console.log("Ma chung tu", _SoCT)
    if (this.loaiChungTu == 1) {
      //nhap mua
      _MaCT = "NM" + _MaCT
    }
    else if (this.loaiChungTu == 3) {
      //nhap hang
      _MaCT = "NH" + _MaCT
    }
    else if (this.loaiChungTu == 4) {
      //nhap ton
      _MaCT = "NT" + _MaCT
    }
    if (this.lstBillDetail.length == 0) {
      this.presentToastMsg("Đơn nhập hàng không hợp lệ !")
      return;
    }
    this.Saving = true;
    let data = this.Function.addnewPhieunhaphang(this.loaiChungTu, _SoCT, _MaCT, this.ngayNhap, this.DVNhap, this.loaikho.toString(), this.lstBillDetail)
    if (data != null) {
      data.subscribe(rs => {
        console.log("277", rs)
        if (rs.code == 200) {
          this.presentToastMsg(rs.message)
        }
        this.Saving = false;
      })
    }
  }

  async presentToastMsg(msg) {
    const toast = await this.toastController.create({
      message: '<center>' + msg + '</center>',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  closeModal() {
    this.Function.closeModal()
  }

}
