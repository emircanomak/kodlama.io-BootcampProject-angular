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
    delete(bootcamp:ICreateBootcampModel){
      this.bootcamps = this.bootcamps.filter(b=>b!==bootcamp);
      this.bootcampService.delete(bootcamp).subscribe()
      this.toastrService.error("Silindi")
    }
}
