import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialModule { }
