import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';


const generateRandomCEP = () => {
  
  return Math.floor(Math.random() * 10000000).toString().padStart(8, '0');
};

const generateRandomAddress = () => {
  
  const streetNames = ['Rua A', 'Rua B', 'Avenida Brasil', 'Rua do Sol', 'Rua das Flores', 'Avenida Central'];
  const randomIndex = Math.floor(Math.random() * streetNames.length);
  return streetNames[randomIndex];
};

const generateRandomNeighborhood = () => {
  
  const neighborhoods = ['Centro', 'Jardim das Acácias', 'Vila Nova', 'Bairro da Paz', 'Vila dos Ipês'];
  const randomIndex = Math.floor(Math.random() * neighborhoods.length);
  return neighborhoods[randomIndex];
};

const generateRandomState = () => {
  
  const states = ['SP', 'RJ', 'MG', 'BA', 'PR', 'RS'];
  const randomIndex = Math.floor(Math.random() * states.length);
  return states[randomIndex];
};

const Cadastro = () => {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleCepChange = () => {
    const randomCep = generateRandomCEP();
    const randomEndereco = generateRandomAddress();
    const randomBairro = generateRandomNeighborhood();
    const randomEstado = generateRandomState();

    setCep(randomCep);
    setEndereco(randomEndereco);
    setBairro(randomBairro);
    setEstado(randomEstado);
  };

  
  const handleCadastro = () => {
    if (!nome || !email || !senha || !cep || !endereco || !bairro || !estado) {
      setErrorMessage('Por favor, preencha todos os campos');
      return;
    }

    
    alert('Cadastro realizado com sucesso!');
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
        onFocus={handleCepChange}  
        onChangeText={(text) => {
          setCep(text);
          if (text.length === 8) {
            handleCepChange();
          }
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
