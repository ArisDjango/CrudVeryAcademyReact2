import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
//import reportWebVitals from './reportWebVitals';



const routing = (

  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

//serviceWorker.unregister()