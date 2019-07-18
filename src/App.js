import React, {Component} from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
    componentDidMount(){
        console.log("Component DID MOUNT");
    }

    render(){
    const name = "JaeLin";

          return (
            <div className="App">
            <Header name = {name} foo ="bar" hello = "world"/>
            </div>
          );
    }
}
/*
function App() {
  return (
    <div className="App">

    <Header/>

    </div>
  );
}*/

export default App;
