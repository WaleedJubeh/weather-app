import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[hourData]',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {
  @Input() hours: any;
  constructor() { }

  ngOnInit() {
  }

}
