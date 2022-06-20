import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { id } from 'date-fns/locale';
import { MypharmaService } from 'src/app/Services/mypharma.service';

@Component({
  selector: 'app-addto-mp',
  templateUrl: './addto-mp.component.html',
  styleUrls: ['./addto-mp.component.scss'],
})
export class AddtoMPComponent implements OnInit {
  @Input() pid: number;
  public newMPForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private modalctrl: ModalController, private mpService: MypharmaService) {

  }
  ngOnInit() {
    this.newMPForm = this.formBuilder.group({
      batch: [''],
      expDate: [''],
      serialN: [''],
      pc: [''],
      indications: [''],
      dosage: [''],
      prodId:[this.pid]
    });
  }
  create(): void{
    console.log(this.newMPForm.value);
    this.mpService.create(this.newMPForm.value).subscribe({
      next:() =>  {
        this.mpService.getAll();
        this.modalctrl.dismiss('success');},
      error:() => this.modalctrl.dismiss('danger')
    });
  }

}
