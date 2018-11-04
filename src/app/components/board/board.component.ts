import { Component, OnInit } from '@angular/core';
import { StatusModel } from 'src/app/models/status.model';
import { StatusesService } from 'src/app/services/statuses.service';
import { ModalService } from 'src/app/services/modals.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { TicketModel } from 'src/app/models/ticket.model';
import { HelperService } from 'src/app/common/helper.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private title:string = "Test board";
  private statuses:StatusModel[];
  private sortBy:string="";
  private searchText:string;  

  constructor(private statusService:StatusesService,
              private modalService: ModalService,
              private ticketsService:TicketsService,
              private helper:HelperService) { }

  ngOnInit() {
    this.statuses = this.statusService.statuses(); 
  } 

  addStatus(){   
    let model = new StatusModel();
    model.id = this.helper.getNextIndex(this.statuses);
    this.modalService.openStatusModal(model).subscribe(result=>{
      if(result && result.status)
      {
        this.statusService.saveStatus(result);
        this.statuses.push(result);
      }
    });
  }

  deleteStatus(model:StatusModel){
    this.statusService.deleteStatus(model);
    this.statuses.splice(this.statuses.indexOf(model), 1);
  }

  addTicket(){
    let model = new TicketModel();
    model.id = this.helper.getNextIndex(this.ticketsService.tickets());
    this.modalService.openTicketModal(model).subscribe(result=>{
      if(result && result.title)
      {        
        this.ticketsService.saveTicket(result);
      }
    });
  }

  drop(dropedData:TicketModel, status:StatusModel){
    event.preventDefault() 
    let fromStatusId = dropedData.statusId;    
    dropedData.statusId = status.id;
    this.ticketsService.updateTicket(dropedData);
    this.ticketsService.moveTicket(dropedData, fromStatusId, status.id);
  } 

  dragOverColumn(){
    event.preventDefault();    
  }

 

 
  
}
