import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  baseUrl = environment.baseUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

      Accept: '*/*',
    }),
  };

  static emitCarregado = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  static loadON() {
    FileService.emitCarregado.emit(true);
  }

  getIp(): Observable<any> {
    return this.http.get<{ ip: string }>('https://geolocation-db.com/json/');
  }

  gerarDoApresentacao(apresentacao: any): Observable<any> {
    const url = `${this.baseUrl}file`;
    return this.http.post<any>(url, apresentacao);
  }

  delete(nome: any): Observable<any> {
    return this.http.get(`${this.baseUrl}file/delete/` + nome);
  }

  // define function to download files
  download(nome: any): Observable<Blob> {
    return this.http.get(`${this.baseUrl}file/download/` + nome, {
      reportProgress: true,
      responseType: 'blob',
    });
  }
}
