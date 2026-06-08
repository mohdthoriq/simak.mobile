import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

// Screens
import HomeScreen from '../screens/home/HomeScreen'
import AttendanceScreen from '../screens/attendance/AttendanceScreen'
import JournalScreen from '../screens/journal/JournalScreen'
import AssignmentScreen from '../screens/assignment/AssignmentScreen'
import EvaluationScreen from '../screens/evaluation/EvaluationScreen'
import ProfileScreen from '../screens/profile/ProfileScreen'

export type TeacherStackParamList = {
  MainTabs: undefined;
  Assignment: undefined;
  Evaluation: undefined;
  Profile: undefined;
};

export type TeacherTabParamList = {
  HomeTab: undefined;
  AttendanceTab: undefined;
  JournalTab: undefined;
  ProfileTab: undefined;
};

const Stack = createNativeStackNavigator<TeacherStackParamList>();
const Tab = createBottomTabNavigator<TeacherTabParamList>();

function TeacherTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563eb', // Tailwind blue-600
        tabBarInactiveTintColor: '#64748b', // Tailwind slate-500
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0', // Tailwind slate-200
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
          } else if (route.name === 'JournalTab') {
            iconName = 'book';
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
        options={{ tabBarLabel: 'Absensi' }}
      />
      <Tab.Screen 
        name="JournalTab" 
        component={JournalScreen} 
        options={{ tabBarLabel: 'Jurnal' }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{ tabBarLabel: 'Profil' }}
      />
    </Tab.Navigator>
  );
}

export default function TeacherStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TeacherTabs} />
      <Stack.Screen name="Assignment" component={AssignmentScreen} />
      <Stack.Screen name="Evaluation" component={EvaluationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}
