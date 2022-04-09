import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login'
import Listagem from '../pages/Listagem'
import Cadastro from '../pages/Cadastro'
import CadastroContato from '../pages/CadastroContato'
import EditarContato from '../pages/EditarContato'

const Stack = createNativeStackNavigator();

export default function Routes(){
    
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown:false }} />
            <Stack.Screen name='Listagem' component={Listagem} options={{ headerShown:false }} />
            <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown:false }} />
            <Stack.Screen name='CadastroContato' component={CadastroContato} options={{ headerShown:false }} />
            <Stack.Screen name='EditarContato' component={EditarContato} options={{ headerShown:false }} />

        </Stack.Navigator>    

    )

}