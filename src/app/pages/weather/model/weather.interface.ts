export interface Weather {
  name: string;
  main: WeatherInfo;
  wind: Wind;
  clouds: {
    all: number
  };
  coord: Coord;
}

export interface WeatherInfo {
  temp: number;
  pressure: number;
  feels_like: number;
  humidity: number;
}

export interface Wind {
  deg: number;
  speed: number;
}

export interface Coord {
  on: number;
  lat: number;
}
