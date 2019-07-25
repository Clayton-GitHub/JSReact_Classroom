import React, { Component } from 'react';

class Sets extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isloaded: false,
      }
    }
  
    componentDidMount() {
      fetch('https://api.magicthegathering.io/v1/sets')
        .then(res => res.json())
        .then(json => {
  
          this.setState({
            items: json,
            isloaded: true,
          })
        })
    }
  
    render() {
      var { isloaded, items } = this.state;
      console.log(items)
  
      if (!isloaded) {
        return <div>Lets see how many MTG Sets there are and when they were released. Your guesses??? Loading..........</div>
      }
      else {
        return <div>
          <ul>
            {items.sets.map(item => (
              <div key={item.id}>
                <span>{item.name} ----- {item.releaseDate}</span>                
              </div>
              
            ))}
          </ul>
        </div>;
      }
    }
  }
  
  export default Sets;