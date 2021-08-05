import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/HomeComponent';
import AboutUs from '../components/AboutComponent';
import IngredientsDirectory from '../components/IngredientsDirectory';
import { Rokkitt_100Thin } from '@expo-google-fonts/rokkitt';


const Tab = createMaterialTopTabNavigator();

function MyTabs() {

    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor: 'black',
                labelStyle: { fontSize: 12, fontFamily: 'Rokkitt_100Thin' },
                style: { backgroundColor: 'rgba(25, 245, 195, .25)', marginTop: insets.top }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Ingredients"
                component={IngredientsDirectory}
                options={{ tabBarLabel: 'Ingredients' }}
            />
            <Tab.Screen
                name="About"
                component={AboutUs}
                options={{ tabBarLabel: 'About' }}
            />
        </Tab.Navigator>
    );
}

export default function TopBarNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}