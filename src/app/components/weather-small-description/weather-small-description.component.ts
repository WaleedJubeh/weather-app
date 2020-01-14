import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-small',
  templateUrl: './weather-small-description.component.html',
  styleUrls: ['./weather-small-description.component.scss']
})
export class WeatherSmallDescriptionComponent implements OnInit {
  @Input() low: number = -1;
  @Input() high: number = -1;
  @Input() dayName: string = '';
  @Input() iconUrl: string = '';
  constructor() { }

  ngOnInit() {
    this.low = Math.round(this.low);
    this.high = Math.round(this.high);
  }

}
