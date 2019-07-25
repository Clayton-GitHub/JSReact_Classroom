import React, { Component } from 'react';

class RandomCards extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isloaded: false,
      }
    }
  
    componentDidMount() {
      fetch('https://api.magicthegathering.io/v1/cards?pageSize=10&random=true')
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
        return <div>Loading up to 10 MTG Cards (with Pictures, I hope)..........</div>
      }
      else {
        return <div>
          <ul>
            {items.cards.map(item => (
              <div key={item.id}>
                <span>{item.name}</span>
                <img src={item.imageUrl} alt=""></img>
              </div>
              
            ))}
          </ul>
        </div>;
      }
    }
  }
  
  export default RandomCards;