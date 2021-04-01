import { Action } from '@ngrx/store'
import { todoItem } from '../models/todo-item.models'

export enum TodoActionTypes{
    ADD_Item = '[TODO] add item',
    DELETE_ITEM = '[TODO] delete item'
}


export class AddItemAction implements Action{
        readonly type = TodoActionTypes.ADD_Item
        constructor(public payload: todoItem) {}
}

export class DeleteItemAction implements Action {
    readonly type = TodoActionTypes.DELETE_ITEM;
    constructor(public payload: string ) {}
}

export type TodoAction = AddItemAction | DeleteItemAction;