import { Component, Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { StringResources } from '@app/models/sharedmodels';
@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor(public alertController: AlertController) { }

    async presentAlert(question) {
        const alert = await this.alertController.create({
            header: question,
            cssClass: 'cssAlert',
            mode:'ios',
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

    async presentAlert2(question, print?) {

        var arr = [
            {
                text: "Đồng ý",
                role: 'true',
            },
            
            {
                text: "Hủy",
                role: 'false',
            },
        ]

        if(print){
            arr.splice(1, 0, {
                text: "Đồng ý và in",
                role: 'trueAndPrint',
            });
        }

        const alert = await this.alertController.create({
            header: question,
            cssClass: 'alertThree',
            buttons: arr
        });

        await alert.present();
        const { role } = await alert.onDidDismiss();
        return `${role}`;
    }

    
}

