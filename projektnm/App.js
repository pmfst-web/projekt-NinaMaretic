import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { createStore, combineReducers } from 'redux';
import jeloReducer from './store/reducers/jela';
import { Provider } from 'react-redux';

import PocetniEkran from './screens/PocetniEkran';
import PopisEkran from './screens/PopisEkran';
import DetaljiEkran from './screens/DetaljiEkran';
import UnosEkran from './screens/UnosEkran';
import Boje from './constants/Boje';
const Stack = createNativeStackNavigator();

import { JELA } from './data/test-podaci';

const ucitajFontove = () => {
  return Font.loadAsync({
    Baloo: require('./assets/Baloo.ttf'),
    Corinthia: require('./assets/Corinthia-Regular.ttf'),
  });
};

// Spajanje svih reducera u jedan objekt
const glavniReducer = combineReducers({
  jela: jeloReducer,
});
// Stvaramo centralni spremnik
const store = createStore(glavniReducer);

function App() {
  const [fontUcitan, ucitano] = useState(false);

  if (!fontUcitan) {
    return (
      <AppLoading
        startAsync={ucitajFontove}
        onFinish={() => ucitano(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Boje.Naglasak1,
            },
            headerTintColor: Boje.Primarna,
          }}>
          <Stack.Screen
            name="Naslovna"
            component={PocetniEkran}
            options={{
              title: 'ZDRAVI RECEPTI',
            }}
          />
          <Stack.Screen
            name="Popis"
            component={PopisEkran}
            options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Unos')}>
                      <View>
                        <MaterialIcons
                          name="note-add"
                          size={26}
                          color={Boje.Primarna}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }}
          />
          <Stack.Screen
            name="Detalji"
            component={DetaljiEkran}
            options={({ route, navigation }) => {
              const idJela = Number(route.params.id);
              const jelo = JELA.find((j) => j.id === idJela);
              return {
                headerTitle: jelo?.naziv,
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Naslovna')}>
                      <View>
                        <MaterialIcons
                          name="home"
                          size={26}
                          color={Boje.Primarna}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }}
          />
          <Stack.Screen name="Unos" component={UnosEkran} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
