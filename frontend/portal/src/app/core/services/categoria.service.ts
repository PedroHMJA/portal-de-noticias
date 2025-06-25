import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private API_URL:string = "http://localhost:8080/categoria";


  constructor(private http: HttpClient) { }

  getCategoria(): Observable<any[]>{
    return this.http.get<[]>(`${this.API_URL}/listar`);
  }
}
