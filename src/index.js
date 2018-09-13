import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import App from './App'
import './index.css'

ReactDOM.render(

  <BrowserRouter>
  	<ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')

)
