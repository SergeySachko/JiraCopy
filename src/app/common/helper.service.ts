import { Injectable } from '@angular/core';

@Injectable({providedIn:"root"})
export class HelperService {
    constructor(){}


    public getNextIndex(array:Array<any>):number{
        let maxValue:number = 0;
        array.forEach(x=>{
            if(+x.id > maxValue)
            maxValue = +x.id
        })
        maxValue += 1;   

        return maxValue;

    }
    
}