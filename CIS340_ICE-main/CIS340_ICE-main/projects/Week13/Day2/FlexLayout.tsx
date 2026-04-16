// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
    return (
        <View style={{
            flex: 1, // Takes up the entire screen
            flexDirection: 'column', // Arranges children in a column
            justifyContent: 'center', // Centers children vertically
            alignItems: 'stretch' // Stretches children to fill the container's width
        }}>

            <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />

        </View>
    );
};