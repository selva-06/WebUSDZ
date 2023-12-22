import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

// ...
const App = () => {
  return (
    <WebView
      source={{uri: 'https://ravimk001.github.io/usdz-web-viewer/'}}
      style={{flex: 1}}
    />
  );
};

export default App;
