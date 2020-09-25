import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Weather } from './model/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weather$: Subject<Weather> = new Subject();
  private apiKey = 'c753e5ac1574d7d5a41834e566119557';

  constructor(
    private http: HttpClient,
  ) {}

  getWeatherByName(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`,
    );
  }
}
