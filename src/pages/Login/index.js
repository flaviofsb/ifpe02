import { View, Text, StyleSheet, Icon } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInput, Avatar } from 'react-native-paper';
import { Button, Card, Title } from 'react-native-paper';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.login}>

          <Avatar.Icon size={124} icon="account-circle" />  

         
          <Card  style={styles.cartao}> 
            <Card.Content>
              
              <Text>E-mail</Text>
              <TextInput style={styles.campo} right={<TextInput.Icon name="lock" />}  />
              <Text>Senha</Text>
              <TextInput style={styles.campo} secureTextEntry
                right={<TextInput.Icon name="eye" />} />

              <Button mode="contained" style={styles.btnLogin}  onPress={() =>                 
                navigation.navigate('Listagem')
                }>
              LOGIN
              </Button>
              <Button mode="contained" style={styles.btnCadastre} onPress={() =>                 
                navigation.navigate('Cadastro')} >
              CADASTRE-SE
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
    marginTop:'10px',
    backgroundColor:'#FFF'
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