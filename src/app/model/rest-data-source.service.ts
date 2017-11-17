import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Url } from './url.model';
import config from '../constans/config.json';
import 'rxjs/add/operator/map';

const PROTOCOL = config.db.protocol;  
const PORT = config.db.port;  
const URLS = config.db.urls;

@Injectable()
export class RestDataSourceService {
  private _baseUrl: string;
  private headers: Headers;

  constructor(private http: Http) {
    this._baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
    this.headers = new Headers({'Content-Type': 'application/json'});    
  }
  
  get baseUrl() {
    return this._baseUrl;
  }

  saveUrl(url: Url) {
    return this.http.post(`${this.baseUrl}/${URLS}/`,
            JSON.stringify(url),
            { headers: this.headers });
  }

  getUrls(): Observable<Url[]> {
    return this.http.get(`${this.baseUrl}/${URLS}`)
      .map((res: Response) => res.json() as Url[])
  } 

  getUrl(longUrl): Observable<Url> {
    return this.http.get(`${this.baseUrl}/${URLS}/${longUrl}`)
      .map((res: Response) => res.json() as Url);
  } 
}
