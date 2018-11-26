import { TicketTypeEnum } from "../enums/ticket-type.enum";
import { TicketPriorityEnum } from "../enums/ticket-priority.enum";
import { Comment } from "./comment.model";

export interface Ticket{
    id:string;
    title:string;
    description:string;
    type:TicketTypeEnum;
    priority:TicketPriorityEnum;
    creationTime:Date;
    comments:Comment[];
    statusId:string;
    dueDate:string;
    labels:string[];
    assignee:string;    
}