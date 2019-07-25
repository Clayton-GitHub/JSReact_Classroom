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
        return <div className='text-center m-5 text-light'>Loading 1 MTG Card. Lets see if we get a picture..........</div>
    }
    else {
      return <div>
        <ul>
          {items.cards.map(item => (
              <div className='text-center m-5 text-light' key={item.id}>
              <span>{item.name}</span>
              <br></br>
              <img src={item.imageUrl} alt=""></img>
            </div>
          ))}
        </ul>
      </div>;
    }
  }

}

export default SingleCard;