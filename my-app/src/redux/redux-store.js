import todoReducer from "./todo-reducer";
import {createStore, combineReducers} from 'redux';  

let reducers = combineReducers({
    todoPage: todoReducer
});

const store = createStore(reducers);

window._store_ = store;

export default store;
