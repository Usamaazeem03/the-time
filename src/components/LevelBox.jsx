import React, { useState, useEffect } from "react";
export default function LevelBox({ dayCount }) {
  const [level, setLevel] = useState("");
  const [emoji, setEmoji] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (dayCount >= 1000) {
      setLevel("Master");
      setEmoji("👑");
      setTitle("Legendary Achiever");
    } else if (dayCount >= 700) {
      setLevel("Expert");
      setEmoji("🧠");
      setTitle("Knowledge Powerhouse");
    } else if (dayCount >= 500) {
      setLevel("Advanced");
      setEmoji("🐦‍🔥");
      setTitle("High-Level Performer");
    } else if (dayCount >= 365) {
      setLevel("Proficient");
      setEmoji("🦾");
      setTitle("Consistent Winner");
    } else if (dayCount >= 100) {
      setLevel("Intermediate");
      setEmoji("🔥");
      setTitle("Leveling Up");
    } else {
      setLevel("Beginner");
      setEmoji("🚀");
      setTitle("Getting Started");
    }
  }, [dayCount]);

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
          <h3>{level}</h3>
          <h2>{title}</h2>
          <span>{emoji}</span>
        </div>
      </div>
    </div>
  );
}
