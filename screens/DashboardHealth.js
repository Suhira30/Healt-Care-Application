import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { initializeGoogleFit, getGoogleFitData } from '../Services/GoogleFit'; // Ensure the correct imports

export default function DashboardScreen() {
  const [dailySteps, setDailySteps] = useState(0);
  const [heartRate, setHeartRate] = useState(0);
  const [calories, setCalories] = useState(0);
  const [hydration, setHydration] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bloodPressure, setBloodPressure] = useState({ systolic: 0, diastolic: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Initialize Google Fit
        await initializeGoogleFit(); // Initialize Google Fit

        // Fetch health data
        const data = await getGoogleFitData(); // Fetching the data

        // Assuming the returned data is structured as follows:
        setDailySteps(data.stepCount || 0);
        setHeartRate(data.heartRate || 0); // Adjust based on actual data structure
        setCalories(data.caloriesBurned || 0);
        setHydration(data.hydration || 0); // Adjust based on actual data
        setSleep(data.sleep || 0);
        setWeight(data.weight || 0);

        // Handling blood pressure if present
        const bp = data.bloodPressure || { systolic: 0, diastolic: 0 };
        setBloodPressure(bp);

      } catch (err) {
        setError(err.message);
        Alert.alert(
          'Error',
          'Failed to fetch health data. Please check your permissions and internet connection.'
        );
      } finally {
        setLoading(false);
      }
    };

    initializeData(); // Call function on component mount
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading health data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Health Dashboard</Text>
      <View style={styles.statsContainer}>
        <HealthMetric label="Steps" value={dailySteps} unit="steps" />
        <HealthMetric label="Calories" value={calories} unit="kcal" />
        <HealthMetric label="Heart Rate" value={heartRate} unit="bpm" />
        <HealthMetric label="Hydration" value={hydration} unit="ml" />
        <HealthMetric label="Sleep" value={sleep} unit="hrs" />
        <HealthMetric label="Weight" value={weight} unit="kg" />
        <HealthMetric label="Blood Pressure" value={`${bloodPressure.systolic} / ${bloodPressure.diastolic}`} unit="mmHg" />
      </View>
    </View>
  );
}

// HealthMetric component to display each metric
const HealthMetric = ({ label, value, unit }) => (
  <View style={styles.metricContainer}>
    <Text style={styles.metricLabel}>{label}</Text>
    <Text style={styles.metricValue}>
      {value} <Text style={styles.metricUnit}>{unit}</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metricContainer: {
    width: '48%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  metricLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  metricUnit: {
    fontSize: 14,
    color: '#666',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});
