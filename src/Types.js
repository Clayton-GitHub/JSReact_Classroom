import React, { Component } from 'react';

class Types extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isloaded: false,
      }
    }
  
    componentDidMount() {
      fetch('https://api.magicthegathering.io/v1/types')
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
        return <div>How many types of MTG Cards are there? Lets find out..........</div>
      }
      else {
        return <div>
          <ul>
            {items.types.map(item => (
                <p key={item.id}>{item}</p>
            ))}
          </ul>
        </div>;
      }
    }
  }
  
  export default Types;