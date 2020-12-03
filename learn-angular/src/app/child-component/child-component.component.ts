import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  //bien newUser de luu new user duoc add moi tu component child
  newUser = {
    id: 1,
    name :'',
    gender : 0|1
  };
  
  @Input() detailInfo: any;
  // bien newUserEvent de day du lieu tu child-> parent
  @Output() newUserEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  // function de gui dl sang cho parent, .emit(): truyen vao bien chua dl- gia tri muon gui sang parent
  addNewUser(){
    this.newUserEvent.emit(this.newUser);  
  }

}
