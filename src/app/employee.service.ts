import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../intefaces/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private _url: string = 'https://reqres.in/api/users/2';

  getEmployeeData(): Observable<IEmployee> {
    return this.http.get<IEmployee>(this._url);
  }
}
