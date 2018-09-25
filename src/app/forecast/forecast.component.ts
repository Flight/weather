import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { TemperatureToRGBService } from '../services/temperature-to-rgb.service';
import { IForecast, IForecastListItem } from '../services/iweather.type';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

export interface IWeatherItem {
  timestamp: number;
  temperature: number;
  windSpeed: number;
  pressure: number;
  iconUrl: string;
  description: string;
  rgb: string;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  cityId: number;
  errorMessageAPI = 'Weather API is unavailable';
  showError = false;
  isLoading = false;
  showSelectMessage = true;
  errorMessage: string;
  weatherList: Array<IWeatherItem> = [];
  chartsData = [];

  constructor(
    private weatherService: WeatherService,
    private temperatureToRGBService: TemperatureToRGBService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.cityId = parseInt(params.cityId, 10);
      this.cityChanged();
    });
  }

  private cityChanged() {
    this.showError = false;
    this.isLoading = true;
    if (!this.cityId) {
      this.showSelectMessage = true;
      this.isLoading = false;
      return;
    }
    this.showSelectMessage = false;
    this.getWeather(this.cityId);
  }

  private handleWeatherData(weatherData: IForecast) {
    const weatherList: Array<IForecastListItem> = weatherData.list;
    const series = [];
    let iterator = 0;
    let currentCityIndex: number;

    this.weatherList = [];

    weatherList.forEach((item: IForecastListItem) => {
      const timeStamp = item.dt * 1000;
      const date = new Date(timeStamp);

      series.push({
        'name':
          ('0' + date.getDate()).slice(-2) + '.' + ('0' + date.getMonth()).slice(-2) + ' ' +
          ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2),
        'value': Math.round(item.main.temp * 10) / 10
      });

      if (iterator > 9) {
        return;
      }

      iterator++;

      this.weatherList.push({
        timestamp: timeStamp,
        temperature: Math.round(item.main.temp * 10) / 10,
        rgb: this.temperatureToRGBService.getRGB(item.main.temp),
        windSpeed: item.wind.speed,
        pressure: Math.round(item.main.pressure),
        iconUrl: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`,
        description: item.weather[0].description
      });
    });

    currentCityIndex = this.chartsData.findIndex(city => city.name === weatherData.city.name);
    if (currentCityIndex !== -1) {
      this.chartsData[currentCityIndex].series = series;
      return;
    }

    this.chartsData.push({
      'name': weatherData.city.name,
      'series': series
    });

    this.chartsData = [...this.chartsData];
  }

  private handleErrorData(errorData: HttpErrorResponse) {
    if (errorData && errorData.error.message) {
      this.errorMessage = errorData.error.message;
    } else {
      this.errorMessage = this.errorMessageAPI;
    }

    this.showError = true;
  }

  private getWeather(cityId: number) {
    this.weatherService.getForecastByCityId(cityId).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(
      this.handleWeatherData.bind(this),
      this.handleErrorData.bind(this)
    );
  }
}
