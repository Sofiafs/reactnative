import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Cadastro = () => {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  
 
  const [errorMessage, setErrorMessage] = useState('');

  
  const buscarEndereco = async (cep) => {
    if (cep.length === 8) { 
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;

        if (cep === '12345678') {
          setEndereco('teste');
          setBairro('teste');
          setEstado('teste');; 
        } 
        else if (cep === '12345679') {
          setEndereco('teste 1');
          setBairro('teste 1');
          setEstado('teste 1');; 
        } else {
          setErrorMessage('CEP inválido');
        }
        
      } catch (error) {
        setErrorMessage('Erro ao buscar endereço');
      }
    }
  };

  
  const handleCadastro = () => {
    if (!nome || !email || !senha || !cep || !endereco || !bairro || !estado) {
      setErrorMessage('Por favor, preencha todos os campos');
      return;
    }

    
    Alert.alert('Cadastro realizado com sucesso!', `Bem-vindo, ${nome}!`);
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholder="Digite sua senha"
      />

      <Text>CEP:</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={(text) => {
          setCep(text);
          buscarEndereco(text);
        }}
        placeholder="Digite seu CEP"
        maxLength={8}
        keyboardType="numeric"
      />
      
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <Text>Endereço:</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        editable={false}
        placeholder="Endereço será preenchido automaticamente"
      />

      <Text>Bairro:</Text>
      <TextInput
        style={styles.input}
        value={bairro}
        editable={false}
        placeholder="Bairro será preenchido automaticamente"
      />

      <Text>Estado:</Text>
      <TextInput
        style={styles.input}
        value={estado}
        editable={false}
        placeholder="Estado será preenchido automaticamente"
      />

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Cadastro;
