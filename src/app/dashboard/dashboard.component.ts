import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moda-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  image = "/src/assets/img/angularjs-bg.png";
  color ='red';
  constructor() { }

  ngOnInit() {
  }
  change(){
    this.color = this.color === 'red' ? 'green' : 'red';
    this.-
  }
}
