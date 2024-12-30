// import GoogleFit, { Scopes } from 'react-native-google-fit';

// // Initialize Google Fit with the required permissions
// const initializeGoogleFit = async () => {
//   const options = {
//     scopes: [
//       Scopes.FITNESS_ACTIVITY_READ,
//       Scopes.FITNESS_ACTIVITY_WRITE,
//       Scopes.FITNESS_BODY_READ,
//       Scopes.FITNESS_BODY_WRITE,
//       Scopes.FITNESS_BLOOD_PRESSURE_READ,
//       Scopes.FITNESS_BLOOD_PRESSURE_WRITE,
//       Scopes.FITNESS_NUTRITION_WRITE,
//       Scopes.FITNESS_SLEEP_READ,
//     ],
//   };

//   try {
//     // Direct authorization attempt without checking isAuthorized
//     const authResult = await GoogleFit.authorize(options);
    
//     if (!authResult.success) {
//       throw new Error('Authorization denied: ' + authResult.message);
//     }

//     // After successful authorization, initialize recording
//     await GoogleFit.startRecording([
//       {
//         dataType: 'step_count',
//         dataSource: 'Google Fit',
//       }
//     ]);

//     return true;
//   } catch (error) {
//     console.error('Error during Google Fit initialization:', error);
//     throw error;
//   }
// };

// // Function to fetch Google Fit data with safer error handling
// const getGoogleFitData = async () => {
//   try {
//     const today = new Date();
//     const lastWeek = new Date(today);
//     lastWeek.setDate(lastWeek.getDate() - 7);

//     const options = {
//       startDate: lastWeek.toISOString(),
//       endDate: today.toISOString(),
//       bucketUnit: 'DAY',
//       bucketInterval: 1,
//     };

//     // Safer data fetching with individual try-catch blocks
//     const fetchData = async (fetchFunction, defaultValue) => {
//       try {
//         return await fetchFunction();
//       } catch (e) {
//         console.log(`Error fetching data: ${e}`);
//         return defaultValue;
//       }
//     };

//     // Get Steps
//     const steps = await fetchData(async () => {
//       const stepData = await GoogleFit.getDailyStepCountSamples(options);
//       if (stepData && stepData.length > 0) {
//         const validStepData = stepData.find(data => data.steps && data.steps.length > 0);
//         return validStepData ? validStepData.steps[validStepData.steps.length - 1].value : 0;
//       }
//       return 0;
//     }, 0);

//     // Get Calories
//     const calories = await fetchData(async () => {
//       const calorieData = await GoogleFit.getDailyCalorieSamples(options);
//       return (calorieData && calorieData.length > 0) ? calorieData[calorieData.length - 1].calorie : 0;
//     }, 0);

//     // Get Heart Rate
//     const heartRate = await fetchData(async () => {
//       const heartRateData = await GoogleFit.getHeartRateSamples(options);
//       return (heartRateData && heartRateData.length > 0) ? heartRateData[heartRateData.length - 1].value : 0;
//     }, 0);

//     // Get Weight
//     const weight = await fetchData(async () => {
//       const weightData = await GoogleFit.getWeightSamples(options);
//       return (weightData && weightData.length > 0) ? weightData[weightData.length - 1].value : 0;
//     }, 0);

//     return {
//       stepCount: steps,
//       caloriesBurned: calories,
//       heartRate: heartRate,
//       weight: weight,
//       hydration: 0,
//       sleep: 0,
//       bloodPressure: { systolic: 0, diastolic: 0 }
//     };
//   } catch (error) {
//     console.error('Error fetching Google Fit data:', error);
//     throw error;
//   }
// };

// export { initializeGoogleFit, getGoogleFitData };