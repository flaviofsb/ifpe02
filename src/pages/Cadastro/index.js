import { View, Text, StyleSheet, Icon } from 'react-native';
import React, {useState, useEffect} from 'react';

import { TextInput, Avatar } from 'react-native-paper';
import { Appbar, Button, Card, Portal, Dialog, Provider, Paragraph } from 'react-native-paper';


import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from "../../../firebaseConfig"

export default function Cadastro({ navigation }) {

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCadastro, setErrorCadastro] = useState("");
 

    async function cadastrar(){

      if (email && password){
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // criou e logou
            const user = userCredential.user.uid;
            //alert(user);
            navigation.navigate('Listagem')
          })
          .catch((error) => {
            
            //var errorCode = error.code;
            var errorMessage = "";
            
            errorMessage = error.message;
            
            setErrorCadastro(errorMessage);
            showDialog()

          });
      } else {
        var errorMessage = "Preencha E-mail e senha";                 
        
        setErrorCadastro(errorMessage);
        showDialog()

      }

    }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.cabecalho}>
        <Appbar.BackAction onPress={() =>                 
                navigation.navigate('Login')
                } />
        <Appbar.Content title="Cadastro de usuário" />
        
        <Appbar.Action />
      </Appbar.Header>
      <View style={styles.login}>
          
          <Card  style={styles.cartao}> 
            <Card.Content>              
            <Text>E-mail</Text>
              <TextInput onChangeText={setEmail}
        value={email} style={styles.campo} right={<TextInput.Icon name="lock" />}  />
              <Text>Senha</Text>
              <TextInput onChangeText={setPassword}
        value={password} style={styles.campo} secureTextEntry
                right={<TextInput.Icon name="eye" />} />

              <Button mode="contained" style={styles.btnLogin}  onPress={() =>                 
                cadastrar()} >
              CADASTRAR
              </Button>

            

            </Card.Content>
          </Card>

      </View>
      <Provider>
          <View>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Erro</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>{errorCadastro}</Paragraph>
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
    marginTop:0,
    alignItems: 'center',
    flex: 1,
    width: '100%',
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
    flex:1,
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