import React, { Component } from 'react';
import Cards from './Cards';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-3 px-1 bg-dark'>
          <div className='py-2 sticky-top flex-grow-1'>
            <div className='nav flex-sm-column'>
              <span>Sidebar Header</span>
              <span>Sidebar Header</span>
              <span>Sidebar Header</span>
              <span>Sidebar Header</span>
            </div>          
          </div>
        </div>
        <div className='col'>
          <Cards />
        </div>
      </div>        
    </div>
      
  }
  
}

export default App;