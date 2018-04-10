// @flow
/**
 * Flow Type annotation examples
 */
export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: ?string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: ?string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
};

export type Users = Array<User>;

export type State = {
    isOpen: boolean,
    users: Users
};

export type Props = {};

export type ReducerState = {
  todos: Array<{
    name: string,
    description: string,
    pinned: boolean,
    done: boolean
  }>
};

export type Todo = {
  id: number,
  name: string,
  description: string,
  pinned: boolean,
  done: boolean
};

export type ListAction = {
  type: string,
  payload: Todo
};