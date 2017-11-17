import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UrlRepositoryService } from '../model/url-repository.service';
import { Url } from '../model/url.model';
// import config from '../constans/config.json';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

// const CONFIGURATION = config;
// const PROTOCOL = config.protocol;
// const PORT = config.port; 

@Injectable()
export class SearchService {

  urls: Url[] = [];

  constructor(private urlRepo: UrlRepositoryService) { 
    this.urlRepo.getUrls().subscribe( item => {
      this.urls = item;
    });
    console.log('SearchService worked');
  }

  checkedUrl(terms: Observable<string>): Observable<boolean> {
    let result: boolean = false;
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .map(item => {
        result = false;
        result = this.urls.some( url => url.longUrl === item); 
        console.log(result);
        return result;
      });
  }
}
