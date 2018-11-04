import { DialogService } from "ng2-bootstrap-modal";
import { Injectable } from "@angular/core";
import { StatusModalComponent } from "../components/modals/status-modal/status-modal.component";
import { StatusModel } from "../models/status.model";
import { TicketModel } from "../models/ticket.model";
import { TicketModalComponent } from "../components/modals/ticket-modal/ticket-modal.component";
import { TicketInfoModalComponent } from "../components/modals/ticket-info-modal/ticket-info-modal.component";

@Injectable({providedIn:"root"})
export class ModalService {
    options: any;  
    constructor(private dialogService: DialogService) { }

    openStatusModal(model:StatusModel): any {        
        return this.dialogService.addDialog(StatusModalComponent, {model : model });       
    };  

    openTicketModal(model:TicketModel): any {        
        return this.dialogService.addDialog(TicketModalComponent, {model : model });       
    };  

    openTicketInfoModal(model:TicketModel): any {        
        return this.dialogService.addDialog(TicketInfoModalComponent, {model : model });       
    };
}