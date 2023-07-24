import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { removeTodo, toggleDone } from "../redux/features/todo.slice";
import "./style-todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ShowTodo() {
  const todos = useSelector((state: RootState) => state.todo.atividades);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleToggleDone = (id: number) => {
    dispatch(toggleDone(id));
  };

  return (
    <div>
      <table className="table">
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className={todo.done ? "done" : ""}>
              <td>{todo.text}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleToggleDone(todo.id)}
                >
                  {todo.done ? <span className="bi bi-check2"></span> : <span className="bi bi-check"></span>}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  <span className="bi bi-trash"></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}