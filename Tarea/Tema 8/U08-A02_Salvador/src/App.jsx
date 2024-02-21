import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [inputSeconds, setInputSeconds] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
      setIsFinished(true);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const handleStart = () => {
    setIsRunning(true);
    setSeconds(parseInt(inputSeconds));
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinished(false);
    setInputSeconds('');
    setSeconds(0);
  };

  const renderStartScreen = () => (
    <div>
      <input
        type="number"
        placeholder="Enter seconds"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(e.target.value)}
      />
      <button onClick={handleStart}>Start</button>
    </div>
  );

  const renderRunningScreen = () => (
    <div>
      <p>Countdown: {seconds} seconds</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );

  const renderFinishedScreen = () => (
    <div>
      <p>Se acabo el tiempo</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );

  return (
    <div>
      {!isRunning && !isFinished && renderStartScreen()}
      {isRunning && !isFinished && renderRunningScreen()}
      {!isRunning && isFinished && renderFinishedScreen()}
    </div>
  );
};

export default Timer;
