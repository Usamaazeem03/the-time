import React, { useState } from "react";
export default function TaskBox() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { text: taskInput, completed: false }]);
    setTaskInput("");
  };
  const handleDeleteTask = (index) => {
    setTasks((prevTask) => prevTask.filter((_, i) => i !== index));
  };
  const toggleCompleted = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="task-box">
      <div className="task-header">
        <span className="logos">📝</span>
        <div className="task-titel">
          <h2>Tasks</h2>
          <p>Manage your tasks effectively.</p>
        </div>
      </div>
      <div className="task-progress-box">
        <label className="task-progress-label">Progres</label>
        <div
          className="Progress-bar"
          style={{ width: `${Math.floor(80)}%` }}
        ></div>
      </div>
      <div className="task-list">
        <label className="task-label">Add new task</label>
        <form className="add-task" onSubmit={handleAddTask}>
          <input
            type="text"
            className="task-input"
            placeholder="Enter task name"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button type="submit" className="add-task-button">
            ➕
          </button>
        </form>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <il className="tasks" key={index}>
              <input
                className="checkbox"
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(index)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <button onClick={() => handleDeleteTask(index)}>🗑️</button>
            </il>
          ))}
          {console.log(tasks)}
        </ul>
        <div className="Task-stats">
          <div className="disply-Completed-task">
            <div className="value">{1}</div>
            <div className="label">Completed</div>
          </div>
          <div className="disply-Remaining-task">
            <div className="value">{Math.floor(1)}%</div>
            <div className="label"> Remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
}
