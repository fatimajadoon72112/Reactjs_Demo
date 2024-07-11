import './App.css';

import Navbar from './components/Navbar';
import Text from './components/Text';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState ('light');
  const [alert, setAlert] = useState (null);
 

  const showAlert = (message, type) => {
          setAlert({
          msg: message,
          type: type
        })
          setTimeout(() => {
            setAlert(null);
          }, 1500 );  
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert('Dark Mode has been Enabled', "Success");
    } else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode has been Enabled', "Success");
    }
  }

  return (
    <>
    <Router>
     <Navbar title="TextUtiles" mode= {mode} toggleMode={toggleMode}  /> 
     <Alert alert={alert}/>
     <div className="container my-3">
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Text showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>
        </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;
