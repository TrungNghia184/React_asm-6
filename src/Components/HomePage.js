import React from 'react';
import ReactDOM from "react-dom";
import TaskList from "./TaskList";
export function HomePage() {
    function showCreateTask() {
      return ReactDOM.render(
        <TaskList />,
        document.getElementById("container-left")
      );
    }
    return (
      <div>
        <h1>Todo List</h1>
        <div id="button-container">
          <button
            className="nav-button"
            onClick={showCreateTask}
            id="btn-new-task"
          >
            Add
          </button>
        </div>
        <div id="container">
          <div id="container-left"></div>
          <div id="container-overlay">
            <h2>Task List</h2>
            <div id="container-right"></div>
          </div>
        </div>
      </div>
    );
  }