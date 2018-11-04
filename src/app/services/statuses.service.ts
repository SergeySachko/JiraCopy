import { Injectable } from '@angular/core';
import { StatusModel } from '../models/status.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
    providedIn:"root"
})
export class StatusesService extends BaseService<StatusModel>{
   
    private _statuses:StatusModel[];

    constructor(protected http:HttpClient){
        super(http, "statuses")
    }

    public init():void{
        if(this._statuses)
            return;    
        this.get().subscribe(res =>{
            localStorage.setItem("statuses",JSON.stringify(res));
            this._statuses = res;
        });
    }

    public statuses(){
        return this._statuses;
    }

    public updateStatus(model:StatusModel):void{       
        this.update(model);
    }

    public saveStatus(model:StatusModel):void{
        this.save(model);
    }

    public deleteStatus(model:StatusModel):void{
        this.delete(model);
    }
}