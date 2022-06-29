## REACT TODO APP:

It's time to practice what we learned so far!

In this assignment, you'll create a new Todo React Application. 

Remember to create-react-app already initiated git for you, all you need to do is to create a new Github repo and connect it.

Take your time to practice and take notes.

Use the Products App for reference, and don't forget to work together! Happy Hacking!

 

## INSTRUCTIONS:

Part One

    Create a new React App by running npx create-react-app todo-react-app 
    Inside the src folder create a new folder called data and a new file called todosData.js Now copy the todos data from the bottom of this file and paste it into the todosData.js file.
    Now let's create a new folder called components inside of the src folder. The components folder is where we're going to create all of our components files.
    Create a Navbar component just like we did in the Products App.
    Import the todosData into the App component.
    Create a TodosList Component and pass the todosData from the App component to the TodosList using the props system.
    In the TodosList Component use the map() method to map over the array of todos and render the text and createdAt to the browser.
    Now create a new component called TodoItem and have the TodoItem Component be the one showing the data of each todo. Update the map function to render a TodoItem Component instead. (Look back a the ProductItem Component in the Products App)

Part Two

    Change your App Component to a Class Component
    Create your state object and set the todosData in the state
    Now pass the data from state to the TodosList Component
    In the state object create a new property called text and createdAt and set them to an empty string, also create an isCompleted property and set it to false. 
    Create a form with an input for the todo text and the createdAt (the isCompleted will be false by default)
    Now connect your inputs to the state
    Create your handleChange method and your handleSubmit method

Part Three

Practice styling your React App!

Dont'forget to submit your GitHub Link!
