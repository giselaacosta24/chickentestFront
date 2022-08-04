import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chicken } from '../models/Chicken';
import { Egg } from '../models/Egg';
import { Farm } from '../models/Farm';

@Injectable({
  providedIn: 'root'
})
export class BuysellserviceService {
  api:string = 'http://localhost:8080/api/v1/chickentest'
  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http:HttpClient) { }


  public comprarPollo(chicken:Chicken, id:number):Observable<void>{
    return this.http.put<void>(`${this.api}/buyChicken/${id}`,chicken);
  }


  public venderPollo(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/sellChicken/${id}`);
  }

  public comprarHuevo(egg:Egg, id:number):Observable<void>{
    return this.http.put<void>(`${this.api}/buyEgg/${id}`,egg);
  }


  public venderHuevo(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/sellEgg/${id}`);
  }
}
