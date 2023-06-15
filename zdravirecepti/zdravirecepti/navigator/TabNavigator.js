import React, {useEffect} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {View} from 'react-native'
import HomeEkran from "../screens/HomeEkran";
import FavoritiEkran from "../screens/FavoritiEkran";
import PocetniEkran from "../screens/PocetniEkran";
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import {useSelector, useDispatch} from 'react-redux';

const Tab = createMaterialBottomTabNavigator();



  


const TabNavigator = () => {
  return (
     <Tab.Navigator initialRouteName="Welcome" barStyle={{ backgroundColor: 'white' }} labeled={false}>
        <Tab.Screen name="<Pocetni" component={PocetniEkran}  
          options={{
          tabBarIcon: () => (<AntDesign name="home" size={24} color="blue" />)    
          }}/>       
        <Tab.Screen name="Favoriti" component={FavoritiEkran} 
          options={{
          tabBarIcon: () => (<AntDesign name="hearto" size={24} color="blue" />)
       }}/> 
      
      </Tab.Navigator>    
  )
};

export default TabNavigator;
