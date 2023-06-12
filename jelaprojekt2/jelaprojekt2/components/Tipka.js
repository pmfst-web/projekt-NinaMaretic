import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje'

const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...stil.tipka, ...props.style}}>
        <Text style={stil.namjernica}>{props.title}</Text>
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
    borderWidth: 1,
    width: 300,
    height: 25,
    borderRadius: 8,
    opacity: 1.20,
    elevation: 5
  },
  namjernica:{
    color: Boje.Primarna,
    fontFamily: "TimesNewRoman"
  }
});

export default Tipka;
