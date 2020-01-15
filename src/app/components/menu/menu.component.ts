import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() cityNames: any;
  @Input() showModal: boolean = false;
  @Output() showModalChange = new EventEmitter<boolean>();
  @Output() getSelectedId = new EventEmitter<number>();
  searchInput = '';
  constructor() { }
  ngOnInit() {
    document.getElementsByClassName('modal')[0].addEventListener('focus', () => {
      this.closeModel();
    });
  }
  ngOnChanges(changes: any) {
    console.log(changes);
    document.getElementsByClassName('modal-body')[0].scrollTop = 0;

  }
  closeModel() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }

  returnSelectedCity(id: number) {
    console.log(id);
    this.getSelectedId.emit(+id);
    this.searchInput = '';
  }
}
