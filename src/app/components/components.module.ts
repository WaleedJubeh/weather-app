import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSmallDescriptionComponent } from './weather-small-description/weather-small-description.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [WeatherSmallDescriptionComponent],
  imports: [
    CommonModule,BrowserModule
  ],
  exports: [WeatherSmallDescriptionComponent]
})
export class ComponentsModule { }
