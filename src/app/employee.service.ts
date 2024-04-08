import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: any[] = [];

  constructor() { }

  addEmployee(employee: any): void {
    this.employees.push(employee);
  }

  getEmployees(): any[] {
    return this.employees;
  }
}
