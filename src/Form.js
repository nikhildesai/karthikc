import React, { Component } from 'react';
import './Form.css';
import ExpandedText from './ExpandedText.js'
import Sign from './Sign.js'

class Form extends Component {

  // This will be the API Call to pass the information onto the server
  API_call(data){
  	var request = new XMLHttpRequest();
	request.open('POST', '/api/orders/new', true);
	request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	request.send(data);
  }

  handleClick(event) {
  	// When submit button is clicked...
  	var data = {}
  	this.API_call(data);
  }

  componentDidMount() {
  	// Disabling the submit buttom. It will be re-enabled when signed
  	document.getElementById("PlaceOder").disabled = true;
  }

  render() {
  	return (
  		<div className="Form">

  			<div className="content_title">
	  			Review your Order
	  		</div>

	  		<div className="content_description">
	  			Review your order and sign at the bottom
	  		</div>

	  		<div className="Details">
	  			<img src="/images/edit.png" className="EditImage" alt="edit"/>
	  				<br/>
	  				<div className="TextCluster">
		  				<div className="content_title">
			  				2017 Toyota Prius Three
			  			</div>
			  			<div className="content_description">
								Condition: New, 5 miles<br/>
								Exterior: Blizzard Pearl<br/>
								Sold by: Nalley Toyota of Roswell<br/>
								VIN: 1G1Y12D71H5102966<br/>
			  			</div>
	  				</div>
	  				<br/>
	  				<div className="TextCluster">
		  				<div className="content_title">
			  				$340/mo for 60 mo
			  			</div>

			  			<div className="content_description">
								Financing by Capital One Financial Services
			  			</div>
	  				</div>
	  				<br/>

	  				<table className="Form_Table">
	  				<tbody>
		  				<tr>
		  					<td className="left">Price</td>
		  					<td className="right">$35,285.00</td>
		  				</tr>
		  				<tr>
		  					<td className="left">Discount</td>
		  					<td className="right blue">- $2,000.00</td>
		  				</tr>
		  				<tr>
		  					<td>
		  						<div className="line"></div>
		  					</td>
		  				</tr>
		  				<tr>
		  					<td className="left bold">Subtotal</td>
		  					<td className="right bold">$38,559.00</td>
		  				</tr>
		  				<tr>
		  					<td className="left">Wheel protection</td>
		  					<td className="right">$995.00</td>
		  				</tr>
		  				<tr>
		  					<td className="left">Extended service contract</td>
		  					<td className="right">$1,995.00</td>
		  				</tr>
		  				<tr>
		  					<td className="left">
		  						<ExpandedText title="Fees (CA)" detail='Title fee: $250.00, Registration fee: $95.00, Mailing fee: $50.00, Dealership fee: $50.00, Recycling fee: $50.00'/>
		  					</td>
		  					<td className="right">$495.00</td>
		  				</tr>
		  				<tr>
		  					<td className="left">
		  						<ExpandedText title="Tax (CA)" detail='Sales tax: $2,657.22'/>
		  					</td>
		  					<td className="right">$2,657.22</td>
		  				</tr>
		  				<tr>
		  					<td className="left">
		  						<ExpandedText title="Rebates" detail='2017 Toyota Prius Summer Special: $1,000.00,  Prius Model Year End Bonus Customer Cash: $500.00'/>
		  					</td>
		  					<td className="right blue">- $1,500.00</td>
		  				</tr>
		  				<tr>
		  					<td>
		  						<div className="line"></div>
		  					</td>
		  				</tr>
		  				<tr>
		  					<td className="left bold">Total</td>
		  					<td className="right bold">$37,927.22</td>
		  				</tr>
		  				<tr>
		  					<td className="left">
		  						<ExpandedText title="Trade-in estimate" detail='Kelley Blue Book estimate: $7,633.00, Financing balance owed: $1,000.50,  Tax owed: $82.50'/>
		  					</td>
		  					<td className="right blue">- $6,550.00</td>
		  				</tr>
		  				<tr>
		  					<td className="left">Pickup at dealership</td>
		  					<td className="right">$0.00</td>
		  				</tr>
		  				<tr>
		  					<td className="left">Down payment</td>
		  					<td className="right">$5,000.00</td>
		  				</tr>
		  				<tr>
		  					<td>
		  						<div className="line"></div>
		  					</td>
		  				</tr>
		  				<tr>
		  					<td className="left bold">Due on pickup</td>
		  					<td className="right bold">$5,000.00</td>
		  				</tr>
		  			</tbody>
	  				</table>
	  				<br/>
	  				<Sign/>
	  		</div>

	  		<section className="Submit">
				<button type="button" id="PlaceOder" onClick={this.handleClick.bind(this)}>Place order</button>
			</section>

			<div className="Financing">
			Financing approved by Capital One Financial Services with 2.9% APR for 60 months at $16.67 per month per $1,000 financed.  Upgrade prices are accurate for most models, dealer will confirm prior to transacting. Estimated delivery prices are accurate for most locations, dealer will confirm prior to transacting.  Estimated tax and fees are accurate for most locations, dealer will confirm prior to transacting.
			</div>

  		</div>

  		)
  }
}




export default Form;