import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  dataTest =[
    {id:1, status: "Chưa kích hoạt", color:"#13c3b3"},
    {id:2, status: "Đang sử dụng", color:"#ef9208"},
    {id:3, status: "Hết hạn sử dụng", color:"#c50e0e"},
    {id:4, status: "Hết hạn dùng thử", color:"green"},
    {id:5, status: "Dùng thử", color:"#43c10e"},
    {id:6, status: "Khác", color:"#9716c1"}
  ]
  List =[
    {id:1, status: 2, color:"#13c3b3"},
    {id:2, status: 4, color:"#ef9208"},
    {id:3, status: 1, color:"#c50e0e"},
    {id:4, status: 3, color:"green"},
    {id:5, status: 1, color:"#43c10e"},
    {id:6, status: 3, color:"#9716c1"},
    {id:7, status: 6, color:"#43c10e"},
    {id:8, status: 5, color:"#9716c1"},
    {id:9, status: 1, color:"#43c10e"},
    {id:10, status: 3, color:"#9716c1"}

  ]
  
  
  currentColor:number;
  constructor() { }

  ngOnInit(): void {
    
  }
  
  onChange(event, id){
    this.currentColor= event.target.value;
    console.log(this.currentColor);
    
    // console.log(this.currentColor);
    // document.getElementById('status').className='';
    // document.getElementById('status').classList.add(`select-status-${this.currentColor}`);
    
    let list = document.querySelectorAll("#status");
    console.log(list);
    // for(let i=0; i<list.length;i++){
    //   if(i+1==id && i+1<7) {
    //     console.log(list[i]);
    //     console.log(id);
    //     list[i].className='';
    //     list[i].classList.add(`select-status-${this.currentColor}`);
    //   }
      for(let i=1; i< this.List.length+1; i++){
        if(i== id){
          list[i-1].className='';
          list[i-1].classList.add(`select-status-${this.currentColor}`);
        }
      }
      // console.log(list);
      
      
      
      
      
    }
   //document.querySelectorAll("status").className.replace( /(?:^|\s)select-status-${this.currentColor}(?!\S)/g , '' );
  
  
}
