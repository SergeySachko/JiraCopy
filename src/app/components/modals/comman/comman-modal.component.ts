import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'comman-modal',
    templateUrl: './comman-modal.component.html',
    styleUrls: ['./comman-modal.component.css']
})
export class CommanModalComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void { }
}
