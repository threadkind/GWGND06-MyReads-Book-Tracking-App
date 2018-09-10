import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  state = {
    query: '',
    search: [],
    searchTerms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
  }

  updateQuery = (query) => {
    this.setState({ query })

    const match = query.toLowerCase().split(' ').map( word => {
      return word.charAt(0).toUpperCase() + word.substr(1)
    }).join(" ")

    if (this.state.searchTerms.includes(match)){

      BooksAPI.search(query)
      .then((search) => {

        let imageCheck = search.map(book => {
          if(book.imageLinks === undefined){
            book.imageLinks = {}
            book.imageLinks.thumbnail = 'images/art-unavailable'
            return book
          }
          else { return book }
        })

        let results = imageCheck.map(book => {
          if(book.authors === undefined){
            book.authors = ['Author Unknown']
            return book
          }
          else { return book }
        })

        this.setState({ search : results })
      })
    }

    else {
      this.setState({ search : [] })
    }

  }


  render() {

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => {this.updateQuery(event.target.value)}}
            />
          </div> {/* end of search books input wrapper*/}
        </div>

        {this.state.query.length > 0 &&
          <div className="result-info">
            Showing {this.state.search.length} results
          </div>
        }

        <div className="search-books-results">
          <ol className="books-grid">


          {this.state.search.map( book =>

                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>

            )}

          </ol>
        </div>



      </div>
    )

  }

}

export default Search
