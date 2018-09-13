# MyReads Project
In this project I was given a static example of a Book Tracking App. The project required adding in the necessary React code to make the project functional as a book tracking app.


## Motivation
This project was created as part of the Grow With Google Front End Web Developer Nanodegree Scholarship. This is Project 6 in the course.
Initial HTML, CSS & Javascript code was provided as part of the project. The backend server was also provided along with some basic scaffolding and a Book API helper component for the React App. The starter code can be found at [github](https://github.com/udacity/reactnd-project-myreads-starter).


## Getting Started
To view the app locally you can clone the repository to your computer.
[The link to the repository can be found here.](https://github.com/threadkind/GWGND06-MyReads-Book-Tracking-App)

You can download the app directly by clicking on the clone or download link on the repository page.

Alternatively, you can use the command line to clone to repository.
Make sure you have git installed on your system.
Navigate to the folder where you want to clone the repository using the command line terminal.
Then type:
```
git clone https://github.com/threadkind/GWGND06-MyReads-Book-Tracking-App.git
```
...and press enter.
This will create a local clone on your computer.

Navigate to the repository clone folder

In order to view the app, you will need to install all project dependencies by typing `npm install` into the command line.

After dependancies have installed, you can start the server with `npm start`

When the server is running, it should open up the app for you in the browser, or you can follow the instructions on the command line.


## Features of the App

### Main Page (Bookshelves)
When the app is first loaded you will see a page with 3 bookshelves:

* Currently Reading
* Want To Read
* Read

There will be books on each shelf. The page also has a menu in the top right corner and a link to the search page in the bottom right corner (the circle with the '+' sign).

On each book there is information about the book:

* The books cover (if available)
* The books title
* The books author(s) (if available)
* The books average rating

There is also a dropdown selection that can be opened by clicking on the circle with the down arrow icon.
The current shelf of the book is highlighted and this can be changed by selecting one of the other available options in the dropdown. (The books can be removed from the shelf by selecting 'none')

The menu in the top right corner allows the view to be changed to show one or all of the bookshelves.

The search link in the bottom right of the page takes you to the search page where you can find additional books to add to your shelf.

### Search Page
When the search page opens you will see a search bar where you can search by title or author. (See Important Info About Search Terms below)

When a search term is matched, it will display available books. If the book is currently in one of the shelves it will display this when the book dropdown is opened.

The shelf changer dropdown menu on each book allows the shelf to be changed, just like on the bookshelf page.
When the book status has been changed a message will flash on the screen to notify that the change was successful.

The bookshelf page can be accessed again by either using the back button, clicking on the title of the page or using the book menu in the top right corner.


## Important Info About Search Terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Dependancies
This app is written primarily in React with HTML, CSS, Javascript(JSX).
The app starter code, including the backend server, was provided by Udacity as part of the Grow With Google Nanodegree program.
The starter code can be found at [github](https://github.com/udacity/reactnd-project-myreads-starter).


## Author
Amy W
