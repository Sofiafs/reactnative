import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Login feito com sucesso!</Text>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={HomeStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      
    </View>
  );
}