import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

const initialStateUser = {
  id: 0,
  name: "",
  username: "",
  email: ""
}

const initialStateTodos = {
  arrayTodos: [],
}

function reducerUser(state=initialStateUser, action:any) {
  switch(action.type){
    case 'GET_USER':
      return {
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email,
      }
      default: 
        return state
  }
}

function reducerTodos(state=initialStateTodos, action:any) {
  switch(action.type){
    case 'LIST_TODOS':
      return {
        arrayTodos: action.payload,
      }
      default:
        return state 
  }
}

const createRootReducer = () => combineReducers({
  user:reducerUser,
  todos: reducerTodos,
})

const store = createStore(createRootReducer(), composeWithDevTools())

export {store}