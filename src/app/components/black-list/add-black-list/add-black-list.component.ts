import { ICreateApplicantModel } from './../../../models/request/applicant/createApplicantModel';
import { ApplicantService } from 'src/app/services/applicant.service';
import { ICreateBlackListModel } from 'src/app/models/request/blackList/createBlackListModel';

import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from 'src/app/services/blacklist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-black-list',
  templateUrl: './add-black-list.component.html',
  styleUrls: ['./add-black-list.component.css']
})
export class AddBlackListComponent {

  addBlackListForm:FormGroup;
  applicants : ICreateApplicantModel[] = []
  
  
  

  constructor(private blacklistService:BlacklistService, private activatedRoute:ActivatedRoute,
     private formBuilder:FormBuilder, private applicantService : ApplicantService ,
     private toastrService:ToastrService){}

  ngOnInit(): void{
    this.getApplicant()
  }

  getApplicant(){
    this.applicantService.getApplicant().subscribe(data => {
      this.applicants = data
    });
    this.createBlacklistAddForm()
  }
  
    
  
  createBlacklistAddForm() {
      this.addBlackListForm = this.formBuilder.group({
        applicantId: ['', Validators.required],
        date: ['', [Validators.required, Validators.max(4)]],
        reason: ['', Validators.required],
      });
    }


    
    addBlacklist(){
      if(this.addBlackListForm.valid){
        let blackList:ICreateBlackListModel = Object.assign({}, this.addBlackListForm.value);
        this.applicantService.getApplicantById(blackList.applicantId).subscribe((applicant) => {
          
          blackList.applicantName = applicant.firstName + ' ' + applicant.lastName;

          this.blacklistService.addBlacklist(blackList).subscribe(data => {
          })
          this.toastrService.success("Engellendi")
          
        })

      }


       
    }

  
}



