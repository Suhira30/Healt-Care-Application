import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';
import { useAppContext } from "../Services/AppContext";
import FloatingButton from '../components/FloatingButton';
import DailyPrompt from '../components/DailyPrompt';

const countries = [
  { name: 'Sri-Lanka', iso: 'sl', imageUrl: require('../assets/Image/Countries/11.png') },
  { name: 'India', iso: 'ind', imageUrl: require('../assets/Image/Countries/2.png') },
  { name: 'Canada', iso: 'can', imageUrl: require('../assets/Image/Countries/3.png') },
  { name: 'France', iso: 'fra', imageUrl: require('../assets/Image/Countries/4.png') },
  { name: 'Australia', iso: 'aus', imageUrl: require('../assets/Image/Countries/6.png') },
  { name: 'Japan', iso: 'jap', imageUrl: require('../assets/Image/Countries/7.png') },
  { name: 'UK', iso: 'uk', imageUrl: require('../assets/Image/Countries/9.png') },
  { name: 'USA', iso: 'usa', imageUrl: require('../assets/Image/Countries/8.png') },
];

const DashboardScreen = ({ navigation }) => {

  const { points } = useAppContext();

  const handleCountryPress = (country) => {
    navigation.navigate('Detail', { name: country.name, iso: country.iso });
  };

  const groupedCountries = [];
  for (let i = 0; i < countries.length; i += 2) {
    groupedCountries.push(countries.slice(i, i + 2));
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Card style={[styles.card, { backgroundColor: "white" }]}>
          <Card.Title
            style={styles.content}
            left={() => (
              <View style={styles.imageContainer}>
                <Text style={styles.covid} numberOfLines={1}>{"COVID-19 Track"}</Text>
              </View>
            )}
          />
        </Card>
        <View style={styles.container2}>
          <Card style={[styles.card2, { backgroundColor: "#aeb4eb", height: 175 }]}>
            <Card.Content>
              <View style={styles.contentWrapper}>
                <View style={styles.textContainer}>
                  <Text style={styles.title2}>{"Limit the scare of COVID-19"}</Text>
                  <Text variant="titleLarge" style={styles.text2}>
                    Take precautions, don't panic, and reach out to a doctor
                  </Text>
                </View>
                <View style={styles.imageContainer2}>
                  <Image
                    source={require('../assets/Image/dashboard2.png')}
                    style={styles.imageStyle2}
                  />
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>

        <Text style={styles.header}>Countries highly Affected </Text>
        <FlatList
          data={groupedCountries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              {item.map((country) => (
                <TouchableOpacity
                  key={country.iso}
                  style={styles.countryItem}
                  onPress={() => handleCountryPress(country)}
                >
                  <ImageBackground
                    source={country.imageUrl}
                    style={styles.countryImageBackground}
                    imageStyle={styles.countryImageStyle}
                  >
                    <View style={styles.countryTextContainer}>
                      <Text style={styles.countryText}>{country.name}</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />
      </View>
      <FloatingButton points={points} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    backgroundColor:"white"
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 0,
    backgroundColor: "white",
    marginTop:100
  },
  card: {
    paddingHorizontal: 0,
    width: '100%',
    borderRadius: "0",
  },
  content: {
    marginTop: "60",
    marginLeft: "0",
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 2,
    width: '100%',
  },
  covid: {
    fontWeight: "800",
    fontSize: 22,
    whiteSpace: 'nowrap',
    flexShrink: 0,
    width: "200",
    color: "#5463CE",
  },
  imageStyle: {
    width: 66,
    height: 66,
    marginRight: 2,
  },
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
    color: "#d13704",
    marginLeft: 11,
  },
  text2: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 11,
  },
  imageContainer2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle2: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  header: {
    fontSize: 20,
    marginTop: 100,
    marginBottom: 0,
    fontWeight:900,
    textAlign: 'left',
    fontFamily: 'Poppins-Italic',
    marginLeft:28
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  countryItem: {
    padding: 12,
    backgroundColor: 'transparent',
    marginBottom: 4,
    borderRadius: 8,
    height: 160,
    flex: 0.48,
  },
  countryImageBackground: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  countryImageStyle: {
    borderRadius: 8,
  },
  countryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'Black',
    textShadowColor: 'rgb(111, 93, 242)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: "center",
    color: "white",
  },
  countryTextContainer: {
    backgroundColor: 'rgba(68, 54, 67, 0.47)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'center',
  },
});

export default DashboardScreen;
