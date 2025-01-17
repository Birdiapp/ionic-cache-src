import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicCacheSrcModule } from 'ionic-cache-src';

import { IonicStorageModule } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx'; 
import { File } from '@ionic-native/file/ngx';

@NgModule({
  
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: `__cache-src-app`,
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicCacheSrcModule
  ],
  declarations: [AppComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    File,
    FileTransfer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
