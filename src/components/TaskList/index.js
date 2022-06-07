import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromTaskList } from "../../redux/slices/globalSlice"

export default function TaskList() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.GlobalReducer.taskList);
  function onDeleteTask(e) {
    console.log(e.currentTarget.parentElement.id);
    dispatch(deleteFromTaskList(e.currentTarget.parentElement.id))
  }
  return (
    <div>
      {taskList.map((task) => {
        if (task.isDone === false) {
          return (
            <div className={"tasks"} key={task.id} id={task.id}>
              <li>
                {task.taskName} : {task.priority}
              </li>
              <button onClick={onDeleteTask}>Delete</button>
            </div>
          );
        } else {
          return;
        }
      })}
    </div>
  );
}
