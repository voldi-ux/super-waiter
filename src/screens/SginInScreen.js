import React, {useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import AccountButton from '../components/buttons/accountButton';
import TextInputComponent from '../components/TextInput/textInput';
import {axiosPost} from '../axios/axios';
// import { logIn } from '../redux/userRedux/userSlice';

const SignInScreen = ({navigation}) => {
  // const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const signIn = async () => {
    if (email.length && password.length) {
      const resp = await axiosPost('sign-in', {email,password});
      console.log(resp.msg);
      if (resp.errMsg) return setErr(resp.errMsg);
      // return dispatch(logIn(resp));
    }
    setErr('fill in all fields');
  };

  const handleChange = (txt, type) => {
    console.log(txt);
    if (type === 'email') return setEmail(txt);
    setPassword(txt);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
          <IconM name="account" size={40} color={colors.black} />
          <View></View>
        </View>
        <View style={styles.containerInner}>
          <Text style={styles.heading}>Sign in now</Text>
          <TextInputComponent
            label="Email"
            onChangeText={text => handleChange(text, 'email')}
          />
          <TextInputComponent
            label="Password"
            onChangeText={text => handleChange(text, 'password')}
          />
          <View style={styles.flex}>
            <Text style={[styles.link, {color: colors.yellow}]}>
              Do not have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={[styles.link, {color: colors.blue}]}>
                {' '}
                Sign up instead
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <AccountButton title="sign in" iconName="login" onPress={signIn} />
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
  link: {
    fontSize: fontSize.normal,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
});

export default SignInScreen;
