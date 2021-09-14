import { Injectable } from '@angular/core';
import { Location, Provider } from '../ProviderComponents/provider'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  }
  

  private url: string = "https://localhost:44399/api/providers";
  private subject = new Subject<any>();

  //triger functions from other components
  private data:any;
  sendClickEvent(_data:any){
    this.data = _data;
    this.subject.next(this.data);

  }
  getClickEvent(_data:any):Observable<any>{
    this.data = _data;
     return this.subject.asObservable();
  }

  
  //constructor
  constructor(private httpService: HttpClient) { }


  //CRUD operations
  getProviders(): Observable<Provider[]> {
    return this.httpService.get<Provider[]>(this.url);
  }

  getProviderById(id:number): Observable<Provider> {
    let providerurl:string = `${this.url}/${id}`;
    return this.httpService.get<Provider>(providerurl,this.httpOptions);
  }

  deleteProvider(id:number): Observable<Provider> {
    let providerurl:string = `${this.url}/${id}`;
    return this.httpService.delete<Provider>(providerurl,this.httpOptions);
  }

  UpdateProvider(provider:Provider): Observable<Provider> {
    let providerurl:string = `${this.url}/${provider.ProviderId}`;
    return this.httpService.put<Provider>(providerurl,provider,this.httpOptions);
  }

  CreateProvider(provider:Provider): Observable<Provider> {    
    return this.httpService.post<Provider>(this.url,provider,this.httpOptions);
  }

  // Location
  getLocations():Observable<Location[]> {
    let locurl:string ="https://localhost:44399/api/locations"; 
    return this.httpService.get<Location[]>(locurl);
  }

  

}
