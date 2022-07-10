
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import AddUser from './src/Screens/AddUser';
import ShowUser from './src/Screens/ShowUser';
import UpdateUser from './src/Screens/UpdateUser';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddUser" component={AddUser} options={{
          title: 'Add User',}}/>
      <Stack.Screen name="ShowUser" component={ShowUser}options={{
          title: 'Show Users',}}/>
      <Stack.Screen name="UpdateUser" component={UpdateUser} options={{
          title: 'Update User',}}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

