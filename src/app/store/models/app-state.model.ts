import { todoItem } from "../models/todo-item.models";

export interface AppState{
    readonly todo: Array<todoItem>
};