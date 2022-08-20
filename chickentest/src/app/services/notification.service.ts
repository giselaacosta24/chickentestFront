import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  api:string = 'http://localhost:8080/api/v1/notification'

  constructor(private http:HttpClient) { }
  
  public exportarPDF(){
    return this.http.get(`${this.api}/pdf`);


  }
}
