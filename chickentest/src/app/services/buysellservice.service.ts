import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
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
    return this.http.put<void>(`${this.api}/buyChicken/${id}`,chicken).pipe(
      map((data) => {
        return data;
      }),
      catchError((err, caught) => {
        console.error(err);
        Swal.fire('No puede realizar la compra, Supero la capacidad de la granja!', '', 'warning');

        throw err;
      }
      )
    );
  }


  public venderPollo(chicken:Chicken, id:number):Observable<void>{
    return this.http.put<void>(`${this.api}/sellChicken/${id}`,chicken);
  }

  public comprarHuevo(egg:Egg, id:number):Observable<void>{
    return this.http.put<void>(`${this.api}/buyEgg/${id}`,egg).pipe(
      map((data) => {
        return data;
      }),
      catchError((err, caught) => {
        console.error(err);
        Swal.fire('No puede realizar la compra, Supero la capacidad de la granja!', '', 'warning');

        throw err;
      }
      )
    );
  }


  public venderHuevo(egg:Egg, id:number):Observable<void>{
    return this.http.put<void>(`${this.api}/sellEgg/${id}`,egg);
  }
}
