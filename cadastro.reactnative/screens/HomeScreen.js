import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Bem-vindo à Tela Inicial!</Text>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={HomeStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={HomeStyles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
      
    </View>
  );
}