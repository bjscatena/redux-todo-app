import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Save the world');
const todo2 = new Todo('Defeat Thanos');
const todo3 = new Todo(`Borrow Iron Man's armor`);

todo2.completed = true;

const initialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state = initialState,
  action: fromTodo.Actions
): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.payload);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.payload) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return { ...todoEdit };
        }
      });

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return { ...todoEdit, completed: action.payload };
      });

    case fromTodo.EDIT_TODO:
      return state.map(todoEdit => {
        const { id, text } = action.payload;

        if (todoEdit.id === id) {
          return {
            ...todoEdit,
            text
          };
        } else {
          return { ...todoEdit };
        }
      });

    case fromTodo.DELETE_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.payload);

    case fromTodo.CLEAR_COMPLETED:
      return state.filter(todoEdit => !todoEdit.completed);

    default:
      return state;
  }
}
