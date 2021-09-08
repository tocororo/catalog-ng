import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'catalog-toco-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value = '';
  @Input() data;
  @Output() filteredData = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    const filter = this.value.toUpperCase();
    const filteredData = this.data.filter( d => {
      const name = d.name.toUpperCase().normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2')
        .normalize();
      return name.indexOf(filter) > -1;
    });
    this.filteredData.emit(filteredData);
  }
}
