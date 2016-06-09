//LIST.JS - MAIN LIST COMPONENT

import React from 'react';
import ListItem from './list-item';


export default class List extends React.Component {

    

    render() { 
    
        return (
            <div className="list">
                Title
                <i className="material-icons">add</i>
                <i className="material-icons">more vert</i>
                <ListItem todos={this.props.todos}/>
            </div>
        );
    }

    toggleTodo() {
        this.setState({ isChecked: !isChecked }); //switch to toggle isActive
    }
}