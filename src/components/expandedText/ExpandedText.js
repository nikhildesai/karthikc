import React, { Component } from 'react';
import './ExpandedText.css';

// This component handles the expand/collapse of the price detail
class ExpandedText extends Component {

	constructor (props) {
    	super(props)

    	this.state = {
    	// To keep track of expand/collapse state
      		expanded: false
  		}
  	}

  	ExpandedTextClickHandler(event) {
  		// target is the element that is being clicked. i.e, the expand arrow icon
  		var target = event.target;
  		if (this.state.expanded)
  		{	// Detail is Expanded

  			// Change to down arrow
  			target.src="/images/down.png";
  			// Hide the detail
  			target.parentNode.parentNode.getElementsByClassName('ExpandedText_Detail')[0].style.display = "none";
  			// Update the state
  			this.setState({
			  expanded: false
			})
  		}
  		else
  		{	// Detail is not Expanded

  			// Change to up arrow
  			target.src="/images/up.png";
  			// Display the detail now
  			target.parentNode.parentNode.getElementsByClassName('ExpandedText_Detail')[0].style.display = "block";
  			// Update the state
  			this.setState({
			  expanded: true
			})
  		}
  	}

  	render() {

  		return(
  		<div className="ExpandedText">
  			<div className="ExpandedText_Title">
  				{this.props.title}
  				&nbsp;&nbsp; <img onClick={this.ExpandedTextClickHandler.bind(this)} className="Arrow" alt="arrow" src="/images/down.png"/>
  			</div>
  			<div className="ExpandedText_Detail">
  				{this.props.detail}
  			</div>
  		</div>)
  	}
}


export default ExpandedText;