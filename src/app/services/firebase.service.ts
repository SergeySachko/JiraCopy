import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

export abstract class FirebaseService<T>{
    protected data: AngularFirestoreCollection<T>;

    protected dataDoc: AngularFirestoreDocument<T>;
    
    constructor(protected collectionName,
                protected db:AngularFirestore)
    {
        
    }

    protected init() {
        this.data = this.db.collection<T>(this.collectionName);
    }
   
    public get():Observable<T[]>{
        return this.data.snapshotChanges().pipe(          
            map(actions => actions.map(a => {
              const data = a.payload.doc.data() as T;
              data["id"] = a.payload.doc.id;
              return data;
            }))
          );
    }
  
    public add(model:T){        
        this.data.add(model); 
    }
    
    public update(id:string, model:T){
        this.dataDoc = this.db.doc<T>(`${this.collectionName}/${id}`);

        this.dataDoc.update(model);
    }

    public updateRange(models:T[]){
        models.forEach(item => {
            this.dataDoc = this.db.doc<T>(`${this.collectionName}/${item["id"]}`);

            this.dataDoc.update(item);
        })
    }

    public delete(id:string){
        this.dataDoc = this.db.doc<T>(`${this.collectionName}/${id}`);

        this.dataDoc.delete();        
    } 
    
    public deleteRange(models:T[]){
        models.forEach(item => {
            this.dataDoc = this.db.doc<T>(`${this.collectionName}/${item["id"]}`);

            this.dataDoc.delete();
        })
    }

    public where(predicate: (value: T) => boolean){       
       return this.get().pipe(
            map(
                action => action.filter(predicate)
            )
        )       
    }

    public find(predicate:(value: T) => boolean){
        return this.get().pipe(
            map(
                action => action.find(predicate)
            )
        );
    }
}