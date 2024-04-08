import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  newEmployee: any = { // Define newEmployee object with properties
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private router: Router, private employeeService: EmployeeService) {}

  addEmployee() {
    // Add logic to save employee details
    this.employeeService.addEmployee(this.newEmployee)
    console.log(this.newEmployee); // Log newEmployee object to see the values
    this.router.navigate(['/management'])
  }
}
