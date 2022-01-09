import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {useStripe} from '@stripe/stripe-react-native'
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import IconF from 'react-native-vector-icons/Feather';
import AccountButton from '../components/buttons/accountButton';
import {selectUser} from '../redux/userRedux/userSlice';
import {selectCartItems, selectTotal} from '../redux/cart/cartRedux';
import { axiosPost } from '../axios/axios'
import {StripeProvider, initStripe} from '@stripe/stripe-react-native';

const key ='pk_test_51KFkqNLGGMwO7DWSduOaFyXxo43BPddJi8qPjYbWVfKJ8H5SteqL4LodsgHQgQxdrbcXLUx0ZOnRPL8Nvtj7Vi3D00vJuc4BmJ';


const CheckoutScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const address = useSelector(state => state.cart.address);
  const cartItems = useSelector(selectCartItems);
   const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const user = useSelector(selectUser);
  const cartTotal = useSelector(selectTotal);
  const delevery = 75
  const [loading, setLoading] = useState(false);
  const getPayIntent = async () => {
    return await axiosPost('payment-intent', {
      total: (cartTotal + delevery)*100,
    });
  }

  useEffect(() => {
    initStripe({
      publishableKey: key,
    })
  }, [])
  
  
  const initializePaymentSheet = async () => {

    const {paymentIntent, ephemeralKey, customer} = await getPayIntent();

    const {error} = await initPaymentSheet({
  
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: 'Merchant Name',
    });
 console.log('error',error)
    if (!error) {
      setLoading(true);
    }
  };


  useEffect(() => {
    
    initializePaymentSheet();
  },[])
 const openPaymentSheet = async () => {
   const {error} = await presentPaymentSheet()

   if (error) {
     Alert.alert(`Error code: ${error.code}`, error.message);
   } else {
     Alert.alert('Success', 'Your order is confirmed!');
   }
 };




    const orderItems = cartItems.map(item => (
      <View style={styles.item} key={item._id}>
            <Text style={styles.itemName}>{item.name }</Text>
            <Text style={styles.itemQty}>1 x { item.qty}</Text>
      </View>
    ));
  return (
      <SafeAreaView style={styles.container}>
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
        <ScrollView style={styles.checkOutContainer}>
          <View style={styles.items}>
            <Text style={styles.heading2}>Items</Text>
            {orderItems}
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
  },
});

export default CheckoutScreen;
