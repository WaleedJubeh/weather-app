import { Component, OnInit } from '@angular/core';
import { WeatherService, Point } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';

export interface City {
  cityName: string;
  cityHigh: number;
  cityLow: number;
  temp: number;
  id: number;
  day: string;
  wind: number;
  pressure: number;
  windDegree: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  days = [];
  currentCity: City = { windDegree: -1, wind: -1, pressure: -1, cityName: '', cityHigh: -1, cityLow: -1, temp: -1, id: -1, day: '' };
  aroundCites: any;
  showModal = false;
  loading = false;
  hours = [];
  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getPosition().then((pos) => {
      if (this.weatherService.getStatus()) {
        this.initSettings(this.weatherService.getCurrentCity());
        this.aroundCites = this.weatherService.getCurrentAroundCity();
        this.loading = true;
        return;
      }
      this.updateCurrentCity(pos);
    });

  }
  showHideModal() {
    this.showModal = !this.showModal;
  }
  updateCurrentCity(newPos: Point) {

    this.setDefaultValue();
    const parameters = {
      lat: newPos.lat,
      lon: newPos.lon,
      cnt: '50',
    };

    this.weatherService.getData('forecast', parameters).subscribe(data => {
      this.initSettings(data);
      this.weatherService.setCurrentCity(data);
      setTimeout(() => this.loading = true, 500);
    });

    parameters.cnt = '20';

    this.weatherService.getData('find', parameters).subscribe(data => {
      this.aroundCites = data.list;
      this.weatherService.setAroundCity(data.list);
    });
  }

  initSettings(data: any) {
    this.weatherService.setCurrentCity(data);

    const dataDays = data.list;
    this.currentCity = {
      cityName: data.city.name,
      cityLow: Math.round(data.list[0].main.temp_min),
      cityHigh: Math.round(data.list[0].main.temp_max),
      temp: Math.round(data.list[0].main.temp),
      id: 0,
      day: this.weatherService.getCurrentDay(data.list[0].dt_txt),
      wind: -1,
      pressure: -1,
      windDegree: -1,
    };
    this.hours = this.getAdvancedHours(dataDays, 4);
    this.days = this.getAdvancedDaysData(dataDays, 4);
  }
  getAdvancedHours(dataDays: any, counter: number): any[] {
    const hours = [];
    try {
      for (let i = 0; i < counter && i < dataDays.length; i++) {

        dataDays[i].hour = new Date(dataDays[i].dt_txt).getHours() + 'h';
        dataDays[i].id = i;
        dataDays[i].iconUrl = this.getIconUrl(dataDays[i].weather[0].icon);
        hours.push(dataDays[i]);
      }
    } catch (e) {
      console.log(e);
    }
    return hours;
  }
  getAdvancedDaysData(dataDays: any, counter: number): any[] {

    let j = 0;
    let currentdate = -1;
    const days = [];
    for (let i = 6; j < counter && i < dataDays.length; i++) {
      const thisDayDate = new Date( dataDays[i].dt_txt).getDate();
      if (currentdate != thisDayDate) {
        dataDays[i].dayName = this.weatherService.getCurrentDay(dataDays[i].dt_txt);
        dataDays[i].id = i;
        dataDays[i].iconUrl = this.getIconUrl(dataDays[i].weather[0].icon);
        days.push(dataDays[i]);
        currentdate = thisDayDate;
        j++;
      }
    }
    return days;
  }
  setDefaultValue() {
    this.hours = [];
    this.days = [];
    this.currentCity = { windDegree: -1, pressure: -1, wind: -1, cityName: '', cityHigh: -1, cityLow: -1, temp: -1, id: -1, day: '' };
    this.showModal = false;
    this.loading = false;
  }

  getIconUrl(imageName) {
    return `${environment.ICONURL}${imageName}.png`;
  }
}
