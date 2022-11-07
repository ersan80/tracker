import React, { useState, useEffect } from "react";
import Task from "./Task";
const { v4: uuid } = require("uuid");

const AddTask = () => {
  const [form, setForm] = useState({
    isDone: false,
    id: "",
    task: "",
    dateInput: "",
  });
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
   
    
    setList([...list, form].reverse())
    setForm({
      isDone: false,
      id: "",
      task: "",
      dateInput: "",
    });

     e.preventDefault();
   
  };




  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="taskInput" className="form-label">
              Task
            </label>
            <input
              type="text"
              className="form-control"
              id="taskInput"
              name="task"
              required
              value={form.task}
              onChange={(e) =>
                setForm({ ...form, id: uuid(), task: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="taskDate" className="form-label">
              Day & Time
            </label>
            <input
              type="datetime-local"
              className="form-control "
              id="taskDate"
              name="dateInput"
              required
              value={form.dateInput}
              onChange={(e) => setForm({ ...form, dateInput: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary ps-5 pe-5">
            Save Task
          </button>
        </form>
      </div>
      <Task  list={list} setList={setList}></Task>
    </>
  );
};

export default AddTask;
