import React from 'react';
import logo from '../logo.svg';

//stateless component, dumb component
const Header =({name, foo}) => {
//console.log(props);
//console.log(props.name);

//const name = props.name;
//const foo = props.foo;

//const {name,foo} = props;

    return (
          <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                My name is {name}.
                </div>
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
    );
}

export default Header;
