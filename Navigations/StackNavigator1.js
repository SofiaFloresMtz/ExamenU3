import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';

const Stack = createStackNavigator();

export default function StackNavigator1(){
    return(
        <Stack.Navigator>

            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Carrito"
                component={CartScreen}
            />

        </Stack.Navigator>
    )
}