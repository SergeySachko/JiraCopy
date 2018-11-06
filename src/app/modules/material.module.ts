import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule
  ],
  exports:[    
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
