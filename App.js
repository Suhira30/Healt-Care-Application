import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/RegisterScreen';
import LandingPage from './screens/LandingPage';

export default function App() {
  return (
    <View style={styles.container}>
    {/* <LandingPage/> */}
      <RegisterScreen/>
    </View>
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
