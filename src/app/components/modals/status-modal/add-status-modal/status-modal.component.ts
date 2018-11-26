import { Component, OnInit } from '@angular/core';
import { DialogService, DialogComponent } from 'ng2-bootstrap-modal';
import { Status } from 'src/app/models/status.model';
import { StatusModalInterface } from 'src/app/interfaces/status-modal.interface';



@Component({  
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css']
})
export class StatusModalComponent extends DialogComponent<StatusModalInterface, Status> implements OnInit {
  defaultModel: Status = {
    id:"",
    status:"",
    isBase:false,
    orderNumber:0
  };

  errors:string[];

  constructor(dialogService: DialogService) { 
    super(dialogService);
  }

  ngOnInit() {    
  }

  confirm(){
    this.errors = [];
    if(!this.validation())
      return; 
             
    this.result = { ...this.defaultModel };

    this.close();
  }

  cancel(){
    this.close();
  }

  validation():boolean{
    let isValid = true;

    if(!this.defaultModel.status)
    {
      this.errors.push("Please, enty status name");
      isValid = false;
    }    

    if(this.defaultModel.orderNumber == 0)
    {
      this.errors.push("Please, change 'Display Number', it should be more than 0");
      isValid = false;
    }

    return isValid;
     

  }

}
