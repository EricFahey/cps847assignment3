import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {

  currentDate : Date;
  temperature;

  constructor(private weatherService:WeatherService) {

  }

  ngOnInit() {
  this.currentDate = new Date();
  this.weatherService.getTemperature().subscribe(temperature => {
    this.temperature = temperature['main']['temp'];
  })
  }
}
