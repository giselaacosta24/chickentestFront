import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Egg } from '../models/Egg';

@Injectable({
  providedIn: 'root'
})
export class EggService {

  api:string = 'http://localhost:8080/api/v1/eggs'

  constructor(private http:HttpClient) { }
  

  public listar():Observable<Egg[]>{
    return this.http.get<Egg[]>(this.api);

  }

  public crear(egg:Egg):Observable<Egg[]>{
    return this.http.post<Egg[]>(this.api,egg);

  }

  public ver(id: number): Observable<Egg> {
    return this.http.get<Egg>(`${this.api}/${id}`);
  }

  public editar(egg:Egg):Observable<Egg[]>{
    return this.http.put<Egg[]>(`${this.api}/${egg.id}`,egg);

  }

  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
