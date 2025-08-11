import React, { useState, useEffect, useRef } from "react";
import ProgressBox from "./ProgressBox";
import LevelBox from "./LevelBox";
import MotivationBox from "./MotivationBox";

export default function GrowthBox({ dayCount, totalHours }) {
  //api
  const [data, setData] = useState({});
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    fetch("https://motivation-api-production.up.railway.app/motivation")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })

      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="growth-box">
      <ProgressBox
        dayCount={dayCount}
        totalHours={totalHours}
        progressbar={data.progress}
        milestone={data.goal?.label}
      />
      <LevelBox dayCount={dayCount} />
      <MotivationBox motivationLine={data.quote} />
    </div>
  );
}
