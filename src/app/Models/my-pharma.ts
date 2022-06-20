import { IonDatetime } from '@ionic/angular';
import { Product } from './product';

export interface MyPharma {
myPharmaId: number;
pc: string;
batch: string;
expDate: IonDatetime;
serialN: string;
active: boolean;
prodId: number;
prod: Product;
userId: number;
indications: string;
dosage: string;
}
