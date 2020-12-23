import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataCustomerService } from '../../../services/data-customers.service';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  formEditAdd:FormGroup;
  validationMessages = {
    'id': [
      {type:'required', message:'Id is required'},
    ],
    'name': [
      {type:'required', message:'Your name is required'},   
    ],
    'code': [
      {type:'required', message:'Your name is required'},   
    ],
    'email': [
      {type:'required', message:'Email is required'},
      { type:'email', message: 'Enter a valid email' }
    ],
    'phone': [
      {type:'required', message:'Phone number is required'},
    ],
    'domain': [
      {type:'required', message:'Domain is required'},
    ]
  };
  checkStatus:boolean=false;
  constructor(
    private fb:FormBuilder,
    private dataCustomerService: DataCustomerService,
    // public dialogRef: MatDialogRef<AddEditComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.formEditAdd = this.fb.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      domain:['',[Validators.required]],
      phoneNumber:['',[Validators.required]],
      userCode:['',[Validators.required]],
      status:['']
    });
  }
  onSubmit(value) {
    console.log(value);
    value.code = Number(value.code);
    console.log(value);
    
    this.dataCustomerService.create(this.formEditAdd.value).subscribe(
      (res) => {
        this.dataCustomerService.getAllData();
        return true;
      },
      (err) => {
        return false;
      }
    );
  }
  // onClickSave(): void {
  //   this.dialogRef.close(true);
  // }
  // closeDialog() :void {
  //   this.dialogRef.close(false);
  // }
  

}
