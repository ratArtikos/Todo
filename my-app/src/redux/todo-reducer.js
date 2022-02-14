import { todosAPI } from "../api/api";
import store from '../redux/redux-store';


const GET_TODO_DATA = "GET-TODO-DATA";
const ADD_TODO = "ADD_TODO";


let initializationState = {
    todoData: [],
};

const todoReducer = (state = initializationState, action) => {
    switch (action.type) {
        case GET_TODO_DATA: {
            return { ...state, todoData: action.todo }
        };
        case ADD_TODO:
            return {
                ...state,
                todoData: [{
                    userId: action.newUserId,
                    id: action.newId,
                    title: action.newTitle,
                    completed: action.newCompleted
                }, ...state.postsData]
            };
        default:
            return state;
    }
}

export const getTodo = (todo) => ({ type: GET_TODO_DATA, todo })

export const addTodo = (newUserId, newId, newTitle, newCompleted) => ({ type: ADD_TODO, newUserId, newId, newTitle, newCompleted })

export const getTodoData = async () => {
    const response = await todosAPI.getAPITodo();
        store.dispatch(getTodo(response));
}

export const addNewTodoData = async () => {
    const response = await todosAPI.postAPITodo();
        store.dispatch(getTodo(response));
}

export default todoReducer;