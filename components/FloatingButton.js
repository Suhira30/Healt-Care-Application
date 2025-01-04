import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const FloatingButton = ({ points }) => {
  return (
    <TouchableOpacity style={styles.button}>
     <Text style={styles.text}> 
     {points}</Text>
    <Text style={styles.text1}>
      Reward
      </Text>
     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#D91656',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Add shadow for better visibility
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default FloatingButton;
