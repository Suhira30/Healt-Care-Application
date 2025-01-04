import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [lastInteractionDate, setLastInteractionDate] = useState(null);

  useEffect(() => {
    const loadFromStorage = async () => {
      const storedPoints = await AsyncStorage.getItem('points');
      const storedDate = await AsyncStorage.getItem('lastInteractionDate');
      if (storedPoints) setPoints(parseInt(storedPoints, 10));
      if (storedDate) setLastInteractionDate(storedDate);
    };
    loadFromStorage();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('points', points.toString());
    if (lastInteractionDate)
      AsyncStorage.setItem('lastInteractionDate', lastInteractionDate);
  }, [points, lastInteractionDate]);

  const updatePoints = (increment) => {
    const today = new Date().toISOString().split('T')[0];
    if (lastInteractionDate !== today) {
      setPoints((prev) => prev + increment);
      setLastInteractionDate(today);
    }
  };

  return (
    <AppContext.Provider value={{ points, updatePoints }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
