import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Modal {

  constructor(
    public dialogRef: MatDialogRef<Modal2Modal>,
    @Inject(MAT_DIALOG_DATA) public config: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
