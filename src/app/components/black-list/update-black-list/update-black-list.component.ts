import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { IUpdateBlackListModel } from './../../../models/request/blackList/updateBlackListModel';
import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from 'src/app/services/blacklist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update-black-list',
  templateUrl: './update-black-list.component.html',
  styleUrls: ['./update-black-list.component.css']
})
export class UpdateBlackListComponent {
  blacklist:IUpdateBlackListModel[]=[];
  updateBlacklist:FormGroup;
  constructor(private blacklistService:BlacklistService, private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder){}

  ngOnInit(): void{
    
    }

    createUpdateBlackList(){
      this.updateBlacklist = this.formBuilder.group({
        date:[this.blacklist[0].date, Validators.required],
        reason:[this.blacklist[0].reason, Validators.required]
      })
    }


    update(): void {
      this.blacklistService.update(this.activatedRoute.snapshot.params["id"], this.updateBlacklist.value).subscribe(); 
      location.reload();
    }
}

