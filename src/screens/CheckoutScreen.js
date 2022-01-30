import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Vibration,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useStripe} from '@stripe/stripe-react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import IconF from 'react-native-vector-icons/Feather';
import AccountButton from '../components/buttons/accountButton';
import {selectUser, selectUserId} from '../redux/userRedux/userSlice';
import {
  onOrderSuccesss,
  selectCartItems,
  selectInstruction,
  selectTotal,
} from '../redux/cart/cartRedux';
import {axiosPost} from '../axios/axios';
import {StripeProvider, initStripe} from '@stripe/stripe-react-native';
import Loader from '../components/Loader/Loader';
import NoInternet from '../components/noInternet/noInternet';

const key =
  'pk_test_51KFkqNLGGMwO7DWSduOaFyXxo43BPddJi8qPjYbWVfKJ8H5SteqL4LodsgHQgQxdrbcXLUx0ZOnRPL8Nvtj7Vi3D00vJuc4BmJ';

const CheckoutScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [newtworErr, setNetworkErr] = useState(false)
  
  const dispatch = useDispatch();
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const address = useSelector(state => state.cart.address);
  const cartItems = useSelector(selectCartItems);
  const userId = useSelector(selectUserId);
  const cartTotal = useSelector(selectTotal);
  const instruction = useSelector(selectInstruction);

  const delevery = 75;
  const order = {
    userId,
    orderNo: Math.floor(Date.now() * Math.random() + parseFloat(address.phone)),
    total: delevery + cartTotal,
    items: cartItems,
    customerInfo: {
      ...address,
    },
    date: Date.now(),
    instruction,
    new: true,
    userDeleted: false,
    status:"received"
  };

  const getPayIntent = async () => {

     const resp = await axiosPost('payment-intent', {
       total: (cartTotal + delevery) * 100,
     });
     setLoading(false)
     if (resp.msg || !resp) {
       setNetworkErr(true)
       return;
      } 
    return resp
  };

  const placeOrder = async () => {

    return await axiosPost('place-order', order);
  };

  const initializePaymentSheet = async () => {
    const PAYMENT_INTENT = await getPayIntent();
    if (!PAYMENT_INTENT) return;

    const {error} = await initPaymentSheet({
      paymentIntentClientSecret: PAYMENT_INTENT.paymentIntentSecret,
      merchantDisplayName: 'super waiter',
    });
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      const resp = await placeOrder();
      if (resp.msg) {
        return Alert.alert(resp.msg);
      } else {
       await dispatch(onOrderSuccesss());
        Vibration.vibrate(2000);
        Alert.alert(resp.success);
        navigation.navigate('AppDrawer');
      }
    }
  };

  const orderItems = cartItems.map(item => (
    <View style={styles.item} key={item._id}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQty}>1 x {item.qty}</Text>
    </View>
  ));


 
  return (
    <SafeAreaView style={styles.container}>
      <StripeProvider publishableKey={key}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
          <Text style={styles.heading}>Checking Out</Text>
          <View></View>
        </View>

        {newtworErr ? (
          <NoInternet
            refetchData={() => {
              setLoading(true);
              setNetworkErr(false);
              initializePaymentSheet();
            }}
          />
        ) : (
          <>
            <ScrollView style={styles.checkOutContainer}>
              <View style={styles.items}>
                <Text style={styles.heading2}>Items</Text>
                {orderItems}
              </View>
              <View style={styles.items}>
                <Text style={styles.heading2}>instruction</Text>
                {instruction.length ? (
                  <Text style={styles.instruction}>{instruction}</Text>
                ) : (
                  <Text style={styles.instruction}>no instructions</Text>
                )}
              </View>
              <View style={styles.address}>
                <Text style={styles.heading2}>customer info & address</Text>

                <Text style={styles.addressItem}>{address.phone}</Text>
                <Text style={styles.addressItem}>{address.email}</Text>
                <Text style={styles.addressItem}>Johannesburg</Text>
                <Text style={styles.addressItem}>{address.street}</Text>
                <Text style={styles.addressItem}>{address.streetNo}</Text>
                <Text style={styles.addressItem}>{address.postalCode}</Text>
              </View>
              <View style={styles.totals}>
                <View style={styles.totalsItem}>
                  <Text style={{...styles.totalHeading}}>SubTotal</Text>
                  <Text style={{...styles.total}}>R {cartTotal}.00</Text>
                </View>
                <View style={styles.totalsItem}>
                  <Text style={{...styles.totalHeading}}>Delivery</Text>
                  <Text style={{...styles.total}}>R {delevery}.00</Text>
                </View>
                <View style={styles.totalsItem}>
                  <Text
                    style={{
                      ...styles.totalHeading,
                      fontWeight: '800',
                      fontSize: fontSize.large_xl,
                    }}>
                    Total
                  </Text>
                  <Text
                    style={{
                      ...styles.totalHeading,
                      fontWeight: '800',
                      fontSize: fontSize.large_xl,
                    }}>
                    R {cartTotal + delevery}.00
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.btn}>
              <AccountButton title="Pay now" onPress={openPaymentSheet} />
            </View>
          </>
        )}
        <Loader visible={loading} />
      </StripeProvider>
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
    fontSize: fontSize.large,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    textTransform: 'capitalize',
    color: colors.yellow,
  },

  heading2: {
    fontSize: fontSize.large,
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'capitalize',
    color: colors.yellow,
  },

  flex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: fontSize.normal,
    textTransform: 'capitalize',
    color: colors.grey,
  },
  instruction: {
    color: colors.grey,
    fontSize: fontSize.normal,
    marginBottom: 10,
  },
  itemQty: {
    fontSize: fontSize.normal,
    color: colors.grey,
  },

  addressItem: {
    fontSize: fontSize.normal,
    textTransform: 'capitalize',
    color: colors.grey,
    marginBottom: 10,
  },
  checkOutContainer: {
    backgroundColor: colors.background_top,
    padding: 10,
    flex: 1,
    height: '100%',
  },
  totals: {
    borderTopWidth: 0.2,
    paddingTop: 10,
  },
  totalsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.grey,
    marginBottom: 10,
  },

  totalHeading: {
    fontSize: fontSize.large,
    color: colors.grey,
  },

  total: {
    color: colors.grey,
    fontSize: fontSize.large,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default CheckoutScreen;
