import React, { Component } from 'react';
import { BrowserRouter as Router,Route,NavLink,Switch } from 'react-router-dom';
import App from '../App';

import PageOne from '../PageOne';
import PageTwo from '../PageTwo';
import PageThree from '../PageThree';
import NotFound from '../NotFound';






class RouterComponant extends Component {
  render() {
    return (
      <Router>
      
      <nav className="nav justify-content-center">
        <NavLink className="nav-link active" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/one">One</NavLink>
        <NavLink className="nav-link " to="/two">Two</NavLink>
        <NavLink className="nav-link" to="/three">Three</NavLink>
      </nav>
     
    
         
        
      
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/one" component={PageOne} />
        <Route path="/two" component={PageTwo} />
        <Route path="/three" component={PageThree}/>
        <Route component={NotFound}/>
        </Switch>
      
    </Router>

    );
  }
}

export default RouterComponant;
