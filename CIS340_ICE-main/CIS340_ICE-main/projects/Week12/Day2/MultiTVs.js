// Importing React and the useState hook to manage state
import React, { useState } from 'react';

// Importing components from react-native
import { Text, View, Button } from 'react-native';


function TV(props) {
    const [isOff, setIsOff] = useState(true);

    return(
        <View>
            <Text>
            This is {props.name}'s TV and it is {isOff ? 'OFF' : 'Turned on'}.
            </Text>

            <Button
                onPress={() =>{
                    setIsOff(false);// This will change the state to false, which means the TV is now on
                }}
                disabled={!isOff}
                title={isOff ? 'Turn me on, please!' : 'Thank You!'}
            />

        </View>

    );

}


 //Main component that renders multiple TVs
 export default function MultiTVs() {
    return(

      <View>
          <TV name="LG"/>
          <TV name="Samsung"/>
      </View>

    );
  }
