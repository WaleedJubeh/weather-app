import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSmallDescriptionComponent } from './weather-small-description/weather-small-description.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [WeatherSmallDescriptionComponent, MenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    PipesModule
  ],
  exports: [WeatherSmallDescriptionComponent, MenuComponent]
})
export class ComponentsModule { }
