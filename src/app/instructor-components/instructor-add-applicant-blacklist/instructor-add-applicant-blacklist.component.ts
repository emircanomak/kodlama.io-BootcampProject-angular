import { ToastrService } from 'ngx-toastr';
import { ApplicantService } from 'src/app/services/applicant.service';
import { ICreateBlackListModel } from './../../models/request/blackList/createBlackListModel';
import { BlacklistService } from './../../services/blacklist.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-add-applicant-blacklist',
  templateUrl: './instructor-add-applicant-blacklist.component.html',
  styleUrls: ['./instructor-add-applicant-blacklist.component.css'],
})
export class InstructorAddApplicantBlacklistComponent {
  constructor(
    private FormBuilder: FormBuilder,
    private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute,
    private applicantService: ApplicantService,
    private toastrService: ToastrService
  ) {}

  blacklistForm: FormGroup;
  id: number;
  today: Date = new Date();
  date: any =
    this.today.getDate() +
    '/' +
    this.today.getMonth() +
    '/' +
    this.today.getFullYear();

  ngOnInit(): void {
    this.createBlacklistForm();
  }

  createBlacklistForm() {
    this.blacklistForm = this.FormBuilder.group({
      reason: ['', Validators.required],
      date: [this.date, Validators.required],
    });
  }

  addBlackList() {
    if (this.blacklistForm.valid) {
      let blacklistAddRequest: ICreateBlackListModel = Object.assign(
        {},
        this.blacklistForm.value
      );
      this.activatedRoute.params.subscribe((params) => {
        blacklistAddRequest.applicantId = params['id'];
        this.id = params['id'];
      });
      this.blacklistService
        .addBlacklist(blacklistAddRequest)
        .subscribe((data) => {});
      this.toastrService.success("Blacklist'e eklendi");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    this.updateApplicantState();
  }

  updateApplicantState() {
    this.applicantService
      .updateApplicantState(this.id, 0)
      .subscribe((val) => {});
    this.toastrService.success('Aday listesi güncellendi');
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
