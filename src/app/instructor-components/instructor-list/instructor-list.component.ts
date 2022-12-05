import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICreateInstructorModel } from 'src/app/models/request/instructor/createInstructorModel';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent {
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
