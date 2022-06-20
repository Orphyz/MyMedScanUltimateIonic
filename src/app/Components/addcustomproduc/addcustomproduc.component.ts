import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CustomProductService } from 'src/app/Services/custom-product.service';
import { MypharmaService } from 'src/app/Services/mypharma.service';

@Component({
  selector: 'app-addcustomproduc',
  templateUrl: './addcustomproduc.component.html',
  styleUrls: ['./addcustomproduc.component.scss'],
})
export class AddcustomproducComponent implements OnInit {
  public createCPForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private modalctrl: ModalController, private cpService: CustomProductService) {
    this.createCPForm = this.formBuilder.group({
    prodName: ['', Validators.compose([Validators.required])],
    packaging: ['', Validators.compose([Validators.required])],
    strengths: ['', Validators.compose([Validators.required])],
    batch: [''],
    expDate: [''],
    serialN: [''],
    pc: [''],
    indications: [''],
    dosage: ['']
});
}

  ngOnInit() {
  }
  createCp(): void{
    console.log(this.createCPForm.value);
    this.cpService.create(this.createCPForm.value).subscribe({
      next:() => {
        this.modalctrl.dismiss('success');
      },
      error:() => this.modalctrl.dismiss('danger')
    });
  }

}
