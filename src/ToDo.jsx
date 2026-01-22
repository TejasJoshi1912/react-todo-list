    import { v4 as uuidv4 } from "uuid";
    import { useState } from "react";

    export default function ToDo() {
        const [todos, setTodos] = useState([
            { task: "sample-task", id: uuidv4(), isDone: false }
        ]);

        const [newTodo, setNewTodo] = useState("");

        const addNewTask = () => {
            if (newTodo.trim() === "") return;

            setTodos((prevTodos) => [
                ...prevTodos,
                { task: newTodo, id: uuidv4(), isDone: false }
            ]);

            setNewTodo("");
        };

        const updateTodoValue = (event) => {
            setNewTodo(event.target.value);
        };

        const deleteTodo = (id) => {
            setTodos((prevTodos) =>
                prevTodos.filter((todo) => todo.id !== id)
            );
        };

        const markAsDoneOne = (id) => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id
                        ? { ...todo, isDone: true }
                        : todo
                )
            );
        };

        const markAsDoneAll = () => {
            setTodos((prevTodos) =>
                prevTodos.map((todo) => ({
                    ...todo,
                    isDone: true
                }))
            );
        };

        return (
            <div>
                <input
                    placeholder="add a task"
                    value={newTodo}
                    onChange={updateTodoValue}
                />
                <br /><br />

                <button onClick={addNewTask}>Add Task</button>
                <br /><br />

                <button onClick={markAsDoneAll}>
                    Mark All as Done
                </button>

                <br /><br /><hr />
                <h4>Tasks Todo</h4>

                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span
                                style={{
                                    textDecoration: todo.isDone
                                        ? "line-through"
                                        : "none"
                                }}
                            >
                                {todo.task}
                            </span>
                            &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>
                                delete
                            </button>
                            <button onClick={() => markAsDoneOne(todo.id)}>
                                Mark as done
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }