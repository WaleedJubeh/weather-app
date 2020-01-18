import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSmallDescriptionComponent } from './weather-small-description/weather-small-description.component';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import { MainWeatherDataComponent } from './main-weather-data/main-weather-data.component';


@NgModule({
  declarations: [WeatherSmallDescriptionComponent, MenuComponent, HourlyWeatherComponent, MainWeatherDataComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    PipesModule
  ],
  exports: [WeatherSmallDescriptionComponent, MenuComponent, HourlyWeatherComponent, MainWeatherDataComponent]
})
export class ComponentsModule { }
