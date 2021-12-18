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

const width = Dimensions.get('window').width;

const img1 = require('../assests/images/img2.png');

const AccountScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
          <IconM name="account" size={40} color={colors.black} />
          <View></View>
        </View>
        <View style={styles.containerInner}>
          <View style={styles.accountListItem}>
            <IconM name="account" size={30} color={colors.purple} />
            <Text style={styles.text}>John Doe</Text>
            <TouchableOpacity style={styles.edit}>
              <IconM name="square-edit-outline" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={styles.accountListItem}>
            <IconM name="email" size={30} color={colors.yellow} />
            <Text style={styles.text}>voldimuyumba@gmail.com</Text>
            <TouchableOpacity style={styles.edit}>
              <IconM name="square-edit-outline" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={styles.accountListItem}>
            <IconM name="phone" size={30} color={colors.blue} />
            <Text style={styles.text}>0629224275</Text>
            <TouchableOpacity style={styles.edit}>
              <IconM name="square-edit-outline" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={styles.accountListItem}>
            <IconM name="lock" size={30} color={colors.blue_dark} />
            <View style={styles.lock}>
              <Icon name="options" size={30} color={colors.blue_dark} />
              <Icon name="options" size={30} color={colors.blue_dark} />
              <Icon name="options" size={30} color={colors.blue_dark} />
            </View>
            <TouchableOpacity style={styles.edit}>
              <IconM name="square-edit-outline" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <AccountButton title="sign out" iconName="logout" />
      </View>
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
  accountListItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    fontSize: fontSize.large,
    color: colors.grey,
    marginLeft: 20,
  },
  edit: {
    backgroundColor: colors.blue,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  lock: {
    flex: 1,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
  },
});

export default AccountScreen;
