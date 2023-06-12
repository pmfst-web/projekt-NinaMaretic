import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {promjenaFavorita} from '../store/actions/jela'
import { View, Text, StyleSheet, Button } from 'react-native';
import Boje from '../constants/Boje';


const DrugiEkran = ({ route, navigation }) => {

  const idPovrca = Number(route.params.id_1);
  const svaPovrca = useSelector(state => state.povrca.povrca)
  const povrce = svaPovrca.find((p) => p.id_1 === idPovrca);

  const dispatch = useDispatch()

  const akcijaFavorit = () =>{
    dispatch(promjenaFavorita(idPovrca))
  }
  

  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>ID obroka</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{povrce.id_1}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Namjernica</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{...stil.namjernica_1}}>{povrce.namjernica_1}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Naziv jela</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{povrce.naziv_1}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>DRV</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{povrce.drv_1}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Kalorije jela:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{povrce.kalorije_1}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Cijena jela:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{povrce.cijena_1}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Button title="Promjena favorita" onPress={akcijaFavorit}/>
          </View>
        </View>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  tablica: {
    width: '80%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,
    
  },
  namjernica_1:{
    fontFamily: "Corinthia",
    fontSize: 34
  },
  bold:{
    fontWeight: "bold",
  }
});

export default DrugiEkran;