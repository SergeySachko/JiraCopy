import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogAgreement } from 'src/app/interfaces/dialog-agreement.interface';

@Component({
    selector: 'dialog-agreement',
    templateUrl: './dialog-agreement.component.html'    
})
export class DialogAgreementComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DialogAgreementComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogAgreement) { }

    ngOnInit(): void {
        console.log(this.data);
     }

    public confirm(result:boolean){

        this.dialogRef.close({...this.data, isAgree:result})
    }
}
