import React from 'react'
import * as BooksAPI from './BooksAPI'


class ShowBook extends React.Component {
	state = {
		shelf : this.props.shelf || 'none',
		rating : '',
		authors : [],
		thumbnail : ''
	}

	changeShelf = (event) => {

		BooksAPI.update(event.target, event.target.value)
		.then((e) => {
			this.props.shelfHandler()
		}).then(this.setState({ shelf : event.target.value })
)
	}

	setStarRating =() => {
		let rating;
		let star = '★'

		function setStars(bookRating){
			rating = star

			for(let i = 1; i < bookRating; i++){
				rating += star
			}
		}

		if(this.props.rating === undefined){
			rating = '<span class="nER">Not Enough Ratings</span>'
		}
		else if (Number.isInteger(this.props.rating)) {
			setStars(this.props.rating)
		}
		else {
			let tempRating = Math.floor(this.props.rating)
			setStars(tempRating)
			rating += '<span class="half">½</span>'
		}
		this.setState({ rating })
	}

	componentDidMount() {
	  this.setStarRating()

	  if (this.props.authors === undefined){
	  	this.setState({ authors : ['Author Unknown'] })
	  }
	  else { this.setState({ authors : this.props.authors}) }

	  if (this.props.thumbnail === undefined){
	  	this.setState({ thumbnail : '/images/art-unavailable.jpeg' })
	  }
	  else { this.setState({ thumbnail : this.props.thumbnail }) }


	}
	render() {
	  return (

        <li key={this.props.id}>
	        <div className="book" id={`book-${this.props.id}`}>
	          <div className="book-top">
	            <div className="book-cover"
	            	 id={`cover-${this.props.id}`}
	                 style={{ width: 128, height: 193, backgroundImage: `url(${this.state.thumbnail})`}}
	                 >
	            </div>
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
	          <div className="book-rating"
	          	   dangerouslySetInnerHTML={{__html: this.state.rating}}></div>
	          <div className="book-title">{this.props.title}</div>
	          <div className="book-authors">
	          	<ol className="authors-list">
	          		{this.state.authors.map((author, index) =>
	          			<li key={index}>{author || 'Author Unknown'}</li>
	          		)}
	          	</ol>
	          </div>
	        </div>
	      </li>

	  	)
	}
}

export default ShowBook