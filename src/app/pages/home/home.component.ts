import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  days = [];
  currentCity = { cityName: '', cityHigh: -1, cityLow: -1, temp: -1 , id: -1};
  x: string = '1';
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


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
        let j = 0;
        let currentdate = '';
        for (let i = 4; j < 5 && i < dataDays.length; i++) {
          // var d = new Date(dataDays.);
          // var dayName = days[d.getDay()];

          const thisDayDate = dataDays[i].dt_txt.split(' ')[0];
          if (currentdate != thisDayDate) {
            const d = new Date(dataDays[i].dt_txt);
            const dayName = days[d.getDay()];

            dataDays[i].dayName = dayName;
            dataDays[i].id = i;
            dataDays[i].iconUrl = `http://openweathermap.org/img/w/${dataDays[i].weather[0].icon}.png`
            this.days.push(dataDays[i]);
            currentdate = thisDayDate;
            j++;
          }
        }
      }
      );
      this.weatherService.getAroundCitiesBycodinate(pos.lng, pos.lat).then(data => console.log(data));

    });
  }

}
