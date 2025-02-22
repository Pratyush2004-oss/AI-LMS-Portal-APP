import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="Home"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home-outline' color={color} size={size} />
                    ),
                    tabBarLabel: "Home"
                }} />
            <Tabs.Screen name="Explore"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='search-outline' color={color} size={size} />
                    ),
                    tabBarLabel: "Explore"
                }} />
            <Tabs.Screen name="Progress" options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='analytics-outline' color={color} size={size} />
                ),
                tabBarLabel: "Progress"
            }} />
            <Tabs.Screen name="Profile" options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='person-circle-outline' color={color} size={size} />
                ),
                tabBarLabel: "Profile"
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({})