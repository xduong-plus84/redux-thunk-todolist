import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask_API,
  deleteTask_API,
  doneTask_API,
  getAllTaskList_API,
  rejectTask_API,
} from "../redux/action/action_TodoList";
import "./todoList_Thunk.css";

export default function TodoList_Thunk() {
  const dispatch = useDispatch();
  let inputTask = useRef(null);

  useEffect(() => {
    dispatch(getAllTaskList_API());
  }, []);

  const { taskList } = useSelector((state) => state.TodoListReducer);

  const addTask = (e) => {
    e.preventDefault();
    let taskName = inputTask.current.value;
    dispatch(addTask_API(taskName));
    inputTask.current.value = "";
  };

  const deleteTask = (taskName) => {
    dispatch(deleteTask_API(taskName));
  };
  const doneTask = (taskName) => {
    dispatch(doneTask_API(taskName));
  };
  const rejectTask = (taskName) => {
    dispatch(rejectTask_API(taskName));
  };

  let renderTaskToDo = () => {
    return taskList
      .filter((task) => !task.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => {
                  deleteTask(item.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                type="button"
                className="complete"
                onClick={() => {
                  doneTask(item.taskName);
                }}
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };

  let renderTaskToDoDone = () => {
    return taskList
      .filter((task) => task.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => {
                  deleteTask(item.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                type="button"
                className="complete"
                onClick={() => {
                  rejectTask(item.taskName);
                }}
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };

  return (
    <div className="card">
      <div className="card__header">
        <img src={require("./bg.png")} />
      </div>
      {/* <h2>hello!</h2> */}
      <form className="card__body" onSubmit={addTask}>
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p>September 9,2020</p>
          </div>
          <div className="card__add">
            <input
              ref={inputTask}
              name="taskName"
              type="text"
              placeholder="Enter an activity..."
            />
            <button id="addItem" type="submit" onClick={addTask}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <div className="card__todo">
            {/* Uncompleted tasks */}
            <ul className="todo" id="todo">
              {renderTaskToDo()}
            </ul>
            {/* Completed tasks */}
            <ul className="todo" id="completed">
              {renderTaskToDoDone()}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
