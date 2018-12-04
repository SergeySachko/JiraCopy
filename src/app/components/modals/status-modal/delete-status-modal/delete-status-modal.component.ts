import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({    
    templateUrl: './delete-status-modal.component.html',
    styleUrls: ['./delete-status-modal.component.css']
})
export class DeleteStatusDialogComponent implements OnInit {
    
    constructor(public dialogRef: MatDialogRef<DeleteStatusDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
        console.log("A");
     }

    public confirm(result:boolean){
        this.dialogRef.close(result)
    }
}
