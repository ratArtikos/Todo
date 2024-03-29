import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { getTodoData, addNewTodoData } from './redux/todo-reducer';

let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
      <React.StrictMode>
              <App state = {state.todoPage} getTodoData={getTodoData} addNewTodoData={addNewTodoData} store = {store}/>
      </React.StrictMode>
      </BrowserRouter>,
  document.getElementById('root')
);
} 

rerenderEntireTree(store.getState());

store.subscribe(() =>{
  let state = store.getState();
  rerenderEntireTree(state);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
