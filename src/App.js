import React from 'react';
import './App.css';
import db from './firebase/config';;
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './configStyles';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App"></div>
    </MuiThemeProvider >
  );
}

export default App;
