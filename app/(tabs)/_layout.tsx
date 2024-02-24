import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'

const Layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarLabelStyle: {
            fontFamily: 'mon-sb',
        },
    }}>
        {/* Explore tab */}
        <Tabs.Screen 
            name="index"
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({color, size}) => 
                <Ionicons name='search' color = {color} size={size}/>,
            }}
        />
        {/* Wishlist tab */}
        <Tabs.Screen 
            name="wishlists"
            options={{
                tabBarLabel: 'Wishlists',
                tabBarIcon: ({color, size}) =>
                <FontAwesome6 name='heart' color = {color} size={size}/>
            }}
        />
        {/* Trips tab */}
        <Tabs.Screen 
            name="trips"
            options={{
                tabBarLabel: 'Trips',
                tabBarIcon: ({color, size}) =>
                <FontAwesome6 name='airbnb' color = {color} size={size}/>
            }}
        />
        {/* Inbox tab */}
        <Tabs.Screen 
            name="inbox"
            options={{
                tabBarLabel: 'Inbox',
                tabBarIcon: ({color, size}) =>
                <FontAwesome6 name='message' color = {color} size={size}/>
            }}
        />
        {/* Profile tab */}
        <Tabs.Screen 
            name="profile"
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color, size}) =>
                <FontAwesome6 name='user-circle' color = {color} size={size}/>
            }}
        />
    </Tabs>
  )
}

export default Layout