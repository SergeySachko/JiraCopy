import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StatusModel } from 'src/app/models/status.model';
import { TicketModel } from 'src/app/models/ticket.model';
import { TicketsService } from 'src/app/services/tickets.service';
import { StatusesService } from 'src/app/services/statuses.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ModalService } from 'src/app/services/modals.service';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  private _status:StatusModel; 
  private tickets:TicketModel[];
  private isEditStatus:boolean=false;  

  @Input('status')
  get status(): StatusModel {
    return this._status;
  }
  set status(value: StatusModel) {
    this._status = value;
    this.updateTicket();
 }
 @Input() sortBy:string;
 @Input() searchText:string;

 @Output() delete = new EventEmitter<StatusModel>();

  constructor(private ticketsService:TicketsService,
              private statusService:StatusesService,
              private modalService: ModalService ) {

    this.ticketsService.emitUpdateTickets.subscribe(res =>{
      if(res.statusId == this._status.id)
        this.tickets.push(res);    
    })
    this.ticketsService.emitMoveTicket.subscribe(res =>{
      if(res.fromIndex == this._status.id)
      {
        this.tickets.splice(this.tickets.findIndex(x=> x.id == res.model.id), 1)
      }
      else if (res.toIndex == this._status.id){
        this.tickets.push(res.model);
      }
    })
  }

  ngOnInit() {
    
  }

  private updateTicket(){
    this.tickets = this.ticketsService.tickets().filter(x=>x.statusId == this._status.id);
  }

  private editStatus(){
    this.isEditStatus = true;
  }

  private saveStatus(){
    this.isEditStatus = false;

    this.statusService.updateStatus(this._status);
  }

  private deleteStatus(){
    this.ticketsService.deleteTickets(this.tickets);
    this.delete.emit(this.status);
  } 

  checkData(event){
    console.log(event);
  }
 
  openTicket(ticket:TicketModel){
    this.modalService.openTicketInfoModal(ticket).subscribe(result =>{
      this.ticketsService.updateTicket(result);
    })
  }

  
}

