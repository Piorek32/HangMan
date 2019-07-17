import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiHttp } from "./services/api.http";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { ErrorInterceptor } from "./interceptors/error.interceptor"
import { TimeoutInterceptor } from "./interceptors/timeout.interceptor"
@
NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide:
        HTTP_INTERCEPTORS, useClass:
        ErrorInterceptor, multi:
        true
    },
    {
      provide:
        HTTP_INTERCEPTORS, useClass:
        TimeoutInterceptor, multi:
        true
    },
    ApiHttp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
