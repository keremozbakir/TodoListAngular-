import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }
  
  @Output() addNewTodo: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }
   
  saveTodo(title: string, text: string) {
    let data={title:title,text:text}
    this.addNewTodo.emit(data)
    console.log(title,text)
  }
}
