import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  weathers: any[] = [];

  constructor(private http: HttpClient) {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.http.get('https://localhost:44391/weatherforecast').subscribe((data: any) => {
      console.log(data);
      this.weathers = data;
    })
  }
}
