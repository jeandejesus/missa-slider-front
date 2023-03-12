import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Musica } from '../shared/models/musica';

@Injectable({
  providedIn: 'root',
})
export class MusicasService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(idArtista: any,page : number = 0, limit = 1000): Observable<Musica[]> {
    const url = `${this.baseUrl}musicas/artista/${idArtista}?page=${page}&limit=${limit}`;
    return this.http.get<Musica[]>(url);
  }

  find(idMusica: any): Observable<Musica> {
    const url = `${this.baseUrl}musicas/${idMusica}`;
    return this.http.get<Musica>(url);
  }

  delete(id: any): Observable<void> {
    const url = `${this.baseUrl}musicas/${id}`;
    return this.http.delete<void>(url);
  }

  createUpdate(musica: Musica): Observable<Musica[]> {
    const url = `${this.baseUrl}musicas`;
    if (musica.idMusica) {
      return this.http.put<any>(url, musica);
    }
    return this.http.post<any>(url, musica);
  }
}
