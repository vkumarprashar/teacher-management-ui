import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ResponsiveService } from 'src/app/services/responsive/responsive.service';
import { ToggleBtnService } from 'src/app/services/toggle-btn/toggle-btn.service';

@Component({
  selector: 'app-school-shared',
  templateUrl: './school-shared.component.html',
  styleUrls: ['./school-shared.component.scss']
})
export class SchoolSharedComponent implements OnInit {
  login:boolean= false;
  constructor(
    private responsiveService: ResponsiveService,
    public toggleBtn: ToggleBtnService,
    public router:Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.login= true;
        } else {
          this.login= false;
        }
      }
    });
  }

  ngOnInit() {
    this.responsiveService.checkWidth();
    this.responsiveService.isMobile.asObservable().subscribe(
      (isMobile: any) => {
        // this.sideBarIsOpened = !isMobile;
        this.toggleBtn.setToggle(!isMobile);
      },
      (err) => {
        // this.sideBarIsOpened = false;
        this.toggleBtn.setToggle(true);
      }
    );
    this.onResize();
  
  }
  onResize() {
    this.responsiveService.checkWidth();
  }

}
