import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @Output() newEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    
  }
  showSideBar(){
    let sidebar =< HTMLElement > document.querySelector(".sidebar__inner");
    sidebar.classList.toggle('isShow');  
  }
}
