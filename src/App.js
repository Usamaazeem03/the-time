import "./index.css";
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <TimerBoxWithTaskBox />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo">📅</div>
        <h1 className="title">The Time</h1>
        <p className="subtitle">Your daily companion for productivity</p>
        <div>
          <span>
            Ready to track<div>🚀</div>
          </span>
        </div>
      </div>
    </header>
  );
}

function TimerBox() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimerRef = useRef(0);
  const [goalTime, setGoalTime] = useState(() => 2 * 60 * 60 * 1000);

  const progressPercrntage =
    goalTime > 0 ? Math.min((elapsedTime / goalTime) * 100, 100) : 0;

  function getProgressMessage(progressPercrntage) {
    if (progressPercrntage >= 100) {
      return "Completed";
    } else if (progressPercrntage >= 50) {
      return "Halfway";
    } else if (progressPercrntage >= 10) {
      return "Started";
    } else {
      return "Beginning...";
    }
  }
  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimerRef.current);
      }, 10);
    }
    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
    startTimerRef.current = Date.now() - elapsedTime;
    console.log(startTimerRef.current);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function toggleTimer() {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  function resetTimer() {
    setElapsedTime(0);
    setIsRunning(false);
    setGoalTime(2 * 60 * 60 * 1000);
  }

  function setGoalFromUser() {
    const input = prompt("Enter your goal time in minutes:");

    if (input !== null && !isNaN(input)) {
      const minutes = parseInt(input);
      const newGoalTime = minutes * 60 * 1000;
      setGoalTime(newGoalTime);
      alert(`Goal set to ${minutes} minutes (${formatGoalTime(newGoalTime)})`);
    }
  }
  function formatGoalTime(ms) {
    if (!ms || isNaN(ms)) return "00:00:00";
    const hours = String(Math.floor(ms / (1000 * 60 * 60))).padStart(2, 0);
    const minutes = String(Math.floor((ms / (1000 * 60)) % 60)).padStart(2, 0);
    const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, 0);
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);

    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    if (goalTime && elapsedTime >= goalTime) {
      alert("🎉 Congratulations! Goal complete.");
      setElapsedTime(0);
      setIsRunning(false);
    }
  }, [elapsedTime, goalTime]);

  return (
    <div className="Timer-box">
      <div className="Timer-header">
        <div className="logo">🕰️</div>
        <div className="Timer-title">
          <h2>Coding Timer</h2>
          <p>Track your focused coding sessions</p>
        </div>
      </div>
      <div className="Timer-bar">
        <div className="Timer-clock">
          <div className="Timer-clock-inner">
            <div>
              <p className="timer">{formatTime()}</p>
              <div className="Timer-percentage">
                <p>
                  %{Math.floor(progressPercrntage)}{" "}
                  {getProgressMessage(progressPercrntage)}
                </p>
              </div>
              <div onClick={setGoalFromUser} className="goal">
                🎯
                <span>
                  Goal: {goalTime ? formatGoalTime(goalTime) : "Defoult"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="Timer-stats">
          <div className="disply-minutes-box">
            <div className="value">{formatTime().split(":")[1]}</div>
            <div className="label">Minutes</div>
          </div>
          <div className="disply-Progress-box">
            <div className="value">{Math.floor(progressPercrntage)}%</div>
            <div className="label"> Progress</div>
          </div>
          <div
            className="percentage-label"
            style={{ width: `${Math.floor(progressPercrntage)}%` }}
          ></div>
          <div className="stat-full-row">
            <span className="session-title">Session Progress</span>
            <span className="session-time">
              {formatTime()} / {goalTime ? formatGoalTime(goalTime) : "Defoult"}
            </span>
          </div>
        </div>
        <div className="button-group">
          <button onClick={toggleTimer} className="start-button">
            {isRunning ? "⏸ Stop" : "▶ Start Coding"}
          </button>
          <button onClick={resetTimer} className="reset-button">
            {`Reset`}
          </button>
        </div>
      </div>
      <div className="full-Timer-stats">
        <div className="Timer-days">
          <div className="emoje">😃</div>
          <div className="days">
            <h2>0</h2>
            <p>Day Streak</p>
          </div>
        </div>
        <div className="Timer-hour">
          <h2>0 hours</h2>
          <p>Total Coded</p>
        </div>
      </div>
    </div>
  );
}

function GrowthBox() {
  return (
    <div className="growth-box">
      <ProgressBox />
      <LevelBox />
      <MotivationBox />
    </div>
  );
}
function TimerBoxWithTaskBox() {
  return (
    <div className="timer-task-box">
      <div className="timer-box">
        <TimerBox />
        <GrowthBox />
      </div>
      <div className="task-box">
        <TaskBox />
      </div>
    </div>
  );
}
function ProgressBox() {
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
          <div className="curred-progress-days">0</div>
          <p>days</p>
        </div>

        <div className="total-progress">
          <h3> ⌛ Total Hours</h3>
          <div className="progress-days">0h</div>
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
