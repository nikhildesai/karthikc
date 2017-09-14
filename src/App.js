import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Loader from './Loader.js';
import Form from './Form.js';

class App extends Component {

  componentWillMount() {

    // To load/fetch data from server if required.

  }

  componentDidMount() {

    // After Information is verified
    setTimeout(function() {
      // We switch the loader for the place order form
      document.getElementsByClassName("loader")[0].style.display = "none"
      document.getElementsByClassName("Form")[0].style.display = "block"
    }
      , 2000);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="Content">
            <Loader/>
            <Form/>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;