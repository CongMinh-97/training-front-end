import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
  topics = ['Angular', 'Vue','ReactJs'];
  // user ={userName: 'Chung', email:'abc@gmail.com',phone:12232, password:'111111',topic:'Angular', time:'moring', subscribe:true};
  
  infoForm;
  // validate = {
  //   username: [
  //     {type: 'required', message: 'Khoong duoc de trong'},
  //   ]
  // }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    // this.userForm = this.fb.group({
    //   userName: ['', Validators.required],
    //   email: ['', Validators.required, Validators.email],
    //   phone:['', Validators.required,
    //           Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/),
    //           Validators.minLength(9),
    //           Validators.minLength(10)
    //         ],
    //   password: [''],
    // });
  }

  get email() { 
    return this.infoForm.get('email'); 
  }

  onSubmit(data){
    if (this.infoForm.invalid) return;
    console.log(1);

    
  }
}
