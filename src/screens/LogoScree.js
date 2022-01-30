import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import OnboardSlideshow from '../components/onboardSlideShow/onboardSlideShow';
import Logo from '../components/logo/Logo';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LogoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <View>
         <Logo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent:'center'
  },

});

export default LogoScreen;
