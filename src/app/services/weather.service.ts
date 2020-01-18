import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';

export interface Point {
  lat: number;
  lon: number;
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private currentCity: any;
  private citiesLocations: any;
  private currentPoint: Point = { lat: -1, lon: -1 };
  private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private http: HttpClient) { }
  getCurrentDay(dateTxt: string) {
    const thisDayDate = dateTxt;
    const d = new Date(thisDayDate);
    const dayName = this.days[d.getDay()];
    return dayName;

  }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {
        this.currentPoint.lat = resp.coords.latitude;
        this.currentPoint.lon = resp.coords.longitude;
        const point: Point = { lat: resp.coords.latitude, lon: resp.coords.longitude };
        resolve(point);
      },
        err => {
          reject(err);
        });
    });
  }
  getData(endPoint: string, params: any) {
    const basicParams = {
      units: 'metric', // Celsiuos
      APPID: environment.APIID,
    }
    const httpParams = this.setParameters({ ...basicParams, ...params });
    const finalUrl = environment.URLBASE + endPoint;
    return this.http.get(finalUrl, { params: httpParams });
  }
  getCurrentCity() {
    return this.currentCity;
  }
  getCurrentAroundCity() {
    return this.citiesLocations;
  }
  setParameters(parameters: any[]): HttpParams {
    let httpParams = new HttpParams();
    const keys = Object.keys(parameters);
    keys.forEach(key => httpParams = httpParams.set(key, parameters[key] + ""));
    return httpParams;
  }

  setPoint(lat: number, lon: number) {
    this.currentPoint.lon = lon;
    this.currentPoint.lat = lat;

  }
  setCurrentCity(city: any) {
    this.currentCity = city;
  }
  setAroundCity(cities: any) {
    this.citiesLocations = cities;
  }

  getStatus() {
    return (this.currentCity != null);
  }
}
