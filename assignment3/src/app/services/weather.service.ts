import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = "http://api.openweathermap.org/data/2.5/weather?id=6942553&APPID=a7645d1b7c05fb17fdeae1d575a4cd1d&units=metric";

  constructor(private http:HttpClient) { }

  getTemperature(){
    return this.http.get(this.url);
  }
}
