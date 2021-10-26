import { useState } from "react";


function Counter () {
    // Change the component to use state
    const [internalCounter, setInternalCounter] = useState(0);

    return (
        <div>
            <div>Counter is: {internalCounter}</div>
            <button onClick={()=>{
                setInternalCounter(internalCounter + 1 );
            }}>
                Click to increase
            </button>
        </div>
    )
}


export {
    Counter
}