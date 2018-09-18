import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IWeatherData, IWeatherDataMultiple, IForecast } from './iweather.type';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = '//api.openweathermap.org/data/2.5';
  apiKey = 'YOUR_API_KEY';
  defaultParams = `&appid=${this.apiKey}&units=metric`;

  constructor(private http: HttpClient) { }

  getWeatherByCityId(cityId: number): Observable<IWeatherData> {
    return this.http.get<IWeatherData>(`${this.baseUrl}/weather?id=${cityId}${this.defaultParams}`);
  }

  getWeatherByCoordinates(latitude: number, longitude: number): Observable<IWeatherData> {
    return this.http.get<IWeatherData>(`${this.baseUrl}/weather?lat=${latitude}&lon=${longitude}${this.defaultParams}`);
  }

  getWeatherByCityName(cityName: string, countryCode?: string): Observable<IWeatherData> {
    if (countryCode && countryCode.length > 0) {
      return this.http.get<IWeatherData>(`${this.baseUrl}/weather?q=${cityName},${countryCode}${this.defaultParams}`);
    }

    return this.http.get<IWeatherData>(`${this.baseUrl}/weather?q=${cityName}${this.defaultParams}`);
  }

  getWeatherByCityIds(cityIds: Array<number>): Observable<IWeatherDataMultiple> {
    return this.http.get<IWeatherDataMultiple>(`${this.baseUrl}/group?id=${cityIds.join(',')}${this.defaultParams}`);
  }

  getForecastByCityId(cityId: number): Observable<IForecast> {
    return this.http.get<IForecast>(`${this.baseUrl}/forecast?id=${cityId}${this.defaultParams}`);
  }

  getForecastByCoordinates(latitude: number, longitude: number): Observable<IForecast> {
    return this.http.get<IForecast>(`${this.baseUrl}/forecast?lat=${latitude}&lon=${longitude}${this.defaultParams}`);
  }

  getForecastByCityName(cityName: string, countryCode?: string): Observable<IForecast> {
    if (countryCode && countryCode.length > 0) {
      return this.http.get<IForecast>(`${this.baseUrl}/forecast?q=${cityName},${countryCode}${this.defaultParams}`);
    }

    return this.http.get<IForecast>(`${this.baseUrl}/forecast?q=${cityName}${this.defaultParams}`);
  }
}
