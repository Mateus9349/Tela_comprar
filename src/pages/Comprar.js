import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Comprar() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [ida, setIda] = useState('');
  const [volta, setVolta] = useState('');

  function buscar(){
    alert('Compra realizada com sucesso! ')
  }

  return (
    <View style={styles.container}>
        
        <Text>Compre Agora</Text>

        <View style={styles.containerinput}>
            <TextInput
            placeholder='Origem'
            style={styles.input}
            value={origem}
            onChangeText={(text) => setOrigem(text)}
            />

            <TextInput
            placeholder='destino'
            style={styles.input}
            value={destino}
            onChangeText={(text) => setDestino(text)}
            />

            <View style={styles.emdata}>
              <Text>Partida</Text>
              <TextInput
              placeholder='DD/MM/YYYY'
              style={styles.inputdata}
              value={ida}
              onChangeText={(text) => setIda(text)}
              />

              <Text>Retorno</Text>
              <TextInput
              placeholder='DD/MM/YYYY'
              style={styles.inputdata}
              value={volta}
              onChangeText={(text) => setVolta(text)}
              />
            </View>

            <View>
              <Text>
                Seu destino é: {destino}
              </Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={buscar}>
              <FontAwesome name='plus' size={30} color='red' />
            </TouchableOpacity>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerinput:{
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20
  },

  input: {
    textAlign:'center',
    margin: 10,
    borderRadius: 20,
    width: 200,
    height: 50
  },

  emdata: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  inputdata: {
    margin: 20,
  }

});
