import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/employee.service';
import { IEmployee } from 'intefaces/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private _employeeService: EmployeeService) {}
  public employee = <IEmployee[]>[];
  public email: string = '';
  public password: string = '';
  public error: string = '';
  ngOnInit(): void {
    this._employeeService.getEmployeeData().subscribe({
      next: (data) => {
        const d: any = data;
        this.employee = d.data;
      },
      error: (error) => {
        this.error = error.message;
      },
    });
  }

  public createuser = () => {
    this.error = '';
    this._employeeService
      .createEmployeeData({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (data) => {
          alert(`token: ${data.token}`);
        },
        error: (error) => {
          this.error = error.message;
        },
      });
  };
}
