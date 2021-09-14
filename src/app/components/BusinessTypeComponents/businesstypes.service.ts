import { Injectable } from '@angular/core';
import { BusinessType } from './businesstype';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinesstypesService {
  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }
  private url: string = "https://localhost:44399/api/businessTypes";

  constructor(private httpService: HttpClient) { }
  getBTypes(): Observable<BusinessType[]> {
    return this.httpService.get<BusinessType[]>(this.url);
  }

}
