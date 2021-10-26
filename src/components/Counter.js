function Counter () {
    // Change the component to use state
    const internalCounter = 0;

    return (
        <div>
            {/* Notice that we can add padding or other CSS styling to components */}
            <div style={{padding: 5}}>Counter is: {internalCounter}</div>
            <button onClick={()=>{
                console.log("I am clicked");
            }}>
                Click to increase
            </button>
     
        </div>
    )
}

export {
    Counter
}