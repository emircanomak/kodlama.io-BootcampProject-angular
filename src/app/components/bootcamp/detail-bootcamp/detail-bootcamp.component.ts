import { ActivatedRoute } from '@angular/router';
import { BootcampService } from './../../../services/bootcamp.service';
import { ICreateBootcampModel } from 'src/app/models/request/bootcamp/createBootcampModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-bootcamp',
  templateUrl: './detail-bootcamp.component.html',
  styleUrls: ['./detail-bootcamp.component.css'],
})
export class DetailBootcampComponent {
  bootcampDetail: ICreateBootcampModel[] = [];

  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getBootcampDetail(params['id'])
    );
  }

  getBootcampDetail(id: number) {
    this.bootcampService
      .getBootcampDetail(id)
      .subscribe((data) => (this.bootcampDetail = data));
  }
}
