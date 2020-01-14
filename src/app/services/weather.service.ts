import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentCity: any;
  citiesLocations: any;
  constructor(private http: HttpClient) { }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }
  getAroundCitiesBycodinate(longitude: number, latitude: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(` http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=20&APPID=fe42beed560fd0d04a6ac3f778679208&units=metric`, { responseType: 'json' }).subscribe((data) => {
        this.citiesLocations = data;
        resolve(this.citiesLocations);
      });
    });
  }
  getCurrentCitiyBycodinate(longitude: number, latitude: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(` http://api.openweathermap.org/data/2.5/forecast?cnt=100&lat=${latitude}&lon=${longitude}&APPID=fe42beed560fd0d04a6ac3f778679208&units=metric`, { responseType: 'json' }).subscribe((data) => {
        
        this.currentCity = data;
        resolve(this.currentCity);
      });
    });
  }
  getCurrentCity(){
    return this.currentCity;
  }
}
