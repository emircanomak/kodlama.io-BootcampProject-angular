import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { BootcampService } from './../../../services/bootcamp.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-bootcamp',
  templateUrl: './add-bootcamp.component.html',
  styleUrls: ['./add-bootcamp.component.css']
})
export class AddBootcampComponent { 

  bootcampAddForm:FormGroup

 constructor(private formBuilder:FormBuilder, private bootcampService:BootcampService, private activatedRoute:ActivatedRoute){}

 ngOnInit(){
  
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
      if(this.bootcampAddForm.value){
        let bootcampInputData=Object.assign({},this.bootcampAddForm.value);
        this.bootcampService.add(bootcampInputData).subscribe((data)=>{

        });
      }
    }
}
