import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getItems(busqueda: string) {
    let search = new HttpParams().set("search", busqueda);
    return this.http.get('http://localhost:8080/items', { params: search }).toPromise().then((result: any) => {
      return result;
    });
  }


  getItemById(mlid: string) {
    return this.http.get('http://localhost:8080/items/' + mlid).toPromise().then((result: any) => {
      return result;
    });
  }

}
