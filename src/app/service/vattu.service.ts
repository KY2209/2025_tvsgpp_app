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
import { convertHelper } from '../share/helper';
@Injectable({
  providedIn: 'root'
})
export class VattuService {

  apiUrl: string = environment.urlGpp;

  constructor(
    private http: Http,
    public router: Router,
    public toastController: ToastController,
    private http1: HttpClient,
    private storage: Storage,
    public convertHelper: convertHelper,
    private modalController: ModalController
  ) { }


  getVatTu() {
    let _url = this.convertHelper.env() + "VatTu";

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  getVatTuQuocGia(searchText) {
    let _url = this.convertHelper.env2() + "GPP/" + searchText;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  GetListVT(item) {
    let _url = this.convertHelper.env() + `VatTu/GetListVT?loainx=${item.loainx}&khohang=${item.khohang}&banggia=${item.banggia}&xuatam=${item.xuatam}`;
   console.log(_url);
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  detailVattu(maVT) {
    let _url = this.convertHelper.env() + `VatTu/${maVT}`;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  createVattu(item) {
    let _url = this.convertHelper.env() + "VatTu";

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.post(_url, item, { headers: headers }).pipe(map(res => res.json()));
  }

  deleteVattu(id) {
    let _url = this.convertHelper.env() + "VatTu/" + id;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.delete(_url, new RequestOptions({
      headers: headers,
    }));
  }

  detailDVT(maVT) {
    let _url = this.convertHelper.env() + `DonViTinh/${maVT}`;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  createDVT(item) {
    let _url = this.convertHelper.env() + `DonViTinh`;

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.post(_url, item, { headers: headers }).pipe(map(res => res.json()));
  }

  deleteDVT(id) {
    let _url = this.convertHelper.env() + "DonViTinh/" + id;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.delete(_url, new RequestOptions({
      headers: headers,
    }));
  }

  getVatTuTonKho(item: any) {

    let _url = this.convertHelper.env() + "Report/TonKho";

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.post(_url, item, { headers: headers }).pipe(map(res => res.json()));
  }

  getVatTuSapHetHan(item) {
    let _url = this.convertHelper.env() + "Report/TonKhoHanDung";
    console.log("115", item)
    console.log("url - ", _url)
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.post(_url, item, { headers: headers }).pipe(map(res => res.json()));
  }
}
