import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import {
  ToggleTodoAction,
  EditTodoAction,
  DeleteTodoAction
} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('textInputElement') textInputElement: ElementRef;

  checkField: FormControl;
  textInput: FormControl;

  isEditing: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  edit() {
    this.isEditing = true;

    setTimeout(() => {
      this.textInputElement.nativeElement.select();
    }, 1);
  }

  stopEditing() {
    this.isEditing = false;

    if (this.textInput.invalid) {
      return;
    }

    const { id } = this.todo;
    const text = this.textInput.value;

    if (text === this.todo.text) {
      return;
    }

    const action = new EditTodoAction({ id, text });
    this.store.dispatch(action);
  }

  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
