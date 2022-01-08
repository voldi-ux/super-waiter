import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconAD from 'react-native-vector-icons/AntDesign';

import { fontSize } from '../../typography/typography';
import { colors } from '../../colors/colors';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/userRedux/userSlice';


const DrawerContent = ({ navigation }) => {
  
  const dispatch = useDispatch()
  return (
    <DrawerContentScrollView style={{backgroundColor: colors.background}}>
      <Image
        source={require('../../assests/images/bg.png')}
        resizeMode="stretch"
        style={styles.img}
      />
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Cart')}>
        <Icon name="handbag" size={30} color={colors.yellow} />
        <Text style={styles.label}>Your cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('OrderScreen')}>
        <Icon name="handbag" size={30} color={colors.yellow} />
        <Text style={styles.label}>Your orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Favorite')}>
        <IconM name="heart" size={30} color={colors.red} />
        <Text style={styles.label}>Favourites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('OrderHistoryScreen')}>
        <IconM name="history" size={30} color={colors.black} />
        <Text style={styles.label}>Order history</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('AccountScreen')}>
        <IconM name="account" size={30} color={colors.blue} />
        <Text style={styles.label}>Your Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <IconFA name="exclamation-circle" size={30} color={colors.yellow} />
        <Text style={styles.label}>Report issue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <IconAD name="appstore1" size={25} color={colors.orange} />
        <Text style={styles.label}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => dispatch(logOut())}>
        <Icon name="logout" size={25} color={colors.purple} />
        <Text style={styles.label}>Log out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
    drawerItem: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        // backgroundColor: colors.background_top,
        marginBottom:10
    },
  img: {
      width: '100%',
      height:300
  },
    label: {
        fontSize: fontSize.normal,
        color:colors.black,
        textTransform: "capitalize",
        alignSelf: 'center',
        marginLeft: 40,
        textTransform: 'capitalize',
        fontWeight:'700'
  }
});

export default DrawerContent;
