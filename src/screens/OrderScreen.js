//this screen should show  the list of all the current orders of the user i.e orders that are not completed 
import React, { useEffect,useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {io} from 'socket.io-client';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/Ionicons';
import OrderItem from '../components/orderItem/orderItem';
import { axiosPost, baseUrl } from '../axios/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders, selectOrdered, selectUserId } from '../redux/userRedux/userSlice';

let socket;


const OrderScreen = ({ navigation }) => {
  const userId = useSelector(selectUserId)
  const currentOrders  = useSelector(selectOrdered)
  const disptach = useDispatch()
    //when the component mounts or renders fetch all the orders related to this current user
  

  useEffect(() => {
       disptach(getUsersOrders(userId));
  }, [])
  
  useEffect(() => {
    socket = io(`${baseUrl}/orders`)
    socket.on('connect', () => {
      socket.emit('join-room', {room: userId});
      socket.on('order-status-change', () => {
        disptach(getUsersOrders(userId));
      });
    });
    return () => socket.close()
  })


  const renderOrderItems = currentOrders.map(order => <OrderItem item={ order} key={order._id}/>)
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconF name="chevron-left" size={40} color={colors.black} />
        </TouchableOpacity>
        <IconM
          name="fast-food"
          size={40}
          color={colors.black}
        />
        <View></View>
      </View>
      <ScrollView>
        {
        renderOrderItems}
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
