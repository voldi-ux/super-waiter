import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../components/buttons/incrementDecrementButton';
import FavoriteSection from '../components/favoriteSection/favoriteSection';
import OrderHistoryItem from '../components/orderHistoryItem/orderHistoryItem';
import AccountButton from '../components/buttons/accountButton';
import TextInputComponent from '../components/TextInput/textInput';

const width = Dimensions.get('window').width;

const img1 = require('../assests/images/img2.png');

const SignInScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
          <IconM name="account" size={40} color={colors.black} />
          <View></View>
        </View>
        <View style={styles.containerInner}>
          <Text style={styles.heading}>Sign in now</Text>
          <TextInputComponent label="Email" />
          <TextInputComponent label="Password" />
          <View style={styles.flex}>
            <Text style={[styles.link, {color: colors.yellow}]}>
              Do not have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={[styles.link, {color: colors.blue}]}>
                {' '}
                Sign up instead
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <AccountButton
              title="sign in"
              iconName="login"
              onPress={() =>
                navigation.navigate('AppDrawer', {screen: 'HomeScreen'})
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
  },
  containerInner: {
    backgroundColor: colors.background_top,
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    fontSize: fontSize.large_xl,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    textTransform: 'uppercase',
    color: colors.yellow,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
      flexDirection: 'row',
    marginBottom:20
  },
  link: {
    fontSize: fontSize.normal,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
});

export default SignInScreen;
