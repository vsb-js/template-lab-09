import React, { useState, useEffect } from 'react';
import axios from 'axios';


/**
 * 
 * Use useEffect to call axios get data from API:
 * https://swapi.dev/api/films/2/?format=json
 * Change the ID of the film to the one saved in state. 
 * 
 * When you change the ID using the option selector, you should fetch the new film data. 
 * You can use JSON.stringify(response.data) to display the data direclty. But format it better!
 * 
 * 
 */

function ApiCall() {
 // Add states

 // Add useEffect hooked to the state 

  return (
    <div>      
      <select value={"1"} onChange={(e) => {
          // change the value ^^ to the state one
          // save the state
        }}>
          <option value="1">A New Hope</option>
          <option value="2">Empire Strikes Back</option>
          <option value="3">Return of Jedi</option>
        </select>
        <div>            
        {/* {data} */}
        </div>        
    </div>
  );
}

export {
    ApiCall
}