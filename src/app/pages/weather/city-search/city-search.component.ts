import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { debounceTime, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { City } from '../model/city.interface';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
import { Location } from '../model/location.interface';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
})
export class CitySearchComponent implements OnInit {
  locationControl: FormControl = new FormControl('');
  cityList: City[];
  selectedCity: City;

  private currentLocation: Location;

  constructor(
    private locationService: LocationService,
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this.getCurrentLocation();
    this.onLocationChange();
  }

  selectCity(city: City): void {
    this.selectedCity = city;
    this.locationControl.patchValue(this.selectedCity.name, {emitEvent: false});

    this.weatherService.getWeatherByName(this.selectedCity.name)
      .subscribe(res => {
        this.cityList = null;
        this.weatherService.weather$.next(res);
      });
  }

  private getCurrentLocation(): void {
    this.locationService.getCurrentLocation()
      .subscribe((res: Location) => {
        this.currentLocation = res;
        this.selectCity({name: res.city} as City);
      });
  }

  private onLocationChange(): void {
    this.locationControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        mergeMap(this.getCityByName),
      )
      .subscribe(res => this.cityList = res);
  }

  private getCityByName = (city: string): Observable<City[]> => {
    return this.locationService.getCitiesByName(city, this.currentLocation.country_code)
      .pipe(
        map((cityList: City[]) => this.filterCityList(cityList, city)),
      );
  };

  private filterCityList = (cityList: City[], city: string) => {
    return cityList.filter((item: City) => item.name.toLowerCase().startsWith(city.toLowerCase()))
      .slice(0, 10);
  };
}
