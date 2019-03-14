import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatTreeModule,
  MatBadgeModule,
  MatCardModule
}
from '@angular/material';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatBadgeModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatBadgeModule,
    MatCardModule
  ]
})
export class MaterialLayoutModule { }
