import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Input() maxRating = 10;
  public arr1 = [];
  constructor() { }
  ngOnInit() {}
  ngOnChanges() {
    this.arr1 = [];
    for (let i = 1; i <= this.maxRating; i++) {
      const colorName = i <= this.rating ? 'yellow' : 'gray';
      this.arr1.push(colorName);
    }
  }
}
