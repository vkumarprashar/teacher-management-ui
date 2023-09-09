import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDateRangePicker } from '@angular/material/datepicker';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuLists = ['Create School', 'Create Subject/Topics', 'Create Teacher'];
  selectedList: string = '';
  constructor() {}

  ngOnInit(): void {
    this.selectedList = this.menuLists[0];
  }
  openMenuList(menuList: string) {
    this.selectedList = menuList;
  }

}
