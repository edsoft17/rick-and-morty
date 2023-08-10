import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, expand, EMPTY, reduce, delay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../class/response.model';
import { Character } from '../class/RickMorty.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private _http: HttpClient) { }

  getCharacters(page: number, filter: number, name: string): Observable<ResponseModel>{
    const url = `${environment.url}/character`;
    let params;
    switch(filter){
      case 2:
        params = new HttpParams().append('name',name).append('page',page);
        break;
      case 3:
        params = new HttpParams().append('species',name).append('page',page);
        break;
    }
    
    return this._http.get<ResponseModel>(url,{params});
  }

  getCharactersPerPagination(page: number, filter: number, value: string = ""): Observable<ResponseModel>{
    const url = `${environment.url}/character`;
    let params;
    switch(filter){
      case 1:
        params = new HttpParams().append('page',page);
        break;
      case 2:
        console.log("aca")
        params = new HttpParams().append('name',value).append('page',page);
        break;
      case 3:
        params = new HttpParams().append('species',value).append('page',page);
        break;
    }
    return this._http.get<any>(url,{ params });
  }

  getCharactersFirsPagination(): Observable<ResponseModel>{
    const url = `${environment.url}/character`;
    return this._http.get<any>(url);
  }

  getAllCharacters(): Observable<Character[]>{
    return this._http.get<any>(`${environment.url}/character`).pipe(
      expand( (response: ResponseModel) => response.info.next ? this.getCharacterPerUrl(response.info.next) : EMPTY),
      reduce((acc: Character[], current: ResponseModel) => acc.concat(current.results),[])
    );
  }

  private getCharacterPerUrl(url: string): Observable<ResponseModel>{
    return this._http.get<ResponseModel>(url);
  }
}
