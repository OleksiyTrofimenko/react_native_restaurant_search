import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
  <View style={styles.backgroundStyle}>
    <Feather style={styles.iconStyle} name='search' size={30} />
    <TextInput
      style={styles.inputStyle}
      placeholder='Search'
      value={term}
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
