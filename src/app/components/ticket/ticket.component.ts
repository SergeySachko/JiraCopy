import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketTypeEnum } from 'src/app/enums/ticket-type.enum';
import { TicketPriorityEnum } from 'src/app/enums/ticket-priority.enum';
import { ModalService } from 'src/app/services/modals.service';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticket:Ticket;

  public ticketTypeEnum = TicketTypeEnum;
  public ticketPriorityEnum = TicketPriorityEnum;

  constructor() { }

  ngOnInit() {
  }

  

}
