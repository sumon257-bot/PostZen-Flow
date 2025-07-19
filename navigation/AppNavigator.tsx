import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import LanguageSelect from '../screens/LanguageSelect';
import Home from '../screens/Home';
import Generate from '../screens/Generate';
import Upload from '../screens/Upload';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LanguageSelect" component={LanguageSelect} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Generate" component={Generate} />
      <Stack.Screen name="Upload" component={Upload} />
    </Stack.Navigator>
  );
}