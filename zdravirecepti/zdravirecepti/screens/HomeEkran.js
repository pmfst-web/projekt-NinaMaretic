import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet,SafeAreaView,FlatList,ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import FoodList from '../components/FoodList'
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/SearchBar'

const HomeEkran = ({navigation}) => 
{  
  useEffect(()=>{
      navigation.setOptions({ title: "Home:"})
  },[navigation])
  
  const [search, setSearch] = useState('');
  const foods = useSelector((store) => store.foods.foods);

  const prikazElelementa = (podaci) =>{
       if (podaci.item.name.toLowerCase().includes(search.toLowerCase()))
    {
      return ( 
          <FoodList name={podaci.item.name} 
                    image={podaci.item.image}
                    price={podaci.item.price} 
                    details={() => navigation.navigate('Details',{id:podaci.item.id})}
                    numColumns={1}
          />
        );
    }
  }
  return(
    <SafeAreaView>
    <View style={stil.header}>
    <View style={{paddingBottom: 15}}>
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Izaberi svoj zdravi obrok </Text>
    <View style={{flexDirection: 'row'}}>
    <Text style={{fontSize: 35, fontWeight: 'bold', color: "#d73964"}}>#YOU CAN DO IT</Text>
    </View>
    </View>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <SearchBar
            value={search}
            onChangeText={setSearch}
        />
    <FlatList 
    columnWrapperStyle={{justifyContent: 'space-between'}}
    contentContainerStyle={{paddingHorizontal:3, marginHorizontal:3}} 
            data={foods} 
            renderItem={prikazElelementa} 
            numColumns={2}
    />
    </ScrollView>
    </SafeAreaView>
  )
}
const stil = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  }
})
export default HomeEkran;