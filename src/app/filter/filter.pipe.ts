import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from './filter.actions';
import { Todo } from '../todo/model/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: validFilters): any {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
    return todos;
  }
}
