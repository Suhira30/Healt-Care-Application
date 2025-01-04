import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelfTestCard = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    // Check if the button was already pressed today
    const checkButtonState = async () => {
      const lastPressedDate = await AsyncStorage.getItem('lastPressedDate');
      const today = new Date().toISOString().split('T')[0];

      if (lastPressedDate === today) {
        setButtonDisabled(true);
      }
    };
    checkButtonState();
  }, []);

  const handleButtonPress = async () => {
    const today = new Date().toISOString().split('T')[0];
    await AsyncStorage.setItem('lastPressedDate', today);

    // Update points logic
    Alert.alert('Thank you!', 'You have taken your self-test today.');
    setButtonDisabled(true);
  };

  return (
    <Card style={[styles.card2, { backgroundColor: "#aeb4eb", height: 100, marginTop: 22 }]}>
      <Card.Content>
        <View style={styles.contentWrapper}>
          <View style={styles.textContainer}>
            <Text style={styles.title2}>{"Have you taken your self-test today?"}</Text>
            <Text variant="titleLarge" style={styles.text2}>
              Click the button below if you have taken the test today.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={buttonDisabled ? 'Already Done' : 'Yes, I Did'}
              onPress={handleButtonPress}
              disabled={buttonDisabled}
              color={buttonDisabled ? 'gray' : '#5463CE'}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card2: {
    width: '100%',
    borderRadius: 32,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingRight: 10,
  },
  title2: {
    fontSize: 19,
    fontWeight: '700',
    color: '#d13704',
    marginLeft: 11,
  },
  text2: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 11,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default SelfTestCard;
