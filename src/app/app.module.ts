import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { LoadingComponent } from './share/loading/loading.component';
import { Printer } from '@ionic-native/printer/ngx';
// import { PrintBillComponent } from './share/print-bill/print-bill.component';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpModule, 
    HttpClientModule,     
    IonicModule.forRoot({mode: 'ios'}), 
    IonicStorageModule.forRoot(), 
    AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },OneSignal, CurrencyPipe, Printer],
  bootstrap: [AppComponent],
})
export class AppModule { }
