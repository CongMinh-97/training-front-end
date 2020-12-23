import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataCustomerService } from '../../../services/data-customers.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataCustomerService: DataCustomerService,
  ) { }

  ngOnInit(): void {
  }
  onClickSave(): void {  
    this.dataCustomerService.delete(Number(this.data.id)).subscribe(
      (res)=>{
        return true;
      },
      (err)=>{

      }
    );
    this.dialogRef.close(true);
  }
  onClickCancel() :void {
    this.dialogRef.close(false);
  }
}
