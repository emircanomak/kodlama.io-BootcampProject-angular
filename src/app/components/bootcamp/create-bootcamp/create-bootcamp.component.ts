import Swal  from 'sweetalert2';
import { BootcampService } from './../../../services/bootcamp.service';
import { Component } from '@angular/core';
import { ICreateBootcampModel } from 'src/app/models/request/bootcamp/createBootcampModel';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-bootcamp',
  templateUrl: './create-bootcamp.component.html',
  styleUrls: ['./create-bootcamp.component.css']
})
export class CreateBootcampComponent {
  filterBootcamp;
  bootcamps:ICreateBootcampModel[]=[]
  constructor(private bootcampService:BootcampService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService){}

  ngOnInit(): void{
   
   this.activatedRoute.params.subscribe(params=>{
    this.getBootcamp();
   })
  }

    getBootcamp(){

      this.bootcampService.getBootcamp().subscribe(data=> this.bootcamps=data)

    }
    // delete(bootcamp:ICreateBootcampModel){
    //   this.bootcamps = this.bootcamps.filter(b=>b!==bootcamp);
    //   this.bootcampService.delete(bootcamp.id).subscribe()
    //   this.toastrService.error("Silindi")
    // }

    delete(id:number){
      const swalWithBootstrapButtons=Swal.mixin({
        customClass:{
          confirmButton:'btn bg-gradient-info active ms-3',
          cancelButton:'btn bg-gradient-primary active'
        },
        buttonsStyling:false,
      
      });
      swalWithBootstrapButtons.fire({
        title:'Emin misiniz',
        text:'Bu işlem geri alınmaz',
        icon:'warning',
        showCancelButton:true,
        confirmButtonText:'Evet',
        cancelButtonText:'Hayır',
        reverseButtons:true,
    
      })
      .then((result)=>{
        if(result.isConfirmed){
          this.bootcampService.delete(id).subscribe(()=>{
            swalWithBootstrapButtons.fire(
              'Silindi',
              'İstediğiniz veri silme işlemi başarılı',
              'success',
            );
          }),
          setTimeout(()=>{
            window.location.reload();
          },1000);
        }else if(result.dismiss===Swal.DismissReason.cancel){
          swalWithBootstrapButtons.fire(
            'İptal Edildi',
            'Veriniz güvende',
            'error',
          );

        }
      })
    }
}
