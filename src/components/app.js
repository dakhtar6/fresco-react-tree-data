//APP.JS - OUR BASE FROM WHERE WE ORGANIZE OUR TODO LOGIC AND COLLATE OUR FAMILY OF COMPONENTS

import React from 'react';
import List from './list';


//MOCKED UP SAMPLE DATA 
var todosData = [
{
    day: "Monday",
    task: {
    	task1: 'Pay Parking Tickets',
    },
    isChecked: false,
    isDropClicked: false
},
{
    day: "Tuesday",
      task: {
    	task1: 'Study JavaScript',
    	task2: 'Call post office',
    	task3: 'Pickup check'
    },
    isChecked: false,
    isDropClicked: false
},
{
    day: "Wednesday",
      task: {
    	task1: 'Pay Overdue Library Fee',
    	task2: 'Attend Steves Dinner Party',
    	task3: 'Find Nemo'
    },
    isChecked: false,
    isDropClicked: false
},
{
    day: "Thursday",
      task: {
    	task1: 'Study React',
    	task2: 'Buy weights',
    	task3: 'Drop brother off to college'
    },
    isChecked: false,
    isDropClicked: false
},
{
    day: "Friday",
      task: {
    	task1: 'Finish Report for Boss',
    	task2: 'Call Netflix for Refund'
    },
    isChecked: false,
    isDropClicked: false
},
{
    day: "Saturday",
      task: {
    	task1: 'Workout',
    	task2: 'Laundry',
    	task3: 'Do Groceries',
    	task4: 'Go on date night with Cindy'
    },
    isChecked: false,
    isDropClicked: false
},
{
    day: "Sunday",
      task: {
    	task1: 'Watch James Bond Movie Marathon',
    	task2: 'Email Aunt Jane'
    },
    isChecked: false,
    isDropClicked: false
}
];

//Convert Mocked Data into HTML5 Web Storage

localStorage.setItem("todosData", JSON.stringify(todosData));
var retrievedTodosData = localStorage.getItem("todosData");
var parsedTodosData = JSON.parse(retrievedTodosData);


export default class App extends React.Component { //Our main app class, 
    constructor(props) { //Constructor is the first function our component calls
        super(props); //super accesses our parent, props represents input data

        this.state = { //set the state of our data (todos) so that changes to it will be noticed and updated automatically, however this is passed into our components as props (input) data
            todos: parsedTodosData
        };
    }

    render() {
        return (
            <div>
                <List todos={this.state.todos}/> 
            </div>
        );
    }

}