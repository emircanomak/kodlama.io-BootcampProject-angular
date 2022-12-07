import { IGetAllInstructorResponse } from './../../../models/response/instructor/getAllInstructorResponse';
import { IGetInstructorResponse } from './../../../models/response/instructor/getInstructorResponse';
import { InstructorService } from './../../../services/instructor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { BootcampService } from './../../../services/bootcamp.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { ICreateBootcampModel } from 'src/app/models/request/bootcamp/createBootcampModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-bootcamp',
  templateUrl: './add-bootcamp.component.html',
  styleUrls: ['./add-bootcamp.component.css']
})
export class AddBootcampComponent { 

  bootcampAddForm:FormGroup
  instructors : IGetAllInstructorResponse[]=[]

 constructor(private formBuilder:FormBuilder, 
  private bootcampService:BootcampService, 
  private activatedRoute:ActivatedRoute, 
  private instructorService : InstructorService,
  private router : Router,
  private toastrService:ToastrService
  ){}

 ngOnInit(){
  this.getInstructor();
 }

 getInstructor(){
  this.instructorService.getInstructor().subscribe(data=> {
    this.instructors=data
  });
  this.createBootcampAddForm();
  
 }



    createBootcampAddForm(){
      this.bootcampAddForm = this.formBuilder.group({

        instructorId:["",Validators.required],
        name:["",Validators.required],
        dateStart:["",Validators.required],
        dateEnd:["",Validators.required],
        state:["",Validators.required]
      })
    }
    add(){

      if(this.bootcampAddForm.valid){
        let bootcamp : ICreateBootcampModel = Object.assign({}, this.bootcampAddForm.value);
        this.instructorService.getInstructorById(bootcamp.instructorId).subscribe((instructor)=>{
          bootcamp.instructorName = instructor.firstName + '' + instructor.lastName;
          this.bootcampService.add(bootcamp).subscribe(data=>{

          });
          this.toastrService.success("Eklendi")
          
        })
      }

      // if(this.bootcampAddForm.value){
      //   let bootcampInputData=Object.assign({},this.bootcampAddForm.value);
      //   this.bootcampService.add(bootcampInputData).subscribe((data)=>{
      //     alert("Eklendi")
      //   });

      // }
    }


        
    

}
