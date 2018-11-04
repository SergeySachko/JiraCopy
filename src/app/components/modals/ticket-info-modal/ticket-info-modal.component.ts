import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { TicketModallInterface } from 'src/app/interfaces/ticket-modal.interface';
import { TicketModel } from 'src/app/models/ticket.model';
import { CommentModel } from 'src/app/models/comment.model';
import { HelperService } from 'src/app/common/helper.service';
import { TicketTypeEnum } from 'src/app/enums/ticket-type.enum';
import { TicketPriorityEnum } from 'src/app/enums/ticket-priority.enum';

@Component({
  selector: 'app-ticket-info-modal',
  templateUrl: './ticket-info-modal.component.html',
  styleUrls: ['./ticket-info-modal.component.css']
})
export class TicketInfoModalComponent extends DialogComponent<TicketModallInterface, TicketModel> implements TicketModallInterface,OnInit {
  model: TicketModel;
  newComment:CommentModel = new CommentModel();
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
      this.model.comments = new Array<CommentModel>();
    this.newComment.id = this.helper.getNextIndex(this.model.comments);
    this.newComment.date = new Date();
    this.model.comments.push(this.newComment);
    this.newComment = new CommentModel();
  }
  
}
