import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RandomCards from './RandomCards';
import SingleCard from './SingleCard';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1 className='text-center bg-warning'>MTG Project</h1>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-1 px-1'>
                <div className='py-2 sticky-top flex-grow-1'>
                  <div className='nav flex-sm-column bg-dark text-center'>
                    <p></p>
                    <Link style={linkstyle} to='/'>
                      <span>Home</span>
                    </Link>
                    <Link style={linkstyle} to='/RandomCards'>
                      <span>Random Cards</span>
                    </Link>
                    <Link style={linkstyle} to='/SingleCard'>
                      <span>Single Card</span>
                    </Link>
                  </div>          
                </div>
              </div>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/RandomCards" component={RandomCards} />
                <Route path="/SingleCard" component={SingleCard} />
              </Switch>              
            </div>        
          </div>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h1>Welcome to the MTG Project</h1>
  </div>
)

const linkstyle = {
  color: 'white'
}

export default App;