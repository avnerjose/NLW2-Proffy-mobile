/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet, StatusBar
} from 'react-native';

import AppStack from './src/routes/AppStack';

const App: React.FC = () => {
  return (
    <>
      <AppStack />
      <StatusBar backgroundColor="#8257E5" />
    </>
  );
};


export default App;
