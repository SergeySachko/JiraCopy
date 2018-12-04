import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { HttpClientModule } from '@angular/common/http';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppComponent } from './/components/app/app.component';
import { BoardComponent } from './components/board/board.component';
import { StatusComponent } from './components/status/status.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { StatusModalComponent } from './components/modals/status-modal/add-status-modal/status-modal.component';
import { TicketModalComponent } from './components/modals/ticket-modal/ticket-modal.component';
import { EnumSelectPipe } from './pipes/enum-select.pipe';
import { TicketInfoModalComponent } from './components/modals/ticket-info-modal/ticket-info-modal.component';
import { SortTicketPipe } from './pipes/sort-ticket.pipe';
import { environment } from 'src/environments/environment';
import { DeleteStatusDialogComponent } from './components/modals/status-modal/delete-status-modal/delete-status-modal.component';
import { SortStatusPipe } from './pipes/sort-status.pipe';
import { DialogAgreementComponent } from './components/modals/comman/agreement/dialog-agreement.component';

@NgModule({
  declarations: [
    //Componets
    AppComponent,
    BoardComponent,
    StatusComponent,
    TicketComponent,
    StatusModalComponent,
    TicketModalComponent,
    DeleteStatusDialogComponent,
    TicketInfoModalComponent,
    DialogAgreementComponent,
    //Pipes
    EnumSelectPipe,   
    SortTicketPipe,   
    SortStatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    DragAndDropModule, 
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[StatusModalComponent, TicketModalComponent, TicketInfoModalComponent, DeleteStatusDialogComponent, DialogAgreementComponent]
})
export class AppModule { }
