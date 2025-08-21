import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { map } from "rxjs/operators";
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { FunctionService } from '../function.service';
// import { Network } from '@ionic-native/network/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public apiUrl: string;
  Show: boolean = true;
  ShowPass: boolean = false;
  SavePass: boolean = false;

  orgId: string = "";
  userID: string = "";
  UserName: string = "";
  PassWord: string = "";
  FullName: string = "";

  TypeId: string = "";
  State: string = "";
  logStatus: string = "1";

  checkNet: string = "1";
  AccountData: Observable<any>;
  LoginData: Array<{ code: string, message: string, token: string }>;
  LoginDataAll: Observable<any>;
  InforNotificationData: Observable<any>;
  InforNotification: Array<{ State: string }>;
  url1: string;
  urlLogo: string;
  connLink: string;
  countClick: number = 0;

  constructor(public navCtrl: NavController,
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private storage: Storage,
    // private network: Network,
    public platform: Platform,
    public oneSignal: OneSignal,
    public Function: FunctionService) {
    this.orgId = "";
    try {
      storage.create();

      this.storage.get("connLink").then(link => {
        if (link != null || link != undefined) {

          this.connLink = link;

        }
      })

      this.storage.get("Code").then(Code => {
        this.orgId = Code;
      })

      storage.get("User").then(User => {
        this.UserName = User;
      })

      storage.get("Pass").then(Pass => {
        this.PassWord = Pass;


      })


    }
    catch {

    }

  }

  ngOnInit() {

    this.storage.create();
    this.storage.get("connLink").then(link => {
      if (link != null || link != undefined) {

        this.connLink = link;

      }
    })

  }

  ionViewDidEnter() {

    this.connLink = localStorage.getItem('unit');
    this.orgId = this.connLink;

    this.storage.get("User").then(User => {
      this.UserName = User;
    })

    this.storage.get("Pass").then(Pass => {
      this.PassWord = Pass;
    })
    // setTimeout(() => {
    //   this.orgId = "nhathuocvuhai";
    // this.UserName = "tvs";
    // this.PassWord = "123456@";
    // }, 1000);

  }

  changeOrg() {
    this.Show = !this.Show;
    this.storage.set("connLink", this.orgId);

  }


  async signIn() {

    if (this.orgId == null || this.orgId.trim() == '') {
      this.presentToastMsg("Bạn chưa nhập mã cơ sở!");
      return;
    }

    if (this.UserName == null || this.UserName.trim() == '') {
      this.presentToastMsg("Bạn chưa nhập tài khoản!");
      return;
    }

    if (this.PassWord == null || this.PassWord.trim() == '') {
      this.presentToastMsg("Bạn chưa nhập mật khẩu của tài khoản!");
      return;
    }

    this.oneSetup()
    console.log("connLink", this.orgId)
    this.LoginDataAll = this.Function.login(this.orgId, this.UserName, this.PassWord);
    this.LoginDataAll.subscribe(response => {
      if (response.code == 1) {
        this.storage.set("userId", response.userid);
        this.storage.set("gppUser", response.fullname);
        this.storage.set("User", this.UserName);
        this.storage.set("Pass", this.PassWord);
        this.storage.set("Code", this.orgId);
        localStorage.setItem('unit', this.orgId);

        localStorage.setItem("Token", response.token);
        localStorage.setItem("gppUserId", response.userid);
        localStorage.setItem('officeId', response.officeid);
        this.router.navigateByUrl("tabs/tab3");
      }
      else if (response.code == 2) {
        this.presentToastMsg("Tên đăg nhập hoặc mật khẩu không đúng !");
        return;
      }
      else {
        this.presentToastMsg("Đăng nhập thất bại!");
        return;
      }
    })
  }


  oneSetup() {
    if (this.platform.is("android")) {
      this.oneSignal.getIds().then((id) => {
        this.userID = id.userId;
        this.presentToastMsg(this.userID);
        localStorage.setItem("DeviceId", id.userId);
        if (this.InforNotificationData != null) {
          this.InforNotificationData.subscribe((data) => {
            this.InforNotificationData = data;
            this.InforNotification = data;
            this.presentToastMsg(data);
          });
        }
      });
      this.oneSignal.startInit(
        "76b6289-4ea1-4446-b846-ce39ee1bf0c5",
        this.userID
      );
      this.oneSignal.inFocusDisplaying(
        this.oneSignal.OSInFocusDisplayOption.Notification
      );
      this.oneSignal.handleNotificationReceived().subscribe(() => {
        let a = "abc";
      });
      this.oneSignal.handleNotificationOpened().subscribe((data: any) => {
        let sdata = data.notification;
      });
      this.oneSignal.endInit();
    }

    if (this.platform.is("ios")) {
      this.oneSignal.getIds().then((id) => {
        this.userID = id.userId;
        localStorage.setItem("DeviceId", id.userId);
        if (this.InforNotificationData != null) {
          this.InforNotificationData.subscribe((data) => {
            this.InforNotificationData = data;
            this.InforNotification = data;
            // this.presentToastMsg(data);
          });
        }
      });
      this.oneSignal.startInit(
        "562a14e0-d33d-4fb0-875d-9aacba5682e6",
        this.userID
      );
      this.oneSignal.inFocusDisplaying(
        this.oneSignal.OSInFocusDisplayOption.Notification
      );
      this.oneSignal.handleNotificationReceived().subscribe(() => {
        let a = "abc";
      });
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        let a = "abc";
      });
      this.oneSignal.endInit();
    }

    //Code mới trên Onesignal 3.0

    // if (this.platform.is('android')) {
    //   // NOTE: Update the setAppId value below with your OneSignal AppId.
    //   OneSignal.getDeviceState(response => {
    //     console.log("227", response)
    //     console.log("228", response.userId)
    //     if (response.userId == undefined) {
    //       this.oneSetup();
    //     }
    //     localStorage.setItem("DeviceId", response.userId);

    //   })
    //   OneSignal.setAppId("776b6289-4ea1-4446-b846-ce39ee1bf0c5");
    //   OneSignal.setNotificationOpenedHandler(function (data) {
    //     console.log('notificationOpenedCallback: ' + JSON.stringify(data));

    //   });

    //   // Prompts the user for notification permissions.
    //   //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    //   OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
    //     console.log("User accepted notifications: " + accepted);
    //   });

    // }

    // if (this.platform.is('ios')) {
    //   // NOTE: Update the setAppId value below with your OneSignal AppId.
    //   OneSignal.getDeviceState(response => {
    //     console.log("213", response)
    //     console.log("214", response.userId)
    //     if (response.userId == undefined) {
    //       this.oneSetup();
    //     }
    //     localStorage.setItem("DeviceId", response.userId);
    //   })
    //   OneSignal.setAppId("562a14e0-d33d-4fb0-875d-9aacba5682e6");
    //   OneSignal.setNotificationOpenedHandler(function (data) {
    //     console.log('notificationOpenedCallback: ' + JSON.stringify(data));

    //   });

    //   // Prompts the user for notification permissions.
    //   //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    //   OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
    //     console.log("User accepted notifications: " + accepted);
    //   });
    // }
  }


  openConfig() {
    if (this.countClick <= 4) {
      this.countClick = this.countClick + 1;
    }
    else {
      this.storage.remove("User");
      this.storage.remove("Pass");
      this.UserName = "";
      this.PassWord = "";
      this.router.navigateByUrl('ht-madonvi');
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '<center>Đăng nhập không thành công</center>',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  async presentToastMsg(msg) {
    const toast = await this.toastController.create({
      message: '<center>' + msg + '</center>',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      message: '<center>Không có kết nối mạng !</center>',
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: this.userID,
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }

  async presentToast3() {
    const toast = await this.toastController.create({
      message: "<center>Bạn chưa chọn đơn vị thành viên</center>",
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }

  async presentToast4() {
    const toast = await this.toastController.create({
      message: "<center>Không tìm thấy thông tin máy chủ</center>",
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }

  onShowPass() {
    this.ShowPass = !this.ShowPass;
  }

  openGetPass() {
    this.router.navigateByUrl("laylaimatkhau");
  }

  onSavePass() {

  }

  openBack() {
    this.router.navigateByUrl("sys-home");
  }

}

