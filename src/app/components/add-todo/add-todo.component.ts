import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  
  @Output() addNewTodo: EventEmitter<any> = new EventEmitter();
  @Output() newTOdoMessage = new EventEmitter();
  
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: '',
      text:''
    })

  }


  saveTodo(title: string, text: string) {
    if (title == ""  ) {
      return 
    }
    this.addNewTodo.emit({title:title,text:text})
  }

  addNewTodoMessage() {
    this.newTOdoMessage.emit();
  }
}
