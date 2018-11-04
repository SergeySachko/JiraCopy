import { Component, OnInit } from '@angular/core';
import { TicketTypeEnum } from 'src/app/enums/ticket-type.enum';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { TicketModel } from 'src/app/models/ticket.model';
import { TicketModallInterface } from 'src/app/interfaces/ticket-modal.interface';
import { TicketPriorityEnum } from 'src/app/enums/ticket-priority.enum';
import { StatusesService } from 'src/app/services/statuses.service';

@Component({  
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css']
})
export class TicketModalComponent extends DialogComponent<TicketModallInterface, TicketModel> implements TicketModallInterface,OnInit {
  model: TicketModel;
  private types = TicketTypeEnum;
  private priorities = TicketPriorityEnum;
  error:string;

  constructor(dialogService: DialogService,
              private statusesService:StatusesService) { 
    super(dialogService);
  }

  ngOnInit() {
  }

  confirm(){  
    if(!this.model.statusId)
      this.error = "Please, chose status"

    this.result = this.model;

    this.close();
  }

  cancel(){
    this.close();
  } 

}
