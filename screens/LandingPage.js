import { Text, View, ImageBackground, StyleSheet,Dimensions,TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get('window');
export default function LandingPage() {
  return (
    <View style={styles.container}>
    
      <ImageBackground
        source={require("../assets/Image/landingImage3.png")} // Replace with your image path
        style={styles.background}
        resizeMode="cover" // Ensures the image covers the entire view
      />
        <View style={styles.content}>
          {/* You can add any content on top of the background image here */}
          <Text style={styles.text}>Take care of your Health !</Text>
          <Text style={styles.text2}>Your health journey starts here.
          stay healthy, informed, and empowered.Let’s take care of your health, together
          </Text>
        </View>

        <TouchableOpacity style={styles.btn} >
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f7f8fa', 
        width: '100%',
        height: '100%', 
      },
  background: {
    width: 380, 
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop:"45%",
    
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    
  },
  text: {
    fontSize: 24,
    // color: "white",
    fontFamily:"SourceSansPro-Semibold",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 18,
    color: "#5c5f66",
    fontFamily:"SourceSansPro-Regular",
    justifyContent:"center",
    textAlign:"center",
   marginTop:"5%"
  },
 btn: {
    backgroundColor: "#4054F3", 
    paddingVertical: 15,
    paddingHorizontal: 50, 
    borderRadius: 30, 
    marginTop: "5%", 
    alignSelf: "center", 
  },
  btnText: {
    fontSize: 18, 
    color: "white", 
    // fontWeight: "bold", 
    textAlign: "center",
    fontFamily:"SourceSansPro-Semibold",
  },
});
