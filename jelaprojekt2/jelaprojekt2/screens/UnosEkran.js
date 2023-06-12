import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Boje from '../constants/Boje'

const UnosEkran = () => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran na kojeg mozete dodati obroke koje ste pojeli u svome danu.</Text>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina
  },
});

export default UnosEkran;