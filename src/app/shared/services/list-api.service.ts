import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiResponse = {
  info: {},
  results: {},
}

@Injectable({
  providedIn: 'root'
})
export class ListApiService {
  apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=151%27';


  constructor(private httpClient:HttpClient) { }

  getList():Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.apiURL);

  }
}
