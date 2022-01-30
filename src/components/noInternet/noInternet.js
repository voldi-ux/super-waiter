import React from 'react';
import {
  Image,
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';

const NoInternet = ({retry, setLoading, refetchData}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../../assests/images/network.png')}
        style={{height: '50%'}}
      />
      <Text style={styles.text}>
        oops no internet, please make sure that you have an internet connection
        and press try again. if you believe this is not a network error please
        contact support
      </Text>
      <Button
        title="try again"
        onPress={() => {
          if (setLoading) {
            setLoading(true);
          } else if (refetchData) {
            refetchData();
          } else if (retry) {
            retry(prevState => !prevState);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: fontSize.normal,
    color: colors.grey,
    marginVertical: 10,
  },
});
export default NoInternet;
