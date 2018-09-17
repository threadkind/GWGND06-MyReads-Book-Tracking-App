import React from 'react'
import * as BooksAPI from './BooksAPI'
import ShowBook from './ShowBook'



class Bookshelf extends React.Component {
	state = {
		books : []
	}

	filterShelf() {
	  BooksAPI.getAll()
		.then(books => books.filter(book => book.shelf === this.props.shelf))
		.then(results =>

			this.setState({ books : results })
		)
	}

	componentDidMount() {
		this.filterShelf()
	}

	componentWillReceiveProps() {
		this.filterShelf()
	}

	shelfHandler(e) {
		this.filterShelf()
		this.props.refreshShelves()
	}

	render() {
	  return(
	      <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books.map( (book, index) =>
                <ShowBook
                  key={book.id}
                  id={book.id}
                  thumbnail={book.imageLinks}
                  shelf={book.shelf}
                  title={book.title}
                  authors={book.authors}
                  rating={book.averageRating}
                  shelfHandler={(this.shelfHandler).bind(this)}
                />
                )}
              </ol>
            </div>
          </div>

	  )
	}
}

export default Bookshelf