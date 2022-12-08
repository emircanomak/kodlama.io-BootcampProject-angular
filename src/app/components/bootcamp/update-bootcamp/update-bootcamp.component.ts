import { InstructorService } from './../../../services/instructor.service';
import { ActivatedRoute } from '@angular/router';
import { BootcampService } from './../../../services/bootcamp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IUpdateBootcampModel } from 'src/app/models/request/bootcamp/updateBootcampModel';
import { ToastrService } from 'ngx-toastr';
import { IGetAllInstructorResponse } from 'src/app/models/response/instructor/getAllInstructorResponse';

@Component({
  selector: 'app-update-bootcamp',
  templateUrl: './update-bootcamp.component.html',
  styleUrls: ['./update-bootcamp.component.css']
})
export class UpdateBootcampComponent {

  bootcampUpdateForm:FormGroup
  bootcamp:IUpdateBootcampModel
  instructors : IGetAllInstructorResponse[]=[]

  constructor(private formBuilder:FormBuilder , private bootcampService:BootcampService,private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService, private instructorService: InstructorService){}

  ngOnInit(){

    this.getInstructors();

  } 

  getBootcampById(bootcampId:number){
    this.bootcampService.getBootcampById(bootcampId).subscribe((data)=>{
      this.bootcamp = data
      this.createUpdateForm()
    })

  }

  getBootcamp(){
    this.activatedRoute.params.subscribe((params)=>{
      this.getBootcampById(params["id"])
    })
  }

  getInstructors(){
    this.instructorService.getInstructor().subscribe(data=>{
      this.instructors = data;
      this.getBootcamp();
    })
  }

  createUpdateForm(){
    this.bootcampUpdateForm = this.formBuilder.group({  
      
      instructorId:[this.bootcamp.instructorId,Validators.required],
      name:[this.bootcamp.name,Validators.required],
      dateStart:[this.bootcamp.dateStart,Validators.required],
      dateEnd:[this.bootcamp.dateEnd,Validators.required],
      state:[this.bootcamp.state,Validators.required]
      
      
    })
  }
  



  updateBootcamp(){
    if(this.bootcampUpdateForm.valid){
      let bootcamp : IUpdateBootcampModel = Object.assign({}, this.bootcampUpdateForm.value);
      this.instructorService.getInstructorById(bootcamp.instructorId).subscribe(instructor=>{
        bootcamp.instructorName = instructor.firstName +''+instructor.lastName;

        this.bootcampService.update(this.activatedRoute.snapshot.params["id"], bootcamp).subscribe(()=>{
          
        }); this.toastrService.success('Bootcamp Bilgileri Güncellendi !');
      });
    }else{
      this.toastrService.error('Eksik Bilgi !!!')
    }


  }


 


}
