import React,{useRef,useEffect} from "react";
import { Animated, StyleSheet,View,PanResponder, useWindowDimensions} from "react-native";
import Icon from 'react-native-vector-icons/Entypo'



   
const SwipeToRemove = ({remove,children}) => {
  const width = useWindowDimensions().width
  const thresHold = width * .25
  
 
  
    
    const moveX = useRef(new Animated.Value(0)).current
  const forceSwipe = (direction, velcoty) => {
      
        Animated.timing(moveX, {
          useNativeDriver: true,
          duration: 250,
            toValue: direction === 'right' ? width : -width,
        }).start(() => { 
          remove()
        })
    }
    
    
    const reset = () => {
       
        Animated.timing(moveX, {
          useNativeDriver: true,
          duration: 250,
            toValue: 0
        }).start()
    }
    

    const pan = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: (e,gesture) => {
           const {dx, dy} = gesture;
           return dx > 2 || dx < -2 || dy > 2 || dy < -2;
        },
        onPanResponderMove: Animated.event([null, {dx: moveX}], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (e, gesture) => {
          if (gesture.dx > thresHold) {
            forceSwipe('right');
          } else if (gesture.dx < -thresHold) {
            forceSwipe('left');
          } else {
            reset();
          }
        },
      
      }),
    ).current;

console.log('re-rendered after fav changed')
    return (
      <Animated.View
        style={[
          styles.container,
          // {
          //   opacity: moveX.interpolate({
          //     inputRange: [-width*.5,0,width*.5 ],
          //     outputRange: [0,1,0],
          //   }),
          // },
        ]}>
        <Animated.View
          {...pan.panHandlers}
          style={{
            transform: [{translateX: moveX}],
          }}>
          <View style={styles.childContainer}>{children}</View>
        </Animated.View>
        <View style={styles.icons}>
          <Icon name="trash" color="#FFFF" size={40} />

          <Icon name="trash" color="#FFFF" size={40} />
        </View>
      </Animated.View>
    );
}


const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: '#ff6a0d',
    marginBottom: 10,
  },

  icons: {
    position: 'absolute',
    zIndex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    alignSelf: 'center',
    alignContent: 'center',
  },
});


export default SwipeToRemove;