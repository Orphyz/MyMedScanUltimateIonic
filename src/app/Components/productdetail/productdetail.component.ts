import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/Models/product';
import { MypharmaService } from 'src/app/Services/mypharma.service';
import { ProductService } from 'src/app/Services/product.service';
import { AddtoMPComponent } from '../addto-mp/addto-mp.component';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {
  @Input() id: number;
  selectproduct: Product;
  constructor(
    private prodService: ProductService,private mpService: MypharmaService, private modalctrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.id);
    this.prodService.getById(this.id)
    .subscribe({next: (data) => {this.selectproduct= data; console.log(data);}
    });
  }
  annuler(){
    this.modalctrl.dismiss();
  }
  async addtoMP(){

      const modal = await this.modalctrl.create({
        component: AddtoMPComponent,
        componentProps: {pid : this.id}
      });
      modal.present();
    }
}
