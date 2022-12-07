import { ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../services/instructor.service';
import { Component } from '@angular/core';
import { ICreateInstructorModel } from 'src/app/models/request/instructor/createInstructorModel';

@Component({
  selector: 'app-create-instructor',
  templateUrl: './create-instructor.component.html',
  styleUrls: ['./create-instructor.component.css'],
})
export class CreateInstructorComponent {
  filterInstructor;
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

  delete(data: ICreateInstructorModel) {
    this.instructors = this.instructors.filter((x) => x !== data);
    this.instructorService.delete(data).subscribe();
  }
}
