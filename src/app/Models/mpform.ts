import { IonDatetime } from '@ionic/angular';

export interface Mpform {
myPharmaId: number;
pc: string;
batch: string;
expDate: IonDatetime;
serialN: string;
active: boolean;
prodId: number;
userId: number;
indications: string;
dosage: string;
}
