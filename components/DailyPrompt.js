import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useAppContext } from '../Services/AppContext';

const DailyPrompt = () => {
  const { updatePoints } = useAppContext();
  const [isPromptVisible, setIsPromptVisible] = useState(true);

  if (!isPromptVisible) return null;

  Alert.alert(
    'Self-Test Reminder',
    'Have you taken your self-test today?',
    [
      {
        text: 'Yes',
        onPress: () => {
          updatePoints(5);
          setIsPromptVisible(false);
          Alert.alert('Thank you!', '5 point added.');
        },
      },
      {
        text: 'No',
        onPress: () => {
          updatePoints(-5);
          setIsPromptVisible(false);
          Alert.alert('Stay motivated!', '5 points deducted.');
        },
      },
    ]
  );

  return null;
};

export default DailyPrompt;
