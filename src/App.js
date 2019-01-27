import React, { Component } from 'react';
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import './App.css';

import Home from "./pages/Home"
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CreateMeetup from "./pages/CreateMeetup";

class App extends Component {

  render() {

    return (
      <MuiThemeProvider>
        <div className="App">
            <CreateMeetup />
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
