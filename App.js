import React,{useState} from 'react';
import {View, Text,Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Provider, useDispatch, useSelector} from 'react-redux'

import HomeScreen from './src/screens/HomeScreen';
import ItemViewScreen from './src/screens/ItemViewScreen';
import CartScreen from './src/screens/CartScreen';
import SearchScreen from './src/screens/SearchScreen';
import FavoriteScreen from './src/screens/favorites';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import AccountScreen from './src/screens/Account';
import SignInScreen from './src/screens/SginInScreen';
import RegisterScreen from './src/screens/Register';
import OnboardScreen from './src/screens/OnboardScreen';

import DrawerContent from './src/components/drawerContent/drawerContent';

import { store } from './src/redux/store/store'
import { selectUser } from './src/redux/userRedux/userSlice';
import { axiosGet } from './src/axios/axios';
import {getData} from './src/redux/appData/appData'
import CategoryScreen from './src/screens/CategoryScreen';
import OrderScreen from './src/screens/OrderScreen';
import InstructionScreen from './src/screens/InstructionScreen';
import AddressScreen from './src/screens/Address';
import CheckoutScreen from './src/screens/CheckoutScreen';

const width = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();



function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={{
      drawerStyle: {
        width:width*.7
      },
      drawerType:'slide'
    }} >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useState(() => {
    const fetchData = async () => {
      const data = await axiosGet('get-products')
       dispatch(getData(data))
    }
    fetchData()
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppDrawer">
        {user ? (
          <>
            <Stack.Screen
              name="AppDrawer"
              component={AppDrawer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ItemView"
              component={ItemViewScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Favorite"
              component={FavoriteScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OrderHistoryScreen"
              component={OrderHistoryScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AccountScreen"
              component={AccountScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CategoryScreen"
              component={CategoryScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OrderScreen"
              component={OrderScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="InstructionScreen"
              component={InstructionScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddressScreen"
              component={AddressScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CheckoutScreen"
              component={CheckoutScreen}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="OnboardScreen"
              component={OnboardScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWrapper = () => {
      
return  <Provider store={store}>
                <App />
        </Provider>

}

export default AppWrapper;
