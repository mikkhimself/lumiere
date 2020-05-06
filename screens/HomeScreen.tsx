import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>
        <Text>Sample Text</Text>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});
