import { ActivatedRoute } from '@angular/router';
import { ICreateBlackListModel } from './../../../models/request/blackList/createBlackListModel';
import { BlacklistService } from './../../../services/blacklist.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-black-list',
  templateUrl: './create-black-list.component.html',
  styleUrls: ['./create-black-list.component.css']
})
export class CreateBlackListComponent {
  blacklists:ICreateBlackListModel[]=[];
  constructor(private blacklistService:BlacklistService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params=>{
      this.getBlackList()
    })
}

getBlackList(){
  this.blacklistService.getBlackList().subscribe(data => {
    this.blacklists = data
  })
}
  // deleteBlacklist(blacklists:ICreateBlackListModel){
  //   this.blacklists = this.blacklists.filter(x=> x !== blacklists);
  //   this.blacklistService.deleteBlacklist(blacklists).subscribe();
  //   this.toastrService.error("Silindi")
  // }


  deleteBlacklist(blacklists:ICreateBlackListModel){
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
        this.blacklistService.deleteBlacklist(blacklists).subscribe(()=>{
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
