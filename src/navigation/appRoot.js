import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen  from '../screens/home'

const Stack = createStackNavigator();

const AppRoot = () => {
  return (
      <Stack.Navigator
       screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
  );
};

export default AppRoot;