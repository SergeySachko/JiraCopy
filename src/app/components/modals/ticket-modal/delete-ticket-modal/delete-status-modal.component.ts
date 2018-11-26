import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({    
    templateUrl: './delete-status-modal.component.html',
    styleUrls: ['./delete-status-modal.component.css']
})
export class DeleteTicketsDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DeleteTicketsDialogComponent>) { }

    ngOnInit(): void { }

    public confirm(result:boolean){
        this.dialogRef.close(result)
    }
}
