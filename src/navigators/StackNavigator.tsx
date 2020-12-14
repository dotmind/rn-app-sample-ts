import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'components/Home';
import ScrollViewDemo from 'components/ScrollViewDemo';


export type RootStackParamList = {
  Home: undefined;
  ScrollViewDemo: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={'Home'} component={Home} options={{ headerTitle: 'Demo App' }} />
    <RootStack.Screen name={'ScrollViewDemo'} component={ScrollViewDemo} />
  </RootStack.Navigator>
)

export default AppNavigator
