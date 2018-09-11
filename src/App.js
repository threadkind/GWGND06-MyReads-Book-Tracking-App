import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBook from './ShowBook'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {
  state = {
    currentlyReading : [],
    wantToRead : [],
    read : []
  }

  filterBooks() {
    BooksAPI.getAll()
      .then((books) =>   {
      let currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
      let wantToRead = books.filter(book => book.shelf === 'wantToRead')
      let read = books.filter(book => book.shelf === 'read')

      this.setState({
        currentlyReading : currentlyReading,
        wantToRead : wantToRead,
        read: read
      })
      console.log(this.state)
      }
    )

  }

  handler() {
    this.filterBooks()
    console.log('app handled')
  }


  componentDidMount() {
    this.filterBooks()
  }

  render() {
    return (
      <div className="app">

      {/* M A I N    A P P    R E N D E R I N G */}
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>



      <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">

          <ol className="books-grid">
            {this.state.currentlyReading.map( (book, index) =>
              <ShowBook
                key={book.id}
                id={book.id}
                thumbnail={book.imageLinks.thumbnail}
                shelf={book.shelf}
                title={book.title}
                authors={book.authors}
                handler={(this.handler).bind(this)}
              />
        )}

          </ol>
      </div>
    </div>



        <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">

          <ol className="books-grid">
            {this.state.wantToRead.map( (book, index) =>
              <ShowBook
                key={index}
                id={book.id}
                thumbnail={book.imageLinks.thumbnail}
                shelf={book.shelf}
                title={book.title}
                authors={book.authors}
                handler={(this.handler).bind(this)}
              />
        )}
          </ol>
      </div>
    </div>



          <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">

          <ol className="books-grid">
            {this.state.read.map( (book, index) =>
              <ShowBook
                key={index}
                id={book.id}
                thumbnail={book.imageLinks.thumbnail}
                shelf={book.shelf}
                title={book.title}
                authors={book.authors}
                handler={(this.handler).bind(this)}
              />
        )}
          </ol>
      </div>
    </div>




              </div>
            </div>

            <div className="open-search">
              <Link
                to="/search"
              >Add a book</Link>
            </div>

          </div>
        )}
      /> {/* End of main route*/}

      {/* S E A R C H    P A G E    R E N D E R I N G */}

        <Route path="/search" render={() => (
          <div>
          <div id="updateMessage">Book has been updated</div>
          <Search
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            refreshBookshelves={(this.handler).bind(this)}
          />
          </div>
        )} /> {/* End of search route*/}

      </div>
    )
  }
}

export default BooksApp