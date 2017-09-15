import React, { Component } from 'react';
import './Sign.css';

class Sign extends Component {

  updateSignedStatus(event) {
  	if(event.target.value === "")
  	{ 	// Signature field is empty.
      document.getElementById('Instruction').className = "Instruction";
      document.getElementById("PlaceOder").disabled = true;
  	}

  	else
  	{	// Move the placeholder to make way for the signature. Status is Signed
  		document.getElementById('Instruction').className = "Instruction_small";
  		// Enable Submit. Maybe after checking if Signature matches the Full Name
  		// event.target.value == Full Name
  		document.getElementById("PlaceOder").disabled = false;

  	} 

  }

  render() {
  	return (
  		<div>
	  		<input id="Sign" className="Sign" onChange={this.updateSignedStatus.bind(this)}>
	  		</input>
	  		<div id="Instruction" className="Instruction">
	  			Type full name to sign
	  		</div>
	  		<img alt="Sign Here X" src="/images/signhere.png" id="SignHere" className="SignHere"/>
  		</div>
  		)
  }
}


export default Sign;