import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import VerifyOTPScreen from '../screens/auth/VerifyOTPScreen'
import MainTabs from './MainTabs'
import AdminDashboard from '../screens/admin/AdminDashboard'

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
  VerifyOTP: {
    email: string;
    purpose: 'Register' | 'Login' | 'Forgot_Password';
  };
  MainTabs: undefined;
  AdminDashboard: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    </Stack.Navigator>
  )
}

