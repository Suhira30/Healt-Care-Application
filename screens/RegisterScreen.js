import {Text, TextInput,View,Button, ImageBackground,StyleSheet } from "react-native"

export default function RegisterScreen(){
    return <View 
    style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }}>
    <ImageBackground
    //   source={require("../assets/Image/frontBackground.jpg")} // Replace with your image path
    //   style={styles.background}
    //   resizeMode="cover" // Ensures the image covers the entire view
    >
        <Text>Register </Text>
        <TextInput placeholder="Email"
        />   
        <TextInput
            placeholder="Password"
            secureTextEntry
        />
       <Button title="Register"/>
       <Text>
        Already have an account? Login here
       </Text>
       </ImageBackground>

    </View>
}
const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "center", 
      alignItems: "center",
      width: "100%", 
    }
})