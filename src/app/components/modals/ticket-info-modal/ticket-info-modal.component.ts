import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { TicketModallInterface } from 'src/app/interfaces/ticket-modal.interface';
import { Ticket } from 'src/app/models/ticket.model';
import { Comment } from 'src/app/models/comment.model';
import { HelperService } from 'src/app/common/helper.service';
import { TicketTypeEnum } from 'src/app/enums/ticket-type.enum';
import { TicketPriorityEnum } from 'src/app/enums/ticket-priority.enum';

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
              private helper:HelperService) { 
    super(dialogService);
  }

  ngOnInit() {
    
  }

  confirm(){  
    this.result = this.model;

    this.close();
  }

  cancel(){
    this.close();
  } 
  saveMessage(){
    if(!this.model.comments)
      this.model.comments = new Array<Comment>();
    this.newComment.id = this.helper.getNextIndex(this.model.comments);
    this.newComment.date = new Date();
    this.model.comments.push(this.newComment);
    this.newComment = new Comment();
  }
  
}
