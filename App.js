import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/RegisterScreen';
import LandingPage from './screens/LandingPage';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen';
import { AppProvider } from './Services/AppContext';

Stack=createNativeStackNavigator();
//Stack is a memory 

export default function App() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen name="Landing" component={LandingPage} options={{
    headerShown: false  // This will hide the header
  }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{
    headerShown: false  // This will hide the header
  }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{
    headerShown: false  // This will hide the header
  }}/>
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{
    headerShown: false  // This will hide the header
  }}/>
      <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
