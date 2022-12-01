import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './components/todo/todo.component';
import { TodoPanelComponent } from './components/todo-panel/todo-panel.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from "@angular/forms";
import { WordBreakPipe } from './word-break.pipe';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoPanelComponent,
    WordBreakPipe,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
