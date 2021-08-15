import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/2HomeComponent';
import AboutUs from '../components/AboutComponent';
import IngredientsDirectory from '../components/IngredientsDirectory';
import Menu from '../components/MenuComponent';
import Contact from '../components/ContactComponent';
import { Rokkitt_100Thin } from '@expo-google-fonts/rokkitt';
import { TabBarIndicator } from 'react-native-tab-view';
import { useFonts } from '@expo-google-fonts/rokkitt';
import { View, Text } from 'react-native';



const Tab = createMaterialTopTabNavigator();

function MyTabs() {

    const insets = useSafeAreaInsets();
    const [loaded] = useFonts({
        Rokkitt: require('../assets/fonts/Rokkitt-Regular.ttf'),
        Rochester: require('../assets/fonts/Rochester-Regular.ttf')
    });
    if(!loaded) {
        return null;
    }

    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor: 'black',
                labelStyle: { fontSize: 14, fontFamily: 'Rokkitt' },
                style: { backgroundColor: 'rgba(25, 245, 195, .25)', marginTop: insets.top }
            }}
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: '#1af5c3' },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{ tabBarLabel: 'Menu' }}
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
             <Tab.Screen
                name="Contact"
                component={Contact}
                options={{ tabBarLabel: 'Contact' }}
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