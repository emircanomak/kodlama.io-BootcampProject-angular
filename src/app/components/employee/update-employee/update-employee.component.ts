import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './../../../services/employee.service';
import { Component } from '@angular/core';
import { IUpdateEmployeeModel } from 'src/app/models/request/employee/updateEmployeeModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employee  : IUpdateEmployeeModel
  employeeUpdateForm : FormGroup

  ngOnInit(): void{
    
    this.activatedRoute.params.subscribe((params)=>{
      this.getEmployeeId(params["id"])//async;
      
    })

  }

  constructor(private employeeService  : EmployeeService, private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute,
    private toastrService:ToastrService){}

  createEmployeeUpdateform(){
    this.employeeUpdateForm = this.formBuilder.group({
      firstName:[this.employee.firstName , Validators.required],
      lastName:[this.employee.lastName , Validators.required],
      email:[this.employee.email , Validators.required],
      password:[this.employee.password , Validators.required],
      nationalIdentity:[this.employee.nationalIdentity , Validators.required],
      dateOfBirth:[this.employee.dateOfBirth , Validators.required],
      position:[this.employee.position , Validators.required],
    })
    
  }

  getEmployeeId(id:number){
    this.employeeService.getEmployeeById(id).subscribe((data)=>{
      this.employee=data
      this.createEmployeeUpdateform()
    
    })
  }

  update(){
    this.employeeService.update(this.activatedRoute.snapshot.params["id"], this.employeeUpdateForm.value).subscribe(data=>{

    });
    this.toastrService.success("Güncellendi")
  }

}
