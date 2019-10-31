import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalTriggerComponent } from './modal-trigger/modal-trigger.component';
import { HelloWorldModal } from './modalservice/modals/hello-world/hello-world.component';
import { Modal2Modal } from './modalservice/modals/modal2/modal2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ModalTriggerComponent,
    HelloWorldModal,
    Modal2Modal,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule
  ],
  entryComponents: [
    HelloWorldModal,
    Modal2Modal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
