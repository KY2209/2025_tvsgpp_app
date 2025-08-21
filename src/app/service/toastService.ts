import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToastService {


  APIData: Observable<any>;

  constructor(
    private toastController: ToastController
    ) {

  }

  async successToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'success',
      cssClass: 'toast-ios'
    });

    await toast.present();
  }

  async errorToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'danger',
      cssClass: 'toast-ios'
    });

    await toast.present();
  }

  async warningToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'warning',
      cssClass: 'toast-ios'
    });

    await toast.present();
  }

}
