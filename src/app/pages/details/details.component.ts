import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  currentCity = { cityName: '', cityHigh: -1, cityLow: -1, temp: -1, id: -1,windDegree:-1, pressure: -1, wind: -1, dayName:'' };

  constructor(private weatherService:WeatherService ,private routeParmCtrl: ActivatedRoute) { }

  ngOnInit() {
    const id = this.routeParmCtrl.snapshot.paramMap.get('index');
    const cityDetails = this.weatherService.getCurrentCity();
    this.currentCity.cityName = cityDetails.city.name;
    this.currentCity.cityLow = Math.round(cityDetails.list[id].main.temp_min);
    this.currentCity.cityHigh = Math.round(cityDetails.list[id].main.temp_max);
    this.currentCity.temp = Math.round(cityDetails.list[id].main.temp);
    this.currentCity.wind = Math.round(cityDetails.list[id].wind.speed);
    this.currentCity.pressure = Math.round(cityDetails.list[id].main.pressure);
    this.currentCity.windDegree = Math.round(cityDetails.list[id].wind.deg);
    this.currentCity.dayName = this.weatherService.getCurrentDay(cityDetails.list[id].dt_txt);
  }

}
