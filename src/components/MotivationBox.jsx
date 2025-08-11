export default function MotivationBox({ motivationLine }) {
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
        <p>{motivationLine}</p>
      </div>

      <div className="milestone">
        <span className="next-milestone">3 Days</span>
        <span className="next-milestone">1 Week</span>
        <span className="next-milestone">2 Weeks</span>
      </div>
    </div>
  );
}
