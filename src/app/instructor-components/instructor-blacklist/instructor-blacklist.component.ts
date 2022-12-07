import { ApplicantService } from 'src/app/services/applicant.service';
import { ICreateApplicantModel } from './../../models/request/applicant/createApplicantModel';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICreateBlackListModel } from 'src/app/models/request/blackList/createBlackListModel';
import { BlacklistService } from 'src/app/services/blacklist.service';

@Component({
  selector: 'app-instructor-blacklist',
  templateUrl: './instructor-blacklist.component.html',
  styleUrls: ['./instructor-blacklist.component.css'],
})
export class InstructorBlacklistComponent {
  blacklists: ICreateBlackListModel[] = [];
  constructor(
    private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
    });
    this.getBlackList();
  }

  getBlackList() {
    this.blacklistService.getBlackList().subscribe((data) => {
      this.blacklists = data;
    });
  }

  deleteUserFromBlacklist(id:number, applicantId:number){
    this.updateBlacklistState(applicantId);
    this.blacklistService.removeApplicant(id).subscribe((data)=>{
      window.location.reload()
      console.log("kaldırıldı")
    })
  }

  updateBlacklistState(id:number) {
    this.applicantService.updateApplicantState(id, 1).subscribe((val) => {
      // alert('Kara liste güncellendi');
      console.log("güncellendi")
    });
  }

  // deleteBlacklist(blacklists: ICreateBlackListModel) {
  //   this.blacklists = this.blacklists.filter((x) => x !== blacklists);
  //   this.blacklistService.deleteBlacklist(blacklists).subscribe();
  // }
}
