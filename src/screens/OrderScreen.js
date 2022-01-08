//this screen should show  the list of all the current orders of the user i.e orders that are not completed 
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
import OrderItem from '../components/orderItem/orderItem';



const OrderScreen = ({ navigation }) => {
    //when the component mounts or renders fetch all the orders related to this current user
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
          <IconM name="history" size={40} color={colors.black} />
          <View></View>
        </View>
      <View>
         <OrderItem status={'delivering'}/>
         <OrderItem status={'preparing'}/>
         <OrderItem status={'on the way'}/>
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
    display: 'flex',
    alignItems: 'center',
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
      flexDirection: 'row',
    marginBottom:20,
  },
  topNavCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topNavText: {
    fontSize: fontSize.large,
    fontWeight: '800',
    textTransform: 'capitalize',
    color: colors.yellow,
  },
  aside: {
    backgroundColor: colors.background_top,
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
  },

  asideText: {
    fontSize: fontSize.large,
    fontWeight: '800',
    textTransform: 'capitalize',
    color: colors.black,
    textAlign: 'center',
  },
});

export default OrderScreen;
