export interface Product {
  prodId: number;
  prodName: string;
  cnk: number;
  gtin: number;
  packaging: number;
  strengths: string;
  leaflet: string;
  rcp: string;
  manId: number;
  galId: number;
  subid: number;
  man: Manufacturer;
  gal: GalenicF;
  sub: ActSubstance;
}

export interface Manufacturer {
  manId: number;
  manName: string;
}
export interface GalenicF {
  galId: number;
  galName: string;
}
export interface ActSubstance {
  subId: number;
  subName: string;
}


