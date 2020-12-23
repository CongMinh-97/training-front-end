import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataCustomerService {

  urlApi = "https://5fd8420b7e05f000170d240c.mockapi.io/api/v1/";
  constructor(
    private http: HttpClient
  ) { }

  getAllData() {
    return this.http.get(`${this.urlApi}/data_users`);
  }
  getById(id: string) {
    console.log(this.http.get(`${this.urlApi}/data_users/${id}`));
    
    return this.http.get(`${this.urlApi}/data_users/${id}`);
  }
  update(id:number, params) {
    return this.http.put(`${this.urlApi}/data_users/${id}`, params);
  }
  create(params) {
    return this.http.post(`${this.urlApi}/data_users`, params);
  }
  delete(id:number) {
    return this.http.delete(`${this.urlApi}/data_users/${id}`);
  }
  search(keyword:string) {
    return this.http.get(`${this.urlApi}/data_users?search=${keyword}`);
  }
}
