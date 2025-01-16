"use client";

import { useEffect, useState } from "react";

function Spinner() {
  // "Braille 6 Circle Worm" from https://antofthy.gitlab.io/info/ascii/Spinners.txt
  const spinnerTickChars = "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
  const [spinnerIndex, setSpinnerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinnerIndex((spinnerIndex + 1) % spinnerTickChars.length);
    }, 75);

    return () => clearInterval(interval);
  });
  return <>{spinnerTickChars[spinnerIndex]}</>;
}

export default function LCDaily() {
  const [lcStreak, setLcStreak] = useState<string>();
  useEffect(() => {
    fetch("https://lc-worker.nilsemmenegger.com/get_lc_daily_streak")
      .then((res) => res.text())
      .then((streak) => setLcStreak(streak));
  }, []);

  return (
    <p className="text-base text-onedark-magenta">
      My current LeetCode Daily Challenge streak is:{" "}
      {lcStreak === undefined ? <Spinner /> : lcStreak}.
    </p>
  );
}
