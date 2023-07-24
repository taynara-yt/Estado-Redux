import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/features/todo.slice";

export default function FormTodo() {
  const dispatch = useDispatch<AppDispatch>();

  const [inputTodo, setInputTodo] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputTodo.trim() !== "") {
      dispatch(addTodo(inputTodo));
      setInputTodo("");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3 className="mt-3">React To-do App</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              value={inputTodo}
              onChange={handleInput}
              placeholder="Enter Something"
            />
            <button type="submit" className="btn btn-success ml-2">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

