import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/navbar'
import Home from './components/pages/home';
import About from './components/pages/about';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
    <Router>
    <Fragment>
     <Navbar />
     <div className="container">
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/about' component={About} />
       </Switch>
     </div>
    </Fragment>
    </Router>
    </ContactState>
  );
}

export default App;
