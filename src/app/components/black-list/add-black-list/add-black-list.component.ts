
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from 'src/app/services/blacklist.service';

@Component({
  selector: 'app-add-black-list',
  templateUrl: './add-black-list.component.html',
  styleUrls: ['./add-black-list.component.css']
})
export class AddBlackListComponent {

  addBlackListForm:FormGroup
  
  
  

  constructor(private blacklistService:BlacklistService, private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit(): void{
    this.createBlacklistAddForm()
  }
  
    
  
  createBlacklistAddForm() {
      this.addBlackListForm = this.formBuilder.group({
        id: ['', Validators.required],
        applicantId: ['', Validators.required],
        date: ['', [Validators.required, Validators.max(4)]],
        reason: ['', Validators.required],
      });
    }


    
    addBlacklist(){
      this.blacklistService.addBlacklist(this.addBlackListForm.value).subscribe(data => {

      })
      alert("Eklendi")
    }
}



