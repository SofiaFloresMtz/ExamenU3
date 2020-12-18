import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductosProvider from './Context/ProductosContext';
import CartScreen from './Screens/CartScreen';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator1 from './Navigations/StackNavigator1'


export default function App() {
  return (
    <ProductosProvider>
      <NavigationContainer>
        <StackNavigator1/>
      </NavigationContainer>
    </ProductosProvider>
  );
}
