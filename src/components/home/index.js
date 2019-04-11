import React, { Component } from 'react';
import MainCard from '../card/mainCard';


class Home extends Component {

  constructor() {
    super()
    this.state = {
        data: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/api')
      .then(response=> response.json())
      .then(users => this.setState({data: users.results}));
  }



  render() {
    console.log(this.state.data);
    return (
            <div className="bck_blue">
              <MainCard data={this.state.data}/>
            </div>
    );
  }
};

export default Home;
