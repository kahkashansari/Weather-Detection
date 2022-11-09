import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {
  weatherListData: any;
  locationForm: FormGroup;
  constructor(private service: ApiServiceService, private fb: FormBuilder) {
    this.locationForm = this.fb.group({
      latitude: new FormControl(null),
      longitude: new FormControl(null)
    })
  }

  ngOnInit(): void {
    
  }

  getWeatherApiData() {
    this.service.getWeatherApi(this.locationForm.value.latitude,this.locationForm.value.longitude).subscribe(res => {
      this.weatherListData = res;
      console.log(this.weatherListData)
    })
  }
  getUserLocation() {
    navigator.geolocation.getCurrentPosition(res => {
      console.log(res, "ressss")
      const latitude = res.coords.latitude;
      const longitude = res.coords.longitude;
      this.locationForm.patchValue({
        latitude : latitude,    //formcontrolname(key) : value 
        longitude : longitude
      })
      this.getWeatherApiData();
      console.log("locationForm",this.locationForm.value)
    })
  }

}
