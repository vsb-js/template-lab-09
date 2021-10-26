import { useState } from 'react';

// Check this component is there any issue? 
export default function Clock(props) {
  const [color, setColor] = useState(props.color);

  return (
    <h1 style={{ color: color }}>
      {props.time}
    </h1>
  );
}
