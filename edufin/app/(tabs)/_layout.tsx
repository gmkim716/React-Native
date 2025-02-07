import { Tabs } from 'expo-router';
import React from 'react';
import {Image, Platform, Text, View} from 'react-native';

import { HapticTab } from '@/legacy/HapticTab';
import { IconSymbol } from '@/shared/ui/IconSymbol';
import TabBarBackground from '@/shared/ui/TabBarBackground';
import { Colors } from '@/shared/constants/Colors';
import { useColorScheme } from '@/shared/hooks/useColorScheme';
import {AntDesign, FontAwesome6} from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerLeft: () => (
          <Image
            source={require("@/assets/images/marulab-logo.png")}
            style={{width: 44, height: 33, marginLeft: 20}}
          />
        ),
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="house.fill" color={color}/>,
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          title: 'Invest',
          tabBarIcon: ({color}) => <FontAwesome6 size={28} name="money-bill-trend-up" color={color}/>,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: 'Learn',
          tabBarIcon: ({color}) => <AntDesign size={28} name="book" color={color}/>,
        }}
      />
    </Tabs>
  );
}
