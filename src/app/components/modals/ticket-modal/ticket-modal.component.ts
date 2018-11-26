import { Component, OnInit } from '@angular/core';
import { TicketTypeEnum } from 'src/app/enums/ticket-type.enum';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketModallInterface } from 'src/app/interfaces/ticket-modal.interface';
import { TicketPriorityEnum } from 'src/app/enums/ticket-priority.enum';
import { StatusesService } from 'src/app/services/statuses.service';
import { Status } from 'src/app/models/status.model';

@Component({  
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css']
})
export class TicketModalComponent extends DialogComponent<TicketModallInterface, Ticket> implements OnInit {
  defaultModel: Ticket = {} as Ticket;
  statuses:Status[];  
  private types = TicketTypeEnum;
  private priorities = TicketPriorityEnum;
  error:string;

  constructor(dialogService: DialogService,
              private statusesService:StatusesService) { 
    super(dialogService);
  }

  ngOnInit() {
   this.statusesService.get().subscribe(result =>{
      this.statuses = result;
   })
  }

  confirm(){  
    if(!this.defaultModel.statusId)
      this.error = "Please, chose status"

    this.result = { ...this.defaultModel };

    this.close();
  }

  cancel(){
    this.close();
  } 

}
