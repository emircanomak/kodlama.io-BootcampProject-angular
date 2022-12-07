import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  addEmployeeForm:FormGroup
  constructor(private employeeService:EmployeeService, private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder,
    private toastrService:ToastrService){}
  
  ngOnInit(): void {
    
    this.createEmployeeAddForm()
     }
     createEmployeeAddForm() {
      this.addEmployeeForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        nationalIdentity: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        position: ['', Validators.required],
      });
    }



     addEmployee(){
      this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(data => {

      })
      this.toastrService.success("Eklendi")
    }

  }



