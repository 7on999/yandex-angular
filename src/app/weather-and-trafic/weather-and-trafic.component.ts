import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-and-trafic',
  templateUrl: './weather-and-trafic.component.html',
  styleUrls: ['./weather-and-trafic.component.less']
})
export class WeatherAndTraficComponent implements OnInit {

  sections = [ 'Метро', 'Расписание', 'Такси' ]
  constructor() { }

  ngOnInit(): void {
  }

}
