import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Musica}  from '../shared/models/musica';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {
  }

  findAll(idArtista : any): Observable<Musica[]> {
    const url = `${this.baseUrl}musicas/artista/${idArtista}`

    return this.http.get<Musica[]>(url)

  }

}
