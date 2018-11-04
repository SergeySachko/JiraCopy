import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class BaseService<T>{

    private httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        }),
        params: new HttpParams()
    }; 
    constructor(protected http:HttpClient,
                protected dataKey:string){}


    protected get():Observable<T[]>{
        var result = JSON.parse(localStorage.getItem(this.dataKey)) as T[];
        if(result)
            return Observable.create( observer => {
                observer.next(result);
                observer.complete();
            });
        return this.http.get<T[]>("./assets/data/"+this.dataKey+"-data.json",this.httpOptions);        
       
    }

    protected save(model:T):void{
        var models = JSON.parse(localStorage.getItem(this.dataKey)) as T[];
        models.push(model);
        localStorage.setItem(this.dataKey,JSON.stringify(models));        
    }

    protected update(model:T):void{
        var models = JSON.parse(localStorage.getItem(this.dataKey)) as T[];
        var index = models.findIndex(x=>x["id"] == model["id"]);
        models[index] = model;      
        localStorage.setItem(this.dataKey,JSON.stringify(models));
    }

    protected delete(model:T):void{
        var models = JSON.parse(localStorage.getItem(this.dataKey)) as T[];
        models.splice(models.indexOf(model), 1);
        localStorage.setItem(this.dataKey,JSON.stringify(models));
    }

    protected deleteRange(models:T[]):void{
        var data = JSON.parse(localStorage.getItem(this.dataKey)) as T[];
        models.forEach(item=>{
            data.splice(data.indexOf(item), 1);
        })      
        localStorage.setItem(this.dataKey,JSON.stringify(data));
    }
}