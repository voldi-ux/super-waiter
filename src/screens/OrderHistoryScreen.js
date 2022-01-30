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
import OrderHistoryItem from '../components/orderHistoryItem/orderHistoryItem';
import { useSelector } from 'react-redux';
import { selectOrders } from '../redux/userRedux/userSlice';

const width = Dimensions.get('window').width;


const OrderHistoryScreen = ({ navigation }) => {
  const orders = useSelector(selectOrders)
  const renderItems = orders.map(order => <OrderHistoryItem key={order._id} item={order}/>)
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {
        renderItems}
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
    display: 'flex',
    alignItems: 'center',
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
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
    width: width * 0.95,
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

export default OrderHistoryScreen;
