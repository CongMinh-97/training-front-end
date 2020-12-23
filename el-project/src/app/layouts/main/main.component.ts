import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isCheckShowFilter:boolean =false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  showOptionFilter() {
     this.isCheckShowFilter= !this.isCheckShowFilter; 
  }

  
 
}
