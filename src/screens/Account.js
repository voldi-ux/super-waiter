import React, { useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountButton from '../components/buttons/accountButton';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders, logOut, selectOrdered, selectOrders, selectUser } from '../redux/userRedux/userSlice';



const AccountScreen = ({ navigation }) => {
  const user = useSelector(selectUser)
  const orders = useSelector(selectOrders) 
  const ordered = useSelector(selectOrdered) 
  const totlaSpent = orders.reduce((acc, ord) => { 
    acc = acc + ord.total
    return acc
  }, 0)
  const disptach = useDispatch()
  const signOut = () => {
    disptach(logOut())
  }

  useEffect(() => {
    disptach(getUsersOrders(user._id));
  }, [user]);

  
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View></View>
            <TouchableOpacity style={styles.edit}>
              <IconM name="square-edit-outline" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={styles.accountListItem}>
            <IconM name="account" size={30} color={colors.purple} />
            <Text style={styles.text}>
              {user.name} {user.surname}
            </Text>
            <View></View>
          </View>
          <View style={styles.accountListItem}>
            <IconM name="email" size={30} color={colors.yellow} />
            <Text style={styles.text}>{user.email}</Text>
            <View></View>
          </View>
          <View style={styles.accountListItem}>
            <IconM name="phone" size={30} color={colors.blue} />
            <Text style={styles.text}>{user.phone}</Text>
            <View></View>
          </View>
          <View style={styles.accountListItem}>
            <IconM name="lock" size={30} color={colors.blue_dark} />
            <View style={styles.lock}>
              <Icon name="options" size={30} color={colors.blue_dark} />
              <Icon name="options" size={30} color={colors.blue_dark} />
              <Icon name="options" size={30} color={colors.blue_dark} />
            </View>
            <View></View>
          </View>
        </View>
        <View style={styles.dashboard}>
          <View style={[styles.dashboardRow, {marginBottom: 20}]}>
            <View
              style={[styles.dashboardItem, {backgroundColor: colors.purple}]}>
              <Text style={styles.dashboardTxtL}>0</Text>
              <Text style={styles.dashboardTxtS}>completed orders</Text>
            </View>
            <View
              style={[styles.dashboardItem, {backgroundColor: colors.blue}]}>
              <Text style={styles.dashboardTxtL}>{ordered.length}</Text>
              <Text style={styles.dashboardTxtS}>current orders</Text>
            </View>
          </View>
          <View style={styles.dashboardRow}>
            <View
              style={[styles.dashboardItem, {backgroundColor: colors.blue}]}>
              <Text style={styles.dashboardTxtL}>{orders.length }</Text>
              <Text style={styles.dashboardTxtS}>Total orders</Text>
            </View>
            <View
              style={[styles.dashboardItem, {backgroundColor: colors.purple}]}>
              <Text style={styles.dashboardTxtL}>R {totlaSpent}.00</Text>
              <Text style={styles.dashboardTxtS}>Money Spent</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <AccountButton title="sign out" iconName="logout" onPress={signOut} />
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

  dashboard: {
    // backgroundColor: colors.background_top,
    marginTop: 40,
    borderRadius: 10,
    padding: 10,
  },

  dashboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dashboardItem: {
    // alignItems:'center'
    width: '49%',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
    // marginBottom: 10,
  },

  dashboardTxtL: {
    fontSize: fontSize.large_xl,
    color: colors.yellow,
    textAlign: 'center',
  },
  dashboardTxtS: {
    textAlign: 'center',
    fontSize: fontSize.large,
    color: '#fff',
  },
});

export default AccountScreen;
