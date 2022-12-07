import { ActivatedRoute } from '@angular/router';
import { IUpdateInstructorModel } from './../../../models/request/instructor/updateInstructorModel';
import { InstructorService } from './../../../services/instructor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css'],
})
export class UpdateInstructorComponent {
  instructorUpdateForm: FormGroup;
  instructor: IUpdateInstructorModel;

  constructor(
    private instructorService: InstructorService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getInstructorById(params['id']);
    });
  }

  createInstructorUpdateForm() {
    this.instructorUpdateForm = this.formBuilder.group({
      firstName: [this.instructor.firstName, Validators.required],
      lastName: [this.instructor.lastName, Validators.required],
      email: [this.instructor.email, Validators.required],
      password: [this.instructor.password, Validators.required],
      image: [this.instructor.image, Validators.required],
      nationalIdentity: [this.instructor.nationalIdentity, Validators.required],
      dateOfBirth: [this.instructor.dateOfBirth, Validators.required],
      companyName: [this.instructor.companyName, Validators.required],
    });
  }

  getInstructorById(instructorId: number) {
    this.instructorService.getInstructorById(instructorId).subscribe((data) => {
      this.instructor = data;
      this.createInstructorUpdateForm();
    });
  }

  update(): void {
    this.instructorService
      .update(
        this.activatedRoute.snapshot.params['id'],
        this.instructorUpdateForm.value
      )
      .subscribe((data) => {});
      this.toastrService.success("güncellendi")
  }
}
