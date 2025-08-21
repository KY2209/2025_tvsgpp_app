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
import { Observable } from 'rxjs';
import { convertHelper } from '../share/helper';
@Injectable({
    providedIn: 'root'
})
export class XuatkhoService {

    apiUrl: string = '';
    constructor(
        private http: Http,
        public router: Router,
        public toastController: ToastController,
        private http1: HttpClient,
        private storage: Storage,
        private modalController: ModalController,
        public convertHelper: convertHelper
    ) {
    }

    getTongHopXuatKho(item) {
        let _url = this.convertHelper.env() + "Report/TongHopXuatKho";
        const headers = new Headers();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
        return this.http.post(_url, item, { headers: headers }).pipe(map(res => res.json()));
    }

    getChungtu(item) {

        let _url = this.convertHelper.env() + `ChungTu?nam_du_lieu=${item.nam_du_lieu}&loaictid=${item.loaictid}`;
        const headers = new Headers();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
        return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
    }

    xuatHangDetail(item) {
        let _url = this.convertHelper.env() + `ChungTu/${item.ChungTuID}?nam_du_lieu=${item.nam_du_lieu}`;
        console.log(_url);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
        return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
    }

    createXuatHang(item) {
        console.log("Xuat hang", item)
        let _url = this.convertHelper.env() + "ChungTu";
        const headers = new Headers();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
        return this.http.post(_url, item, { headers: headers }).pipe(map(res => res.json()));
    }

    updateXuatHang(item) {
        let _url = this.convertHelper.env() + "ChungTu";
        console.log(item);
        console.log(_url);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
        return this.http.post(_url, item, { headers: headers }).pipe(map(res => res.json()));
    }

    deleteXuatHang(item) {
        let _url = this.convertHelper.env() + "ChungTu";
        const headers = new Headers();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
        return this.http.delete(_url, new RequestOptions({
            headers: headers,
            body: item
        }));
    }

    // deleteXuatHang(item): Observable<any> {
    //     const _url = this.convertHelper.env() + "ChungTu";

    //     const headers = new Headers({
    //       'Authorization': 'Bearer ' + localStorage.getItem("Token"),
    //       'Content-Type': 'application/json',  // Set content type to JSON
    //     });

    //     // Note: You may need to adjust the payload structure based on your server's expectations
    //     const options = {
    //       headers: headers,
    //       body: item
    //     };

    //     return this.http.delete(_url, new RequestOptions(options));
    //   }

    heThong() {
        let _url = this.convertHelper.env() + "HeThong";
        const headers = new Headers();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
        return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
    }

    DonViTinh(MaVT) {
        console.log("102 - ", MaVT)
        let _url = this.convertHelper.env() + "DonViTinh/" + MaVT;
        const headers = new Headers();
        headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
        return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
    }
}
