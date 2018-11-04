import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { StatusModel } from 'src/app/models/status.model';
import { StatusModalInterface } from 'src/app/interfaces/status-modal.interface';



@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css']
})
export class StatusModalComponent extends DialogComponent<StatusModalInterface, StatusModel> implements StatusModalInterface,OnInit {
  model: StatusModel;
  error:string;

  constructor(dialogService: DialogService) { 
    super(dialogService);
  }

  ngOnInit() {    
  }

  confirm(){
    if(!this.model.status)
    {
      this.error = "Please, enty status name"
      return; 
    } 
         
    this.result = this.model;

    this.close();
  }

  cancel(){
    this.close();
  }

}
