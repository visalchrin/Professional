import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ShareService {
  message: string = '';

  constructor() {}
  setMessage(data: string){
    this.message = data;
  }
  getMessage(){
    return this.message;
  }
}
