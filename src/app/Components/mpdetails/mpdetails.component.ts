import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyPharma } from 'src/app/Models/my-pharma';
import { MypharmaService } from 'src/app/Services/mypharma.service';

@Component({
  selector: 'app-mpdetails',
  templateUrl: './mpdetails.component.html',
  styleUrls: ['./mpdetails.component.scss'],
})
export class MpdetailsComponent implements OnInit {
@Input() id: number;
status: string;
errorMessage: string;
selectmp: MyPharma;
  constructor(private mpservice: MypharmaService, private modalctrl: ModalController ) { }

  ngOnInit() {
    console.log(this.id);
    this.mpservice.getById(this.id)
    .subscribe({next: (data) => {this.selectmp= data; console.log(data);}
    });
  }
  back(){
    this.modalctrl.dismiss();
  }
  supprimer(){
    console.log(this.id);
    this.mpservice.delete(this.id).subscribe({
      next:() =>  this.modalctrl.dismiss('success')
    });
  }
}
