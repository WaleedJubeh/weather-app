import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Point } from 'src/app/services/weather.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit   {
  @Input() cityNames: any;
  @Input() showModal: boolean = false;
  @Output() showModalChange = new EventEmitter<boolean>();
  @Output() getSelectedCoords = new EventEmitter<Point>();
  searchInput = '';
  constructor() { }
  ngOnInit() {
    document.getElementsByClassName('modal')[0].addEventListener('focus', () => {
      this.closeModel();
    });
  }
  closeModel() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }

  returnSelectedCity(lat: number, lon: number) {
    const point: Point = { lat, lon };
    this.getSelectedCoords.emit(point);
    this.searchInput = '';
  }
}
