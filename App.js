import React from 'react';
import Main from './components/MainComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBarNavigator from './navigators/TopBarNavigator';

export default function App() {
  return(
    <SafeAreaProvider>
        <TopBarNavigator />
    </SafeAreaProvider>
  );
}

