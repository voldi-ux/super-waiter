import React, {Component,Dimen} from 'react';
import Slideshow from 'react-native-slideshow-improved';

const Slide1 = require('../../assests/images/onboard1.jpg');
const Slide2 = require('../../assests/images/onboard2.jpg');
const Slide3 = require('../../assests/images/onboard3.jpg');
const Slide4 = require('../../assests/images/onboard4.jpg');

//the react-native slideshow package should be modified after npm install. comment out the controlls sections and the image's height and width should come from props.
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

export default class OnboardSlideshow extends Component {
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
        {
          url: Slide4,
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
      }, 5000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
        <Slideshow
        height={this.props.height}
        width={this.props.width}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({position})}
      />
    );
  }
}
