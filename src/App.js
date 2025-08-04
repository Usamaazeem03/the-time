// import "./globals.css";
import "./index.css";
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
        <h1 className="title">My App</h1>
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
              <p className="timer">00:00:00</p>
              <div className="Timer-percentage">
                <p>%10 Complete</p>
              </div>
              <div className="goal">
                🎯<span>Goal:02:00:00</span>
              </div>
            </div>
          </div>
        </div>

        <din className="Timer-stats">
          <div className="stat">
            <div className="value">0</div>
            <div className="label">Minutes</div>
          </div>
          <div className="stat">
            <div className="value">0%</div>
            <div className="label"> Progress</div>
          </div>
          <div className="percentage-label"></div>
          <div className="stat-full-row">
            <span className="session-title">Session Progress</span>
            <span className="session-time">00:00:00 / 02:00:00</span>
          </div>
        </din>
        <div className="button-group">
          <button className="start-button">start</button>
          <button className="reset-button">reset</button>
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
        <div className="add-task">
          <input
            type="text"
            className="task-input"
            placeholder="Enter task name"
          />
          <button className="add-task-button">➕</button>
        </div>
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
