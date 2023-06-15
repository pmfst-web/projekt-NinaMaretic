import React from 'react'
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
const FoodList = (props) => {
  return(
    <TouchableOpacity style={stil.cardContainer} onPress={props.details}>
    <Image style={stil.picture} source={props.image} />
    <View>
    <Text style={{fontWeight: "bold", fontSize: 15, marginLeft:7}}>{props.name}</Text>
    <Text style={{fontSize:12, marginRight:100, color: "#d73964",fontWeight: "bold"}}>{props.price} € </Text>
    <Text style={{fontSize:10, marginRight:110, color: "#d73964",fontWeight: "bold"}}>{props.calory} 120-500 kCal </Text>
    </View>
    </TouchableOpacity>
  )
};
const stil = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginVertical:20,
    width:170,
    height:280 
  },
  picture:{
    alignItems: "center",
    width: 170,
    height: 200,
    borderTopLeftRadius:16,
    borderTopRightRadius: 16,
    }
})
export default FoodList;