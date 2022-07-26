import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Farm } from '../models/Farm';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  api:string = 'http://localhost:8080/api/v1/farms'

  constructor(private http:HttpClient) { }
  

  public listar():Observable<Farm[]>{
    return this.http.get<Farm[]>(this.api);

  }

  public ver(id: number): Observable<Farm> {
    return this.http.get<Farm>(`${this.api}/${id}`);
  }




}
