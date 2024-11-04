import { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";

const App = () => {
  const [counts, setCounts] = useState(() => {
    const storedCounts = localStorage.getItem("feedbackCounts");
    if (storedCounts) {
      return JSON.parse(storedCounts);
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(counts));
  }, [counts]);

  const updateFeedback = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const handleClickReset = () => {
    setCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.removeItem("feedbackCounts");
  };

  const totalFeedback = counts.good + counts.neutral + counts.bad;
  let positive = 0;
  if (totalFeedback !== 0)
    positive = Math.round((counts.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleClickReset={handleClickReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          counts={counts}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
