import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  public getClassInfo(): Observable<any> {
    return this.http.get('/assets/classInfo.json');
  }
}
