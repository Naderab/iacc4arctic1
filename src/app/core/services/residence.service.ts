import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  apiUrl: string = environment.baseUrl+'residences/';
  a: number = 1;
  constructor(private http: HttpClient) {}

  UpdateAService(n: number) {
    this.a = n;
  }

  getResidences() {
    return this.http.get<Residence[]>(this.apiUrl);
  }

  getResidenceById(id: number) {
    return this.http.get<Residence>(this.apiUrl+id)
  }

  deleteResidence(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
