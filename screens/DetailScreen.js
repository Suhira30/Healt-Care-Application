import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const DetailScreen = ({ route }) => {
  const { name } = route.params; // Extract country name from route params
  const [countryData, setCountryData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchCountryData = async () => {
      const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
          'x-rapidapi-key': '5dc19b5c68mshf6a8f9ebfcf9f38p1e19c9jsn0464f11f765d',
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        const countryDetails = response.data.response.find(
          (item) => item.country.toLowerCase() === name.toLowerCase()
        );

        if (countryDetails) {
          setCountryData(countryDetails);
        } else {
          setError('Country data not found.');
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [name]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>COVID-19 Details for {name}</Text>
      <Text>Population: {countryData?.population}</Text>
      <Text>New Cases: {countryData?.cases?.new}</Text>
      <Text>Total Cases: {countryData?.cases?.total}</Text>
      <Text>Active Cases: {countryData?.cases?.active}</Text>
      <Text>Recovered: {countryData?.cases?.recovered}</Text>
      <Text>Total Deaths: {countryData?.deaths?.total}</Text>
      
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
});

export default DetailScreen;
