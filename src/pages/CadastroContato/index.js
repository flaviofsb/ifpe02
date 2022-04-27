import { View, Text, StyleSheet, Icon } from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInput, Avatar } from 'react-native-paper';
import { Appbar, Button, Card, Portal, Dialog, Provider, Paragraph } from 'react-native-paper';
import axios from 'axios';
import Position from 'react-native/Libraries/Components/Touchable/Position';
export default function CadastroContato({ navigation }) {

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [mensagemCadastro, setMensagemCadastro] = useState("");
  const [tituloCadastro, setTituloCadastro] = useState("");
    async function cadastrar(){
      if (nome && telefone && cpf){
          //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
          await axios.post('http://professornilson.com/testeservico/clientes', {
            nome: nome,
            telefone: telefone,
            cpf: cpf
          })
          .then(function (response) {
            setNome('');
            setCpf('');
            setTelefone('');                            
            setTituloCadastro("Sucesso:");
            setMensagemCadastro("Cadastro realizado com sucesso.");
            showDialog()
          })
          .catch(function (error) {
            console.log(error);
            setTituloCadastro("Erro:");
            setMensagemCadastro(error + 'Erro ao realizar o cadastro.');
            showDialog()
          });     
      } else {               
        setTituloCadastro("Erro:");
        setMensagemCadastro("Preencha Nome, telefone e o CPF");
        showDialog()

      }
    }


  return (
    <Provider>
    <View style={styles.container}>
      <Appbar.Header style={styles.cabecalho}>
        <Appbar.BackAction onPress={() =>                 
                navigation.navigate('Listagem')
                } />
        <Appbar.Content title="Cadastro de contatos" />
        
        <Appbar.Action />
      </Appbar.Header>
      
      <View style={styles.login}>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>{tituloCadastro}</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>{mensagemCadastro}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Ok</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          <Card  style={styles.cartao}> 
            <Card.Content>
              <Text>Nome</Text>
              <TextInput 
                onChangeText={setNome}
                value={nome} style={styles.campo}   />
              
              <Text>CPF</Text>
              <TextInput 
              onChangeText={setCpf}
              value={cpf} style={styles.campo}   />
              <Text>Telefone</Text>
              <TextInput 
              onChangeText={setTelefone}
              value={telefone} style={styles.campo}   />

              
              <Button mode="contained" type="button" style={styles.btnLogin} onPress={() => cadastrar() }>
              CADASTRAR
              </Button>

            

            </Card.Content>
          </Card>

      </View>
      
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
    container:{
  
      flex:1,
      backgroundColor:'#38a69d',
      
    },
    alerta:{
      zIndex:999,
      

    },
    provider:{ backgroundColor:'#f00',
    position: 'absolute'},
    campo:{
      height:40,
      marginBottom:10
    },
    login: {
      zIndex:1,
      alignItems: 'center',
      flex: 1,
      paddingTop:0,
      height:'100%'
    },
    cartao:{
      flex:1,
      width: '100%',
      padding:0,
      backgroundColor:'#FFF',
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
      zIndex:1
    },
    btnCadastre:{
      color:'#FFF',
      backgroundColor:'red',
      zIndex:1
    },
  }) 