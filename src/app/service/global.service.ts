import { Component, Injectable } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
// import { StringResources } from '@app/models/sharedmodels';
@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    constructor(
        public alertController: AlertController,
        private modalController: ModalController,
    ) { }

    private controlMove = new BehaviorSubject('Quản lý trạm');
    sendMove = this.controlMove.asObservable();

    changeMoveCont(item: any) {
        setTimeout(() => {
            this.controlMove.next(item);
        });
    }

    async presentAlert(question, message?) {
        const alert = await this.alertController.create({
            header: question,
            message: message,
            buttons: [
                {
                    text: "Hủy",
                    role: 'false',
                },
                {
                    text: "Đồng ý",
                    role: 'true',
                }
            ]
        });

        await alert.present();
        const { role } = await alert.onDidDismiss();
        return `${role}`;
    }

    async closeModalSenData(item) {
        const onClosedData: string = item;
        await this.modalController.dismiss(onClosedData);
    }

    async closeModal() {
        // const onClosedData: string = "ok";
        await this.modalController.dismiss();
    }
}

