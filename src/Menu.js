import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {

	menuClick = () => {

 		 document.querySelector('.menu-icon-book-open').classList.toggle('book-closed');

  		let menuItems = document.querySelectorAll('.menu-li')

		  for(let i = 0; i < menuItems.length; i++){
		    menuItems[i].classList.toggle('menu-closed');
		  }

		  document.querySelector('.menu-ul').classList.toggle('menu-closed')



	}

	render(){

		return(
		  <div>
			<div id="menu-button">
			  <div className="menu-icon-back"> ------<br /> ------<br /> ------ </div>
			  <div className="menu-icon-title">MENU</div>
			  <div className="menu-icon-book-open-container">
			    <div className="menu-icon-book-open book-closed">
			      <div className="menu-icon-front-cover-front">. -----<br />. -----.<br />. -----</div>
			      <div className="menu-icon-front-cover-back">. -----<br />. -----<br />. ----- </div>
			    </div>
			  </div>
			</div>
			<div id="menu-button-overlay" onClick={this.menuClick}></div>
			<ul className="menu-ul menu-closed">
			  <li className="menu-li menu-closed">
			    <Link to="/"
			          className="menu-a"
			          onClick={this.menuClick}
			        >All Bookshelves
			    </Link>
			  </li>
			  <li className="menu-li menu-closed">
			    <Link to="/currently-reading"
			          className="menu-a"
			          onClick={this.menuClick}
			        >Currently Reading
			    </Link>
			  </li>
			  <li className="menu-li menu-closed">
			    <Link to="/want-to-read"
			          className="menu-a"
			          onClick={this.menuClick}
			        >Want To Read
			    </Link>
			  </li>
			  <li className="menu-li menu-closed">
			    <Link to="/read"
			          className="menu-a"
			          onClick={this.menuClick}
			      >Read
			    </Link>
			  </li>
			</ul>
		  </div>
		)
	}
}

export default Menu