import { View, Text, StyleSheet, Icon } from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInput, Avatar } from 'react-native-paper';
import { Appbar, Button, Card, Portal, Dialog, Provider, Paragraph } from 'react-native-paper';
import axios from 'axios';
export default function EditarContato({ route, navigation }) {

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [nome,setNome] = useState();
  const [cpf,setCpf] = useState();
  const [telefone,setTelefone] = useState();
  const [id,setId] = useState();
  
  const [mensagemCadastro, setMensagemCadastro] = useState("");
  const [tituloCadastro, setTituloCadastro] = useState("");
useEffect(()=>{
    if(route.params){
        const { nome } =  route.params 
        const { telefone } =  route.params 
        const { cpf } =  route.params 
        const { id } =  route.params
      

        setNome(nome)
        setTelefone(telefone)
        setCpf(cpf)
        setId(id)
        
    }

},[]) 
function alterar(){
  if (nome && telefone && cpf){
            
    axios.put('http://professornilson.com/testeservico/clientes/'+id, {
        nome: nome,
        telefone: telefone,
        cpf: cpf
      })
      .then(function (response) {
        setTituloCadastro("Sucesso:");
        setMensagemCadastro("Cadastro atualizado com sucesso.");
        showDialog()
      })
      .catch(function (error) {
        console.log(error);
        setTituloCadastro("Erro:");
        setMensagemCadastro(error);
        showDialog()
      });    
  } else {               
    setTituloCadastro("Erro:");
    setMensagemCadastro("Preencha Nome, telefone e o CPF");
    showDialog()

  }
}
function excluir(){
        
    axios.delete('http://professornilson.com/testeservico/clientes/'+id)
      .then(function (response) {
        setTituloCadastro("Sucesso:");
        setMensagemCadastro("Cadastro removido com sucesso.");
        showDialog()
      })
      .catch(function (error) {
        console.log(error);
        setTituloCadastro("Erro:");
        setMensagemCadastro(error);
        showDialog()
      });    
 
}
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.cabecalho}>
        <Appbar.BackAction onPress={() =>                 
                navigation.navigate('Listagem')
                } />
        <Appbar.Content title="Edição de contatos" />
        
        <Appbar.Action />
      </Appbar.Header>
      <View style={styles.login}>
          
          <Card  style={styles.cartao}> 
            <Card.Content>
              <Text>Nome</Text>
              <TextInput style={styles.campo} onChangeText={text => setNome(text)}
            value={nome}  />
              
              <Text>CPF</Text>
              <TextInput style={styles.campo} onChangeText={text => setCpf(text)}
            value={cpf}  />
              <Text>Telefone</Text>
              <TextInput style={styles.campo} onChangeText={text => setTelefone(text)}
            value={telefone}  />

              
              <Button mode="contained" style={styles.btnLogin} onPress={() => alterar() }>
              ALTERAR
              </Button>
              <Button mode="contained" style={styles.btnCadastre} onPress={() => excluir() }>
              REMOVER
              </Button>
            

            </Card.Content>
          </Card>

      </View>
      <Provider>
          <View>
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
          </View>
 
        </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container:{

    flex:1,
    backgroundColor:'#38a69d',
    
  },
  campo:{
    height:40,
    marginBottom:10
  },
  login: {
    alignItems: 'center',
    flex: 1,
    paddingTop:0
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
  },
  btnCadastre:{
    color:'#FFF',
    backgroundColor:'red'
  },
}) 