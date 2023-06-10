import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Tipka from '../components/Tipka'
import Boje from '../constants/Boje'

const PocetniEkran = ({ navigation }) => {
  return (

    <ScrollView vertical={true} style={stil.ekran}>
      <View style={stil.slikaOkvir}>
        <Image style={stil.slika} source={require('../assets/hrana.jpg')} />
      </View>
      <View style={stil.kontrole}>
        <Tipka
          title="VOĆE"
          onPress={() => navigation.navigate('Popis')}
        />
        <Tipka
          title="POVRĆE"
          onPress={() => navigation.navigate('Popis')}
        />
        <Tipka
          title="MESO"
          onPress={() => navigation.navigate('Popis')}
        />
      </View>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : Boje.Pozadina,
  },
  slika: {
    width: 250,
    height: 250,
    flex: 2,
  },
  slikaOkvir: {
    overflow: 'hidden',
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginVertical: 35
  },
  kontrole:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: 200
  }
});

export default PocetniEkran;