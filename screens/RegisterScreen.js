import React from "react";
import {useState} from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from "../Services/FirebaseAuth";
import DashboardScreen from "./DashboardScreen";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen({navigation}) {

  const goToLogin=()=>{
    navigation.navigate('Login')
  }
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmPassword]=useState('')
    const[error,setError]=useState('')
    const[passwordError,setPasswordError]=useState('')

    const handleRegister=async ()=>{
        setError(""); 
        setPasswordError("");     
        if(password != confirmpassword){
            // console.log("Password doesnot match");
            setPasswordError("Password does not matched ")
            return ;
        }
        if(password.length<6){
            setPasswordError("Password should contains more than 6 letters")
            return ;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // console.log("User created:", userCredential.user);
            navigation.navigate('Dashboard');
          } catch (error) {
           setError("Failed to create an account. " + error.message);
            console.error("Error during registration:", error.message);
          }
    }
  return (
    <View style={styles.container}>
    
      <Image 
        source={require('../assets/Image/logo2.png')} 
        style={styles.logo} 
      />
      <Text style={styles.headerText}>Create your new account</Text>

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

      <Text style={styles.text}>Confirm Password</Text>
      {passwordError && <Text style={{color:"red"}}>{passwordError}</Text>}
      <TextInput
        onChangeText={setConfirmPassword}
        placeholder="Enter your confirm password"
        secureTextEntry
        style={styles.input}
      />    

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign In</Text>
        {error && <Text style={{color:"red"}}>{error}</Text>}
      </TouchableOpacity>

      <Text style={styles.footerText}>
      Already have an account?{' '}
      <Text style={{ color: '#4054F3', fontWeight: 'bold' }}
          onPress={goToLogin}>
        LogIn here
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
    marginTop: 20,
    textAlign: "center",
  },
});
