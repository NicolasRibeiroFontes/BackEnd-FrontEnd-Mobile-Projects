import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
