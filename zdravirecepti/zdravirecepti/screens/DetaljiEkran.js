import React, {useState, useEffect} from "react";
import {StyleSheet, ScrollView } from "react-native";
import DetaljiKartica from "../components/DetaljiKartica"
import {useSelector, useDispatch} from 'react-redux';
import {changeFavorite} from "../store/actions/foods";

const DetaljiiEkran = ({route,navigation}) => 
{
  const {id} = route.params; 

  const foods = useSelector(store => store.foods.foods); 
  const food = foods.find((food) => food.id === id);

  const favorites = useSelector((store) => store.foods.favorites);
  const favorite = favorites.find((fav) => fav.id === id);
  const [iconName, setIconName] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{ 
    if(favorite){
      setIconName("heart")
    } 
    else{
        setIconName("hearto");
    } },[favorite])

  const changeFavouriteState = () => {
    dispatch(changeFavorite(id))
  } 

  return ( 
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "white",
        paddingBottom: 10
      }}>
        <DetaljiKartica name={food.name} 
            image={food.image}
            price={food.price} 
            detail={food.detail}
            favorite={changeFavouriteState}
            iconName={iconName}
        />

    </ScrollView>
  );
}

const stil = StyleSheet.create({

});

export default DetaljiiEkran;