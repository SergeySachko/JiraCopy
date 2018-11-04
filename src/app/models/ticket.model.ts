import { TicketTypeEnum } from "../enums/ticket-type.enum";
import { TicketPriorityEnum } from "../enums/ticket-priority.enum";
import { CommentModel } from "./comment.model";

export class TicketModel{
    id:number;
    title:string;
    description:string;
    type:TicketTypeEnum;
    priority:TicketPriorityEnum;
    creationTime:Date;
    comments:CommentModel[];
    statusId:number;
    dueDate:string;
    labels:string[];
    assignee:string;    
}