import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './index.css';
import About from './components/About'
import Contact from './components/Contact'
import Team from './components/Team'
import AddMember from './components/AddMember';

const routing = (
    <Router>
        <div>
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link to="/"><a className='navbar-brand'>WebSiteName</a></Link>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                    <ul className='nav navbar-nav navbar-right'>
                        <li><a href="#"><span className='glyphicon glyphicon-user'></span> Sign Up</a></li>
                        <li><a href="#"><span className='glyphicon glyphicon-log-in'></span> Login</a></li>
                    </ul>
                </div>
            </nav>
            <switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route exact path="/team" component={Team} />
            <Route path="/contact" component={Contact} />
                <Route path="/team/addmember" component={AddMember} />
            </switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
