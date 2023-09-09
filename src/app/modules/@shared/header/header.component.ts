import { Component, ViewChild } from '@angular/core';
import { ToggleBtnService } from 'src/app/services/toggle-btn/toggle-btn.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  constructor( private toggleButton: ToggleBtnService){}

  toggleBtn = () => {
    this.toggleButton.toggle();
  };

  openLogout() {
     console.log("OK")
  }
  someMethod() {
    this.trigger.openMenu();
  }

}
