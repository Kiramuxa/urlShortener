import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestDataSourceService } from './rest-data-source.service';
import config from '../constans/config.json';

const PROTOCOL = config.db.protocol;  
const PORT = config.db.port;  

@Injectable()
export class ShortenerService {
  private baseUrl: string;

  constructor(private http: Http, 
              private dataSource: RestDataSourceService ) {
    this.baseUrl = dataSource.baseUrl;
  }


  // makeShortUrl(longUrl: string): Observable<string> {
  //   let shortUrl: string = '';
  //   return shortUrl;
  // }
}
