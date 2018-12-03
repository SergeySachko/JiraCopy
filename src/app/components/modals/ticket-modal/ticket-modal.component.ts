import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TicketTypeEnum } from 'src/app/enums/ticket-type.enum';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketModallInterface } from 'src/app/interfaces/ticket-modal.interface';
import { TicketPriorityEnum } from 'src/app/enums/ticket-priority.enum';
import { StatusesService } from 'src/app/services/statuses.service';
import { Status } from 'src/app/models/status.model';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/common/data-adapter.service';

@Component({  
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css'],
  encapsulation:ViewEncapsulation.None,
  providers:[
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class TicketModalComponent extends DialogComponent<TicketModallInterface, Ticket> implements OnInit {
  defaultModel: Ticket = {} as Ticket;
  dueDate:Date;
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
    
    this.defaultModel = {...this.defaultModel, dueDate: this.dueDate.toDateString()}
    
    this.result = { ...this.defaultModel };

    this.close();
  }

  cancel(){
    this.close();
  } 

}
