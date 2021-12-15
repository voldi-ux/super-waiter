import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { colors } from '../../colors/colors';




const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Slide1 = require('../../assests/images/slide.jpg');
const Slide2 = require('../../assests/images/slide-2.jpg');
const Slide3 = require('../../assests/images/slide-3.jpg');

const HeaderComponent = () => {
  const carouselRef = React.useRef(null);

  const renderItem = ({item, index}) => {
    return (
      <Image
        source={item}
        resizeMode="contain"
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={[Slide1, Slide2, Slide3]}
        renderItem={renderItem}
        style={styles.carousel}
        containerWidth={width}
        separatorWidth={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width,
    height: 400,
  },
  container: {
    marginTop: 40,
  },
  carousel: {
    flexGrow: 0,
    // height: 150,
  },
  item: {
    height: height*.3,
    width: width,
    borderRadius:10
  },
});
export default HeaderComponent;
