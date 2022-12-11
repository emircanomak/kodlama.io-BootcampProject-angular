import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private toastrService: ToastrService) {}
 
  ngOnInit(){

  }

  toastrButton() {
    this.toastrService.success("Mesajınız İletildi")
    
  }
}
