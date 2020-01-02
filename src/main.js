import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Components/Home";
  import Stuff from "./Components/Stuff";
  import Contact from "./Components/Contact";
  import Leaders from './Components/Leaders';
  import Interview from "./Components/Interview";
  import Sources from "./Components/Sources";
  import AboutMe from "./Components/AboutMe"
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1 style={{color: "rgb(56, 90, 112)"}}>Diversity in Tech</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/involved">What's being done and How to Help</NavLink></li>
            <li><NavLink to="/benefits">Benefits of being in Tech</NavLink></li>
            <li><NavLink to="/leaders">Leaders in Tech</NavLink></li>
            <li><NavLink to="/interview">Interview</NavLink></li>
            <li><NavLink to="/sources">Sources</NavLink></li>
            <li><NavLink to="/about-me">About Me</NavLink></li>

          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/involved" component={Stuff}/>
            <Route path="/benefits" component={Contact}/>
            <Route path="/leaders" component={Leaders}/>
            <Route path="/interview" component={Interview}/>
            <Route path="/sources" component={Sources}/>
            <Route path="/about-me" component={AboutMe}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;