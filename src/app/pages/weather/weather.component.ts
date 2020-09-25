import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currWeather: any;
  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.weather$.subscribe(res => this.currWeather = res)
  }

}
