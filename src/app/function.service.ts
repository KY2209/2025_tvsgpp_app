import { Injectable } from '@angular/core';
import { Http, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Buffer } from "buffer";
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  public static apiUrl: string = environment.urlGpp;
  //public static apiUrl: string = "http://localhost:65302";
  constructor(
    private http: Http,
    public router: Router,
    public toastController: ToastController,
    private http1: HttpClient,
    private storage: Storage,
    private modalController: ModalController
  ) {
  }

  login(orgId, userName, passWord) {
    const userLogin = btoa(userName + ':' + passWord);
    let DeviceId = localStorage.getItem("DeviceId");
    if (DeviceId == null) {
      DeviceId = "8103a125-f127-4e92-ad46-21173c2bdaa3";
    }
    FunctionService.apiUrl = "https://" + orgId + ".tvsgpp.net/api/"
    // FunctionService.apiUrl = "http://localhost:65302/api/"
    environment.urlGpp = "https://" + orgId + ".tvsgpp.net/api/";

    const url = FunctionService.apiUrl + 'Login/' + DeviceId;
    const _headers = new Headers();
    _headers.append('Authorization', 'Basic ' + userLogin)

    let options = new RequestOptions({
      headers: _headers
    });

    return this.http.post(url, {}, options).pipe(map(res => res.json()));

  }


  getAllBillPagging(Keyword, Page, PageSize, TypeInput) {
    let objUserName = localStorage.getItem("objUserName");
    let link = localStorage.getItem("DbName");
    let tempObj = JSON.parse(objUserName);
    let expired = tempObj["expired"] || Date.now();
    let token = tempObj["Token"];
    var _url = FunctionService.apiUrl + "TablBill/GetAllBillPagging?Keyword=" + Keyword + "&Page=" + Page + "&PageSize=" + PageSize + "&TypeInput=" + TypeInput;
    var _header = new Headers({ 'Content-Type': 'Application/json', "Authorization": "Bearer " + token.toString(), "connLink": link });
    var _option = new RequestOptions({ method: RequestMethod.Get, headers: _header });
    return this.http.get(_url, _option).pipe(map(res => res.json()));
  }

  getTonghopdoanhthu(officeId) {
    console.log("64", officeId)
    let _url = FunctionService.apiUrl + "Report/TongHopDoanhThu/" + officeId;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  getBieudodoanhthu(officeId) {
    let _url = FunctionService.apiUrl + "Report/BieuDoDoanhThu/" + officeId;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  getDoiSoatLienThongGPP(officeId) {
    let _url = FunctionService.apiUrl + "Report/DoiSoatLienThongGPP/" + officeId;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  getDanhsachKho() {
    let _url = FunctionService.apiUrl + "Kho";

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }


  getTongHopNhapKho(officeId, tuNgay, denNgay, searchKey) {
    let _url = FunctionService.apiUrl + "Report/TongHopNhapKho";
    let _body = {
      "officeid": officeId,
      "tu_ngay": tuNgay,
      "den_ngay": denNgay,
      "dieukien": searchKey
    }
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))

    return this.http.post(_url, _body, { headers: headers }).pipe(map(res => res.json()));
  }

  getTongHopXuatKho(officeId, tuNgay, denNgay, searchKey) {
    let _url = FunctionService.apiUrl + "Report/TongHopXuatKho";
    let _body = {
      "officeid": officeId,
      "tu_ngay": tuNgay,
      "den_ngay": denNgay,
      "dieukien": searchKey
    }
    console.log(_body)
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.post(_url, _body, { headers: headers }).pipe(map(res => res.json()));
  }

  getTongHopTonKho(officeId, tuNgay, searchKey) {
    let _url = FunctionService.apiUrl + "Report/TonKho";
    let _body = {
      "officeid": officeId,
      "thoidiem": tuNgay,
      "dieukien": searchKey
    }
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.post(_url, _body, { headers: headers }).pipe(map(res => res.json()));
  }

  addnewPhieunhaphang(LoaiCTID: any, ChungTuID: any, SoCT: any, ThoiDiem: any, DVNhap: any, KhoNhap: any, ChiTietHang: any) {
    var root = JSON.stringify(ChiTietHang);
    var result = JSON.parse(root);
    let _url = FunctionService.apiUrl + "ChungTu";
    let _body = {
      "nam_du_lieu": ThoiDiem.substring(0, 4),
      "LoaiCTID": LoaiCTID,//1,
      "ChungTuID": ChungTuID,//16969244709510,
      "SoCT": SoCT,//"bh2952",
      "ThoiDiem": ThoiDiem,//"2023-10-22T00:00:00",
      "DienGiai": "",
      "DVNhap": DVNhap,//"",
      "KhoNhap": KhoNhap,//"TK",
      "ChiTietHang":
        result
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

    }
    console.log(_body);
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.post(_url, _body, { headers: headers }).pipe(map(res => res.json()));

  }
  getVatTu() {
    let _url = FunctionService.apiUrl + "VatTu";

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  getLoaiCT() {
    let _url = FunctionService.apiUrl + "LoaiCT";
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))

    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }


  dongboCT(ctId: any) {
    let _url = FunctionService.apiUrl + "GPP/DongBoDuLieuGPP";
    let _body = {
      "chungtuid": ctId
    }
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.post(_url, _body, { headers: headers }).pipe(map(res => res.json()));
  }

  getThongBaoGPP(officeId, tuNgay, denNgay, searchKey) {
    let _url = FunctionService.apiUrl + "GPP/ThongBaoGPP";
    let _body = {
      "officeid": officeId,
      "tu_ngay": tuNgay,
      "den_ngay": denNgay,
      "dieukien": searchKey
    }
    console.log(_body)
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.post(_url, _body, { headers: headers }).pipe(map(res => res.json()));
  }

  getThongBao() {
    let _url = FunctionService.apiUrl + "ThongBao";
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  getChiTietThongBao(Id: any) {
    let _url = FunctionService.apiUrl + "ThongBao/" + Id;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  getChungtu(item) {
    console.log(item);
    let _url = FunctionService.apiUrl + `ChungTu?nam_du_lieu=${item.nam_du_lieu}&loaictid=${item.loaictid}`;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }



  getValue() {
    let userId = ""
    this.storage.get("userId").then(id => {
      userId = id;
    })
    let _url = FunctionService.apiUrl + "Users";

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))


    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  getDSTK() {
    let _url = FunctionService.apiUrl + "TaiKhoan";
    
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
    
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  convertMoney1(param: string) {
    let s = param.toString()
    if (Number(s) < 0) {
      s = s.replace("-", "")

      if (param.toString().length == 5) {
        let a = s.substring(0, 2);
        let b = s.substring(2, 5);
        let c = "-" + a + "," + b;
        s = c;
      }

      else if (s.length == 6) {
        let a = s.substring(0, 3)
        let b = s.substring(3, 6)
        let c = "-" + a + "," + b
        s = c;
      }

      else if (s.length == 7) {
        let a = s.substring(0, 1)
        let b = s.substring(1, 4)
        let c = s.substring(4, 7)
        let d = "-" + a + "," + b + "," + c
        s = d;
      }
      else if (s.length == 8) {

        let a = s.substring(0, 2)
        let b = s.substring(2, 5)
        let c = s.substring(5, 8)
        let d = s.substring(8, 10)
        let e = "-" + a + "," + b + "," + c + "," + d
        s = e;
      }


    }
    else {
      if (param.toString().length == 5) {
        let a = s.substring(0, 2)
        let b = s.substring(2, 5)
        let c = a + "," + b
        s = c;
      }

      else if (s.length == 6) {
        let a = s.substring(0, 3)
        let b = s.substring(3, 6)
        let c = a + "," + b
        s = c;
      }

      else if (s.length == 7) {
        let a = s.substring(0, 1)
        let b = s.substring(1, 4)
        let c = s.substring(4, 7)
        let d = a + "," + b + "," + c
        s = d;
      }
      else if (s.length == 8) {

        let a = s.substring(0, 2)
        let b = s.substring(2, 5)
        let c = s.substring(5, 8)
        let d = s.substring(8, 10)
        let e = a + "," + b + "," + c + "," + d
        s = e;
      }
      else if (s.length == 9) {
        let a = s.substring(0, 3)
        let b = s.substring(3, 6)
        let c = s.substring(6, 9)
        let e = a + "," + b + "," + c
        s = e;
      }
      else if (s.length == 10) {
        let a = s.substring(0, 1)
        let b = s.substring(1, 4)
        let c = s.substring(4, 7)
        let d = s.substring(7, 10)
        let e = a + "," + b + "," + c + "," + d
        s = e;
      }

    }

    return s;


  }

  randomBetween(min, max) {
    let rs = ""
    if (min < 0) {
      rs = min + Math.random() * (Math.abs(min) + max)
      rs = rs.toString().replace(".", "")
      rs = rs.substring(0, 4)
      return rs;
    } else {
      rs = (min + Math.random() * max)
      rs = rs.toString().replace(".", "")
      rs = rs.substring(0, 4)
      return rs;
    }
  }


}
