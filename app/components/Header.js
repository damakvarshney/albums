import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';

const Header = ({title, titleStyle}) => {
  return (
    <View style={styles.container}>
      <Text style={titleStyle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: `100%`,

    justifyContent: `center`,
    alignItems: `center`,
  },
});

export default Header;
