
import  Swal  from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from './../../../services/applicant.service';
import { Component } from '@angular/core';
import { ICreateApplicantModel } from 'src/app/models/request/applicant/createApplicantModel';

@Component({
  selector: 'app-create-applicant',
  templateUrl: './create-applicant.component.html',
  styleUrls: ['./create-applicant.component.css'],
})
export class CreateApplicantComponent {
  filterApplicant;
  applicants: ICreateApplicantModel[] = [];

  constructor(
    private applicantService: ApplicantService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getApplicant();
    });
  }

  getApplicant() {
    this.applicantService
      .getApplicant()
      .subscribe((data) => (this.applicants = data));
  }

  // deleteApplicant(applicantModel: ICreateApplicantModel) {
  //   this.applicants = this.applicants.filter((m) => m !== applicantModel);
  //   this.applicantService.delete(applicantModel).subscribe();
  //   this.toastrService.error('Silindi');
  // }

  deleteApplicant(applicantModel: ICreateApplicantModel) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn bg-gradient-info active ms-3',
        cancelButton: 'btn bg-gradient-primary active',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Emin misiniz',
        text: 'Bu işlem geri alınmaz',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Evet',
        cancelButtonText: 'Hayır',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.applicantService.delete(applicantModel).subscribe(() => {
            swalWithBootstrapButtons.fire(
              'Silindi',
              'İstediğiniz veri silme işlemi başarılı',
              'success'
            );
          }),
            setTimeout(() => {
              window.location.reload();
            }, 1000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'İptal Edildi',
            'Veriniz güvende',
            'error'
          );
        }
      });
  }
}
