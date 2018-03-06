import React, {Component} from 'react';
import ListItem from './ListItem';

class ToDoList extends Component {
  render() {
    return(
      <ul>
        {props.toDoItemArray.map((item, index) => (
          <ListItem doThis={item} key={index} />
        ))}
      </ul>
    )
  }
}

export default ToDoList;
