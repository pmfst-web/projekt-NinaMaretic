import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {promjenaFavorita} from '../store/actions/jela'
import { View, Text, StyleSheet, Button } from 'react-native';
import Boje from '../constants/Boje';


const DetaljiEkran = ({ route, navigation }) => {

  const idJela = Number(route.params.id);
  const svaJela = useSelector(state => state.jela.jela)
  const jelo = svaJela.find((j) => j.id === idJela);

  const dispatch = useDispatch()

  const akcijaFavorit = () =>{
    dispatch(promjenaFavorita(idJela))
  }
  

  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>ID obroka</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{jelo.id}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Namjernica</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{...stil.namjernica}}>{jelo.namjernica}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Naziv jela</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{jelo.naziv}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>DRV</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{jelo.drv}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Kalorije jela:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{jelo.kalorije}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text>Cijena jela:</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.bold}>{jelo.cijena}</Text>
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
  namjernica:{
    fontFamily: "Corinthia",
    fontSize: 34
  },
  bold:{
    fontWeight: "bold",
  }
});

export default DetaljiEkran;
