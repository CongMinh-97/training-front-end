import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven-form-component',
  templateUrl: './driven-form-component.component.html',
  styleUrls: ['./driven-form-component.component.css']
})
export class DrivenFormComponentComponent implements OnInit {
  public topics = ['Angular', 'Vue','ReactJs'];
  constructor() { }

  ngOnInit(): void {
  }

}
