import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OracaoService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) {
  }


  buscarOracoes() : Observable<any> {
    const url = `${this.baseUrl}oracao`
     return this.http.get<any>(url)
  }
}
