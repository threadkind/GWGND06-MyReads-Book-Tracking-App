import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({ books })
      )

  }

  render() {
    console.log(this.state.books)
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


                <ListBooks
                    books={this.state.books}
                    shelf="currentlyReading"
                    title="Currently Reading"
                />
                <ListBooks
                    books={this.state.books}
                    shelf="wantToRead"
                    title="Want To Read"
                />
                <ListBooks
                    books={this.state.books}
                    shelf="read"
                    title="Read"
                />
              </div>
            </div>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>

          </div>
        )}
      /> {/* End of main route*/}

      {/* S E A R C H    P A G E    R E N D E R I N G */}

        <Route path="/search" render={() => (
          <Search
          />
        )} /> {/* End of search route*/}

      </div>
    )
  }
}

export default BooksApp