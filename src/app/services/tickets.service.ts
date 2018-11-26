import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { Subject, Observable } from 'rxjs';
import { config } from '../app.config' 
import { FirebaseService } from './firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({providedIn:"root"})
export class TicketsService extends FirebaseService<Ticket>{

    public emitUpdateTickets: Subject<Ticket> = new Subject();
    public emitMoveTicket: Subject<any> = new Subject();   

    constructor(protected db:AngularFirestore){
        super(config.collection_tickets, db);

        this.init();
    }  
   
}