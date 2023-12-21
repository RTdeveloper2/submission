import { ObserversModule } from '@angular/cdk/observers';
import { Component } from '@angular/core';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  a= "dd";
  c:Array<string>=[];
  data = [
    {
      "name": "Russia",
      "flag": "f/f3/Flag_of_Russia.svg",
      "area": 17075200,
      "population": 146989754,
      "description": "Russia, the largest country in the world, occupies one-tenth of all the land on Earth."
    },
    {
      "name": "France",
      "flag": "c/c3/Flag_of_France.svg",
      "area": 640679,
      "population": 64979548,
      "description": "France, the largest country in Western Europe, has long been a gateway between the continent's northern and southern regions."
    }]
  constructor(){
  }

 
  onKey(j?:any)
  {
    const a = j.target.value.trim();
    let b = this.data.filter(ele=>ele.name===a)
    console.table(b);
    b.map((ele)=>this.c.push(ele?.name));
    console.log(this.c);
  }
  johny()
  {
    this.onKey();
  }

  filter()
  {
    this.filterState.pipe(takeUntil(this.clearSubscription).subscribe(filterInfo)=>
    {

    })
  }
}


colheader()
{
  this.codDefs=[{
    headerName : this.gridLabel.SOURCE_APPLICATION,field:this.filterCategoriesConst.SOURCE_APPLICATION,
    filter:false,
    cellClass:"leftAligned",
    valueFormatter:(params:any)=> `${params.data.sourceApplication} | ${params.data.sourceApplicationID}`,
    tooltipValueGetter:(params:any)=>params.valueFormatted
  }]
}
