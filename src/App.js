import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/Header.js';
import Loader from './components/loader/Loader.js';
import Form from './components/form/Form.js';


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

          <Header
            image='/images/car.png'
            title='Buy 2017 Honda Fit LX' 
            price='$16,965.00  -  Reserved for 29:35'
          />

          <div className="Content">

            <Loader/>

            <Form
              data='{}' // Pass form data to be displayed here
            />

          </div>

        </div>
      </Router>
    );
  }
}

export default App;
