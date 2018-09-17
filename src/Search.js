import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBook from './ShowBook'

class Search extends React.Component {
  state = {
    query: '',
    search: [],
    searchTerms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'],
  }

  shelfHandler(e) {

    let bookDetails;

    BooksAPI.getAll().then( book => {
      bookDetails = (book.filter(book =>
        {return book.id === this.id}
        )
    )

    const bookInDom = document.querySelector(`#${this.id}`)
      if(bookDetails[0]){
        bookInDom.value = bookDetails[0].shelf
      }
      else {
        bookInDom.value = 'none'
      }
    })

    let message = document.querySelector('.message-container')

      message.style.display = 'flex'
      setTimeout(function(){
        message.style.display = 'none'
      }, 1000)

  }

  updateQuery = (query) => {
    this.setState({ query })




    BooksAPI.search(query)
    .then( search => {

      if(search.length > 0 ){
        let thumbSearch = search.map(book => {
          if (book.imageLinks === undefined){
            book.imageLinks = {thumbnail : '/images/art-unavailable.jpeg'}
            return book
          }
          else { return book }
        })

        this.setState({ search : thumbSearch })
      }
      else {
        this.setState({ search : [] })
      }
    })
    .catch(err => console.log(err))



{/*        let authorCheck = search.map( book => {
          if(book.authors === undefined ){
            book.authors = ['Author Unknown']
            return book
          }
          else { return book }
        })

        let imageCheck = authorCheck.map( book => {
          if(book.imageLinks === undefined){
              book.imageLinks = {}
              book.imageLinks.thumbnail = 'images/art-unavailable'
              return book
            }
          else { return book }
          })

*/}



    {/*const match = query.toLowerCase().split(' ').map( word => {
      return word.charAt(0).toUpperCase() + word.substr(1)
    }).join(" ")*/}
    {/*
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

        let authorCheck = imageCheck.map(book => {
          if(book.authors === undefined){
            book.authors = ['Author Unknown']
            return book
          }
          else { return book }
        })

        const booksOnShelf = this.props.currentlyReading.concat(this.props.wantToRead).concat(this.props.read)
        let shelfCheck = []

        for (let i = 0; i < authorCheck.length; i++){
          for (let j = 0; j < booksOnShelf.length; j++){
            if(authorCheck[i] !== undefined && booksOnShelf[j] !== undefined && authorCheck[i].id === booksOnShelf[j].id ){
              shelfCheck.push(booksOnShelf[j])

              authorCheck.splice(authorCheck.indexOf(authorCheck[i]), 1)
            }
          }
        }

        this.setState({ search : shelfCheck.concat(authorCheck) })
      })
    }
    else {
      this.setState({ search : [] })
    }*/}
  }




  render() {
    console.log(this.state)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"
                className="close-search"
                onClick={this.props.refreshBookshelves}
          >Close</Link>

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

          {this.state.query.length > 0 && this.state.search.map( (book, index) =>
            <ShowBook
              key={book.id}
              id={book.id}
              thumbnail={ book.imageLinks.thumbnail }
              shelf={book.shelf}
              title={book.title}
              authors={book.authors}
              rating={book.averageRating}
              shelfHandler={(this.shelfHandler)}
              descriptionHandler={( this.descriptionHandler)}
            />
          )}

          </ol>
        </div>

      </div>
    )
  }
}

export default Search
