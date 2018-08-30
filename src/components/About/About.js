import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
        <Link className='subnav_links' to="/about"><h3>About</h3></Link>
        <Link className='subnav_links' to="/about/history"><h3>History</h3></Link>
        <Link className='subnav_links' to="/about/contact"><h3>Contact</h3></Link> 
        </div>
        <div className='box'>
        <Switch>
        <Route exact path='/about/history' component={History}/>
        <Route exact path='/about/contact' component={Contact}/>
              <Route path='/about' exact render={() => (
                <div>
                    <h1>About the University</h1>
                    <p>lol its cool. You should apply</p>
                </div>
              )}/>     
        </Switch>
        </div>
      </div>
    )
  }
}
