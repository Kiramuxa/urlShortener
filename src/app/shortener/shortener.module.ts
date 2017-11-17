import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { ShortenerComponent } from './shortener/shortener.component';
import { SearchService } from './search.service';
import { UrlRepositoryService } from 'app/model/url-repository.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModelModule
  ],
  providers: [ SearchService, UrlRepositoryService ],
  declarations: [ShortenerComponent],
  exports: [ ShortenerComponent ]
})
export class ShortenerModule { }
