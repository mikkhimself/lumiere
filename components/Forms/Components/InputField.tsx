import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = (props) => {
  const { label, style, ...rest } = props;
  return (
    <View style={{ width: '100%' }}>
      <Text style={{ fontFamily: 'MaisonMedium', fontSize: 16, color: 'black' }}>{label}</Text>
      <TextInput style={[styles.inputBox, style]} {...rest} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputBox: {
    height: 45,
    borderColor: 'rgba(172,172,172,0.7)',
    marginBottom: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderBottomColor: '#DFDFE4',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
