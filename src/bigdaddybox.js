import React from 'react';
import Box from './box';
import colorlist from './colorslist';

class DaddyBox extends React.Component {

  constructor(props) {
    super(props)
    this.colorChild = this.colorChild.bind(this);
    this.state = { colors: colorlist, boxes: new Array(16).fill(0).map(num => this.colorChild())};
    this.changeRandomChild = this.changeRandomChild.bind(this);
  }

  colorChild() {
    let max = Math.floor(colorlist.length);
    let randomIdx = Math.floor(Math.random() * (max));
    return colorlist[randomIdx];
  };

  changeRandomChild() {
    let randomChild = Math.floor(Math.random() * this.state.boxes.length);
    let newColor = this.colorChild();
    let copy = this.state.boxes.slice();
    copy[randomChild] = newColor
    this.setState({ boxes: copy });
  };

  render() {
    let colorOrder = this.state.boxes.map(c => <Box color={c} />)
    return (
      <div>
        {colorOrder}
        <button onClick={this.changeRandomChild}>CHANGE A RANDOM BOX</button>
      </div>
    );
  // }
  }
}

export default DaddyBox;