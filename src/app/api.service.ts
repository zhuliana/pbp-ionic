import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as internal from 'stream';

export interface iGedung {
  id: number;
  nama: string;
  prodi: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    public http: HttpClient,
    ) {

     }
  
 //link API
  apiURL() {
    return "http://localhost/api";
  }
  
  getGedung() {
    return this.http.get(this.apiURL() + '/view_gedung.php');
  }
  
  deleteGedung(id: string) {
    return this.http.delete(this.apiURL() + '/delete_gedung.php?idGedung=' + id);
  }
  
  viewGedung(id: string) {
    return this.http.get(this.apiURL() + '/viewGedung.php?idGedung=' + id);
  }

}


