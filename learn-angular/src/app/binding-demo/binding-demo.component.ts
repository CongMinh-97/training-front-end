import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {
  public name = "Codevolution";
  public href ="https://angular.io/guide/attribute-binding";
  public src = "https://picsum.photos/200/300";
  public isDisable = true;
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    'succes': !this.hasError,
    'danger': this.hasError,
    'special': this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public getting ='';
  
  public count = 0;
  public text:string;
  constructor() { }

  ngOnInit(): void {
  }

  gettingUser(){
    return "Hello, " + this.name;
  }

  sayHello(){
    alert("hello "+ this.name);
  }

  tang(){
    this.count++;
  }
  giam(){
    this.count --;
  }

}
