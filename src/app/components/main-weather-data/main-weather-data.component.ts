import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[main-weather-data]',
  templateUrl: './main-weather-data.component.html',
  styleUrls: ['./main-weather-data.component.scss']
})
export class MainWeatherDataComponent implements OnInit {
@Input() currentCity:any;
  constructor() { }

  ngOnInit() {
  }

}
