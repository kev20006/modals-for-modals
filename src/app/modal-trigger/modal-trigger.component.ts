import { Component, OnInit, Input } from '@angular/core';
import { ModalServiceService } from '../modalservice/modal-service.service';

@Component({
  selector: 'app-modal-trigger',
  templateUrl: './modal-trigger.component.html',
  styleUrls: ['./modal-trigger.component.scss']
})
export class ModalTriggerComponent {

  private selectValue: string
  
  constructor(private modalService: ModalServiceService) { }

  modalGo() {
    this.modalService.openDialog(this.selectValue)
  }

}
