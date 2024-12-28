import React from "react";
import {useState} from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from "../Services/FirebaseAuth";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({navigation}) {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[error,setError]=useState('')

    const handleLogin=async ()=>{
        setError(''); 
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // console.log("User created:", userCredential.user);
            navigation.navigate('Dashboard');

          } catch (error) {
            if (error.code === "auth/wrong-password") {
              setError("Incorrect password. Please try again.");
            } else if (error.code === "auth/user-not-found") {
              setError("No user found with this email.");
            } else {
              setError("Failed to log in. ");
            }            
            // console.error("Error during registration:", error.message);
          }
    }
    const goToRegister=()=>{
      navigation.navigate('Register')
    }
  return (
    <View style={styles.container}>
    
      <Image 
        source={require('../assets/Image/logo2.png')} 
        style={styles.logo} 
      />
      <Text style={styles.headerText}>Log in to your account</Text>

      <Text style={styles.text}>Email Address</Text>
      <TextInput 
        onChangeText={setEmail}
        placeholder="Enter your Email Address"
        style={styles.input}
      />   

      <Text style={styles.text}>Password</Text>
      <TextInput
        onChangeText={setPassword}
        placeholder="Enter your Password"
        secureTextEntry
        style={styles.input}
      />  
    {/* {passwordError && <Text style={{color:"red"}}>{passwordError}</Text>} */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
        {error && <Text style={{color:"red"}}>{error}</Text>}
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Create new account?{' '}
        <Text style={{ color: '#4054F3', fontWeight: 'bold' }}
          onPress={goToRegister}
        >
        Register here
        </Text>
      </Text>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#f7f8fa', 
},
  background: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    width: "100%",
  },
  logo: {
    marginTop: 30,
    alignSelf: "center",
    height: 100,
    width: 130,
  },
  headerText: {
    marginBottom: 22,
    marginTop: 22,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color:"#4456e3",
  },
  text:{
    fontWeight:500
  },
  input: {
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 8, 
    marginTop: 10,
    marginBottom: 22,
    padding: 10,
    width: 290,
    height:50

  },
  button: {
    backgroundColor: "#4054F3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    height:50
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",

  },
  footerText: {
    marginTop: 22,
    textAlign: "center",
  },
});
