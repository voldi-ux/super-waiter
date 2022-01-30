import React, { useRef,useEffect,memo } from 'react';
import {StyleSheet, View, Text,Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cartRedux';
import {fontSize, normalize} from '../../typography/typography';



const Count = ({count}) => {
  const moveY = useRef(new Animated.Value(10)).current
  const mounted = useRef()

  const animateCount = () => {
 
    Animated.sequence([
      Animated.timing(moveY, {
        duration: 250,
        toValue: 4,
        useNativeDriver: false,
      }),
      Animated.timing(moveY, {
        duration: 250,
        toValue: 10,
        useNativeDriver: false,
      }),
    ]).start()
  }

  useEffect(() => {
    //this code mimics the componendDidMount and componentDidUpade  lifecycles method
    if (!mounted.current) {
      //componendDidMount
      mounted.current = true;
    } else {
      animateCount()
    }
  })


     


  return (
    <Animated.View style={[styles.container,{bottom:moveY}]}>
      <Text style={styles.count}>{count}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: normalize(18),
    width: normalize(18),
    borderRadius: 40,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 4,
    left: -3,
    justifyContent: 'center',
  },
  count: {
    color: '#fff',
    textAlign: 'center',
    fontSize: fontSize.normal,
  },
});

export default memo(Count);
