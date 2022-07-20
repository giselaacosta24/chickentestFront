import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chicken } from '../models/Chicken';


@Injectable({
  providedIn: 'root'
})

export class ChickenService {
  

  api:string = 'http://localhost:8080/api/v1/chickens'

  constructor(private http:HttpClient) { }
  

  public listar():Observable<Chicken[]>{
    return this.http.get<Chicken[]>(this.api);

  }

  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }

}