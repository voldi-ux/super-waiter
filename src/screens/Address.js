import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountButton from '../components/buttons/accountButton';
import TextInputComponent from '../components/TextInput/textInput';
import ErrorComponent from '../components/errorComponent/error';
import {selectUser} from '../redux/userRedux/userSlice';
import {setAddress} from '../redux/cart/cartRedux';

const AddressScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const address = useSelector(state => state.cart.address);
  const {email, phone} = useSelector(selectUser);
  const [err, setMsg] = useState('');

  const [userInfo, setInfo] = useState({
    street: '',
    streetNo: '',
    postalCode: '',
    ...address,
    email,
    phone,
  });

  const onProceedToCheckOut = () => {
    let invalid;
    for (let key in userInfo) {
      if (userInfo[key].length < 1) {
        console.log(key, userInfo[key])
        invalid = true;
         setMsg('fill in all fields');
      }
    }
    if (!invalid) {
      dispatch(setAddress(userInfo));
         setMsg('');
      navigation.navigate('CheckoutScreen');
    }
  };

  const handleChange = (txt, type) => {
    setInfo(prevState => {
      const newState = {...prevState};
      newState[type] = txt + '';
      return newState;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerInner}>
          <Text style={styles.heading}>Enter your address</Text>
          {err ? <ErrorComponent msg={err} /> : null}
          <TextInputComponent
            autoFocus
            label="Street"
            value={userInfo.street}
            onChangeText={text => {
              handleChange(text, 'street');
            }}
          />
          <TextInputComponent
            label="Street Number"
            keyboardType={'numeric'}
            value={userInfo.streetNo}
            onChangeText={text => {
              handleChange(text, 'streetNo');
            }}
          />
          <TextInputComponent
            label="Postal Code"
            keyboardType={'numeric'}
            value={userInfo.postalCode}
            onChangeText={text => {
              handleChange(text, 'postalCode');
            }}
          />
          <TextInputComponent
            label="Phone"
            keyboardType={'numeric'}
            value={userInfo.phone}
            onChangeText={text => {
              handleChange(text, 'phone');
            }}
          />

          <TextInputComponent
            label="Email"
            keyboardType={'email-address'}
            value={userInfo.email}
            onChangeText={text => {
              handleChange(text, 'email');
            }}
          />

          <View style={styles.btn}>
            <AccountButton
              title="Proceed to checkout"
              onPress={onProceedToCheckOut}
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
    marginBottom: 20,
  },

  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
});

export default AddressScreen;
