import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import SignInScreen from './SignInScreen';

class App extends React.Component  {
  componentDidMount() {
    // This is used to test firestore
    // let testData = {
    //   title: "Test Title",
    //   value: "Test value"
    // }
    // firebase.firestore().collection("testCollection").add(testData)
    // .then((docRef) => {
    //   console.log("Added document to collection");
    //   console.log({docRef});
    // })
    // .catch((error) => {
    //   console.error("Error adding document: ", error);
    // });
  }
  render() {
    return (
      <SignInScreen />
    );
  }
}

export default App;
