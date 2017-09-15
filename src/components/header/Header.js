import React, { Component } from 'react';
import { BrowserRouter as Route, Link, NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
  	return (
  		<div className="Header">
  			<div className="CarDetails">

  				<a className="CloseButton">
            <img className="CloseImage" alt="close" src="/images/close.svg"/>
          </a>

          <img className="CarImage" alt={this.props.title} src={this.props.image}/>

		      <div className="HeaderText">
		        <div className="Line1">
		          {this.props.title}
		        </div>
		        <div className="Line2">
		          {this.props.price}
		        </div>
		      </div>

	        <a className="InfoButton">
	          <img className="InfoImage" alt="info" src="/images/info.svg"/>
	        </a>

  			</div>

  			<div className="Navbar">
  				<ul className="NavbarList">

  					<li className="NavbarListItem">
  						<NavLink to="/upgrades" className="NavbarListItemLink">
                    		Upgrades
                  		</NavLink>
  					</li>

  					<li className="NavbarListItem">
  						<NavLink to="/trade" className="NavbarListItemLink">
                    		Trade-in
                  		</NavLink>
  					</li>

  					<li className="NavbarListItem">
  						<NavLink to="/payment" className="NavbarListItemLink">
                    		Payment
                  		</NavLink>
  					</li>

  					<li className="NavbarListItem">
  						<NavLink to="/review" className="NavbarListItemLink_active">
                    		Review
                  		</NavLink>
  					</li>

  				</ul>
          	</div>


  		</div>
  		);
  }

}


export default Header;
