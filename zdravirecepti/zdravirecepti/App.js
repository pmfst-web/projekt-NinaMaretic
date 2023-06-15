import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { createStore, combineReducers } from 'redux';
import jeloReducer from './store/reducers/jela';
import foodReducer from './store/reducers/foods';
import { Provider } from 'react-redux';

import PocetniEkran from './screens/PocetniEkran';
import HomeEkran from './screens/HomeEkran';
import DetaljiEkran from './screens/DetaljiEkran';
import FavoritiEkran from './screens/FavoritiEkran';
import TabNavigator from './navigator/TabNavigator';
import Boje from './constants/Boje';
const Stack = createNativeStackNavigator();

const ucitajFontove = () => {
  return Font.loadAsync({
    Baloo: require('./assets/Baloo.ttf'),
    Corinthia: require('./assets/Corinthia-Regular.ttf'),
  });
};
// Spajanje svih reducera u jedan objekt
const glavniReducer = combineReducers({
  jela: jeloReducer,
  foods: foodReducer,
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
            name="ZDRAVI RECEPTI"
            component={TabNavigator}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Naslovna"
            component={PocetniEkran}
            options={{
              title: 'ZDRAVI RECEPTI',
            }}
         
          />
          <Stack.Screen
            name="Details"
            component={DetaljiEkran}
            options={{
              title: 'Nazad'
            }}
          />
           <Stack.Screen name="Home" component={HomeEkran} />
 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
