import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './components/todo/todo.component';
import { TodoPanelComponent } from './components/todo-panel/todo-panel.component';
import { MaterialModule } from './material/material.module';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { WordBreakPipe } from './word-break.pipe';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NavbarComponent } from './components/navbar/navbar.component';

 
 
 @NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoPanelComponent,
    WordBreakPipe,
    AddTodoComponent,
    NavbarComponent
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  
     
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
       
    }), 

    
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
