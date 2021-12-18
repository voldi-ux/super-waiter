import React from 'react';
import {View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ItemViewScreen from './src/screens/ItemViewScreen';
import CartScreen from './src/screens/CartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import FavoriteScreen from './src/screens/favorites';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import AccountScreen from './src/screens/Account';
import SignInScreen from './src/screens/SginInScreen';
import RegisterScreen from './src/screens/Register';
import OnboardScreen from './src/screens/OnboardScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegisterScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnboardScreen"
          component={OnboardScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
