import React, {Component} from 'react';
import './App.css';
import ListItem from './ListItem';
import ToDoList from './ToDoList';

class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: [
        "Buy groceries",
        "Find my sanity",
        "Lose my sanity"],
      newItem: []
    }
  }

  clearList(e) {
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e) {
    this.setState ({
      newItem: e.target.value
    })
  }

  addItem(e) {
    e.preventDefault();
    let tempArray = this.state.toDoItemArray;
    tempArray.push(this.state.newItem)
    this.setState({
      toDoItemArray: tempArray,
      newItem: ''
    })
  }

  render() {


  {/*  let theItems = this.state.toDoItemArray.map( (chore, index) => (
      <ListItem doThis={chore} key={index} />
    ))*/}

    return (
      <div>
        <h1> LIst of things I need to stop procrastinating: </h1>
        <ol>
          <ListItem doThis="Make the Liste"></ListItem>
          <ToDoList toDoItemArray={this.state.toDoItemArray}/>
        </ol>

        <form>
          <input
            className="myInput"
            type="text"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
          />
          <button className="myButt" onClick={(e) => this.addItem(e)}>Submit</button>
        </form>
        <button className="myButt" onClick={(e) => this.clearList(e)}>Clear it!</button>

        <style>{` .myButt {
          color: black;
          font-size: 3em;
          background-color: gray;
          border: 10px outset;
          margin-top: 10px;
        }`}</style>

        <style> {` .myInput {
          font-size: 3em;
          background-color: snow;
          border: 10px inset navy;
        }`}</style>

        <style> {` .myInput:hover {
          background-color: dodgerblue;
        }`}</style>

        <style> {` .myInput:focus {
          background-color: snow;
        }`}</style>

      </div>
    )
  }
}

export default MyList;
