import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCheckShowDropDown:boolean=false;
  isCheckToggleMenu:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  isShowDropdown() {
    this.isCheckShowDropDown=!this.isCheckShowDropDown;
  }

  isShowToggleMenu(){
    this.isCheckToggleMenu=!this.isCheckToggleMenu;
  }
  showSideBar(){
    console.log('sidebar');
    
  }
}
