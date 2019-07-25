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
          return <div className='text-center m-5 text-light'>Lets see how many MTG Sets there are and when they were released. Your guesses??? Loading..........</div>
      }
      else {
          return <div className='text-center m-5 text-light'>
          <ul>
            {items.sets.map(item => (
              <div key={item.id}>
                <span>{item.name}</span>
                <br></br>
                <span>{item.releaseDate}</span>
                <br></br>
                <br></br>
              </div>

            ))}
          </ul>
        </div>;
      }
    }
  }

  export default Sets;