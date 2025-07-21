import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [showHome, setShowHome] = useState(false);

  return (
    <View style={styles.container}>
      <SplashScreen onComplete={() => setShowHome(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});