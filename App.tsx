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
import { StatusBar } from 'react-native';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import ContextProvider from './src/contexts/provider';

const App: React.FC = () => {

  return (
    <>
      <ContextProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ContextProvider>
      <StatusBar backgroundColor="#8257E5" />
    </>
  );

};


export default App;
