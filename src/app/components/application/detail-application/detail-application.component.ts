import { ICreateApplicationModel } from './../../../models/request/application/createApplicationModel';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-application',
  templateUrl: './detail-application.component.html',
  styleUrls: ['./detail-application.component.css'],
})
export class DetailApplicationComponent {
  applicationDetail: ICreateApplicationModel[] = [];

  constructor(
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getApplicationDetail(params['id'])
    );
  }

  getApplicationDetail(id: number) {
    this.applicationService
      .getApplicationDetail(id)
      .subscribe((data) => (this.applicationDetail = data));
  }
}
