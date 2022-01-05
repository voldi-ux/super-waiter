import React from 'react';
import {Modal, Text, StyleSheet,Pressable,View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { colors } from '../../colors/colors';
import {selectVisible, setModalVisibilty} from '../../redux/cart/cartRedux';
import { fontSize } from '../../typography/typography';

const PopUPModal = ({msg}) => {
  const dipsatch = useDispatch();
  const visible = useSelector(selectVisible);

  const setVisible = () => {
    dipsatch(setModalVisibilty(false));
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{msg}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={setVisible}>
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 7,
    elevation: 2,
    width: 100,
  },
  buttonClose: {
    backgroundColor: colors.black,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSize.normal,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: fontSize.normal,
  },
});

export default PopUPModal;