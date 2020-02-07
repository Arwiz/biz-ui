import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit,OnChanges {
     @Input() rating:number;
     arr1:any=[];
  constructor() { }

  ngOnInit() {}
  ngOnChanges(){
    if(this.arr1.length>0){
      console.log(this.arr1.length)
      this.arr1=[];
    }
    for( let i=1;i<=5;i++){
                
      if(i<= this.rating){
        this.arr1.push('yellow');
        console.log(this.arr1)
      }
      else {
        this.arr1.push('gray');
      }
      
    }
  }

}
