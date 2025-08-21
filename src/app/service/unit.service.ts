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
export class UnitService {

  apiUrl: string = environment.urlGpp;

  constructor(
    private http: Http,
    public router: Router,
    public toastController: ToastController,
    private http1: HttpClient,
    public convertHelper: convertHelper,
    private storage: Storage,
    private modalController: ModalController
  ) { }


  getUnit() {
    let _url = this.convertHelper.env() + "DonVi";

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.get(_url, { headers: headers }).pipe(map(res => res.json()));
  }

  createUnit(item) {
    let _url = this.convertHelper.env() + "DonVi";

    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.post(_url, item, { headers: headers }).pipe(map(res => res.json()));
  }

  deleteUnit(id) {
    let _url = this.convertHelper.env() + "DonVi/"+ id;
    const headers = new Headers();
    headers.append('Authorization', 'Bearer  ' + localStorage.getItem("Token"))
    return this.http.delete(_url, new RequestOptions({
        headers: headers,
     }));
}
}
