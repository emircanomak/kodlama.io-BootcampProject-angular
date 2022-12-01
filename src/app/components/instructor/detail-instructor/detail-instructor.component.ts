import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../services/instructor.service';
import { ICreateInstructorModel } from 'src/app/models/request/instructor/createInstructorModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-instructor',
  templateUrl: './detail-instructor.component.html',
  styleUrls: ['./detail-instructor.component.css'],
})
export class DetailInstructorComponent {
  instructorDetail: ICreateInstructorModel[] = [];
  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.getInstructorDetail(params['id'])
    );
  }

  getInstructorDetail(id: number) {
    this.instructorService
      .getInstructorDetail(id)
      .subscribe((data) => (this.instructorDetail = data));
  }
}
