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
  TextInput
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../components/buttons/incrementDecrementButton';
import CartSection from '../components/cartSection/cartSectionComponent';
import SearchItem from '../components/searchItem/searchItem';

const width = Dimensions.get('window').width;

const img1 = require('../assests/images/img2.png');

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
           <TextInput style={styles.textInput} placeholder='What are you looking for?' autoFocus/>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.aside}>
          <Text style={styles.asideText}>
            You Searched For<Text style={{color: colors.yellow}}> sea Food</Text> And
            <Text style={{color: colors.yellow}}> 5</Text> Results Are Found
          </Text>
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
  topNav: {
    display: 'flex',
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

  textInput: {
    height: 50,
    color: colors.grey,
    backgroundColor: colors.background_top,
    borderWidth: 0,
    borderRadius: 100,
    flex: 1,
      paddingHorizontal: 15,
    fontSize:fontSize.normal
  },
  aside: {
    width: width * 0.95,
    // backgroundColor: colors.background_top,
    padding: 10,
    borderRadius: 100,
    marginVertical: 20,
  },

  asideText: {
    fontSize: fontSize.large,
    fontWeight: '800',
    color: colors.black,
    textAlign: 'center',
  },

 
});

export default SearchScreen;
