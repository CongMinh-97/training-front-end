import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { User} from '../user';
// import { USERES } from '../mock-useres';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  user = {
    id: 1,
    name: '',
    email: '',
    password: '',
    gender: 0|1,
    phoneNumber:'',
    subject:'',
    hobbies: '',
    dateOfBirth:Date,
    note: '',
  }
  selectedValue='';
  subjects: Subject[] = [
    {value: 'math', viewValue: 'Math'},
    {value: 'english', viewValue: 'English'},
    {value: 'musical', viewValue: 'Musical'}
  ];
  email = new FormControl('', [Validators.required, Validators.email]);
  checked = false;
  indeterminate = false;
  constructor() { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  

}

interface Subject {
  value: string;
  viewValue: string;
}