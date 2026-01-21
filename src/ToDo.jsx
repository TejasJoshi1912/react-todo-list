import { useState } from "react";
export default function ToDo(){
    let [todos,seTodos] = useState (["sample Task"]);
    let[newTodo,setnewTodo] = useState("");

    let addNewTask = () => {
        seTodos([...todos,newTodo]);
        setnewTodo ("")
    }
    let updateTodoValue = (event) =>{
        setnewTodo(event.target.value);
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
                <li>{todo}</li>
            )
        )}
        </ul>
        </div>
    );
}; 