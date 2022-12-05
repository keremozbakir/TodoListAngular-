 
import { Injectable } from '@angular/core';
 
import { Todo } from '../todo';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   

  constructor(private notificationService: NotificationsService) { }
  popUpOptions = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    animate: 'fade',
    showProgressBar: true,
  }

  popUpSuccess(message:string) {
 
    this.notificationService.success('Marked as DONE!', message,this.popUpOptions )
  }
 

  deleteTodo(message:string) {
    
    this.notificationService.error('Deleted!', message, this.popUpOptions)
  }

  addNewTodo(message:string) {
    
    this.notificationService.info('Added new Todo!', message, this.popUpOptions)
  }




}
