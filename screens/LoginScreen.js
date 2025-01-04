import React from "react";
import {useState} from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from "../Services/FirebaseAuth";
import { initializeGoogleFit } from '../Services/GoogleFit';
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({navigation}) {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[error,setError]=useState('')

    const handleLogin=async ()=>{
        setError(''); 
        if (!email && !password) {
          setError('Please enter both email and password.');
          return;
      }
      if (!email) {
        setError('Email is not an optional');
        return;
    }
    if (!password) {
      setError('Password is not an optional');
      return;
  }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // console.log("User created:", userCredential.user);
         
            navigation.navigate('Dashboard');

          } catch (error) {
            // console.log(error);
            if (error.code==="auth/invalid-credential") {
              setError("Please check your password and Email");
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
    {error ==="Email is not an optional" && <Text style={{color:"red"}}>{error}</Text>}

      <Text style={styles.text}>Password</Text>
      <TextInput
        onChangeText={setPassword}
        placeholder="Enter your Password"
        secureTextEntry
        style={styles.input}
      />  
      {error && <Text style={{color:"red"}}>{error}</Text>}
    {/* {passwordError && <Text style={{color:"red"}}>{passwordError}</Text>} */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
        
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
    padding: 50,
    backgroundColor: '#f7f8fa', 
},
  background: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    width: "100%",
  },
  logo: {
    marginTop: 120,
    alignSelf: "center",
    height: 100,
    width: 130,
  },
  headerText: {
    marginBottom: 10,
    marginTop: 22,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color:"#4456e3",
  },
  text:{
    fontWeight:500,
    marginTop:15
  },
  input: {
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 8, 
    marginTop: 8,
    padding: 10,
    width: 290,
    height:50

  },
  button: {
    backgroundColor: "#4054F3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    height:50,marginTop:22,
    width: 290,
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
