import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPanelComponent } from './components/todo-panel/todo-panel.component';
import { TodoComponent } from './components/todo/todo.component';
const routes: Routes = [
  { path: 'todos', component: TodoComponent },
  {path:"",component:TodoPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
