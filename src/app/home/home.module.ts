import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { IonicCacheSrcModule } from 'ionic-cache-src';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    IonicCacheSrcModule,


    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
