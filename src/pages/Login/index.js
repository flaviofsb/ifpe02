import { View, Text, StyleSheet, Icon } from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TextInput, Avatar } from 'react-native-paper';
import { Button, Card, Portal, Dialog, Provider, Paragraph } from 'react-native-paper';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from "../../../firebaseConfig"

export default function Login({ navigation }) {

  const [email, setEmail] = useState("flavio@afixo.com.br");
  const [password, setPassword] = useState("123456");
  const [errorLogin, setErrorLogin] = useState("");

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

    async function login(){

      
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // logou
          const user = userCredential.user.uid;
          //alert(user);
          navigation.navigate('Listagem')
        })
        .catch((error) => {          
          var errorCode = error.code;
          var errorMessage = "";
          if (errorCode == "auth/user-not-found"){
            errorMessage = "Usuário ou senha inválidos"
          } else {
            errorMessage = error.message;
          }
          setErrorLogin(errorMessage);
          showDialog()
        });

    }


  return (
    <Provider>
    <View style={styles.container}>
      
      <View style={styles.login}>

          <Avatar.Icon size={124} icon="account-circle" />  

         
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
                login()} >
              LOGIN
              </Button>
              <Button mode="contained" style={styles.btnCadastre} onPress={() =>                 
                navigation.navigate('Cadastro')
                }>
              CADASTRE-SE
              </Button>
            </Card.Content>
          </Card>
          <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Erro</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>{errorLogin}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Ok</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
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
  campo:{
    height:40,
    marginBottom:10
  },
  login: {
    alignItems: 'center',
    flex: 1,
    paddingTop:10
  },
  cartao:{
    flex:1,
    width: '100%',
    padding:0,
    backgroundColor:'#FFF',
    marginTop:10,
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