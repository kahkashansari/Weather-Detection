import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  constructor(private service : ApiServiceService) { }

  ngOnInit(): void {
    this.weatherGetting();
  }

  weatherGetting(){
    this.service.getWeatherApi().subscribe(res=>{
      console.log(res,"response")
    })
  }

}
