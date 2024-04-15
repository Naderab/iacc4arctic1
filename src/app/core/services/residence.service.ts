import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  a: number = 1;
  constructor() { }

  UpdateAService(n: number) {
    this.a = n;
  }

}
