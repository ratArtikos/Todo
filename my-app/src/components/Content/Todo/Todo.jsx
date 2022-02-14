import React from 'react';
import { Button } from 'bootstrap-4-react';
import s from './Todo.module.css';

const Todo = (props) => {
/*
   () => {
     props.addNewTodoData(newUserId, newId, newTitle, newCompleted)
   }*/

    return (
        <div className={s.todo}>
            <div>
                <form>
                    <label>
                        New Todo:<br />
                        <input type="text" placeholder="userId" name="newUserId" /><br />
                        <input type="number" placeholder="id" name="newId" /><br />
                        <input type="text" placeholder="title" name="newTitle" /><br />
                        completed: <input type="checkbox" placeholder='completed' name="newCompleted" /><br />
                    </label>
                    <button type="submit">POST</button>
                </form>
            </div>
            <div>
                {props.state.todoData.map(t => <span>
                    <div>User №{t.userId}</div>
                    <div>id todo: {t.id}</div>
                    <div>title: {t.title}</div>
                    <div>{t.completed ? <Button success>COMPLETED</Button> : <Button warning>NO COMPLETED</Button>}</div>
                    <br />
                </span>)}
            </div>
        </div>
    )
}



export default Todo;

