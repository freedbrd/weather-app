export interface Weather {
  name: string;
  main: WeatherInfo;
  wind: Wind;
  clouds: {
    all: number
  };
  coord: { lon: number, lat: number };
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
