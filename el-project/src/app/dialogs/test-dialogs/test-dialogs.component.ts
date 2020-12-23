import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-test-dialogs',
  templateUrl: './test-dialogs.component.html',
  styleUrls: ['./test-dialogs.component.scss']
})
export class TestDialogsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TestDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
