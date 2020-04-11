import React from 'react';
import './btstyle.css'
import {CalculatorApp} from './CalculatorProject/calculator.js';

class App extends React.Component {
    render() {
      return (
        <React.Fragment>
        <CalculatorApp />
     </React.Fragment>
      );
    }
  }
  
  export default App;