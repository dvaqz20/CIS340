// Importing React and core components from React Native
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Main component of the app
export default function App() {

  return (

    <View style={styles.container}>

      <Text style={styles.blueText}>
        Just blue text
      </Text>

      <Text style={styles.largeGreenText}>
        This is big green
      </Text>

      <Text style={[styles.blueText, styles.largeGreenText]}>
        Blue text, then the big green text
      </Text>

      <Text style={[styles.largeGreenText, styles.blueText]}>
        Large green text, then the blue text
      </Text>

    </View>

  );

}

// Creating a StyleSheet for reusable and clean styling
const styles = StyleSheet.create({

  // Main container with top margin and centered alignment
  container: {
    marginTop: 60,
    alignItems: 'center', // Center text horizontally
  },

  // Style for large green bold text
  largeGreenText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  // Style for smaller blue text
  blueText: {
    color: 'blue',
    fontSize: 20,
  },
});