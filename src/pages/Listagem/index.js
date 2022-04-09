import { View, Text, StyleSheet, Icon } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInput, Avatar } from 'react-native-paper';
import { Button, Card, Title, Appbar, List } from 'react-native-paper';

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.login}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() =>                 
                  navigation.navigate('Login')
                  } />
          <Appbar.Content title="Lista de contatos" />
          
          <Appbar.Action icon="plus" onPress={() =>                 
                  navigation.navigate('CadastroContato')
                  }  />
        </Appbar.Header>
        <Card  style={styles.cartao}> 
            
              <List.Item style={styles.lista}
                title="João sem Braço"
                description="Item description"
                left={props => <List.Icon  icon="account" />}

                onPress={() =>                 
                  navigation.navigate('EditarContato')
                  }

              />
              <List.Item style={styles.lista}
                title="João sem Braço"
                description="Item description"
                left={props => <List.Icon  icon="account" />}

                onPress={() =>                 
                  navigation.navigate('EditarContato')
                  }
              />
              <List.Item style={styles.lista}
                title="João sem Braço"
                description="Item description"
                left={props => <List.Icon  icon="account" />}

                onPress={() =>                 
                  navigation.navigate('EditarContato')
                  }
              />

            
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  
  lista:{
    flex:1,
    backgroundColor:'#fff',
    margin:0,
    padding:'0'
  },
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
    minWidth:'292px'
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