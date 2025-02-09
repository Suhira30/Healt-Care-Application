import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { useAppContext } from '../Services/AppContext';

const DailyPrompt = () => {
  const { updatePoints } = useAppContext();

  useEffect(() => {
    console.log('DailyPrompt is mounted'); // Check if the component is mounting

    const showSelfTestPrompt = () => {
      console.log('Showing Alert'); // Log before alert to check timing
      Alert.alert(
        'Self-Test Reminder',
        'Have you taken your self-test today?',
        [
          {
            text: 'Yes',
            onPress: () => {
              console.log('User pressed Yes');
              updatePoints(5);
              Alert.alert('Thank you!', '5 points added.');
            },
          },
          {
            text: 'No',
            onPress: () => {
              console.log('User pressed No');
              updatePoints(-5);
              Alert.alert('Stay motivated!', '5 points deducted.');
            },
          },
        ]
      );
    };

    // Call the alert prompt after mounting
    showSelfTestPrompt();
  }, [updatePoints]); // Trigger the effect only when `updatePoints` changes

  return null; // No UI is rendered by this component
};

export default DailyPrompt;
