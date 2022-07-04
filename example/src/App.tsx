/*
 * @Author: Hong.Zhang
 * @Date: 2022-06-16 18:27:45
 * @Description: 
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ActionWidgetScreen from './ActionWidgetScreen';
import DisplayWidgetScreen from './DisplayWidgetScreen';
import OptionScreen from './OptionScreen';
import DynamicFormScreen from './DynamicFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OptionScreen">
        <Stack.Screen name="OptionScreen" component={OptionScreen} />
        <Stack.Screen name="ActionWidgetScreen"  component={ActionWidgetScreen}/>
        <Stack.Screen name="DisplayWidgetScreen" component={DisplayWidgetScreen} />
        <Stack.Screen name="DynamicFormScreen" component={DynamicFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}