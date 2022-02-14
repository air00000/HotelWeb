import React from 'react';
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import './App.css'

const App = () => {
  return(
      <div className="background">
          <div className="wrapper">
              <Header className="header"/>
              <Main className="main"/>
              <Footer className="footer"/>
          </div>
      </div>
  )
}

export default App;
