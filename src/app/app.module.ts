import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { TodoReducer } from './store/reducers/todo.reducer';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      todo: TodoReducer,
    
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
