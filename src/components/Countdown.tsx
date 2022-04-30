import React from "react";
export const Countdown: React.FC<{ time: number }> = ({ time }) => {
  const [counter, setCounter] = React.useState(time);

  // Second Attempts
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0) {
      timer = setInterval(() => setCounter(counter - 1), 1000);
    } else if (counter == 0) {
      setCounter(time);
    }
    return () => clearInterval(timer);
  }, [counter, time]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
};
