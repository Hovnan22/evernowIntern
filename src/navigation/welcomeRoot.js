import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  WelcomeScreen  from '../screens/welcome'

const Stack = createStackNavigator();

const WelcomeRoot = () => {
  return (
      <Stack.Navigator
       screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
      </Stack.Navigator>
  );
};

export default WelcomeRoot;