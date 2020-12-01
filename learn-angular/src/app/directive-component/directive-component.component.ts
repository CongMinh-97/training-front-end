import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponentComponent implements OnInit {

  isShow = true;
  userName = 'An';
  isCheck = true;
  age = 12;
  addressList = ['Ha Noi', 'Bac Giang', 'Ha Nam', 'Vinh Phuc', 'HCM'];
  productList = [
    {
      id: 1,
      name: 'iphone',
      price: 100000,
      srcImage: 'https://picsum.photos/id/1/100',
      status: 1,
    },
    {
      id: 8,
      name: 'ipad',
      price: 100000,
      srcImage: 'https://picsum.photos/id/10/100',
      status: 2,
    },
    {
      id: 5,
      name: 'samsung',
      price: 200000,
      srcImage: 'https://picsum.photos/id/5/100',
      status: 1,
    },
    {
      id: 4,
      name: 'xiaomi',
      price: 1200000,
      srcImage: 'https://picsum.photos/id/100/100',
      status: 0,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onToggle(): void{
    this.isShow = !this.isShow;
  }
  check( val: boolean): void {
    this.isCheck = val;
  }

}
