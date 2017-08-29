// Import library for creating components
import React from 'react';
import { AppRegistry } from 'react-native';

import Header from './src/components/header';
// Create a component

const App = () => {
  return (
      <Header />
  );
};

// Render component to device
AppRegistry.registerComponent('albums', () => App);