# LAB 09 - React Hooks and state

### Task 1 - State - simple counter
1. Import component Counter from file `components/Counter.js` to App.js and use it as a component in the app
2. Edit the `Counter.js` to use state hook, on click on the button the "counter should increase"
3. Edit the `Counter.js` add second button "Click to decrease" which should decrease the counter
![image](https://user-images.githubusercontent.com/8086995/138961818-9a1efd7b-b2e3-4975-9f7e-b58aca44b11b.png)
  
FYI: You might comment out the componnet in app.js once you finish it. 

### Task 2 - State - condiation rendering 
State can be used for conditional rendering where we want to display different things based on the state.
We might have multiple state variables in one component. 

1. Import component `Welcome` from file `components/Welcome.js` to App.js and use it as a componet in a the app
2. Add state to the component, on the first render we should render the form 
3. On submit we should change the output to welcome message
4. Add button to the welcome message which will reset the component (by using change of state)
  
![image](https://user-images.githubusercontent.com/8086995/138965714-4e34c9b6-d7f0-423b-a901-a590bbbcc21a.png)  
![image](https://user-images.githubusercontent.com/8086995/138966002-6b8ee11f-a65c-4cea-8f31-5a6f6b9c8142.png)

### Task 3 - State - Fix the component
1. Import component `Timer` from file `components/Timer.js` to App.js
2. The clock should change the color when you change the item from drop down
3. Explore files `components/Timer.js` and `components/Clock.js` and try to fix the issue.
4. You can use `console.log(xxx)` or `debugger` to help you with debugging the issue. 
![image](https://user-images.githubusercontent.com/8086995/138968875-6aea86de-f1ef-4150-9ad7-aa7a1fd11953.png)
