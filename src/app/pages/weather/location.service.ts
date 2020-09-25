import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Location } from './model/location.interface';
import { City } from './model/city.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private apiUrl = 'http://api.ipstack.com/check?access_key=07b2ab0a6df04e8030ec9ffeb86e4467';
  private apiCityUrl = 'http://localhost:3000/cities';

  constructor(
    private http: HttpClient,
  ) {}

  getCurrentLocation(): Observable<Location> {
    return this.http.get<Location>(this.apiUrl);
  }

  getCitiesByName(city: string, country: string): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiCityUrl}?name_like=${city}&country=${country}&_sort=name`);
  }
}
