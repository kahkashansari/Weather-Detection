import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpSerice : HttpClient) { }

  getWeatherApi(latitude:string,longitude:string){
   return this.httpSerice.get(`${environment.BASE_URL}lat=${latitude}&lon=${longitude}${environment.APP_ID}`);  //for concatinating
  }

  // postWeatherApi(){
  //   const post = this.httpSerice.post(environment.baseUrl,"")
  // }

  // updateWeatherApi(){
  //   const update = this.httpSerice.put(environment.baseUrl,"")
  // }
}
