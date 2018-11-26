import { DialogService } from "ng2-bootstrap-modal";
import { Injectable } from "@angular/core";
import { StatusModalComponent } from "../components/modals/status-modal/add-status-modal/status-modal.component";
import { Ticket } from "../models/ticket.model";
import { TicketModalComponent } from "../components/modals/ticket-modal/ticket-modal.component";
import { TicketInfoModalComponent } from "../components/modals/ticket-info-modal/ticket-info-modal.component";

@Injectable({providedIn:"root"})
export class ModalService {
    options: any;  
    constructor(private dialogService: DialogService) { }

    openStatusModal(): any {        
        return this.dialogService.addDialog(StatusModalComponent);       
    };  

    openTicketModal(): any {        
        return this.dialogService.addDialog(TicketModalComponent);       
    };  

    openTicketInfoModal(model:Ticket): any {        
        return this.dialogService.addDialog(TicketInfoModalComponent, {model : model });       
    };
}