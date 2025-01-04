import { Text, View, ImageBackground, StyleSheet,Dimensions,TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get('window');

export default function LandingPage({navigation}) {
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
    
      <ImageBackground
        source={require("../assets/Image/landingImage3.png")} // Replace with your image path
        style={styles.background}
        resizeMode="cover" // Ensures the image covers the entire view
      />
        <View style={styles.content}>
          {/* You can add any content on top of the background image here */}
          <Text style={styles.text}>Welcome to the COVID-19 Tracker</Text>
          <Text style={styles.text2}>Your health journey starts here.
          Stay informed, stay safe. Explore real-time updates 
          on COVID-19 cases across the globe.         </Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={goToLogin}>
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
    marginTop:"48%",
    
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    
  },
  text: {
    fontSize: 20,
    // color: "white",
    fontFamily:"SourceSansPro-Italic",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 16,
    color: "#5c5f66",
    fontFamily:"SourceSansPro-Regular",
    justifyContent:"center",
    textAlign:"center",
   marginTop:"5%",paddingLeft:"5%",paddingRight:"5%"
   
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
