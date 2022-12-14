import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from "@angular/cdk/drag-drop";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const materials = [
  CommonModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  DragDropModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDatepickerModule,
  MatSlideToggleModule
  

]

@NgModule({
   
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
