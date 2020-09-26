import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './configStyles';
import './App.css';
//import db from './firebase/config';;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App"></div>
    </MuiThemeProvider >
  );
}

export default App;
