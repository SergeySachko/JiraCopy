import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { TicketModallInterface } from 'src/app/interfaces/ticket-modal.interface';
import { Ticket } from 'src/app/models/ticket.model';
import { Comment } from 'src/app/models/comment.model';
import { HelperService } from 'src/app/common/helper.service';
import { TicketTypeEnum } from 'src/app/enums/ticket-type.enum';
import { TicketPriorityEnum } from 'src/app/enums/ticket-priority.enum';
import { TicketsService } from 'src/app/services/tickets.service';
import { MatDialog } from '@angular/material';
import { DialogAgreementComponent } from '../comman/agreement/dialog-agreement.component';

@Component({
  selector: 'app-ticket-info-modal',
  templateUrl: './ticket-info-modal.component.html',
  styleUrls: ['./ticket-info-modal.component.css']
})
export class TicketInfoModalComponent extends DialogComponent<TicketModallInterface, Ticket> implements TicketModallInterface,OnInit {
  model: Ticket;
  newComment:Comment = new Comment();
  private types = TicketTypeEnum;
  private priorities = TicketPriorityEnum;
  constructor(dialogService: DialogService,
              private helper:HelperService,
              private ticketsService:TicketsService,
              private dialog: MatDialog) { 
    super(dialogService);
  }

  ngOnInit() {
    
  }

  delete(){  
    const dialogRef = this.dialog.open(DialogAgreementComponent, 
    {
      data:{
        message:"Do you want to delete the task",                      
        messageConfirmBtn:"Yes,do it",
        messageCancelBtn:"No,Don't do it"
      }
    }); 

    dialogRef.afterClosed().subscribe(result =>{
        if(result == null)
          return;
        if(result.isAgree)
        {
          this.ticketsService.delete(this.model.id)
          this.close();
        }
          
    });
  }

  cancel(){
    this.close();
  } 
  saveMessage(){    
    if(!this.newComment.message)
      return;

    if(!this.model.comments)
      this.model.comments = new Array<Comment>();

    this.newComment.id = this.helper.getNextIndex(this.model.comments);

    this.newComment.date = new Date().toDateString();

    this.model.comments.push(this.newComment);

    this.ticketsService.update(this.model.id, this.model)

    this.newComment = new Comment();
  }
  
}
