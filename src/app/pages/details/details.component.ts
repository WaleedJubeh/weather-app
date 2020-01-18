import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { City } from '../home/home.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  currentCity: City = { cityName: '', cityHigh: -1, cityLow: -1, temp: -1, id: -1, windDegree: -1, pressure: -1, wind: -1, day: ''};

  constructor(private weatherService: WeatherService, private routeParmCtrl: ActivatedRoute) { }

  ngOnInit() {
    const id = this.routeParmCtrl.snapshot.paramMap.get('index');
    const cityDetails = this.weatherService.getCurrentCity();
    this.currentCity = {
      cityName: cityDetails.city.name,
      cityLow: Math.round(cityDetails.list[id].main.temp_min),
      cityHigh: Math.round(cityDetails.list[id].main.temp_max),
      temp: Math.round(cityDetails.list[id].main.temp),
      wind: Math.round(cityDetails.list[id].wind.speed),
      pressure: Math.round(cityDetails.list[id].main.pressure),
      windDegree: Math.round(cityDetails.list[id].wind.deg),
      day: this.weatherService.getCurrentDay(cityDetails.list[id].dt_txt),
      id: +id,
    }
  }

}
