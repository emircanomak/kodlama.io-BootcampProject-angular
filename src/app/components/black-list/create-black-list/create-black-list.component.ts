import { ActivatedRoute } from '@angular/router';
import { ICreateBlackListModel } from './../../../models/request/blackList/createBlackListModel';
import { BlacklistService } from './../../../services/blacklist.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-black-list',
  templateUrl: './create-black-list.component.html',
  styleUrls: ['./create-black-list.component.css']
})
export class CreateBlackListComponent {
  blacklists:ICreateBlackListModel[]=[];
  constructor(private blacklistService:BlacklistService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params=>{
      this.getBlackList()
    })
}

getBlackList(){
  this.blacklistService.getBlackList().subscribe(data => {
    this.blacklists = data
  })
}
  deleteBlacklist(blacklists:ICreateBlackListModel){
    this.blacklists = this.blacklists.filter(x=> x !== blacklists);
    this.blacklistService.deleteBlacklist(blacklists).subscribe();
    this.toastrService.error("Silindi")
  }

}
