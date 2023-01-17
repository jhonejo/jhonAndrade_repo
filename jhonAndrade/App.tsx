import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Tabs} from './src/navigator/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
export default App;
