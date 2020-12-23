import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataCustomerService } from '../../../services/data-customers.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.scss']
})
export class EditAddComponent implements OnInit {
  formEditAdd:FormGroup;
  validationMessages = {
    'id': [
      {type:'required', message:'Id is required'},
    ],
    'name': [
      {type:'required', message:'Your name is required'},   
    ],
    'userCode': [
      {type:'required', message:'Your code is required'}, 
      {type:'pattern', message:'Your code is a number'}  
    ],
    'email': [
      {type:'required', message:'Email is required'},
      { type:'email', message: 'Enter a valid email' }
    ],
    'phone': [
      {type:'required', message:'Phone number is required'},
      {type:'pattern', message:'Your phone number is not valid'}
    ],
    'domain': [
      {type:'required', message:'Domain is required'},
      {type:'pattern', message:'Your domain is not valid'}
    ],
    'status': [
      {type:'required', message:'Status is required'},
    ]
  };
  dataStatus =[
    {id:1, status: "Chưa kích hoạt", color:"#13c3b3"},
    {id:2, status: "Đang sử dụng", color:"#ef9208"},
    {id:3, status: "Hết hạn sử dụng", color:"#c50e0e"},
    {id:4, status: "Hết hạn dùng thử", color:"green"},
    {id:5, status: "Dùng thử", color:"#43c10e"},
    {id:6, status: "Khác", color:"#9716c1"}
  ]
  selectedValue:string = this.data.dataCustomer.status;
  checkStatus:boolean=false;
  constructor(
    public dialogRef: MatDialogRef<EditAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private dataCustomerService: DataCustomerService,
  ) { }

  ngOnInit(): void { 
    this.formEditAdd = this.fb.group({
      id:[this.data.dataCustomer ? this.data.dataCustomer.id : '',[Validators.required]],
      name:[this.data.dataCustomer? this.data.dataCustomer.name : '',[Validators.required]],
      email:[this.data.dataCustomer ? this.data.dataCustomer.email : '',[Validators.required, Validators.email]],
      domain:[this.data.dataCustomer ? this.data.dataCustomer.domain: '',[Validators.required, /*Validators.pattern("/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/")*/]],
      phoneNumber:[this.data.dataCustomer ? this.data.dataCustomer.phoneNumber : '',[Validators.required, /*Validators.pattern("/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/")*/]],
      userCode:[this.data.dataCustomer ? this.data.dataCustomer.userCode : '',[Validators.required, Validators.pattern("^[0-9]+$")]],
      status:[this.data.dataCustomer ? this.data.dataCustomer.status: null]
    });
  }

  onSubmit(value) {
    if(this.formEditAdd.invalid){
      console.log('invalid');
      return;
    }
    value.userCode = Number(value.userCode);
    //value.status = this.valueOfStatus;
    value.status = this.selectedValue;
    console.log(this.formEditAdd.value);
    
    if(this.data.status) {
      this.dataCustomerService.create(this.formEditAdd.value).subscribe(
        (res) => {
          //this.dataCustomerService.getAllData();
          return true;
        },
        (err) => {
          return false;
        }
      );
    }
    else {
      this.dataCustomerService.update(this.data.dataCustomer.id, this.formEditAdd.value).subscribe(
        (res) => {
          //this.dataCustomerService.getAllData();
          return true;
        }
      )
    }   
  }
  onClickSave(): void {
    this.dialogRef.close(true);
  }
  onClickCancel() :void {
    this.dialogRef.close(false);
  }
}
