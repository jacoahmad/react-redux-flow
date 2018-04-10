// @flow
import Type from './action.type';
import type {User} from './Type';

type Payload = {
  type: string,
  payload: {
    users: User
  }
};

function addTodo(payload: Payload) {
  return (dispatch: void) => ({type: Type.ADD_TODO, payload: payload})
}

export default {
  addTodo
};