import React from 'react'
import * as BooksAPI from './BooksAPI'

class ShowBook extends React.Component {
	state = {
		shelf : this.props.shelf
	}

	changeShelf = (event) => {

		BooksAPI.update(event.target, event.target.value)
		.then((e) => {
			this.props.handler(e)

		})
	}



	render() {
		console.log(this.state.shelf)
	  return (

        <li key={this.props.id}>
	        <div className="book">
	          <div className="book-top">
	            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.thumbnail})` }}></div>
	            <div className="book-shelf-changer">
	              <select
	              	id={this.props.id}
	                value={this.state.shelf}
	                onChange={this.changeShelf}
	              >
	                <option value="move" disabled>Move to...</option>
	                <option value="currentlyReading">Currently Reading</option>
	                <option value="wantToRead">Want to Read</option>
	                <option value="read">Read</option>
	                <option value="none">None</option>
	              </select>
	            </div>
	          </div>
	          <div className="book-title">{this.props.title}</div>
	          <div className="book-authors">{this.props.authors}</div>
	          <div className="book-shelf">{this.state.shelf}</div>
	        </div>
	      </li>



	  	)


	}


}

export default ShowBook