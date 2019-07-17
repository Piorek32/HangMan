import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout, delay } from 'rxjs/operators';



@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  constructor(


  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutMs = Number(req.headers.get('timeout')) || 20000;
    return next.handle(req).pipe(timeout(timeoutMs));


    
  }

}
