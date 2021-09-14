import { Injectable } from '@angular/core';
import {Marble} from '../MarbleComponents/marble'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarbleService {
  httpOptions = {
    headers: new HttpHeaders ({ 'content-Type' : 'application/json'})
  }
  private url: string = "https://localhost:44399/api/marbles";

  constructor(private httpService:HttpClient) { }

  getMarbles():Observable<Marble[]>{
    return this.httpService.get<Marble[]>(this.url);
  }
}
