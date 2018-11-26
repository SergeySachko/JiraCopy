import { Injectable} from '@angular/core';
import { Status } from '../models/status.model';
import { config } from '../app.config' 
import { FirebaseService } from './firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({providedIn:"root"})
export class StatusesService extends FirebaseService<Status>{
   
    private baseStatus:Status;

    constructor(protected db:AngularFirestore){
       super(config.collection_columns, db);

       this.init();

       this.get().subscribe(result =>{
           result.map(
               item => {
                   if(item.isBase)
                        this.baseStatus = item
               }
           )
       })
    }

    public getBaseStatus():Status{       
        return this.baseStatus;
    }

}