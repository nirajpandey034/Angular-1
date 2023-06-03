import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../intefaces/Employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private _getURL: string = 'https://reqres.in/api/users';
  private _postUrl: string = 'https://reqres.in/api/register';

  getEmployeeData(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>(this._getURL)
      .pipe(catchError<any, any>(this.errorHandler));
  }
  createEmployeeData(data: any): Observable<any> {
    return this.http.post<any>(this._postUrl, data);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
