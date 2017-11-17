import { Injectable } from '@angular/core';
import { RestDataSourceService } from './rest-data-source.service';
import { Url } from './url.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Injectable()
export class UrlRepositoryService {
  private urls: Observable<Url[]>;

  constructor(private dataSource: RestDataSourceService) {
    this.urls = this.dataSource.getUrls();
  }

  getUrls(): Observable<Url[]> {
    return this.urls;
  }

  getUrl(longUrl: string): Observable<Url> {
    return this.dataSource.getUrl(longUrl);
  }
}
