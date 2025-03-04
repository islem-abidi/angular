import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Residence } from './models/residence';


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  url: string = 'http://localhost:3000/residences';

  constructor(private http: HttpClient) {}

  getResidenceList() {
    return this.http.get<Residence[]>(this.url);
  }

  /*getResidenceById(id: number) {
    //return this.http.get<Residence>(this.url + '/' + id);
    return this.http.get<Residence>(`${this.url}/${id}`);  // 🔥 Correction ici

  }*/

    /*
    getResidenceById(id: number) {
      return this.http.get<Residence>(`${this.url}/${id}`); // ✅ Corrigé
    }*/


      getResidenceById(id: number) {
        return this.http.get<Residence>(this.url + '/' + id);
      }

  addResidence(r: Residence) {
    return this.http.post(this.url, r);
  }


  deleteResidence(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
