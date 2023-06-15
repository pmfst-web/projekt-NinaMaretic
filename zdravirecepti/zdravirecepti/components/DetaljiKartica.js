import React, {useEffect} from 'react';
import {StyleSheet,ScrollView,StatusBar,View,TouchableOpacity,Text, ImageBackground} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetaljiKartica = (props) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="white"
      />
      <ImageBackground style={stil.picture} resizeMode="cover" source={props.image}>
        <View style={stil.header}>
          <TouchableOpacity onPress={props.favorite}>
            <AntDesign name={props.iconName} size={24} color="white" />
          </TouchableOpacity>   
        </View>
      </ImageBackground>
      <View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'red'}}>{props.name}</Text>
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20, color: "grey"}}>
              {props.detail}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          
        </View>
          
      </View>    
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  picture:{
    width: "100%",
    height: 400,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  
});
  
export default DetaljiKartica;