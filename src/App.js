import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header";
import TimerBox from "./components/TimerBox";
export default function App() {
  return (
    <div className="App">
      <Header />
      <TimerBoxWithTaskBox />
      <Footer />
    </div>
  );
}

function TimerBoxWithTaskBox() {
  const [dayCount, setDayCount] = useState(() => {
    return parseInt(localStorage.getItem("dayCount")) || 0;
  });
  const [totalCodedMs, setTotalCodedMs] = useState(() => {
    return parseInt(localStorage.getItem("totalCodedMs")) || 0;
  });

  function farmatTotalTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return `${hours}`;
  }

  return (
    <div className="timer-task-box">
      <div className="timer-box">
        <TimerBox
          totalCodedMs={totalCodedMs}
          setTotalCodedMs={setTotalCodedMs}
          dayCount={dayCount}
          setDayCount={setDayCount}
          farmatTotalTime={farmatTotalTime}
        />

        <GrowthBox
          dayCount={dayCount}
          totalHours={farmatTotalTime(totalCodedMs)}
        />
      </div>
      <div className="task-box">
        <TaskBox />
      </div>
    </div>
  );
}

function GrowthBox({ dayCount, totalHours }) {
  return (
    <div className="growth-box">
      <ProgressBox dayCount={dayCount} totalHours={totalHours} />
      <LevelBox />
      <MotivationBox />
    </div>
  );
}

function ProgressBox({ dayCount, totalHours }) {
  return (
    <div className="progress-box">
      <div className="progress-header">
        <span className="logos">📈</span>
        <div className="progress-titel">
          <h2>Progress</h2>
          <p>Track your daily progress here.</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="current-progress">
          <h3>🔥 Current Streak</h3>
          <div className="curred-progress-days">{dayCount}</div>
          <p>days</p>
        </div>

        <div className="total-progress">
          <h3> ⌛ Total Hours</h3>
          <div className="progress-days"> {totalHours}h</div>
        </div>
        <div className="next-progress">
          <h3>🎯 Next Milestone</h3>
          <p>3 days</p>
        </div>

        <div className="progress-bar-fill-titel">
          <p>Progress to 3-day streak</p>
          <span>80%</span>
        </div>
        <div className="progress-bar-fill" style={{ width: "80%" }}></div>
      </div>
    </div>
  );
}
function LevelBox() {
  return (
    <div className="level-box">
      <div className="level-header">
        <span className="logos">🏆</span>
        <div className="level-titel">
          <h2>Level</h2>
          <p>Track your progress and level up!</p>
        </div>
      </div>
      <div className="current-level">
        <div className="level-info">
          <h3>Beginner</h3>
          <h2>Getting Started</h2>
          <span>🚀</span>
        </div>
      </div>
    </div>
  );
}

function MotivationBox() {
  return (
    <div className="motivation-box">
      <div className="motivation-header">
        <span className="logos">💡</span>
        <div className="motivation-titel">
          <h2>Motivation</h2>
          <p>Stay motivated with daily quotes.</p>
        </div>
      </div>

      <div className="motivation-quote">
        <p>The only way to do great work is to love what you do. Steve Jobs</p>
      </div>

      <div className="milestone">
        <span className="next-milestone">3 Days</span>
        <span className="next-milestone">1 Week</span>
        <span className="next-milestone">2 Weeks</span>
      </div>
    </div>
  );
}
function TaskBox() {
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
function Footer() {
  return (
    <footer>
      <div className="footer">
        <span className="footer-emoje" role="img" aria-label="footer emoji">
          🌟
        </span>
        <p>
          Complete 2-hour sessions to build you your streak and unlock
          achievements
        </p>
        <span className="footer-emoje" role="img" aria-label="footer emoji">
          🧠
        </span>
      </div>
    </footer>
  );
}
