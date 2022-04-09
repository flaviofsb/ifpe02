import { View, Text, StyleSheet, Icon } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInput, Avatar } from 'react-native-paper';
import { Button, Card, Title , Appbar, List } from 'react-native-paper';

export default function EditarContato({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.login}>
          <Appbar.Header style={styles.cabeca}>
            <Appbar.BackAction onPress={() =>                 
                    navigation.navigate('Listagem')
                    } />
            <Appbar.Content title="Edição de contatos" />
            
            <Appbar.Action />
          </Appbar.Header>
          <Card  style={styles.cartao}> 
            <Card.Content>
              <Text>Nome</Text>
              <TextInput style={styles.campo} value='João sem braço'  />
              
              <Text>E-mail</Text>
              <TextInput style={styles.campo} value='joao@email.com'  />
              <Text>Telefone</Text>
              <TextInput style={styles.campo} value='81 99865-6556'  />

              
              <Button mode="contained" style={styles.btnCadastre} onPress={() => console.log('Pressed')}>
              ALTERAR
              </Button>

            

            </Card.Content>
          </Card>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  cabeca:{minWidth:'320px'},
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