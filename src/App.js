import React, { Component } from 'react';
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import './App.css';

import Home from "./pages/Home"
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CreateMeetup from "./pages/CreateMeetup";
import Explore from "./pages/Explore";
import DetailMember from "./pages/DetailMember"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { BrowserRouter, Route } from "react-router-dom"

import { Provider } from "react-redux"
import myStore from "./config/store"

class App extends Component {

  render() {

    return (
      <Provider store={ myStore }>
        <BrowserRouter>
          <div className="App">
              <Navbar></Navbar>
                <Route exact path="/" component={ Home } />
                <Route path="/explore" component={ Explore } />
                <Route path="/create" component={ CreateMeetup } />
                <Route path="/member/:memberId" component={ DetailMember } />
              <Footer></Footer>
          </div>
        </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
