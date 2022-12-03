import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  openMenu(){
    document.querySelector('.fixed-plugin').classList.add('show')
  }
  closeMenu(){
    document.querySelector('.fixed-plugin').classList.remove('show')
  }
  
}
