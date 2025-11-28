import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(prev => prev + 1);
  const handleNeutral = () => setNeutral(prev => prev + 1);
  const handleBad = () => setBad(prev => prev + 1);

  // Derived statistics
  const total = good + neutral + bad;

  // average = (good * 1 + neutral * 0 + bad * -1) / total
  const average = total === 0 ? 0 : (good * 1 + bad * -1) / total;

  // positive percentage = (good / total) * 100
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h1>Give feedback</h1>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral} style={{ marginLeft: "0.5rem" }}>neutral</button>
        <button onClick={handleBad} style={{ marginLeft: "0.5rem" }}>bad</button>
      </div>

      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average.toFixed(2)} />
            <StatisticLine
              text="positive"
              value={positivePercentage.toFixed(1) + " %"}
            />
          </tbody>
        </table>
      )}
    </div>
  );
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td >  {text}</td>
      <td>{value}</td>
    </tr>
  );
}

export default App;
