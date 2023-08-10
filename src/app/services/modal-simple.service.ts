import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalSimpleService {

  constructor() { }

  showDialog(show: boolean): void {}
}
