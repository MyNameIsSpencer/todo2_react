import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import registerServiceWorker from './registerServiceWorker';

const toDos = [
  "Buy groceries",
  "Find my sanity",
  "Lose my sanity"
]

ReactDOM.render(
  <MyList theList={toDos}/>, 
  document.getElementById('root'));
registerServiceWorker();
