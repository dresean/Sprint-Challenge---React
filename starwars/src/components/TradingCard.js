import React, { Component } from 'react';

class TradingCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
      <image src={props.url}>
      </div>
    );
  }
}

export default TradingCard;