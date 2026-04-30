// Import React and necessary hooks from the React library
import React, { useState, useEffect } from "react";

// Import React Native components used in the app
import {
  Text,
  View,
  SectionList,
  ActivityIndicator,
  Alert,
} from "react-native";

// Main functional component
export default function StatesApp() {
  const githubUrl =
    "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/Cities.txt";

    const [sections, setSections] = useState([]);

    const [loading, setLoading] = useState(true);

    //runs data fetching code only once
    useEffect(() => {

      fetch(githubUrl)
      .then((response =>{
        //if the request failed, throw an error
        if (!response.ok){
          throw new Error("Failed to fetch file");
        }
        // Return the response as text
        return response.text();
      }))

      .then((text) => {
      
      let cities = text 
      .split("\n")
      .map((c) => c.trim())
      .filter((C) => c !== "")
      .sort();

      let groups = {};
      cities.forEach((city) => {
        let letter = city[0].toUpperCase();
        if (!groups[letter]) {
          groups[letter] = []
        }
        groups[letter].push(city);
      });

      //Convert the grouped object into an array format that sections
      let formatted = Object.keys(groups)
        .sort()
        .map((letter) => ({
          title: letter,
          data: groups[letter],
        }));

    //Save the final grouped dat ainto state
      setSections(formatted);
    })
    .catch((error) => {
      connsole.error(error);
      Alert.alert("Error", "Could not fetch the file");
    })
    .finally(() => {
      setLoading(false);
    });
   }, []);

   if (loading) {
    return(
      <View 
      style={{flex: 1, justifyContent: "center", alignItems: "center"}}
      >
      <ActivityIndicator size="large" color="blue" />
      </View>
    );
   }

   return (
    <View style={{ flex : 1, padding: 20, paddingHorizontal: 10}}>
      <SectionList
        //The city data grouped by first letter
        sections={sections}
        
        keyExtractor={(item, index) => index.toString()}

        renderItem={({ item }) => (
          <Text style={{padding: 10, fontSize: 20}}>{item}</Text>
          )}

   renderSectionHeader={({ section }) => (
    <Text
      style={{
        padding: 5,
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "#9FA8DF",
        color: "white",
      }}
    >
      {section.title}
      </Text>
    )}
      />
      </View>

  );


}
