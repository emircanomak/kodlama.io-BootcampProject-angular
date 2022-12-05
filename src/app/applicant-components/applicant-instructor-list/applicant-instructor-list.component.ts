import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../services/instructor.service';
import { ICreateInstructorModel } from './../../models/request/instructor/createInstructorModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-applicant-instructor-list',
  templateUrl: './applicant-instructor-list.component.html',
  styleUrls: ['./applicant-instructor-list.component.css'],
})
export class ApplicantInstructorListComponent {
  instructors: ICreateInstructorModel[] = [];

  constructor(
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getInstructor();
    });
  }

  getInstructor() {
    this.instructorService
      .getInstructor()
      .subscribe((data) => (this.instructors = data));
  }
}
