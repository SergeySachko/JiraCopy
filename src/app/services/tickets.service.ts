import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { TicketModel } from '../models/ticket.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class TicketsService extends BaseService<TicketModel>{

    public emitUpdateTickets: Subject<TicketModel> = new Subject();
    public emitMoveTicket: Subject<any> = new Subject();
    private _tickets:TicketModel[];

    constructor(protected http:HttpClient){
        super(http,"tickets")
    }

    public init():void{
        if(this._tickets)
           return;          

        this.get().subscribe(res =>{
            localStorage.setItem("tickets",JSON.stringify(res));
            this._tickets = res;
        });
    }

    public tickets(){
        return this._tickets;
    }

    public saveTicket(model:TicketModel){
        this.save(model);
        this.emitUpdateTickets.next(model);
    }

    public updateTicket(model:TicketModel){
        this.update(model);
    }

    public moveTicket(model:TicketModel, fromIndex:number, toIndex:number){
        this.emitMoveTicket.next({
            model,
            fromIndex,
            toIndex
        })
    }

    public deleteTickets(models:TicketModel[]){
        this.deleteRange(models);
    }
}