import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje'

const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...stil.tipka, ...props.style}}>
        <Text style={stil.naslov}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Naglasak1,
    borderColor: Boje.Naglasak2,
    borderWidth: 5,
    width: 250,
    height: 50,
    borderRadius: 5,
    opacity: 1,
    elevation: 3
  },
  naslov:{
    color: Boje.Primarna,
    fontFamily: "TimesNewRoman"
  }
});

export default Tipka;