import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "pages/home/Home";
import About from "pages/about/About";
import Contact from "pages/contact/Contact";
import TodoPageNormal from "pages/TodoNormal/TodoPage";
import TodoPageRedux from "pages/TodoRedux/TodoPage";

const AppRouter = () => {
  return (
    <Router>
      <div>
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
            <li>
              <Link to="/todo-normal">Todo Normal</Link>
            </li>
            <li>
              <Link to="/todo-redux">Todo Redux</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Route path="/" exact render={routeprops => <Home text="Welcome home" {...routeprops} />} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/todo-normal" component={TodoPageNormal} />
        <Route path="/todo-redux" component={TodoPageRedux} />
      </div>
    </Router>
  );
};

export default AppRouter;
