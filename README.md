# LAB 09 - React Hooks and state

## useState

### Task 1 - simple counter
1. Import component Counter from file `components/Counter.js` to App.js and use it as a component in the app
2. Edit the `Counter.js` to use state hook, on click on the button the "counter should increase"
3. Edit the `Counter.js` add second button "Click to decrease" which should decrease the counter  
![image](https://user-images.githubusercontent.com/8086995/138961818-9a1efd7b-b2e3-4975-9f7e-b58aca44b11b.png)
  
FYI: You might comment out the componnet in app.js once you finish it. 

### Task 2 -  condiation rendering 
State can be used for conditional rendering where we want to display different things based on the state.
We might have multiple state variables in one component. 

1. Import component `Welcome` from file `components/Welcome.js` to App.js and use it as a componet in a the app
2. Add state to the component, on the first render we should render the form 
3. On submit we should change the output to welcome message
4. Add button to the welcome message which will reset the component (by using change of state)
  
![image](https://user-images.githubusercontent.com/8086995/138965714-4e34c9b6-d7f0-423b-a901-a590bbbcc21a.png)  
![image](https://user-images.githubusercontent.com/8086995/138966002-6b8ee11f-a65c-4cea-8f31-5a6f6b9c8142.png)

### Task 3 - Fix the component
1. Import component `Timer` from file `components/Timer.js` to App.js
2. The clock should change the color when you change the item from drop down
3. Explore files `components/Timer.js` and `components/Clock.js` and try to fix the issue.
4. You can use `console.log(xxx)` or `debugger` to help you with debugging the issue.   
![image](https://user-images.githubusercontent.com/8086995/138968875-6aea86de-f1ef-4150-9ad7-aa7a1fd11953.png)

-----
## useEffect
### Task 4 - Simple Effect
1. Import component `SimpleEffect` from `SimpleEffect.js` 
2. Implment the 3 effects metioned in the component

### Task 5 - Api Call
1. Import component `ApiCall` from `ApiCall.js`
2. The goal fo the component is to be able to select the id of the movie. And than do API call using useEffect to https://swapi.dev/api/films/2/?format=json with the ID you selected. Use axios to call the API. 
- You will have to add 2 states. One to hold the selected ID. One to hold the data. Third in case you want to do handle loading properly.
- When the option changes save it to state, have your effect react to the state change. Call the API . Save the result of the API call to state.
- Displaye the state in the html. 
- Check that when you refresh the page it works. Consider what you want to have as initial state. 
4. Try to Format the output! Using html divs, list, tables - you can utilize additional components - use styling. 

Here is example **without** the formatted output:
![image](https://user-images.githubusercontent.com/8086995/139072073-297e2ead-32eb-4e10-877a-c207db17ca91.png)

### Task 6 - 2x api calls 
1. Copy the file ApiCall.js a make a new one ApiCallSecond.js or something ...
2. Edit the Component in a way that first you make a request to https://swapi.dev/api/films/?format=json and you will create the select option dynamically on the output of this API request. (I know that it returns all all the data, but care only about the id (array index) and name of the film.)
3. Than the component should behave the same as in taks 5



