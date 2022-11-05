import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpSerice : HttpClient) { }

  getWeatherApi(){
    const gets = this.httpSerice.get(environment.baseUrl);
    return gets;
  }

  postWeatherApi(){
    const post = this.httpSerice.post(environment.baseUrl,"")
  }

  updateWeatherApi(){
    const update = this.httpSerice.put(environment.baseUrl,"")
  }
}
