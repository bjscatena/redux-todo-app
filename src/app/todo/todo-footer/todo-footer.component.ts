import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducers';

import * as fromFilter from '../../filter/filter.actions';
import { Todo } from '../model/todo.model';
import { ClearCompletedAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  actives: number;
  validFilters: fromFilter.validFilters[] = ['all', 'active', 'completed'];
  currentFilter: fromFilter.validFilters;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.countActive(state.todos);
    });
  }

  changeFilter(newFilter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countActive(todos: Todo[]) {
    this.actives = todos.filter(todo => todo.completed === false).length;
  }

  clearCompleted() {
    const action = new ClearCompletedAction();
    this.store.dispatch(action);
  }
}
