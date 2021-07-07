import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Main  from '../screens/Main'

const Stack = createStackNavigator();

const AppMain = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      >
        <Stack.Screen
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppMain;