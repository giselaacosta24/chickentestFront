import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parametro } from '../models/Parametro';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  api:string = 'http://localhost:8080/api/v1/parametros'

  constructor(private http:HttpClient) { }
  
  public crear(parametro:Parametro):Observable<Parametro[]>{
    return this.http.post<Parametro[]>(this.api,parametro);

  }

  public ver(id: number): Observable<Parametro> {
    return this.http.get<Parametro>(`${this.api}/${id}`);
  }

  public editar(parametro:Parametro):Observable<Parametro[]>{
    return this.http.put<Parametro[]>(`${this.api}/${parametro.id}`,parametro);

  }

  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  public listar():Observable<Parametro[]>{
    return this.http.get<Parametro[]>(this.api);

  }
}
