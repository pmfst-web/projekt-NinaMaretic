import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Boje from '../constants/Boje';
import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';
import { JELA } from '../data/test-podaci';

const PopisEkran = ({ route, navigation }) => {
  const jelaPrikaz = useSelector((state) => state.jela.filterJela);
  const jelaFavorit = useSelector((state) => state.jela.favoritJela);

  const prikazElelementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
        natpis={podaci.item.namjernica}
      />
    );
  };

  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={jelaPrikaz}
          renderItem={prikazElelementa}
          numColumns={1}
        />
      </View>
      <View style={stil.lista}>
      <Text>FAVORITI</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={jelaFavorit}
          renderItem={prikazElelementa}
          numColumns={1}
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  lista: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default PopisEkran;
