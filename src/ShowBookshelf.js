import React from 'react'
import ShowBook from './ShowBook'


class ShowBookshelf extends React.Component {

	state = {
		books : ''
	}

	render() {
	  let showBooks = this.props.books.filter((book) => book.shelf === this.props.shelf)

	  return(
	  	<div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
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
			  	  	/>
				)}
			  	</ol>
			</div>
		</div>
	  )
	}
}

export default ShowBookshelf

