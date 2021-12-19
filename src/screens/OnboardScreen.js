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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height


const OnboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <View>
        <OnboardSlideshow width={width} height={height} />
        <View style={styles.botttomNav}>
          <TouchableOpacity
            style={[styles.botttomNavBtn, {backgroundColor: colors.yellow}]}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.botttomNavBtnInnerText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botttomNavBtn}
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.botttomNavBtnInnerText}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  botttomNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal:5,
    position: 'absolute',
    bottom: 0,
    width:'100%'
  },
  botttomNavBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.black,
    borderRadius: 1000,
    width: (width - 30) / 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  botttomNavBtnInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  botttomNavBtnInnerText: {
    color: '#fff',
    fontSize: fontSize.large,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
 
});

export default OnboardScreen;
