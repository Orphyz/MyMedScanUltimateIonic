import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomProduct } from '../Models/custom-product';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
public createCPForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.createCPForm = this.formBuilder.group({
    prodName: ['', Validators.compose([Validators.required])],
    packaging: ['', Validators.compose([Validators.required])],
    strengths: ['', Validators.compose([Validators.required])],
    batch: [''],
    expDate: [''],
    serialN: [''],
    pc: [''],
    indications: [''],
    dosage: [''],
});
}

  ngOnInit() {
  }
  createCp(): void{
    console.log(this.createCPForm.value);
  }

}
