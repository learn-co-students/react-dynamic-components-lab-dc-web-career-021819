import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    console.log(this.props.opacity)
    let newValue = this.props.opacity - 0.1;
    if(this.props.opacity < 0.2 || this.props.opacity === undefined){
      return null;
    }
    else {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newValue}/>
        </div>
      )
    }
  }

}
