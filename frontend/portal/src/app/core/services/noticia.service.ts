import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private API_URL: string = 'http://localhost:8080/noticia/'
  
  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}listar`);
  }

  getNoticia(id: number): Observable<any>{
    return this.http.get(`${this.API_URL}listar/`+`${id}`);
  }
}
