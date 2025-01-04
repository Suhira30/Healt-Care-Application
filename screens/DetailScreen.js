import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Avatar, Button, Card } from 'react-native-paper';
import GraphComponent from '../components/GraphComponent';
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
import { LineChart, BarChart } from 'react-native-chart-kit';
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

  const lineChartData = {
    labels: ['Total', 'Deaths', 'Active', 'Recovered'],
    datasets: [
      {
        data: [
          countryData?.cases?.total || 0,
          countryData?.deaths?.total || 0,
          countryData?.cases?.active || 0,
          countryData?.cases?.recovered || 0,
        ],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, 
        strokeWidth: 2,
        
      },
    ],
  };
  return (
    
    <View style={styles.container}>
    <Text style={styles.header}>Statistic of {name}</Text>
    <Card style={[styles.card1,{backgroundColor:"#161853"}]}>
    <Card.Content>
      <View style={styles.row}>
        <Text variant="titleLarge" style={[styles.leftText,{color:"white"}]}>
          Population of {name}
        </Text>
        <Text variant="titleLarge" style={[styles.rightText,{color:"white"}]}>
          {countryData?.population}
        </Text>
      </View>
    </Card.Content>
  </Card>
  <View style={styles.row}>
      {/* Card 1 */}
      <Card style={[styles.smallCard,{backgroundColor:"#D71313"}]} >
        <Card.Content>
          <Text style={{color:"white"}}>Total Death</Text>
          <Text style={[styles.boldText,{color:"white"}]}>{countryData?.deaths?.total  || 'N/A'}</Text>
        </Card.Content>
      </Card>

      {/* Card 2 */}
      <Card style={[styles.smallCard,{backgroundColor:"#FAB12F"}]} >
        <Card.Content>
          <Text style={{color:"white"}}>Total Cases</Text>
          <Text style={[styles.boldText,{color:"white"}]}>{countryData?.cases?.total || 'N/A'}</Text>
        </Card.Content>
      </Card>
    </View>

    {/* Three Cards Side by Side */}
    <View style={styles.row}>
      {/* Card 1 */}
      <Card style={[styles.smallCard,{backgroundColor:"#77CDFF"}]} >
        <Card.Content>
          <Text style={{color:"white"}}>Active Cases</Text>
          <Text style={[styles.boldText,{color:"white"}]}>{countryData?.cases?.active || 'N/A'}</Text>
        </Card.Content>
      </Card>

      {/* Card 2 */}
      <Card style={[styles.smallCard,{backgroundColor:"#9ADE7B"}]} >
        <Card.Content>
          <Text style={{color:"white"}}>Recovered</Text>
          <Text style={[styles.boldText,{color:"white"}]}>{countryData?.cases?.recovered || 'N/A'}</Text>
        </Card.Content>
      </Card>

      {/* Card 3 */}
      <Card style={[styles.smallCard,{backgroundColor:"#7149C6"}]} >
        <Card.Content>
          <Text style={{color:"white"}}>New Cases</Text>
          <Text style={[styles.boldText,{color:"white"}]}>{countryData?.cases?.new|| 'N/A'}</Text>
        </Card.Content>
      </Card>
    </View>
<View>

      {/* Line Chart */}
      <View style={styles.chartContainer}>
        <LineChart
          data={lineChartData}
          width={340} 
          height={260} 
          verticalLabelRotation={0}
          chartConfig={{
            backgroundColor: 'white',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: 'white',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: { borderRadius: 16 },
            propsForLabels: { dx: 6,  
          },
          }}
          style={styles.chart}
        />
      </View>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,backgroundColor: 'white', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft:12
  },
  card1:{
    width:340,
    marginLeft:10,
    height:80
  },
   row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 16, 
  },
  card: {
    marginBottom: 16,
  },
  smallCard: {
    flex: 1, 
    marginHorizontal: 8,
    height:86,

  },
  leftText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
    flexWrap: 'wrap',
  },
  rightText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    maxWidth: '50%',
    textAlign: 'right',
    flexShrink: 1,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  smallCard2: {
    flex: 1, 
    marginHorizontal: 8, 
    height:86,
    width:100
  },
  chartContainer:{
    marginTop: 30,
    marginLeft:10,
    padding :0,
  }
});

export default DetailScreen;
