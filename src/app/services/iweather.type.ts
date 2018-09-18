export interface IWeatherCoordinates {
  lon: number;
  lat: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherMain {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface IWeatherWind {
  speed: number;
  deg: number;
}

export interface IWeatherClouds {
  all: number;
}

export interface IWeatherSystem {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeatherData {
  coord: IWeatherCoordinates;
  weather: Array<IWeather>;
  base: string;
  main: IWeatherMain;
  visibility: number;
  wind: IWeatherWind;
  clouds: IWeatherClouds;
  dt: number;
  sys: IWeatherSystem;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherDataMultiple {
  cnt: number;
  list: Array<IWeatherData>;
}

export interface IForecastMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IWeatherClouds {
  all: number;
}

export interface IWeatherRain {
  '3h': number;
}

export interface IWeatherSystem {
  pod: string;
}

export interface IForecastListItem {
  dt: number;
  main: IForecastMain;
  weather: Array<IWeather>;
  clouds: IWeatherClouds;
  wind: IWeatherWind;
  rain: IWeatherRain;
  sys: IWeatherSystem;
  dt_txt: string;
}

export interface IWeatherCity {
  id: number;
  name: string;
  coord: IWeatherCoordinates;
  country: string;
}

export interface IForecast {
  cod: string;
  message: number;
  cnt: number;
  list: Array<IForecastListItem>;
  city: IWeatherCity;
}
