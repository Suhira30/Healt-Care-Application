import React from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      {/* Background Image (commented out) */}
      {/* <ImageBackground
        source={require("../assets/Image/frontBackground.jpg")} // Replace with your image path
        style={styles.background}
        resizeMode="cover"
      > */}
      <Image 
        source={require('../assets/Image/logo2.png')} 
        style={styles.logo} 
      />
      <Text style={styles.headerText}>Sign in to your Account</Text>

      <Text style={styles.text}>Email Address</Text>
      <TextInput 
        placeholder="Enter your Email Address"
        style={styles.input}
      />   

      <Text style={styles.text}>Password</Text>
      <TextInput
        placeholder="Enter your Password"
        secureTextEntry
        style={styles.input}
      />  

      {/* Custom Styled Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account? Login here
      </Text>
      {/* </ImageBackground> */}
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
    marginTop: 120,
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
