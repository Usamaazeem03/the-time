import React, { useState } from "react";
import TimerBox from "./TimerBox";
import GrowthBox from "./GrowthBox";
import TaskBox from "./TaskBox";

export default function TimerBoxWithTaskBox() {
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
