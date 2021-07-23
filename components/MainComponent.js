import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ingredients from './IngredientsComponent';

import AboutUs from './AboutComponent';


const Tab = createMaterialTopTabNavigator();

function Main() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Ingredients" component={Ingredients} />
                <Tab.Screen name="About Us" component={AboutUs} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Main; 