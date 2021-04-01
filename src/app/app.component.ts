import { Component, OnInit } from '@angular/core';
import { AppState } from './store/models/app-state.model';
import { Store }  from '@ngrx/store';
import { Observable } from 'rxjs';
import { todoItem } from './store/models/todo-item.models';
import { AddItemAction, DeleteItemAction } from './store/actions/todo.actions';
import { v4 as uuid } from 'uuid';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoItems$: Observable<Array<todoItem>>;
  newTodoItem: todoItem = { id: '', name: ''};
  constructor(private store: Store<AppState>) {}
  
  
  ngOnInit(): void {
    this.todoItems$ = this.store.select(store => store.todo);
  }


  addItem(){
    this.newTodoItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newTodoItem));
    this.newTodoItem = {id: '', name: ''};
  }

  deleteItem (id: string){
    this.store.dispatch(new DeleteItemAction(id))
  }
}
