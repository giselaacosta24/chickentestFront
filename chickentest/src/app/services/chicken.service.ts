import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chicken } from '../models/Chicken';


@Injectable({
  providedIn: 'root'
})

export class ChickenService {
  
  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  api:string = 'http://localhost:8080/api/v1/chickens'

  constructor(private http:HttpClient) { }
  

  public listar():Observable<Chicken[]>{
    return this.http.get<Chicken[]>(this.api);

  }
  public crear(chicken:Chicken):Observable<Chicken[]>{
    return this.http.post<Chicken[]>(this.api,chicken);
  }


  public ver(id: number): Observable<Chicken> {
    return this.http.get<Chicken>(`${this.api}/${id}`);
  }


    public editar(chicken:Chicken):Observable<Chicken[]>{
      return this.http.put<Chicken[]>(`${this.api}/${chicken.id}`,chicken, 
      { headers: this.cabeceras });
  
    }
  
  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }

}