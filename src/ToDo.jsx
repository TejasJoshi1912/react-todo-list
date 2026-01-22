import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
export default function ToDo(){
    let [todos,seTodos] = useState ([{task:"sample-task",id :uuidv4()}]);
    let[newTodo,setnewTodo] = useState("");

    let addNewTask = () => {
        seTodos((prevTodos)=>{
            return [...todos,{task:newTodo,id:uuidv4()}];
        });
        setnewTodo ("")
    }
    let updateTodoValue = (event) =>{
        setnewTodo(event.target.value);
    } 
    let deleteTodo =  (id) =>{

       seTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id!=id)
) ;
       

    }
    return(
        <div>
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
        <br /><br />
        <button onClick={addNewTask}> Add Task </button>
        <br /><br /><br />

        <hr />
        <h4>Tasks Todo</h4>
        <ul>
            {todos.map((todo) =>(
                <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    </li>
            )
        )}
        </ul>
        </div>
    );
}; 