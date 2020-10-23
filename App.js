import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import AlbumList from './app/components/AlbumList';
import Header from './app/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Albums on Sale!" titleStyle={styles.title} />
      <AlbumList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbc0d3',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});

export default App;
