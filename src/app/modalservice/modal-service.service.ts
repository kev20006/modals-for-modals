import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelloWorldModal } from './modals/hello-world/hello-world.component';
import { Modal2Modal } from './modals/modal2/modal2.component';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {


  private modalStore = {
    "HelloWorld":{
      "component": HelloWorldModal,
      "exitFuntion": ()=>{
        alert("Goodbye")
      },
      "config":{}
    },
    "Modal2":{
      "component": Modal2Modal,
      "exitFunction":()=>{
        alert("bye")
      },
      // you could pass in the origin here, for configuring the functionality of the modal
      "config": {
        "anyOtherFunction":()=>{
          alert("do some other thing")
        },
        "someValue": "anydata you want in or out of your modal"
      }
    }
  }

  constructor(private dialog: MatDialog) { }

  public openDialog(modalType): void {
    const dialogRef = this.dialog.open(this.modalStore[modalType].component, {
      width: '60%',
      data: this.modalStore[modalType].config
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.modalStore[modalType].exitFunction(result)
      }
      console.log('The dialog was closed');
    });
  }
}
