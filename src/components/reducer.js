// @flow
import type {ReducerState, ListAction, Todo} from './Type';
import actionType from './action.type';

/**
 * Redux reducer example
 */
const initialState = {
  todos: []
};

export default function(state: ReducerState = initialState, action: ListAction) {
  switch(action.type) {
    case actionType.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}

