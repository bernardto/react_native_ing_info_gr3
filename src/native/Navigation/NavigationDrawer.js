import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "../ecran/HomeScreen";
import Favoris from "../ecran/Favoris";

import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailsFilm from "../ecran/DetailsFilm";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Favoris"
                component={Favoris}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStackNavigator.Screen
                name="Details"
                component={DetailsFilm}
                options={{
                    headerBackTitleVisible: true,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    const store = useSelector((store) => store.sections);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions= {{
                tabBarActiveTintColor: 'orange',
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Favoris"
                component={Favoris}
                options={{
                    tabBarBadge: store.sections.length,
                    tabBarLabel: 'Favoris',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={30} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}