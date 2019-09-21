import React, { Component } from 'react';

class Box extends React.Component {
  
  render() {

    let boxStyle = {
      display: 'inline-block',
      height: '150px',
      width: '150px',
      backgroundColor: this.props.color
    }

    return (
      <div style={boxStyle}></div>
    );
  }
}

export default Box;