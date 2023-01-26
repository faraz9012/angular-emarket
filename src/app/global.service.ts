import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  logo = "assets/img/paymytuition.png";

  private _storeName:string = "";

  public get storeName(){
    return this._storeName;
  }
  public set storeName(val){
    this._storeName = val;
  }
}
