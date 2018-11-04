import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'sortTicket'})
export class SortTicketPipe implements PipeTransform {
  transform(data, property:string, searchText:string) : any {  
    var sortList = [];
    if(property && searchText)
    {
      data.forEach(item =>{
        if (item[property] && item[property].includes(searchText)) {
          sortList.push(item)
        } 
      })    
      return sortList;
    }

    return data;
   
  }
}