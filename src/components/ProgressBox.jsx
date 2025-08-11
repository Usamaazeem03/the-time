export default function ProgressBox({
  dayCount,
  totalHours,
  progressbar,
  milestone,
}) {
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
          <p>{milestone}</p>
        </div>

        <div className="progress-bar-fill-titel">
          <p>Progress to 3-day streak</p>
          <span>{`${progressbar}%`}</span>
        </div>
        <div
          className="progress-bar-fill"
          style={{ width: `${progressbar}%` }}
        ></div>
      </div>
    </div>
  );
}
