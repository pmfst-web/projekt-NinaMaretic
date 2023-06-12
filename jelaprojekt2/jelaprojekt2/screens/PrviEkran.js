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
import { POVRCA } from '../data/test-podaci1';

const PrviEkran = ({ route, navigation }) => {
  const povrcaPrikaz = useSelector((state) => state.povrca.filterPovrca);
  const povrcaFavorit = useSelector((state) => state.povrca.favoritPovrca);

  const prikazElelementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation.navigate('Drugi', { id: podaci.item.id_1 })}
        natpis={podaci.item.namjernica_1}
      />
    );
  };

  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={povrcaPrikaz}
          renderItem={prikazElelementa}
          numColumns={1}
        />
      </View>
      <View style={stil.lista}>
      <Text>FAVORITI</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={povrcaFavorit}
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

export default PrviEkran;
