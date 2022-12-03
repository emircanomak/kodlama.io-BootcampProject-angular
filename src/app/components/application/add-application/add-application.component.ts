import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  
  applicationAddForm:FormGroup
  constructor(private formBuilder:FormBuilder, private applicationService:ApplicationService,private activatedRoute:ActivatedRoute){}

  ngOnInit(){
    
    this.createApplicationAddForm();

  }

  createApplicationAddForm(){

    this.applicationAddForm = this.formBuilder.group({

      userId:["", Validators.required],
      bootcampId:["", Validators.required],
      applicantId:["", Validators.required],
      state:["",Validators.required]
    })
    
  }

  add(){

    if(this.applicationAddForm.value){
      
      let applicationInputData = Object.assign({},this.applicationAddForm.value)
      this.applicationService.add(applicationInputData).subscribe(data=>{
        
      })
      alert("Eklendi")
    }

  }

}
