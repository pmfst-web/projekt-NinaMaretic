import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import TipkaGlavna from '../components/TipkaGlavna'
import Boje from '../constants/Boje'

const PocetniEkran = ({ navigation }) => {
  return (

    <ScrollView vertical={true} style={stil.ekran}>
      <View style={stil.slikaOkvir}>
        <Image style={stil.slika} source={require('../assets/hrana.jpg')} />
      </View>
      <View style={stil.kontrole}>
        <TipkaGlavna
          title="VOĆE"
          onPress={() => navigation.navigate('Home')}
        />
        <TipkaGlavna
          title="POVRĆE"
          onPress={() => navigation.navigate('Home')}
          
        />
        <TipkaGlavna
          title="MESO"
          onPress={() => navigation.navigate('Home')}
        />
        <TipkaGlavna
          title="RIBA"
          onPress={() => navigation.navigate('Home')}
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
    width: 300,
    height: 200,
    flex: 1,
  },
  slikaOkvir: {
    overflow: 'hidden',
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginVertical: 30
  },
  kontrole:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: 100
  }
});

export default PocetniEkran;