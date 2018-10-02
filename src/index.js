import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import ScrollToTop from './ScrollToTop'
import App from './App'
import './index.css'

ReactDOM.render(

  <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
  	<ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
  document.getElementById('root')

)
