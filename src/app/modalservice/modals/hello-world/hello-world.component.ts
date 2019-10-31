import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// I can't help but think there must be a way to dynamically poplulate the component decorator
// but not sure how
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldModal {

  constructor(
    public dialogRef: MatDialogRef<HelloWorldModal>,
    @Inject(MAT_DIALOG_DATA) public config: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
