function Welcome () {
    // Add state, we might need 2 states to takcle this problem 

    function onFormSubmit(event){        

        // When we submit form it refreshesh the page, we want to avoid that
        // That's what we are preventing here
        event.preventDefault();
    }

    function onInputChange(event){
        console.log(event.target.value)        
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                {/* Notice that we change the color of the text using style CSS very easily */}
                <label style={{color: "blue"}}>
                     Please tell me your name?
                </label>
                <input style={{margin: 5, width: 150}} type="text" onChange={onInputChange} ></input>
                <input type="submit" value="Submit"/>
            </form>
          
        </div>
    )
}


export {
    Welcome
}