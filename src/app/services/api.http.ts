import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class ApiHttp {
  constructor(
    private http: HttpClient,
 
  ) {
  }
  apiKey = "4bvl4povqkrbof9gqo4anse62zxt5fupwo68fftu60e9vfkbx";
  getWord() {
    return this.http.get(`http://api.wordnik.com/v4/words.json/randomWord?api_key=${this.apiKey}`);
  }


  
}
