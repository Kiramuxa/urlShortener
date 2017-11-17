import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { UrlRepositoryService } from './url-repository.service';
import { RestDataSourceService } from './rest-data-source.service';
import { ShortenerService } from './shortener.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [ 
    RestDataSourceService, 
    UrlRepositoryService,
    ShortenerService
  ]
})
export class ModelModule { }
