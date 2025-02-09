// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const FloatingResetButton = ({ onReset }) => {
//   const handleReset = async () => {
//     try {
//       await AsyncStorage.clear(); // Clear AsyncStorage
//       onReset(); // Call the reset handler to update the UI if needed
//     } catch (error) {
//       console.error("Error clearing storage", error);
//     }
//   };

//   return (
//     <TouchableOpacity style={styles.button} onPress={handleReset}>
//       <Text style={styles.text}>Reset</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     position: 'absolute',
//     bottom: 100, // Position above the original floating button
//     right: 20,
//     backgroundColor: '#FF3B30',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5, // Add shadow for better visibility
//   },
//   text: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default FloatingResetButton;
