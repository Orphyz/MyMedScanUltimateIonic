import { IonDatetime } from '@ionic/angular';

export interface CustomProduct {
prodId: number;
prodName: string;
packaging: number;
strengths: string;
userId: number;
batch: string;
expDate: IonDatetime;
serialN: string;
pc: string;
indications: string;
dosage: string;
}
