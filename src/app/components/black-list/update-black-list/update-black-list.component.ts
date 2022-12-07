import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { IUpdateBlackListModel } from './../../../models/request/blackList/updateBlackListModel';
import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from 'src/app/services/blacklist.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-black-list',
  templateUrl: './update-black-list.component.html',
  styleUrls: ['./update-black-list.component.css']
})
export class UpdateBlackListComponent {
  blacklist:IUpdateBlackListModel;
  updateBlacklist:FormGroup;
  constructor(private blacklistService:BlacklistService, private activatedRoute:ActivatedRoute, private formBuilder:FormBuilder,
    private toastrService:ToastrService){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      this.getBlacklistId(params["id"]);
    })
    }

    createUpdateBlackList(){
      this.updateBlacklist = this.formBuilder.group({
        id:[this.blacklist.id, Validators.required],
        applicantId:[this.blacklist.applicantId, Validators.required],
        date:[this.blacklist.date, Validators.required],
        reason:[this.blacklist.reason, Validators.required]
      })
    }

    getBlacklistId(id:number){
      this.blacklistService.getBlacklistById(id).subscribe((data) => {
        console.log(data);
        
        this.blacklist=data
        this.createUpdateBlackList()
      })
    }


    update() {
      this.blacklistService.update(this.activatedRoute.snapshot.params["id"], this.updateBlacklist.value).subscribe(data => {

      })
      this.toastrService.success("Güncellendi")
    }
}

