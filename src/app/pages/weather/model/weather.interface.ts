export interface Weather {
  name: string;
  main: WeatherInfo;
  wind: Wind;
  clouds: {
    all: number
  };
}

export interface WeatherInfo {
  temp: number;
  pressure: number;
  feels_like: number;
}

export interface Wind {
  deg: number;
  speed: number;
}
