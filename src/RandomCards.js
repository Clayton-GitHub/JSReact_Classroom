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
          return <div className='text-center m-5 text-light'>Loading up to 10 MTG Cards (with Pictures, I hope)..........</div>
      }
      else {
        return <div>
          <ul>
            {items.cards.map(item => (
              <div className='text-center m-5 text-light' key={item.id}>
                  <div>
                    <span>{item.name}</span>
                    <br></br>
                    <img src={item.imageUrl} alt=""></img>
                  </div>
              </div>
            ))}
          </ul>
        </div>;
      }
    }
  }

  export default RandomCards;