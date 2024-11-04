const Feedback = ({ counts, positive, totalFeedback }) => {
  return (
    <div>
      <p>Good: {counts.good}</p>
      <p>Neutral: {counts.neutral}</p>
      <p>Bad: {counts.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positive} %</p>
    </div>
  );
};

export default Feedback;
