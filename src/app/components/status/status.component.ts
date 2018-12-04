import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Status } from 'src/app/models/status.model';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketsService } from 'src/app/services/tickets.service';
import { StatusesService } from 'src/app/services/statuses.service';
import { ModalService } from 'src/app/services/modals.service';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { DeleteStatusDialogComponent } from '../modals/status-modal/delete-status-modal/delete-status-modal.component'
import { DeleteTicketsDialogComponent } from '../modals/ticket-modal/delete-ticket-modal/delete-status-modal.component';
import { DialogAgreementComponent } from '../modals/comman/agreement/dialog-agreement.component';
@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit{

  private _status:Status; 
  private tickets:Observable<Ticket[]>;
  private isEditStatus:boolean=false;
  private taskSubscription:Subscription;

  @Input('status')
  get status(): Status {
    return this._status;
  }
  set status(value: Status) {
    this._status = { ...value };
    this.updateTicket();
 }
 @Input() sortBy:string;
 @Input() searchText:string;

 @Output() delete = new EventEmitter<Status>();

  constructor(private ticketsService:TicketsService,
              private statusService:StatusesService,
              private modalService: ModalService,
              private dialog: MatDialog ) {   
  }

  ngOnInit() {
  }

  private updateTicket(){
    this.tickets = this.ticketsService.where(x => x.statusId == this._status.id);
  }

  public editStatus(){
    this.isEditStatus = true;
  }

  public saveStatus(){
    this.isEditStatus = false;

    this.statusService.update(this._status.id, this._status);
  }

  public deleteStatus(){  
    if(this._status.isBase)
      return;
      
    this.taskSubscription = this.ticketsService.where(x => x.statusId == this._status.id).subscribe( tickets => { 
      const dialogRefStatusDelete = this.dialog.open(DeleteStatusDialogComponent, { data : this._status}); 

      dialogRefStatusDelete.afterClosed().subscribe(result=>{

        if(!result)
          return;

        if(tickets.length > 0)
        {           
            const dialogRef = this.dialog.open(DialogAgreementComponent,
              {
                data:{
                  message:"Do you want to delete tasks too",
                  messageDescription:"If you keep tasks, it will change status to 'To Do'",                  
                  messageConfirmBtn:"Keep tasks",
                  messageCancelBtn:"Yep!Do it."
                }
              })

            dialogRef.afterClosed().subscribe(result => {   

              let baseStatus = this.statusService.getBaseStatus();   

              if(result == null)
                return;
    
              if(!result.isAgree) 
              {
                this.ticketsService.deleteRange(tickets);    
                this.taskSubscription.unsubscribe();    
              }
              else{
                const updatedTickets =  tickets.map(ticket => {              
                  return { ... ticket, statusId :baseStatus.id}
                }); 
                this.ticketsService.updateRange(updatedTickets);
                this.taskSubscription.unsubscribe();
              }
            });
            
        } 
        
        this.statusService.delete(this._status.id);
      });
    });
  }  
 
  openTicket(ticket:Ticket){
    this.modalService.openTicketInfoModal(ticket).subscribe(result =>{
      this.ticketsService.update(ticket.id, result);
    });
  }

  
}

