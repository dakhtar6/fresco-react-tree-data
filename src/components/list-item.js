//LIST-ITEM.JS - LIST ITEM COMPONENT

import React from 'react'; 

export default class ListItem extends React.Component {
   
    renderTodoItems() { 
        console.log("PROPS", this.props.todos);

        return this.props.todos.map(function(todo, index){
            return <li key={ index }>{todo.day}<i className="material-icons" >alarm off</i></li> //onClick={this.toggleTodoItemDropdown.bind(this)} --> To be inserted into the <i> element
        })

    }

    render() { 
        return (
           <ul>{this.renderTodoItems()}</ul>
        );
    }

    /** @function toggleTodoItemDropdown*/
    //Half completed function to enable a drop down functionality 

    toggleTodoItemDropdown () {
        // this.setState({ isDropClicked: !isDropClicked });
        // console.log(isDropClicked); 
        // if (isDropClicked) {
        //     return (
        //         <ul>
                    
        //             this.props.todos.map(function(todo, index) {
        //                 return <li key={ index }>{today.day.task}</li>
        //             }
                    
        //         </ul>   
        //     );
        // } else {
        //     return <div></div>
        // }
    }
}