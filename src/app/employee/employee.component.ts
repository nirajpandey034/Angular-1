import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'app/employee.service';
import { IEmployee } from 'intefaces/Employee';

@Component({
  selector: 'app-employee',
  template: `
    <img src="{{ employee.avatar }}" alt="pic" />
    <p>
      {{ employee.id }} - {{ employee.first_name }} {{ employee.last_name }}
    </p>
    <p><a href="{{ employee.email }}">Email me</a></p>
  `,
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private _employeeService: EmployeeService) {}
  public employee = <IEmployee>{};
  ngOnInit(): void {
    this._employeeService.getEmployeeData().subscribe((data) => {
      const d: any = data;
      this.employee = d.data;
    });
  }
  // public str = 'testing hoche!';
}
