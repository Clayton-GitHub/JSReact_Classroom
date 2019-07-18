import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class SingleCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
    }
  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards?pageSize=1&random=true')
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
      return <div>Loading..........</div>
    }
    else {
      return <div>
        <ul>
          {items.cards.map(item => (
            <img key={item.id} src={item.imageUrl} alt=""></img>
          ))}
        </ul>
      </div>;
    }
  }
  
}

export default SingleCard;