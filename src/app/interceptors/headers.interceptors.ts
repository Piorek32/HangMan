import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable()
export class MtHeadersInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let headers = <any>{
      'ApiKey': "4bvl4povqkrbof9gqo4anse62zxt5fupwo68fftu60e9vfkbx"
  }

      request = request.clone({
        setHeaders: headers
      });

      return next.handle(request);
    };
  }
