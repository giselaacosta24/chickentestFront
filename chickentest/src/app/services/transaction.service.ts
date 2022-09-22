import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  api:string = 'http://localhost:8090/api/v1/transactions'

  constructor(private http:HttpClient) { }
  

  public listarVentas():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.api}/sells`);


  }

  public listarCompras():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.api}/buys`);

  }
  public totalCompras():Observable<Transaction[]>{
   return this.http.get<Transaction[]>(`${this.api}/buys/amount`).pipe(
      map((data) => {
        //You can perform some transformation here
        return data;
      }),
      catchError((err, caught) => {
        console.error(err);
        throw err;
      }
      )
    );

  }

  public totalVentas():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.api}/sells/amount`).pipe(
       map((data) => {
         return data;
       }),
       catchError((err, caught) => {
         console.error(err);
         throw err;
       }
       )
     );
 
   }

   public totalCantidad( transaction:String,product: String ):Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.api}/${transaction}/${product}`).pipe(
       map((data) => {
         return data;
       }),
       catchError((err, caught) => {
         console.error(err);
         throw err;
       }
       )
     );
 
   }


}
