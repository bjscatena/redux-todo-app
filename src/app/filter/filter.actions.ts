import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set filter';

export type validFilters = 'all' | 'active' | 'completed';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public payload: validFilters) {}
}

export type Actions = SetFilterAction;
