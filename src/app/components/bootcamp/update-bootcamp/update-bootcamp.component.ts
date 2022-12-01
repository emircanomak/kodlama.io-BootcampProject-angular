import { ActivatedRoute } from '@angular/router';
import { BootcampService } from './../../../services/bootcamp.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IUpdateBootcampModel } from 'src/app/models/request/bootcamp/updateBootcampModel';

@Component({
  selector: 'app-update-bootcamp',
  templateUrl: './update-bootcamp.component.html',
  styleUrls: ['./update-bootcamp.component.css']
})
export class UpdateBootcampComponent {

  bootcampUpdateForm:FormGroup
  bootcamp:IUpdateBootcampModel
  constructor(private formBuilder:FormBuilder , private bootcampService:BootcampService,private activatedRoute:ActivatedRoute){}

  ngOnInit(){

    this.activatedRoute.params.subscribe((params)=>{
      this.getBootcampById(params["id"])
    })


  } 

  getBootcampById(bootcampId:number){
    this.bootcampService.getBootcampById(bootcampId).subscribe((data)=>{
      this.bootcamp = data
      this.createUpdateForm()
    })

  }
  updateBootcamp(){
    this.bootcampService.update(this.activatedRoute.snapshot.params["id"],this.bootcampUpdateForm.value).subscribe(()=>{
      
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


}
