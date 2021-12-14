import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ShareService {
  message1: string = '';
  message2: string = '';


  constructor() {}
  setMessage(data1: string){
    this.message1 = data1;
  }
  getMessage1(){
    return this.message1;
  }
  getMessage2(){
    return this.message2;
  }
}
