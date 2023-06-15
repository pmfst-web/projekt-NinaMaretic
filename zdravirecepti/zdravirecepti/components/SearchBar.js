import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = (props) => {
  return (
    <View style={stil.searchInput}>
      <Icon name="search" size={25} color="grey" style={{marginLeft: 10}} />
      <TextInput
        placeholder="Pretražite hranu..."
        value={props.value}
        style={{fontSize: 16, paddingLeft: 10}}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const stil = StyleSheet.create({

  searchInput: {
    height: 40,
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 35,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default SearchBar;