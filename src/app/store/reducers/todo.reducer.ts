import { ActionsSubject } from "@ngrx/store";
import { TodoAction, TodoActionTypes } from "../actions/todo.actions";
import { todoItem } from "../models/todo-item.models";

const initialState: Array<todoItem> = [];

export function TodoReducer (state: Array<todoItem> = initialState, action: TodoAction )
{
    switch(action.type)
    {
        case TodoActionTypes.ADD_Item:
            return [...state, action.payload];
                
        
        case TodoActionTypes.DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
            default :
            return state;
    }
}

