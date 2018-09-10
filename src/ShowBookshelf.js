import React from 'react'
import ShowBook from './ShowBook'


class ShowBookshelf extends React.Component {

	state = {
		test : this.props.books,
		books : this.props.books,
		currentlyReading : this.props.books
	    .filter((book) => book.shelf === 'currentlyReading'),
		wantToRead : this.props.books
	    .filter((book) => book.shelf === 'wantToRead'),
		read : this.props.books
	    .filter((book) => book.shelf === 'read')
	}

	handler(){}


	componentDidMount() {
	   let shelves = [
	   		{ id : 'currentlyReading',
	   		  shelfHeading : 'CurrentlyReading'
	   		},
			{ id : 'wantToRead',
	   		  shelfHeading : 'Want To Read'
	   		},
			{ id : 'read',
	   		  shelfHeading : 'Read'
	   		}
	   	]

	   	this.setState({ test : this.props.books})


{/*	   	for(let i = 0; i <= this.props.books.length; i++){

	   	if(this.props.books[i].shelf === 'currentlyReading'){
	   		let cR = this.state.currentlyReading.concat(this.props.books[i])

	   		this.setState({currentlyReading : cR})
	   	}

	   	if(this.props.books[i].shelf === 'wantToRead'){
	   		let wTR = this.state.currentlyReading.concat(this.props.books[i])

	   		this.setState({wantToRead : wTR})
	   	}

	   	if(this.props.books[i].shelf === 'read'){
	   		let r = this.state.currentlyReading.concat(this.props.books[i])

	   		this.setState({read : r})
	   	}
	   }

	   console.log(`State is ${this.state.currentlyReading}`)
	 */}
	}

	render() {


	  	let showBooks = this.props.books

	    console.log(this.state.test)





	  return(
	  	<div>
	  	<div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">

			  	<ol className="books-grid">
			  	  {showBooks.map( (book, index) =>
			  	  	<ShowBook
			  	  	  key={index}
			  	  	  id={book.id}
			  	  	  thumbnail={book.imageLinks.thumbnail}
			  	  	  shelf={book.shelf}
			  	  	  title={book.title}
			  	  	  author={book.author}
			  	  	  handler={this.handler}
			  	  	/>
				)}
			  	</ol>
			</div>
		</div>


		<div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">

			  	<ol className="books-grid">
			  	  {showBooks.map( (book, index) =>
			  	  	<ShowBook
			  	  	  key={index}
			  	  	  id={book.id}
			  	  	  thumbnail={book.imageLinks.thumbnail}
			  	  	  shelf={book.shelf}
			  	  	  title={book.title}
			  	  	  author={book.author}
			  	  	  handler={this.handler}
			  	  	/>
				)}
			  	</ol>
			</div>
		</div>


		<div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">

			  	<ol className="books-grid">
			  	  {showBooks.map( (book, index) =>
			  	  	<ShowBook
			  	  	  key={index}
			  	  	  id={book.id}
			  	  	  thumbnail={book.imageLinks.thumbnail}
			  	  	  shelf={book.shelf}
			  	  	  title={book.title}
			  	  	  author={book.author}
			  	  	  handler={this.handler}
			  	  	/>
				)}
			  	</ol>
			</div>
		</div>


		</div>
	  )
	}
}

export default ShowBookshelf

