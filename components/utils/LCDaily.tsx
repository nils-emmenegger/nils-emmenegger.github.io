"use client";

import { useEffect, useState } from "react";

export default function LCDaily() {
  const [lcStreak, setLcStreak] = useState<string>("");
  useEffect(() => {
    fetch("https://lc-worker.nilsemmenegger.com/get_lc_daily_streak")
      .then((res) => res.text())
      .then((streak) => setLcStreak(streak));
  }, []);

  return (
    <p className="text-base text-onedark-magenta">
      My current LeetCode Daily Challenge streak is: {lcStreak}.
    </p>
  );
}
