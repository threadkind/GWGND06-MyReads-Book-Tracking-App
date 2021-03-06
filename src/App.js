import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Menu from './Menu'
import Bookshelf from './Bookshelf'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {
  state = {
    currentlyReading : [],
    wantToRead : [],
    read : [],
    menuStatus : 'closed',
  }

  filterBooks() {
    BooksAPI.getAll()
      .then((books) =>   {
      const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
      const wantToRead = books.filter(book => book.shelf === 'wantToRead')
      const read = books.filter(book => book.shelf === 'read')

      this.setState({
        currentlyReading : currentlyReading,
        wantToRead : wantToRead,
        read : read,
      })
      }
    )
  }

  shelfHandler() {
    this.filterBooks()
  }

  descriptionHandler = (e) => {
    if(e.target.className === 'book-cover'){
        document.querySelector('.book-description-container').style.display = 'flex'

      const id = e.target.id.slice(6)

      BooksAPI.get(id)
        .then(results => {
          if(results.description === undefined){
            document.querySelector('.book-description-text').innerText = 'Description not available'
          }
          else {
            document.querySelector('.book-description-text').innerText = results.description
          }
          }
        )
    }
  }

  descriptionClose = () => {
    document.querySelector('.book-description-container').style.display = 'none'
    document.querySelector('.book-description-text').innerText = "Loading..."
  }

  menuClick = () => {
    document.querySelector('.menu-icon-book-open').classList.toggle('book-closed');

    const menuItems = document.querySelectorAll('.menu-li')

    for(let i = 0; i < menuItems.length; i++){
      menuItems[i].classList.toggle('menu-closed');
    }

    document.querySelector('.menu-ul').classList.toggle('menu-closed')

    if(this.state.menuStatus === 'closed'){
      this.setState({ menuStatus : 'open' })
    }
    else {
      this.setState({ menuStatus : 'closed' })
    }
  }

  searchMenuCheck = () => {
    if(this.state.menuStatus === 'open'){
      this.menuClick()
    }
  }

  componentDidMount() {
    this.filterBooks()
  }

  render() {
    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }


    return (
      <div className="app"
          onClick={this.descriptionHandler}>

        <Menu
            menuClick={this.menuClick.bind(this)}
        />

        <div className="list-books-title">
          <Link to="/"><h1>MyReads</h1></Link>
        </div>

        <div className="book-description-container">
          <div className="book-description">
            <div className="book-description-close"
                onClick={this.descriptionClose}>x</div>
            <div className="book-description-text">Loading...</div>
          </div>
        </div>


        {/* M A I N    A P P    R E N D E R I N G */}
        <Route exact path="/" render={() => (
          <div>
            <div className="list-books">
              <div className="list-books-content">
                <div>

                  { Object.keys(shelves).map(shelf =>

                  <Bookshelf
                    key={shelves[shelf][1]}
                    shelfTitle={shelves[shelf][0]}
                    shelf={shelves[shelf][1]}
                    refreshShelves={(this.filterBooks).bind(this)}
                   />
                  )}

            </div>
          </div>

            <div className="open-search">
              <Link
                to="/search"
                onClick={this.searchMenuCheck}
              >Add a book</Link>
            </div>

          </div>
        </div>
      )}
      /> {/* End of main route*/}


      {/* C U R R E N T L Y    R E A D I N G    P A G E    R E N D E R I N G */}
      <Route exact path="/currently-reading" render={() => (
        <div>
          <div className="list-books">
            <div className="list-books-content">
              <Bookshelf
                shelfTitle="Currently Reading"
                shelf="currentlyReading"
                refreshShelves={(this.filterBooks).bind(this)}
               />
          </div>

          <div className="open-search">
            <Link
              to="/search"
            >Add a book</Link>
          </div>
        </div>
      </div>
      )} />


      {/* W A N T   T O   R E A D    P A G E    R E N D E R I N G */}
        <Route exact path="/want-to-read" render={() => (
        <div>
          <div className="list-books">
            <div className="list-books-content">
              <Bookshelf
                shelfTitle="Want To Read"
                shelf="wantToRead"
                refreshShelves={(this.filterBooks).bind(this)}
               />
          </div>

          <div className="open-search">
            <Link
              to="/search"
            >Add a book</Link>
          </div>
        </div>
      </div>
        )} />


      {/* R E A D    P A G E    R E N D E R I N G */}
        <Route exact path="/read" render={() => (
        <div>
          <div className="list-books">
            <div className="list-books-content">
              <Bookshelf
                shelfTitle="Read"
                shelf="read"
                refreshShelves={(this.filterBooks).bind(this)}
               />
          </div>

          <div className="open-search">
            <Link
              to="/search"
            >Add a book</Link>
          </div>
        </div>
      </div>
        )} />


      {/* S E A R C H    P A G E    R E N D E R I N G */}

        <Route path="/search" render={() => (
          <div>
          <div className="message-container">
            <div id="updateMessage">Book has been updated</div>
          </div>
          <Search
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            refreshBookshelves={(this.shelfHandler).bind(this)}
          />
          </div>
        )} /> {/* End of search route*/}

      </div>
    )
  }
}

export default BooksApp