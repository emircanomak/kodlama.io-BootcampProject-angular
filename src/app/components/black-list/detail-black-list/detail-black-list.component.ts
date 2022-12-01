import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from 'src/app/services/blacklist.service';
import { ICreateBlackListModel } from './../../../models/request/blackList/createBlackListModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-black-list',
  templateUrl: './detail-black-list.component.html',
  styleUrls: ['./detail-black-list.component.css'],
})
export class DetailBlackListComponent {
  blacklistDetail: ICreateBlackListModel[] = [];
  constructor(
    private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getBlackListDetail(params['id'])
    );
  }

  getBlackListDetail(id: number) {
    this.blacklistService
      .getBlackListDetail(id)
      .subscribe((data) => (this.blacklistDetail = data));
  }
}
