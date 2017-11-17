import { Component, OnInit } from '@angular/core';
import { Url } from '../../model/url.model';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css'],
  providers: [SearchService]
})
export class ShortenerComponent implements OnInit {
  private urlCheck: boolean;
  private searchTerm$ = new Subject<string>();
  private longUrl = '';
  private shortUrl = '';

  constructor(private searchService: SearchService) { 
    this.urlCheck = false;
    this.searchService.checkedUrl(this.searchTerm$)
      .subscribe(results => { 
        this.urlCheck = false;
        if (results) {
          this.urlCheck = true;
        }
      });
  }

  ngOnInit() {
  }

}
