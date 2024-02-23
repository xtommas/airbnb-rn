import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'

const Layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
    }}>
        <Tabs.Screen 
            name="index"
            options={{
                tabBarLabel: 'Explore',
            }}
        />
    </Tabs>
  )
}

export default Layout