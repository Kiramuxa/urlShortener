import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenerComponent } from './shortener/shortener.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShortenerComponent],
  exports: [ ShortenerComponent ]
})
export class ShortenerModule { }
