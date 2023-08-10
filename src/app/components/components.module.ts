import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmCardComponent } from './rm-card/rm-card.component';
import { RmModalSimpleComponent } from './modals/rm-modal-simple/rm-modal-simple.component';

import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RmTableLazyComponent } from './rm-table-lazy/rm-table-lazy.component';

@NgModule({
  declarations: [
    RmCardComponent,
    RmModalSimpleComponent,
    RmTableLazyComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    RmCardComponent,
    RmModalSimpleComponent,
    RmTableLazyComponent
  ]
})
export class ComponentsModule { }
