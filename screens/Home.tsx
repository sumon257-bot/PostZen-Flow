import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PostZen Flow</Text>
      <Text style={styles.subHeader}>স্বাগতম! একটি শান্ত জবাবের পথে...</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Generate')}>
        <Text style={styles.buttonText}>🪄 Generate & Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Upload')}>
        <Text style={styles.buttonText}>📹 Upload Video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.disabled]} disabled={true}>
        <Text style={styles.buttonText}>📅 View Scheduled Posts (Coming Soon)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAF9F6', alignItems: 'center', justifyContent: 'center', padding: 20 },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: '#222' },
  subHeader: { fontSize: 16, color: '#555', marginBottom: 40, textAlign: 'center' },
  button: { backgroundColor: '#111', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 14, marginBottom: 20, width: '100%' },
  disabled: { backgroundColor: '#888' },
  buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});