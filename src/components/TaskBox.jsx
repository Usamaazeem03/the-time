export default function TaskBox() {
  return (
    <div className="task-box">
      <div className="task-header">
        <span className="logos">📝</span>
        <div className="task-titel">
          <h2>Tasks</h2>
          <p>Manage your tasks effectively.</p>
        </div>
      </div>
      <div className="task-list">
        <label className="task-label">Add new task</label>
        <form className="add-task">
          <input
            type="text"
            className="task-input"
            placeholder="Enter task name"
          />
          <button className="add-task-button">➕</button>
        </form>
        <ul className="tack-list"></ul>
      </div>
    </div>
  );
}
