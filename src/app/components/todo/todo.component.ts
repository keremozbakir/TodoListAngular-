 
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { WordBreakPipe } from 'src/app/word-break.pipe';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  //currentValue: any= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
  @Input() text = 'hey'
  @Input() title = 'this is the title';
  @Input() buttondisplay = 'initial';
  @Input() buttonText = 'De';
   

  @Output() addToDone = new EventEmitter; 
  @Output() deleteTodo = new EventEmitter;
  @Output() successMessage = new EventEmitter;
  @Output() deleteMessage = new EventEmitter;
  ngOnInit(): void {
  }
  display: string = "none"
  
  moveToDone(title:string,text:string) {
    console.log(title, text)
    this.addToDone.emit({ title:title,text:text})
  }
  delTodo(title: string, text: string) {
    this.deleteTodo.emit({ title:title,text:text})
  }

  successMessageOnClick( ) {
    this.successMessage.emit();
  }
  deleteMessageOnClick() {
    this.deleteMessage.emit();
  }
}
 

