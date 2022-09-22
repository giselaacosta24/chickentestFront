import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Parametro } from '../models/Parametro';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  api:string = 'http://localhost:8090/api/v1/parametros'

  constructor(private http:HttpClient) { }
  
  public crear(parametro:Parametro):Observable<Parametro[]>{
    return this.http.post<Parametro[]>(this.api,parametro);

  }

  public ver(id: number): Observable<Parametro> {
    return this.http.get<Parametro>(`${this.api}/${id}`).pipe(
      map((data) => {
        //You can perform some transformation here
        return data;
      }),
      catchError((err, caught) => {
     
        throw err;
      }
      )
    );

  }

  public editar(parametro:Parametro):Observable<Parametro[]>{
    return this.http.put<Parametro[]>(`${this.api}/${parametro.id}`,parametro);

  }

  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  public listar():Observable<Parametro[]>{
    return this.http.get<Parametro[]>(this.api).pipe(
      map((data) => {
        //You can perform some transformation here
        return data;
      }),
      catchError((err, caught) => {
     Swal.fire('No existe Parametros en BD', '', 'warning');

        throw err;
      }
      )
    );

  }
}
