import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weather$: Subject<any> = new Subject();
  private apiKey = 'c753e5ac1574d7d5a41834e566119557';

  constructor(
    private http: HttpClient,
  ) {}

  getWeatherByName(city: string): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`,
    );
  }
}
