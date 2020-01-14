import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  currentCity = { cityName: '', cityHigh: -1, cityLow: -1, temp: -1, id: -1,windDegree:-1, pressure: -1, wind: -1 };

  constructor(private weatherService:WeatherService ,private routeParmCtrl: ActivatedRoute) { }

  ngOnInit() {
    const id = this.routeParmCtrl.snapshot.paramMap.get('id');
    const cityDetails = this.weatherService.getCurrentCity();
    this.currentCity.cityName = cityDetails.city.name;
    this.currentCity.cityLow = Math.round(cityDetails.list[0].main.temp_min);
    this.currentCity.cityHigh = Math.round(cityDetails.list[0].main.temp_max);
    this.currentCity.temp = Math.round(cityDetails.list[0].main.temp);
    this.currentCity.wind = Math.round(cityDetails.list[0].wind.speed);
    this.currentCity.pressure = Math.round(cityDetails.list[0].main.pressure);
    this.currentCity.windDegree = Math.round(cityDetails.list[0].wind.deg);
  }

}
