import { useState, useEffect } from 'react';
import Clock from './Clock.js';

// This function is correct no need to fix anything here
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// Explore how this component works, is there any issue? Check file Clock.js too.
export default function Timer() {
  // The timer variable is OK no need to debug that ... 
  const time = useTime();
  const [color, setColor] = useState('lightcoral');

  return (
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={(e) => {
            setColor(e.target.value)
        }}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}
