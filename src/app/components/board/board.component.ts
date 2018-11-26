import { Component, OnInit, HostListener, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Status } from 'src/app/models/status.model';
import { StatusesService } from 'src/app/services/statuses.service';
import { ModalService } from 'src/app/services/modals.service';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/models/ticket.model';
import { HelperService } from 'src/app/common/helper.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class BoardComponent implements OnInit, AfterViewInit{  

  title:string = "Test board";
  statuses:Observable<Status[]>;
  sortBy:string="";
  searchText:string; 
  isSmallDevice:boolean = false; 

  constructor(private statusService:StatusesService,
              private modalService: ModalService,
              private ticketsService:TicketsService,
              private helper:HelperService) { }

  ngOnInit() {
    this.statuses = this.statusService.get();     
  } 

  ngAfterViewInit(): void {
    if(window.innerWidth < 1000)
    {
      this.isSmallDevice = true;
    }
    else{
      this.isSmallDevice = false;
    }
  }

  addStatus(){  
    this.modalService.openStatusModal().subscribe(result=>{
      if(result && result.status)
        this.statusService.add(result);       
    });
  }

  addTicket(){   
    this.modalService.openTicketModal().subscribe(result=>{
      if(result && result.title)
        this.ticketsService.add(result);
    });
  }

  drop(dropedData:Ticket, status:Status){
    event.preventDefault() 
    console.log("drop");
    let fromStatusId = dropedData.statusId;    
    if(fromStatusId == status.id)
      return;
    dropedData.statusId = status.id;
   
    this.ticketsService.update(dropedData.id, dropedData);
    //this.ticketsService.moveTicket(dropedData, fromStatusId, status.id);
  } 

  dragOverColumn(){
    event.preventDefault();    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 1000)
    {
      this.isSmallDevice = true;
    }
    else{
      this.isSmallDevice = false;
    }
  }

 

 
  
}
