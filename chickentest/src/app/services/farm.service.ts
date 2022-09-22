import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Farm } from '../models/Farm';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FarmService {


  api:string = 'http://localhost:8090/api/v1/farms'
  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http:HttpClient) { }
  

  public listar():Observable<Farm[]>{
    return this.http.get<Farm[]>(this.api).pipe(
        map((data) => {
         
          return data;
        }),
        catchError((err, caught) => {
       Swal.fire('No existe Farm en BD', '', 'warning');
  
          throw err;
        }
        )
      );
  
    }
  


  public ver(id: number): Observable<Farm> {
    return this.http.get<Farm>(`${this.api}/${id}`);
  }

  public buscarPorNombre(name: String): Observable<Farm> {
    return this.http.get<Farm>(`${this.api}/getFarmByName/${name}`);
  }

  public crear(farm:Farm):Observable<Farm[]>{
    return this.http.post<Farm[]>(this.api,farm);
  }


  public editar(farm:Farm):Observable<Farm[]>{
    return this.http.put<Farm[]>(`${this.api}/${farm.id}`,farm, 
    { headers: this.cabeceras });

  }
  public eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  public modificarPresupuesto(tipo:string,id:number, number:number,farm:Farm):Observable<Farm[]>{
    return this.http.put<Farm[]>(`${this.api}/${tipo}/${id}/${number}`,farm,
    { headers: this.cabeceras }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
   
      console.error(
        `Backend returned code ${error.status}`);

    }
    return throwError(        
      Swal.fire('No posee presupuesto para comprar!', '', 'warning'))  ;

      
      };
 
}
