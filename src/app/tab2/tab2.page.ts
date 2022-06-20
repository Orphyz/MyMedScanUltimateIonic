import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

import { AddcustomproducComponent } from '../Components/addcustomproduc/addcustomproduc.component';
import { ProductdetailComponent } from '../Components/productdetail/productdetail.component';
import { Product } from '../Models/product';
import { MypharmaService } from '../Services/mypharma.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  listproduct: Product[];
  searchResult: Product[];
  activeLink= true;

  searchWord = '';
  searchCn: string;
  searchType: string;

  constructor(
    private service: ProductService,
    private router: Router,
    private modalctrl: ModalController,
    private toastctrl: ToastController,
    private mpService: MypharmaService
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }
  //Chargement de la liste
  loadItems() {
    this.service.getAll().subscribe((data: Product[]) =>  {this.listproduct= data;
      console.log(data);
      this.searchResult = this.listproduct;
      });
  }
  //Recherche par Cnk
  searchCnk() {
    this.searchResult=[];

    {
      this.service.getByCnk(this.searchCn).subscribe({
        next: (data: Product) => this.searchResult.push(data),
        error: (error) => console.log(error)
      });
    }
  }
  emptyCNK() {
    if(this.searchCn === '') {this.searchResult = this.listproduct;}
  }
  //Ajout d'un produit custom
  async addProd(){
    const modal = await this.modalctrl.create({
      component: AddcustomproducComponent
    });
    modal.present();

    modal.onWillDismiss().then((t)=> {
      if(t.data === 'success') {
        this.toastctrl.create({duration: 3000, message: 'Produit ajouté avec succès', color: t.data}).then(x => x.present());
        this.loadItems();
        this.mpService.getAll();
      }
      else {
        this.toastctrl.create({duration: 3000, message: 'Erreur lors de l\'ajout', color: t.data}).then(x => x.present());
      }
    });
  };
  //Accès aux détails du produit séléctionné
  async openDetail(pid: number){
    console.log(pid);
    const modal = await this.modalctrl.create({
      component: ProductdetailComponent,
      componentProps: {id: pid}
    });
    modal.present();
  }
  // addToMP() {
  //   {
  //     this.service.getByCnk(this.searchCn).subscribe({
  //       next: (data: Product) => this.listproduct.push(data),
  //       error: (error) => console.log(error)
  //     });
  //   }

  // }

  //Recherche par nom
  searchByWord() {
    this.searchResult = this.listproduct.filter(x => x.prodName.toLowerCase().includes(this.searchWord));
    if(this.searchWord === '') {this.searchResult = this.listproduct;}
  }

}
