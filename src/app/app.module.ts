import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherMainComponent } from './Components/weather-main/weather-main.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UiWeatherDesignComponent } from './ui-weather-design/ui-weather-design.component';
import { NgModelPracticeComponent } from './ng-model-practice/ng-model-practice.component';
import { CommunicationBetw2CompComponent } from './communication-betw2-comp/communication-betw2-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent,
    UiWeatherDesignComponent,
    NgModelPracticeComponent,
    CommunicationBetw2CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
