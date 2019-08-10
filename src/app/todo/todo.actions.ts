import { Action } from '@ngrx/store';

export const ADD_TODO = '[Todo] Add todo';
export const TOGGLE_TODO = '[Todo] Toggle todo';
export const TOGGLE_ALL_TODO = '[Todo] Toggle ALL todo';
export const EDIT_TODO = '[Todo] Edit todo';
export const DELETE_TODO = '[Todo] Delete todo';
export const CLEAR_COMPLETED = '[Todo] Clear completed';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;
  constructor(public payload: boolean) {}
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;
  constructor(public payload: { id: number; text: string }) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: number) {}
}

export class ClearCompletedAction implements Action {
  readonly type = CLEAR_COMPLETED;
}

export type Actions =
  | AddTodoAction
  | ToggleTodoAction
  | ToggleAllTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | ClearCompletedAction;
