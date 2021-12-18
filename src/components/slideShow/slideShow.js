import React, { Component} from 'react'
import Slideshow from 'react-native-slideshow-improved';

const Slide1 = require('../../assests/images/slide.jpg');
const Slide2 = require('../../assests/images/slide-2.jpg');
const Slide3 = require('../../assests/images/slide-3.jpg');


export default class SlideshowTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: Slide1,
        },
        {
          title: 'Title 2',
          caption: 'Caption 2',
          url: Slide2,
        },
        {
          title: 'Title 3',
          caption: 'Caption 3',
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
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({position})}
      />
    );
  }
}