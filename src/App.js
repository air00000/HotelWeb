import React from 'react';
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Book from "./Book/Book";
import Delivery from "./Delivery/Delivery";
import About from "./About/About";

const App = () => {
  return(
      <BrowserRouter>
      <div className="background">
          <div className="wrapper">
              <Header className="header"/>
              <Routes>
                  <Route path="/" element={<Main className="main"/>}/>
                  <Route path="/book" element={<Book className="book"/>}/>
                  <Route path="/delivery" element={<Delivery className="delivery"/>}/>
                  <Route path="/about" element={<About className="about"/>}/>
              </Routes>
              <Footer className="footer"/>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
