import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Modal} from 'react-native';

const Loader = ({ visible }) => {
    
    
   return (
  <Modal animationType="slide" transparent={true} visible={visible}>
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  </Modal>
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loader;
