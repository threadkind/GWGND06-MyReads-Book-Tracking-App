import React from 'react'

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
			  <li className="menu-li menu-closed"><a href="#" className="menu-a">Item 1</a></li>
			  <li className="menu-li menu-closed"><a href="#" className="menu-a">Item 2</a></li>
			  <li className="menu-li menu-closed"><a href="#" className="menu-a">Item 3</a></li>
			</ul>
		  </div>
		)
	}
}

export default Menu