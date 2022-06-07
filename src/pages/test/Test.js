import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalActions } from "../../redux/slices/rootAction";
import { getTaskList } from "../../redux/slices/globalSlice";
export default function AddNewTask(props) {
  const count = useSelector((state) => state.GlobalReducer.count);
  const dispatch = useDispatch();
  const [input, getInput] = useState("");
  const [priority, getPriority] = useState("medium");
  const handleInputChange = (e) => {
    getInput(e.target.value);
    console.log(input);
  };
  const generateRandomId = () => {
    return Date.now()
  }
  const onAddTask = async(e) => {
    e.preventDefault()
    let thisTaskID = generateRandomId()
    dispatch(getTaskList({ 'taskName': input, 'priority': priority, isDone: false, id: thisTaskID }));;
  };
  const handleChangePriority = (e) => {
    console.log(priority);
    getPriority(e.target.value);
  };
  
  return (
    <div>
      {/* <button onClick={onAddTask}>Add task</button> */}
      <div>
        <form onSubmit={onAddTask}>
          <label for="task-input">Task name</label>
          <input
            type="text"
            name="addTask"
            id="task-input"
            onChange={handleInputChange}
          />
          <input type="radio" name="task-priority" value="high" onChange={handleChangePriority} /> High
          <input type="radio" name="task-priority" value="medium" onChange={handleChangePriority} /> Medium
          <input type="radio" name="task-priority" value="low" onChange={handleChangePriority} /> Low
          <button type="submit">Add task</button>
        </form>
      </div>
    </div>
  );
}
