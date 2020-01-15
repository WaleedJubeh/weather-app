import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  days = [];
  currentCity = { cityName: '', cityHigh: -1, cityLow: -1, temp: -1, id: -1, day: '' };
  aroundCity: any;
  showModal = false;
  loading = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getPosition().then((pos) => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      this.weatherService.getCurrentCitiyBycodinate(pos.lng, pos.lat).then(data => {
        console.log(data);
        const dataDays = data.list;
        this.currentCity.cityName = data.city.name;
        this.currentCity.cityLow = Math.round(data.list[0].main.temp_min);
        this.currentCity.cityHigh = Math.round(data.list[0].main.temp_max);
        this.currentCity.temp = Math.round(data.list[0].main.temp);
        this.currentCity.id = 0;
        this.currentCity.day = this.weatherService.getCurrentDay(data.list[0].dt_txt);
        let j = 0;
        let currentdate = '';
        for (let i = 6; j < 4 && i < dataDays.length; i++) {

          const thisDayDate = dataDays[i].dt_txt.split(' ')[0];
          if (currentdate != thisDayDate) {
            dataDays[i].dayName = this.weatherService.getCurrentDay(dataDays[i].dt_txt);
            dataDays[i].id = i;
            dataDays[i].iconUrl = `http://openweathermap.org/img/w/${dataDays[i].weather[0].icon}.png`
            this.days.push(dataDays[i]);
            currentdate = thisDayDate;
            j++;
          }
        }
        setTimeout(() => this.loading = true, 1000);
      });
      this.weatherService.getAroundCitiesBycodinate(pos.lng, pos.lat).then(data => this.aroundCity = data.list);

    });
  }
  showHideModal() {
    this.showModal = !this.showModal;
  }
  updateCurrentCity(id: number) {
    this.days = [];
    this.currentCity = { cityName: '', cityHigh: -1, cityLow: -1, temp: -1, id: -1, day: '' };
    this.showModal = false;
    console.log(id);
    this.loading = false;
    this.weatherService.getCurrentCityById(id).then(data => {
      console.log(data);
      const dataDays = data.list;
      this.currentCity.cityName = data.city.name;
      this.currentCity.cityLow = Math.round(data.list[0].main.temp_min);
      this.currentCity.cityHigh = Math.round(data.list[0].main.temp_max);
      this.currentCity.temp = Math.round(data.list[0].main.temp);
      this.currentCity.id = 0;
      this.currentCity.day = this.weatherService.getCurrentDay(data.list[0].dt_txt);
      let j = 0;
      let currentdate = '';
      for (let i = 6; j < 4 && i < dataDays.length; i++) {
        const thisDayDate = dataDays[i].dt_txt.split(' ')[0];
        if (currentdate != thisDayDate) {
          dataDays[i].dayName = this.weatherService.getCurrentDay(dataDays[i].dt_txt);
          dataDays[i].id = i;
          dataDays[i].iconUrl = `http://openweathermap.org/img/w/${dataDays[i].weather[0].icon}.png`
          this.days.push(dataDays[i]);
          currentdate = thisDayDate;
          j++;
        }
      }
      this.weatherService.getAroundCitiesBycodinate(data.city.coord.lon, data.city.coord.lat).then(data => this.aroundCity = data.list);
      setTimeout(() => this.loading = true, 1000);
    });
  }
}
