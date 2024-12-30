import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const countries = [
  { name: 'India', iso: 'ind' },
  { name: 'Canada', iso: 'can' },
  { name: 'France', iso: 'fra' },
  { name: 'Singapore', iso: 'sin' },

];

const DashboardScreen = ({ navigation }) => {
  const handleCountryPress = (country) => {
    navigation.navigate('Detail', { name: country.name, iso: country.iso });
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.header}>Countries Affected by COVID-19</Text>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.iso}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.countryItem} onPress={() => handleCountryPress(item)}>
            <Text style={styles.countryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  countryItem: {
    padding: 12,
    backgroundColor: '#ddd',
    marginBottom: 8,
    borderRadius: 8,
  },
  countryText: {
    fontSize: 16,
  },
});

export default DashboardScreen;
