import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Home = () => {
  return (
    <div> 
      <h1>This is about HOME page</h1>
    </div>
  );
}

const About = () => {

  return (
    <div> 
      <h1>This is about ABOUT page</h1>
    </div>
  );
}

const Contact = () => {

  return (
    <div> 
      <h1>This is about CONTACT page</h1>
    </div>
  );
}

const Routing = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>



        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            <About />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route> 
        </Switch>
      </Router>    
    </div>
  );
}


export default Routing;
