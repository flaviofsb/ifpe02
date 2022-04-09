import { View, Text, StyleSheet, Icon } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInput, Avatar } from 'react-native-paper';
import { Button, Card, Title , Appbar, List } from 'react-native-paper';

export default function CadastroContato({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.login}>
          <Appbar.Header>
            <Appbar.BackAction onPress={() =>                 
                    navigation.navigate('Listagem')
                    } />
            <Appbar.Content title="Cadastro de contatos" />
            
            <Appbar.Action />
          </Appbar.Header>
          <Card  style={styles.cartao}> 
            <Card.Content>
              <Text>Nome</Text>
              <TextInput style={styles.campo}   />
              
              <Text>E-mail</Text>
              <TextInput style={styles.campo}   />
              <Text>Telefone</Text>
              <TextInput style={styles.campo}   />

              
              <Button mode="contained" style={styles.btnCadastre} onPress={() => console.log('Pressed')}>
              CADASTRAR
              </Button>

            

            </Card.Content>
          </Card>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  container:{

    flex:1,
    backgroundColor:'#38a69d',
    
  },
  campo:{
    height:'40px',
    marginBottom:'10px'
  },
  login: {
    alignItems: 'center',
    flex: 1,
    paddingTop:'10%'
  },
  cartao:{
    marginTop:'0px',
    backgroundColor:'#FFF',
    width:'322px'
  },
  btnLogin:{
    color:'#FFF',
    backgroundColor:'blue',
    marginBottom:'5px',
  },
  btnCadastre:{
    color:'#FFF',
    backgroundColor:'red'
  },
}) 