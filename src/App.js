import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase';

class App extends React.Component  {
  componentDidMount() {
    let testData = {
      title: "Test Title",
      value: "Test value"
    }
    firebase.firestore().collection("testCollection").add(testData)
    .then((docRef) => {
      console.log("Added document to collection");
      console.log({docRef});
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
