import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private registerServive:RegisterService, private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createRegister()
  }

    createRegister(){
      this.registerForm = this.formBuilder.group({
        id:["",Validators.required],
        email:["",Validators.required],
        name:["",Validators.required],
        lastName:["", Validators.required],
        fullName:["", Validators.required],
        password:["", Validators.required],
        token:["dshajkfhjasjhfksajk"],
        role: ["roleApplicant"],
        localImg: ['https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png']  
        
    })
  }

  add(){
    this.registerServive.add(this.registerForm.value).subscribe((data) => {
    })
    this.toastrService.success("Kayıt Olundu")

  }


}
