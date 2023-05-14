import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpLab } from '../model/exp-lab';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  URL = environment.URL + 'explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExpLab[]>{
    return this.httpClient.get<ExpLab[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<ExpLab>{
    return this.httpClient.get<ExpLab>(this.URL + `detail/${id}`);
  } 

  public save(experiencia: ExpLab): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experiencia);
  }

  public update(id: number, experiencia: ExpLab): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}