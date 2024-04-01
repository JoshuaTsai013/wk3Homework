import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MyBookScreen from '../screens/myBookScreen'
import WishlistScreen from '../screens/WishlistScreen'


import albumData from "../json/book_section.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
const MyTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarActiveTintColor: '#6200EE',
          // headerShown: false
        }}
      >
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStack}
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="wishlist" 
          component={WishlistScreen} 
          options={{
            title: "Wishlist",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="MyBook" 
          component={MyBookScreen}
          options={{
            title: "My Books",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BookScreen}
                options={{
                    title: null,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}

                options={({ route }) => ({
                    title: null,
                    headerShadowVisible: false,
                    headerTintColor: '#131313',
                })}
            />
        </Stack.Navigator>
    );
}

export default Navigation;