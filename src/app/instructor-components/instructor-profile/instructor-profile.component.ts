import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICreateInstructorModel } from 'src/app/models/request/instructor/createInstructorModel';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent {
  instructors: ICreateInstructorModel[] = [];
  name= localStorage.getItem("name")

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
