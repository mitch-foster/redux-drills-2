import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><a style={{color: '#61dafb'}}>DevMountain</a> Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.list.map( (guest, i) => {
            return (
              <div key={i} className="list-item">
                <li>{guest}</li>
                <button type="" className="">Remove</button>
              </div>
            )
          })}
        </ul>
        <div className="add-guest">
          Add guest: <input type="" className=""/>
          <button type="" className="">Add</button>
        </div>
      </div>
    );
  }
}

// mapStateToProps
function mapStateToProps(state) {
  return {
    list: state.guests
  };
}

//connect
export default connect(mapStateToProps)(App);
