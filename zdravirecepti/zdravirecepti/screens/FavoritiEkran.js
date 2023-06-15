import React from "react";
import {StyleSheet, View, Image, Text, SafeAreaView, FlatList} from "react-native";
import FoodList from '../components/FoodList';
import {useSelector} from 'react-redux'

const FavoritiEkran  = (props) => 
{
  const favoriti = useSelector((store) => store.foods.favorites);

  if(favoriti.length === 0)
  {
    return(
      <View style={styles.container}>
        <Image style={{width:80, height:80}} source={require('../assets/star2.png')} />
        <Text style={{fontWeight: "bold"}}>Nemate omiljeno jelo?</Text>
        <Text style={{color: "grey"}}>Dodajte vaše omiljeno jelo u favorite i neka vam uvijek bude na dohvat ruke.</Text>
      </View>
    );
  }
  const prikazElelementa = (podaci) => {
    return ( 
        <FoodList name={podaci.item.name} 
            image={podaci.item.image}
            price={podaci.item.price} 
            details={() => props.navigation.navigate('Details',{id:podaci.item.id})}>>
        </FoodList>
    );
  }; 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View style={styles.header}>
        <View style={{paddingBottom: 15}}>
          <Text> </Text>
            <Text style={{fontSize: 40, fontWeight: 'bold', marginTop:25}}>
              Favoriti 
            </Text>
        </View>
      </View>
      <FlatList 
            showsVerticalScrollIndicator={false}
            style={{alignItems:"center"}} 
            data={favoriti} 
            renderItem={prikazElelementa} 
            numColumns={1}/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
export default FavoritiEkran;