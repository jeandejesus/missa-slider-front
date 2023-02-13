import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Artista}  from '../shared/models/artista';

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {
  }


  findAll(): Observable<Artista[]> {
    const url = `${this.baseUrl}artistas`
    return this.http.get<Artista[]>(url)
  }

  createArtista(artista : Artista):Observable<Artista[]>  {
    const url = `${this.baseUrl}artistas`
    return this.http.post<any>(url, artista);
  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}artistas/${id}`
    return this.http.delete<void>(url)
  }

}
