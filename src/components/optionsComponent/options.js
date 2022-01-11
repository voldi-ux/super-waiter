import React, { useEffect,useRef} from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  PanResponder,
  StatusBar
} from 'react-native';
import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';
import Option from '../option/option';

const height = Dimensions.get('window').height;
const threshold = height * .15

const Options = ({ visible, setVisible, options,close }) => {
    const renderOptions = options.map(option => (
        <Option title={option.title} key={option.title} onPress={option.onPress} close={ close}/>
    ));
  const moveY = useRef(new Animated.Value(height)).current


  //decides whether the user wants to close the options
  const snap = (type) => {
    Animated.timing(moveY, {
      duration: 200,
      useNativeDriver: true,
      toValue: type === 'backUp' ? 0 : height
    }).start(() => {
      if (type !== 'backUp') {
        //the close medthod closes the option panel
        close();
      }
    })

    
  }

  

  const pan = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: (e, gesture) => {
        const {dx, dy} = gesture;
        return dx > 2 || dx < -2 || dy > 2 || dy < -2;
    },
    onPanResponderMove: (e,gesture) => {
      if (gesture.dy > 0) {
        moveY.setValue(gesture.dy)
         } 
    },
    onPanResponderRelease: (e, gesture) => {
      //checks to see has swiped far enough which will indicate that they want to close the panel
      if (gesture.dy >= threshold) {
         snap('backDown')
      } else {
        snap('backUp')
      }
    }
  })).current

  useEffect(() => {
    console.log('use effect')
    Animated.timing(moveY, {
      duration: 500,
      useNativeDriver: true,
      toValue:0
    }).start()
  })
  
  return (
    <View
    
      // style={{transform: [{translateY: moveY2}]}}
      {...pan.panHandlers}>
      <Modal
        animationType="none"
        transparent={true}
        // style={{backgroundColor: 'black',padding:10}}
        statusBarTranslucent={true}
        visible={visible}
        onRequestClose={() => {
          close();
        }}>
        <View style={{ height: height + StatusBar.currentHeight }}>
          {/* the view below just pushes our modal content to bottom */}
            <View style={{flex: 1}}></View>
              <Animated.View
                style={[styles.modalView, {transform: [{translateY: moveY}]}]}>
                <View style={{flex: 1}}></View>

                {renderOptions}
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={snap}>
                  <Text style={styles.textStyle}>close</Text>
                </TouchableOpacity>
              </Animated.View>
          </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({

  modalView: {
    // margin: 20,
    backgroundColor: colors.yellow,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  button: {
    borderRadius: 20,
    padding: 7,
    elevation: 2,
    width: '100%',
  },
  buttonClose: {
    backgroundColor: colors.black,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSize.large,
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontSize: fontSize.normal,
  },
});

export default Options;
