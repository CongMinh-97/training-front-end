import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  listUser = [
    { id: 11, name: 'Dr Nice', gender: 1 },
    { id: 12, name: 'Narco', gender: 0  },
    { id: 13, name: 'Bombasto', gender: 1 },
    { id: 14, name: 'Celeritas', gender: 1 },
    { id: 15, name: 'Magneta', gender: 0 },
    { id: 16, name: 'RubberMan', gender: 1 },
    { id: 17, name: 'Dynama', gender: 0 },
    { id: 18, name: 'Dr IQ', gender: 1  },
    { id: 19, name: 'Magma', gender: 0  },
    { id: 20, name: 'Tornado', gender: 0  }
  ];
  selectedUser: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user:Object){
    this.selectedUser=user;
    console.log('click');
  }
}
