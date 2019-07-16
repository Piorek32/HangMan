import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiHttp } from "./services/api.http";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ApiHttp
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
