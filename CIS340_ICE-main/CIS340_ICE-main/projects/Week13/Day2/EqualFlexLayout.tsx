// Importing React and View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
return (
    //Outer container view with flex: 1 to take up the entire screen
    <View style={{ flex: 1}}>
    
        {/* first inner view with flex: 1 and blue background */}
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        {/* second inner view with flex: 1 and green background */}
        <View style={{ flex: 1, backgroundColor: 'yellow' }} />
        {/* third inner view with flex: 1 and orange background */}
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
        {/* fourth inner view with flex: 1 and purple background */}
        <View style={{ flex: 1, backgroundColor: 'silver' }} />
    
    </View>
);
}
