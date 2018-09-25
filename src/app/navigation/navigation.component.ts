import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { TemperatureToRGBService } from '../services/temperature-to-rgb.service';
import { IWeatherDataMultiple, IWeatherData } from '../services/iweather.type';
import cities from '../../assets/cities.json';

export interface ICity {
  name: string;
  id: number;
  temperature: number;
  windSpeed: number;
  iconUrl: string;
  description: string;
  rgb: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  weather: IWeatherDataMultiple;
  cities: Array<ICity> = cities.data;
  loadedInfo = false;

  constructor(
    private weatherService: WeatherService,
    private temperatureToRGBService: TemperatureToRGBService
  ) { }

  private assignWeatherToCity(weather: IWeatherDataMultiple) {
    this.cities.forEach((city) => {
      const weatherData = weather.list.find((cityWeather: IWeatherData) => cityWeather.id === city.id);

      city.temperature = Math.round(weatherData.main.temp * 10) / 10;
      city.windSpeed = weatherData.wind.speed;
      city.iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      city.description = weatherData.weather[0].description;
      city.rgb = this.temperatureToRGBService.getRGB(weatherData.main.temp);
    });

    this.loadedInfo = true;
  }

  ngOnInit() {
    this.weatherService
      .getWeatherByCityIds(this.cities.map(city => city.id))
      .subscribe(this.assignWeatherToCity.bind(this));
  }
}
