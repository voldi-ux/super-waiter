import React, { Component} from 'react'
import Slideshow from 'react-native-slideshow-improved';
import {Dimensions} from 'react-native'
const Slide1 = require('../../assests/images/slide.jpg');
const Slide2 = require('../../assests/images/slide-2.jpg');
const Slide3 = require('../../assests/images/slide-3.jpg');

//the react-native slideshow package should be modified after npm install. comment out the controlls sections and the image's height and width should come from props.

const width = Dimensions.get('window').width;

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
        {
          url: Slide3,
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
        height={250}
        width={width}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({position})}
      />
    );
  }
}