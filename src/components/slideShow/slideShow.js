import React, { Component} from 'react'
import Slideshow from 'react-native-slideshow-improved';
import {Dimensions} from 'react-native'
const Slide1 = require('../../assests/images/slide.jpg');
const Slide2 = require('../../assests/images/slide-2.jpg');

//the react-native slideshow package should be modified after npm install. replace the codes in its main files with the codes in slideshowPlaceHolder.js file.
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.log(width,height)
export default class SlideshowHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url: Slide1,
        },
        {
          url: Slide2,
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 2000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <Slideshow
        height={width > 360 ? height*.3 : height*.35}
        width={width}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({position})}
      />
    );
  }
}