import React, { useState, useEffect, useRef, useCallback } from "react";

export default function TimerBox({
  dayCount,
  setDayCount,

  farmatTotalTime,
}) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimerRef = useRef(0);
  // const [goalTime, setGoalTime] = useState(() => 2 * 60 * 60 * 1000);
  // const [goalCompleted, setGoalCompleted] = useState(false);
  const [totalCodedMs, setTotalCodedMs] = useState(() => {
    return Number(localStorage.getItem("totalCodedMs")) || 0;
  });
  const [goalTime, setGoalTime] = useState(() => 2 * 60 * 60 * 1000);
  const [goalCompleted, setGoalCompleted] = useState(false);

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
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimerRef.current);
      }, 10);
    }
    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
    startTimerRef.current = Date.now() - elapsedTime;
    setGoalCompleted(false);
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
    setGoalCompleted(false);
  }

  function setGoalFromUser(elapsedTime, goalTime) {
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
    const hours = String(Math.floor(ms / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((ms / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  const difTime = elapsedTime - goalTime;
  function formatDifTime(difTime) {
    const hours = String(
      Math.floor(Math.abs(difTime / (1000 * 60 * 60)))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor(Math.abs((difTime / (1000 * 60)) % 60))
    ).padStart(2, "0");
    const seconds = String(
      Math.floor(Math.abs((difTime / 1000) % 60))
    ).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }
  // Use functional update to avoid stale closure and persist inside the updater
  const addToTotalCodedTime = useCallback((sessionMs) => {
    setTotalCodedMs((prev) => {
      const updated = prev + sessionMs;
      localStorage.setItem("totalCodedMs", String(updated));
      return updated;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("totalCodedMs", String(totalCodedMs));
  }, [totalCodedMs]);

  useEffect(() => {
    if (goalTime && elapsedTime >= goalTime && !goalCompleted) {
      alert("🎉 Congratulations! Goal complete.");
      addToTotalCodedTime(elapsedTime);

      // Day count logic
      const today = new Date().toDateString();
      const lastCompletionDate = localStorage.getItem("lastCompletionDate");

      if (lastCompletionDate !== today) {
        const newDayCount = dayCount + 1;
        setDayCount(newDayCount);
        localStorage.setItem("dayCount", newDayCount);
        localStorage.setItem("lastCompletionDate", today);
      } else {
        console.log("Day already counted today.");
      }

      setGoalCompleted(true);
      setElapsedTime(0);
      setIsRunning(false);
    }
  }, [
    elapsedTime,
    goalTime,
    dayCount,
    setDayCount,
    goalCompleted,
    addToTotalCodedTime,
  ]);

  // useEffect(() => {
  //   if (goalCompleted) {
  //     addToTotalCodedTime(elapsedTime);
  //   }
  // }, [goalCompleted, addToTotalCodedTime, elapsedTime]);

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
            className="Progress-bar"
            style={{ width: `${Math.floor(progressPercrntage)}%` }}
          ></div>
          <div className="stat-full-row">
            <span className="session-title">Session Progress</span>
            <span className="session-time">
              {formatDifTime(difTime)} /{" "}
              {goalTime ? formatGoalTime(goalTime) : "Defoult"}
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
          <div className="emoje">🏆</div>
          <div className="days">
            <h2>{dayCount}</h2>
            <p>Day Streak</p>
          </div>
        </div>
        <div className="Timer-hour">
          <h2>{farmatTotalTime(totalCodedMs)} hours</h2>
          <p>Total Coded</p>
        </div>
      </div>
    </div>
  );
}
