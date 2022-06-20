import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { MpdetailsComponent } from '../Components/mpdetails/mpdetails.component';
import { ProductdetailComponent } from '../Components/productdetail/productdetail.component';
import { MyPharma } from '../Models/my-pharma';
import { MypharmaService } from '../Services/mypharma.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  listMp: MyPharma[];


  constructor(
    private mpservice: MypharmaService,
    private router: Router,
    private modalctrl: ModalController,
    private toastctrl: ToastController
  ) {}


  ngOnInit(): void {
  this.loadItems();

    }

  loadItems() {
    this.mpservice.listSub.subscribe((data: MyPharma[]) => {
      this.listMp = data;

    });
    this.mpservice.getAll();

  }
  async openMPDetail(mpid: number){
    console.log(mpid);
    const modal = await this.modalctrl.create({
      component: MpdetailsComponent,
      componentProps: {id: mpid}
    });
    modal.present();
    modal.onDidDismiss().then((t)=> {
      if(t.data){
        this.toastctrl.create({duration: 3000, message: 'Produit supprimé avec succès', color: t.data}).then(x => x.present());
        this.loadItems();
        }
    });
  }
}
