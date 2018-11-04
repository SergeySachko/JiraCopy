import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';
import { StatusesService } from 'src/app/services/statuses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private ticketsService:TicketsService,
              private statusesService:StatusesService){}

  public ngOnInit():void{
    this.ticketsService.init();
    this.statusesService.init();
  }
}
