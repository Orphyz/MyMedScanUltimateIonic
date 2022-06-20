import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomproducComponent } from './Components/addcustomproduc/addcustomproduc.component';
import { AddtoMPComponent } from './Components/addto-mp/addto-mp.component';
import { MpdetailsComponent } from './Components/mpdetails/mpdetails.component';
import { ProductdetailComponent } from './Components/productdetail/productdetail.component';


@NgModule({
  declarations: [AppComponent, AddcustomproducComponent, ProductdetailComponent, AddtoMPComponent, MpdetailsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
