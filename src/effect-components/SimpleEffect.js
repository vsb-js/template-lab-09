import React, { useState, useEffect } from 'react';

function SimpleEffect() {
  const [count, setCount] = useState(0);


  // Write a useEffect which will print this to console every time the component renders
  // console.log(`You clicked on me {count} times`)


  // Write a useEffect which will print this to console only when count changes! 
  // console.log(`You clicked on me {count} times`)

  // Write a useEffect which will print this to console only the first time the component renders
  // console.log(`The component has been intialized`)


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export {
    SimpleEffect
}