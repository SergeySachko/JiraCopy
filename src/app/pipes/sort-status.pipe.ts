import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../models/status.model';

@Pipe({name: 'sortStatus'})
export class SortStatusPipe implements PipeTransform {
    transform(data: Status[]): Status[] {
        if(!data)
            return data;
        return data.sort(function(a,b){
            if(!a["orderNumber"] || !b["orderNumber"])
                return;
            return a.orderNumber - b.orderNumber;
        })
    }
}