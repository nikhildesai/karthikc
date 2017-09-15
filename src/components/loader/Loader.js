import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
  	return (
  		<div className="loader">
  			<div className="loader_animation"></div>

  			<div className="loader_text">
	  			<div className="content_title">
	  				Verifying info
	  			</div>

	  			<div className="content_description">
	  				This may take up to 2 minutes,<br/>
					do not close or refresh
	  			</div>
	  		</div>

  		</div>

  		

  		);
  }
}



export default Loader;