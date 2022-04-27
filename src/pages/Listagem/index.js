import { View, Text, StyleSheet, Icon } from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInput, Avatar } from 'react-native-paper';
import { Button, Card, Title, Appbar, List } from 'react-native-paper';
import axios from 'axios';
export default function Cadastro({ navigation }) {



  const [getData, setData] = useState([]);
  axios.get('http://professornilson.com/testeservico/clientes').then((response) => {

    setData(response.data);
  })
    

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.cabecalho}>
        <Appbar.BackAction onPress={() =>                 
                navigation.navigate('Login')
                } />
        <Appbar.Content title="Lista de contatos" />
        
        <Appbar.Action icon="plus" onPress={() =>                 
                navigation.navigate('CadastroContato')
                }  />
      </Appbar.Header>
      <View style={styles.login}>
        
        <Card  style={styles.cartao}> 
          {
            getData.map((linha, i) => (
              <List.Item style={styles.lista}
                key={i}
                title={linha.nome}
                subtitle={linha.telefone}
                left={props => <List.Icon  icon="account" />}

                  onPress={()=>navigation.navigate('EditarContato',{
                    nome:linha.nome,
                    telefone:linha.telefone,
                    cpf:linha.cpf,
                    id:linha.id,
                    alterar:true 
                 })}
              />
                            
              ))
            }
            
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  
  lista:{    
    backgroundColor:'#fff',
    margin:0,
    padding:0,
    height:40,
  },
  container:{
    flex:1,
    backgroundColor:'#38a69d',
    padding:0
    
  },
  campo:{
    height:40,
    marginBottom:10
  },
  login: {
    alignItems: 'center',
    flex: 1,
    paddingTop:0,
    paddingBottom:3,
  },
  cartao:{
    marginTop:0,
    backgroundColor:'#FFF',
    flex: 1,
    width: '100%',
    padding:0,

  },
  cabecalho:{    
    height:60,
    width: '100%',
    padding:0,
    marginTop:0

  },
  btnLogin:{
    color:'#FFF',
    backgroundColor:'blue',
    marginBottom:5,
  },
  btnCadastre:{
    color:'#FFF',
    backgroundColor:'red'
  },
}) 