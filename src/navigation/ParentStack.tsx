import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

// Screens
import HomeScreen from '../screens/home/HomeScreen'
import AttendanceScreen from '../screens/attendance/AttendanceScreen'
import AssignmentScreen from '../screens/assignment/AssignmentScreen'
import EvaluationScreen from '../screens/evaluation/EvaluationScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'

export type ParentStackParamList = {
  MainTabs: undefined;
  Evaluation: undefined;
  Profile: undefined;
};

export type ParentTabParamList = {
  HomeTab: undefined;
  AttendanceTab: undefined;
  AssignmentTab: undefined;
  ProfileTab: undefined;
};

const Stack = createNativeStackNavigator<ParentStackParamList>();
const Tab = createBottomTabNavigator<ParentTabParamList>();

function ParentTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#d97706', // Tailwind amber-600
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
          backgroundColor: '#ffffff',
          paddingBottom: 4,
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'AttendanceTab') {
            iconName = 'calendar';
          } else if (route.name === 'AssignmentTab') {
            iconName = 'tasks';
          } else if (route.name === 'ProfileTab') {
            iconName = 'user';
          }
          return <Icon name={iconName} size={size || 20} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Beranda' }}
      />
      <Tab.Screen 
        name="AttendanceTab" 
        component={AttendanceScreen} 
        options={{ tabBarLabel: 'Absensi Anak' }}
      />
      <Tab.Screen 
        name="AssignmentTab" 
        component={AssignmentScreen} 
        options={{ tabBarLabel: 'Tugas Anak' }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{ tabBarLabel: 'Profil' }}
      />
    </Tab.Navigator>
  );
}

export default function ParentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={ParentTabs} />
      <Stack.Screen name="Evaluation" component={EvaluationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
