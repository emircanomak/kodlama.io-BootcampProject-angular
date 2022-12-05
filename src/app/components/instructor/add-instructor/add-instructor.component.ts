import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { InstructorService } from './../../../services/instructor.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css'],
})
export class AddInstructorComponent {
  instructorAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createInstructorAddForm();
  }

  createInstructorAddForm() {
    this.instructorAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      image: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      companyName: ['', Validators.required],
    });
  }

  add() {
    if (this.instructorAddForm.value) {
      let instructorInputDatas = Object.assign(
        {},
        this.instructorAddForm.value
      );
      this.instructorService.add(instructorInputDatas).subscribe((data) => {});
    }
  }
}
