import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuthStore } from '../store/auth.store'
import { ErrorBoundary} from 'react-error-boundary'

import AuthStack from './AuthStack'
import TeacherStack from './TeacherStack'
import StudentStack from './StudentStack'
import ParentStack from './ParentStack'
import AdminStack from './AdminStack'
import AppErrorBoundary from '../components/AppErrorBoundary'
import { Text, View } from 'react-native'

export default function RootNavigator() {
  const { isAuthenticated, user } = useAuthStore();

  const renderStack = () => {
    if (!isAuthenticated) return <AuthStack />;
    
    switch (user?.role) {
      case 'MENTOR': return <TeacherStack />;
      case 'SANTRI': return <StudentStack />;
      case 'WALI_SANTRI': return <ParentStack />;
      case 'ADMIN': return <AdminStack />;
      default:
        // THIS will show instead of white screen
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Unknown role: "{user?.role}"</Text>
            <Text>isAuthenticated: {String(isAuthenticated)}</Text>
          </View>
        );
    }
  };

  return (
    <AppErrorBoundary>
      <NavigationContainer>
        {renderStack()}
      </NavigationContainer>
    </AppErrorBoundary>
  );
}
