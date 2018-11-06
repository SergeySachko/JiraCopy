import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { HttpClientModule } from '@angular/common/http';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { MaterialModule } from './modules/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './/components/app/app.component';
import { BoardComponent } from './components/board/board.component';
import { StatusComponent } from './components/status/status.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { StatusModalComponent } from './components/modals/status-modal/status-modal.component';
import { TicketModalComponent } from './components/modals/ticket-modal/ticket-modal.component';
import { EnumSelectPipe } from './pipes/enum-select.pipe';
import { TicketInfoModalComponent } from './components/modals/ticket-info-modal/ticket-info-modal.component';
import { SortTicketPipe } from './pipes/sort-ticket.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StatusComponent,
    TicketComponent,
    StatusModalComponent,
    TicketModalComponent,
    EnumSelectPipe,
    TicketInfoModalComponent,
    SortTicketPipe,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    DragAndDropModule, 
    MaterialModule,
    BrowserAnimationsModule   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[StatusModalComponent, TicketModalComponent, TicketInfoModalComponent]
})
export class AppModule { }
